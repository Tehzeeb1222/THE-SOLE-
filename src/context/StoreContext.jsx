import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PRODUCTS, TESTIMONIALS, JOURNAL_ARTICLES, FAQS } from '../data/products';
import confetti from 'canvas-confetti';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Navigation & Routing State
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(INITIAL_PRODUCTS[0].id);
  const [selectedArticleId, setSelectedArticleId] = useState(JOURNAL_ARTICLES[0].id);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Products State (editable by Admin)
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('the_sole_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  // Cart State
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('the_sole_cart');
    return saved ? JSON.parse(saved) : [
      {
        id: 'ts-classic-black-UK/IN 8–9-Obsidian Black',
        productId: 'ts-classic-black',
        name: 'The Sole Classic',
        subtitle: 'Premium Hydrophobic Formal Socks',
        price: 899,
        originalPrice: 1199,
        size: 'UK/IN 8–9',
        color: 'Obsidian Black',
        image: '/assets/media_1791112650849.jpg',
        quantity: 2
      },
      {
        id: 'ts-monsoon-pack-UK/IN 8–9-Trio: Black + Grey + Brown',
        productId: 'ts-monsoon-pack',
        name: 'The Monsoon Master Bundle (3-Pack)',
        subtitle: 'Complete Office & Rain Preparedness Kit',
        price: 2299,
        originalPrice: 2697,
        size: 'UK/IN 8–9',
        color: 'Trio: Black + Grey + Brown',
        image: '/assets/media_1791112644453.jpg',
        quantity: 1
      }
    ];
  });

  // Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('the_sole_wishlist');
    return saved ? JSON.parse(saved) : ['ts-executive-grey', 'ts-deep-brown'];
  });

  // Discount & Promo codes
  const [promoCode, setPromoCode] = useState('RAINREADY15');
  const [appliedDiscount, setAppliedDiscount] = useState({
    code: 'RAINREADY15',
    type: 'percentage',
    value: 15,
    description: '15% Off Rain-Ready Welcome Offer'
  });

  // Orders State
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('the_sole_orders');
    return saved ? JSON.parse(saved) : [
      {
        id: 'TS-94821',
        date: '02 Oct 2026',
        status: 'In Transit',
        statusStep: 3, // 1: Placed, 2: Packed, 3: Shipped, 4: Out for Delivery, 5: Delivered
        trackingNumber: 'BD-884920194IN',
        courier: 'BlueDart Air Express',
        estimatedDelivery: 'Tomorrow, 05 Oct 2026',
        items: [
          {
            name: 'The Sole Classic',
            color: 'Obsidian Black',
            size: 'UK/IN 8–9',
            quantity: 2,
            price: 899,
            image: '/assets/media_1791112650849.jpg'
          }
        ],
        total: 1798,
        shippingAddress: {
          fullName: 'Aarav Sharma',
          address: 'A-402, Imperial Heights, Nariman Point',
          city: 'Mumbai',
          state: 'Maharashtra',
          pincode: '400021',
          phone: '+91 98201 44820'
        },
        paymentMethod: 'UPI (aarav@okaxis)'
      }
    ];
  });

  const [activeTrackingId, setActiveTrackingId] = useState('TS-94821');

  // User Profile
  const [user, setUser] = useState({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98201 44820',
    memberTier: 'Gold Rain-Ready Tier',
    loyaltyPoints: 350,
    savedAddresses: [
      {
        id: 1,
        title: 'Office (Default)',
        address: 'A-402, Imperial Heights, Nariman Point',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400021'
      },
      {
        id: 2,
        title: 'Home',
        address: 'Villa 12, Palm Meadows, Bandra West',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400050'
      }
    ]
  });

  // Toasts
  const [toasts, setToasts] = useState([]);

  // Chatbot State
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Good day. Welcome to The Sole. I am your Rain-Ready Footwear Stylist. How may I assist you with hydrophobic sock sizing, shoe pairing, or our water-repelling technology today?',
      time: 'Just now'
    }
  ]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('the_sole_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('the_sole_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('the_sole_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('the_sole_orders', JSON.stringify(orders));
  }, [orders]);

  // Toast Helper
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart Operations
  const addToCart = (product, selectedSize = null, selectedColor = null, quantity = 1) => {
    const size = selectedSize || product.sizes[0] || 'Standard';
    const colorObj = selectedColor ? (typeof selectedColor === 'string' ? { name: selectedColor } : selectedColor) : product.colors[0];
    const colorName = colorObj.name || colorObj;
    const cartItemId = `${product.id}-${size}-${colorName}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [
          ...prev,
          {
            id: cartItemId,
            productId: product.id,
            name: product.name,
            subtitle: product.subtitle || '',
            price: product.price,
            originalPrice: product.originalPrice || product.price,
            size: size,
            color: colorName,
            image: product.images ? product.images[0] : '/assets/media_1791112650849.jpg',
            quantity: quantity
          }
        ];
      }
    });

    addToast(`Added ${product.name} (${colorName}) to your bag.`);
  };

  const updateCartQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    addToast('Item removed from your cart.', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist Operations
  const toggleWishlist = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (wishlist.includes(productId)) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      addToast(`Removed ${product ? product.name : 'Item'} from your wishlist.`, 'info');
    } else {
      setWishlist((prev) => [...prev, productId]);
      addToast(`Added ${product ? product.name : 'Item'} to your wishlist.`, 'success');
    }
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Promo Code Validation
  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'RAINREADY15') {
      setAppliedDiscount({
        code: 'RAINREADY15',
        type: 'percentage',
        value: 15,
        description: '15% Off Rain-Ready Special'
      });
      addToast('Promo Code RAINREADY15 applied! You saved 15%.', 'success');
      return true;
    } else if (clean === 'MONSOON10') {
      setAppliedDiscount({
        code: 'MONSOON10',
        type: 'percentage',
        value: 10,
        description: '10% Off Monsoon Special'
      });
      addToast('Promo Code MONSOON10 applied! You saved 10%.', 'success');
      return true;
    } else if (clean === 'OFFICE300') {
      setAppliedDiscount({
        code: 'OFFICE300',
        type: 'fixed',
        value: 300,
        description: '₹300 Off Office Essentials'
      });
      addToast('Promo Code OFFICE300 applied! You saved ₹300.', 'success');
      return true;
    } else {
      addToast('Invalid or expired promo code. Try RAINREADY15', 'error');
      return false;
    }
  };

  const removePromoCode = () => {
    setAppliedDiscount(null);
    addToast('Coupon removed.', 'info');
  };

  // Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 1499;
  const isFreeShipping = cartSubtotal >= freeShippingThreshold;
  const shippingFee = cartSubtotal === 0 ? 0 : isFreeShipping ? 0 : 99;

  let discountAmount = 0;
  if (appliedDiscount) {
    if (appliedDiscount.type === 'percentage') {
      discountAmount = Math.round((cartSubtotal * appliedDiscount.value) / 100);
    } else if (appliedDiscount.type === 'fixed') {
      discountAmount = Math.min(cartSubtotal, appliedDiscount.value);
    }
  }

  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Navigation helpers
  const navigateTo = (page, param = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    if (page === 'product' && param) {
      setSelectedProductId(param);
    }
    if (page === 'journal-detail' && param) {
      setSelectedArticleId(param);
    }
    if (page === 'order-tracking' && param) {
      setActiveTrackingId(param);
    }
  };

  // Place Order Simulation
  const placeOrder = (orderDetails) => {
    const newOrderId = `TS-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder = {
      id: newOrderId,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Order Placed',
      statusStep: 1,
      trackingNumber: `BD-${Math.floor(100000000 + Math.random() * 900000000)}IN`,
      courier: 'BlueDart Air Express',
      estimatedDelivery: 'In 2–3 business days',
      items: [...cart],
      subtotal: cartSubtotal,
      discount: discountAmount,
      shippingFee: shippingFee,
      total: cartTotal,
      shippingAddress: orderDetails.shippingAddress,
      paymentMethod: orderDetails.paymentMethod || 'UPI Instant Pay'
    };

    setOrders((prev) => [newOrder, ...prev]);
    setActiveTrackingId(newOrderId);
    clearCart();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3A2D24', '#C49F6A', '#FAF7F2', '#8C7E72']
      });
    } catch (e) {
      // safe fallback
    }

    navigateTo('order-confirmation', newOrderId);
    addToast('Order placed successfully! Dry feet are on the way.', 'success');
  };

  return (
    <StoreContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navigateTo,
        products,
        setProducts,
        selectedProductId,
        setSelectedProductId,
        selectedArticleId,
        setSelectedArticleId,
        activeCategoryFilter,
        setActiveCategoryFilter,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        freeShippingThreshold,
        isFreeShipping,
        shippingFee,
        discountAmount,
        cartTotal,
        cartItemCount,
        promoCode,
        setPromoCode,
        appliedDiscount,
        applyPromoCode,
        removePromoCode,
        wishlist,
        toggleWishlist,
        isInWishlist,
        orders,
        setOrders,
        activeTrackingId,
        setActiveTrackingId,
        placeOrder,
        user,
        setUser,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isQuickViewOpen,
        setIsQuickViewOpen,
        quickViewProduct,
        setQuickViewProduct,
        isChatbotOpen,
        setIsChatbotOpen,
        chatMessages,
        setChatMessages,
        toasts,
        addToast,
        removeToast,
        testimonials: TESTIMONIALS,
        journalArticles: JOURNAL_ARTICLES,
        faqs: FAQS
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
