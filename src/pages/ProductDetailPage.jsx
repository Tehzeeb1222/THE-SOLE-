import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Zap, 
  Droplets, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Minus, 
  Sparkles, 
  Check, 
  Ruler, 
  Share2,
  Lock,
  MessageSquare,
  ArrowRight,
  Footprints
} from 'lucide-react';
import { ProductCard } from '../components/home/FeaturedProducts';
import BrandLogo from '../components/common/BrandLogo';

export default function ProductDetailPage() {
  const { 
    selectedProductId, 
    products, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setIsSizeGuideOpen, 
    navigateTo,
    addToast 
  } = useStore();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || {});
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [activeImage, setActiveImage] = useState(product?.colors?.[0]?.image || product?.images?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [waterDemoActive, setWaterDemoActive] = useState(false);
  
  // Accordions state
  const [openTab, setOpenTab] = useState('tech'); // 'desc' | 'tech' | 'material' | 'care' | 'shipping'

  // Sync state when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0] || {});
      setSelectedSize(product.sizes?.[0] || '');
      setActiveImage(product.colors?.[0]?.image || product.images?.[0] || '');
    }
  }, [product]);

  // Review submission state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      author: 'Aarav Sharma',
      location: 'Mumbai',
      rating: 5,
      date: '28 Sep 2026',
      title: 'Impervious to torrential Mumbai monsoon floods',
      text: 'I wore these inside handcrafted Oxford leather shoes during a 20-minute walk through heavy rain. My shoes got wet, but my socks and feet remained 100% dry and warm. Simply revolutionary.',
      verified: true
    },
    {
      id: 2,
      author: 'Priya Nair',
      location: 'Bengaluru',
      rating: 5,
      date: '14 Sep 2026',
      title: 'Fits loafers without feeling bulky at all',
      text: 'Most waterproof gear feels like wearing rubber scuba gear. The Sole is silky, breathable, and slips into my office loafers effortlessly. Ordered the 3-pack bundle immediately after!',
      verified: true
    },
    {
      id: 3,
      author: 'Vikram Mehta',
      location: 'Delhi',
      rating: 5,
      date: '02 Sep 2026',
      title: 'No odor, no dampness, flawless boardroom comfort',
      text: 'After wearing them for a 12-hour workday with unpredictable rain outside, my feet felt as fresh as the morning. The 200-needle knit quality is on par with Italian luxury brands.',
      verified: true
    }
  ]);

  const handleColorSelect = (colorObj) => {
    setSelectedColor(colorObj);
    if (colorObj.image) {
      setActiveImage(colorObj.image);
    }
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    navigateTo('checkout');
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) {
      addToast('Please fill out your name and review message.', 'error');
      return;
    }
    const newRev = {
      id: Date.now(),
      author: newReviewName,
      location: 'Verified Buyer',
      rating: newReviewRating,
      date: 'Just now',
      title: 'Verified Customer Experience',
      text: newReviewComment,
      verified: true
    };
    setReviewsList([newRev, ...reviewsList]);
    setNewReviewName('');
    setNewReviewComment('');
    setShowReviewForm(false);
    addToast('Thank you for submitting your verified review!', 'success');
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const isLiked = isInWishlist(product.id);

  return (
    <div className="py-10 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-[#8C7E72] mb-8 uppercase tracking-wider">
          <button onClick={() => navigateTo('home')} className="hover:text-[#3A2D24]">Home</button>
          <span>/</span>
          <button onClick={() => navigateTo('shop')} className="hover:text-[#3A2D24]">Shop</button>
          <span>/</span>
          <span className="text-[#3A2D24] font-semibold">{product.name}</span>
        </div>

        {/* Master Product Grid (Left: Gallery & Demo, Right: Purchase Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* LEFT: Gallery & Interactive Hydrophobic Tester (Cols 7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Real Footwear Photography */}
            <div className="relative bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl overflow-hidden shadow-xl aspect-4/3 flex items-center justify-center group">
              <img
                src={activeImage}
                alt={`${product.name} in ${selectedColor.name}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />

              {/* Water Demo Overlay Animation */}
              {waterDemoActive && (
                <div className="absolute inset-0 bg-[#241B15]/50 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center animate-fadeIn z-20">
                  <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border-2 border-[#C49F6A] flex items-center justify-center text-[#3A2D24] mb-3 shadow-xl animate-bounce">
                    <Droplets className="w-8 h-8 text-[#C49F6A]" />
                  </div>
                  <h4 className="font-serif-display text-xl text-[#FAF7F2] font-bold">
                    Hydrophobic Nano-Repellency Active
                  </h4>
                  <p className="text-xs text-[#EFE8DE] max-w-sm mt-1">
                    Contact angle &gt;140°. Water droplets remain spherical and roll off without wetting the combed cotton fibers.
                  </p>
                  <button
                    onClick={() => setWaterDemoActive(false)}
                    className="mt-4 px-5 py-2 bg-[#FAF7F2] text-[#241B15] text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md"
                  >
                    Close Simulation
                  </button>
                </div>
              )}

              {/* Hydrophobic Interactive Toggle Button */}
              <button
                onClick={() => setWaterDemoActive(!waterDemoActive)}
                className="absolute bottom-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#D9CEC1] hover:border-[#C49F6A] text-[#3A2D24] text-xs font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition-all active:scale-95 z-10"
              >
                <Droplets className="w-4 h-4 text-[#C49F6A]" />
                <span>{waterDemoActive ? 'Hide Water Test' : 'Test Water Repellency'}</span>
              </button>

              {/* Matched Footwear Callout Pill */}
              {selectedColor.shoes && (
                <div className="absolute top-4 left-4 bg-[#241B15]/85 backdrop-blur-md text-[#FAF7F2] border border-[#5A483E] px-3 py-1 rounded-full text-xs flex items-center gap-1.5 shadow-md">
                  <Footprints className="w-3.5 h-3.5 text-[#C49F6A]" />
                  <span>Paired with: <strong>{selectedColor.shoes}</strong></span>
                </div>
              )}

              {/* Wishlist Floating Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md border border-[#D9CEC1] flex items-center justify-center text-[#3A2D24] hover:text-rose-600 transition-colors shadow-md z-10"
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-600 text-rose-600' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Strip with Color Previews */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
              {product.colors.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => handleColorSelect(c)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 shrink-0 transition-all relative ${
                    selectedColor.name === c.name 
                      ? 'border-[#3A2D24] shadow-md scale-105 ring-2 ring-[#C49F6A]/40' 
                      : 'border-[#E5DDD3] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={c.image || product.images?.[0] || ''} alt={c.name} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-[#241B15]/80 text-[#FAF7F2] text-[9px] text-center py-0.5 truncate px-1">
                    {c.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Micro Feature Callouts Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E5DDD3]">
              <div className="p-3 bg-[#FFFFFF] border border-[#EBE3D7] rounded-2xl text-center">
                <ShieldCheck className="w-5 h-5 text-[#C49F6A] mx-auto mb-1" />
                <p className="font-serif-display font-bold text-xs text-[#3A2D24]">100% Repellent</p>
                <p className="text-[10px] text-[#8C7E72]">Nano-lattice yarn</p>
              </div>
              <div className="p-3 bg-[#FFFFFF] border border-[#EBE3D7] rounded-2xl text-center">
                <Sparkles className="w-5 h-5 text-[#C49F6A] mx-auto mb-1" />
                <p className="font-serif-display font-bold text-xs text-[#3A2D24]">200-Needle</p>
                <p className="text-[10px] text-[#8C7E72]">Bespoke formal fit</p>
              </div>
              <div className="p-3 bg-[#FFFFFF] border border-[#EBE3D7] rounded-2xl text-center">
                <Truck className="w-5 h-5 text-[#C49F6A] mx-auto mb-1" />
                <p className="font-serif-display font-bold text-xs text-[#3A2D24]">Free Express</p>
                <p className="text-[10px] text-[#8C7E72]">2–4 days pan-India</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Purchase Configuration & Details (Cols 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Top Badge & Ratings */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#C49F6A] bg-[#EAE0D5] px-2.5 py-1 rounded-xs">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1.5 text-[#C49F6A]">
                  <div className="flex">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-bold text-xs text-[#3A2D24]">{product.rating}</span>
                  <span className="text-xs text-[#8C7E72]">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <h1 className="font-serif-display text-3xl sm:text-4xl text-[#241B15] tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#8C7E72] font-serif-classic italic">
                “{product.subtitle}”
              </p>
            </div>

            {/* Price Box in INR */}
            <div className="p-4 bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl flex items-baseline justify-between shadow-2xs">
              <div className="flex items-baseline gap-3">
                <span className="font-serif-display font-bold text-3xl text-[#241B15]">
                  ₹{product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-[#A69788] line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-xs uppercase">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
              <span className="text-[11px] text-[#8C7E72] font-medium">Inclusive of all taxes</span>
            </div>

            {/* Color Swatch Picker with Visual Footwear Tags */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#3A2D24] uppercase tracking-wider">
                  Select Colorway: <strong className="text-[#C49F6A]">{selectedColor.name}</strong>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => handleColorSelect(c)}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all ${
                      selectedColor.name === c.name 
                        ? 'border-[#3A2D24] bg-[#F3ECE2] shadow-xs ring-1 ring-[#3A2D24]' 
                        : 'border-[#E5DDD3] bg-[#FFFFFF] hover:border-[#8C7E72]'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full border border-black/20 shrink-0 shadow-2xs" style={{ backgroundColor: c.hex }} />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-[#3A2D24] font-bold truncate">{c.name}</p>
                      <p className="text-[9px] text-[#8C7E72] truncate">{c.shoes || 'Formal pairing'}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#3A2D24] uppercase tracking-wider">
                  Select Size (UK/IN):
                </span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-xs text-[#C49F6A] hover:underline font-semibold flex items-center gap-1"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size & Fit Guide</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSize(s)}
                    className={`py-2.5 text-xs font-semibold rounded-sm border transition-all ${
                      selectedSize === s
                        ? 'bg-[#3A2D24] text-[#FAF7F2] border-[#3A2D24] shadow-xs'
                        : 'bg-[#FFFFFF] text-[#3A2D24] border-[#D9CEC1] hover:border-[#3A2D24]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-[#3A2D24] uppercase tracking-wider">
                Quantity:
              </span>
              <div className="flex items-center border border-[#D9CEC1] rounded-sm bg-[#FFFFFF]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-[#5A483E] hover:bg-[#F3ECE2] transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-xs font-bold text-[#3A2D24]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-[#5A483E] hover:bg-[#F3ECE2] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
                className="w-full py-4 bg-[#3A2D24] hover:bg-[#241B15] text-[#FAF7F2] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group active:scale-98"
              >
                <ShoppingBag className="w-4 h-4 text-[#C49F6A]" />
                <span>Add To Bag — ₹{product.price * quantity}</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 bg-[#C49F6A] hover:bg-[#B38D56] text-[#241B15] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-98"
              >
                <Zap className="w-4 h-4" />
                <span>Buy It Now (Instant Checkout)</span>
              </button>
            </div>

            {/* Expandable Accordion Tabs */}
            <div className="border-t border-[#E5DDD3] pt-4 space-y-3">
              
              {/* Tab 1: Description */}
              <div className="border border-[#E5DDD3] rounded-xl bg-[#FFFFFF] overflow-hidden">
                <button
                  onClick={() => setOpenTab(openTab === 'desc' ? '' : 'desc')}
                  className="w-full p-3.5 text-left text-xs font-bold uppercase tracking-wider text-[#3A2D24] flex items-center justify-between hover:bg-[#FAF7F2]"
                >
                  <span>Description & Formal Fit</span>
                  {openTab === 'desc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openTab === 'desc' && (
                  <div className="p-4 pt-0 text-xs text-[#5A483E] leading-relaxed space-y-2 border-t border-[#F3ECE2]">
                    <p className="whitespace-pre-line">{product.description}</p>
                  </div>
                )}
              </div>

              {/* Tab 2: Technology */}
              <div className="border border-[#E5DDD3] rounded-xl bg-[#FFFFFF] overflow-hidden">
                <button
                  onClick={() => setOpenTab(openTab === 'tech' ? '' : 'tech')}
                  className="w-full p-3.5 text-left text-xs font-bold uppercase tracking-wider text-[#3A2D24] flex items-center justify-between hover:bg-[#FAF7F2]"
                >
                  <span>The Nano-Shield™ Technology</span>
                  {openTab === 'tech' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openTab === 'tech' && (
                  <div className="p-4 pt-0 text-xs text-[#5A483E] leading-relaxed space-y-2 border-t border-[#F3ECE2]">
                    <p>{product.technology}</p>
                    <div className="p-2.5 bg-[#FAF7F2] rounded-md border border-[#E5DDD3] flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-[#C49F6A] shrink-0" />
                      <span className="text-[11px] font-medium text-[#3A2D24]">
                        Lotus-leaf contact angle &gt;140° for zero water absorption.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tab 3: Materials */}
              <div className="border border-[#E5DDD3] rounded-xl bg-[#FFFFFF] overflow-hidden">
                <button
                  onClick={() => setOpenTab(openTab === 'material' ? '' : 'material')}
                  className="w-full p-3.5 text-left text-xs font-bold uppercase tracking-wider text-[#3A2D24] flex items-center justify-between hover:bg-[#FAF7F2]"
                >
                  <span>Materials & Fiber Composition</span>
                  {openTab === 'material' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openTab === 'material' && (
                  <div className="p-4 pt-0 text-xs text-[#5A483E] leading-relaxed border-t border-[#F3ECE2]">
                    <p>{product.material}</p>
                  </div>
                )}
              </div>

              {/* Tab 4: Care Instructions */}
              <div className="border border-[#E5DDD3] rounded-xl bg-[#FFFFFF] overflow-hidden">
                <button
                  onClick={() => setOpenTab(openTab === 'care' ? '' : 'care')}
                  className="w-full p-3.5 text-left text-xs font-bold uppercase tracking-wider text-[#3A2D24] flex items-center justify-between hover:bg-[#FAF7F2]"
                >
                  <span>Care & Machine Washing</span>
                  {openTab === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openTab === 'care' && (
                  <div className="p-4 pt-0 text-xs text-[#5A483E] leading-relaxed border-t border-[#F3ECE2]">
                    <p>{product.care}</p>
                  </div>
                )}
              </div>

              {/* Tab 5: Shipping & Guarantee */}
              <div className="border border-[#E5DDD3] rounded-xl bg-[#FFFFFF] overflow-hidden">
                <button
                  onClick={() => setOpenTab(openTab === 'shipping' ? '' : 'shipping')}
                  className="w-full p-3.5 text-left text-xs font-bold uppercase tracking-wider text-[#3A2D24] flex items-center justify-between hover:bg-[#FAF7F2]"
                >
                  <span>Express Shipping & 30-Day Guarantee</span>
                  {openTab === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openTab === 'shipping' && (
                  <div className="p-4 pt-0 text-xs text-[#5A483E] leading-relaxed space-y-1.5 border-t border-[#F3ECE2]">
                    <p>• <strong>Free Express Shipping:</strong> Orders dispatched within 24h across all Indian pin codes.</p>
                    <p>• <strong>30-Day Money-Back Guarantee:</strong> If your feet get wet, return for a 100% refund.</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Customer Reviews Section */}
        <div className="mt-20 pt-12 border-t border-[#E5DDD3]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] tracking-[0.2em] font-semibold text-[#8C7E72] uppercase">
                Verified Feedback
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#241B15]">
                Customer Reviews ({reviewsList.length + 339})
              </h3>
            </div>

            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-5 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#241B15]"
            >
              {showReviewForm ? 'Cancel Review' : 'Write a Review'}
            </button>
          </div>

          {/* Write a Review Form */}
          {showReviewForm && (
            <form onSubmit={handleReviewSubmit} className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-2xl p-6 mb-8 max-w-xl space-y-4 shadow-sm animate-fadeIn">
              <h4 className="font-serif-display font-bold text-base text-[#3A2D24]">
                Share Your Experience with {product.name}
              </h4>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#3A2D24]">Your Name & City</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rohan Deshmukh, Pune"
                  value={newReviewName}
                  onChange={(e) => setNewReviewName(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2 text-xs"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#3A2D24]">Rating</label>
                <select
                  value={newReviewRating}
                  onChange={(e) => setNewReviewRating(Number(e.target.value))}
                  className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2 text-xs"
                >
                  <option value={5}>★★★★★ (5 Stars - Exceptional Dryness)</option>
                  <option value={4}>★★★★☆ (4 Stars - Great Protection)</option>
                  <option value={3}>★★★☆☆ (3 Stars - Average)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#3A2D24]">Review Details</label>
                <textarea
                  required
                  rows={3}
                  placeholder="How did the socks perform in rain with your shoes?"
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2 text-xs"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#C49F6A] text-[#241B15] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#B38D56]"
              >
                Publish Review
              </button>
            </form>
          )}

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsList.map((rev) => (
              <div key={rev.id} className="bg-[#FFFFFF] border border-[#EBE3D7] rounded-2xl p-5 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex text-[#C49F6A]">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-[10px] text-[#8C7E72]">{rev.date}</span>
                </div>
                <h4 className="font-serif-display font-bold text-sm text-[#3A2D24] leading-snug">
                  {rev.title}
                </h4>
                <p className="text-xs text-[#5A483E] leading-relaxed font-light">
                  {rev.text}
                </p>
                <div className="pt-2 border-t border-[#F3ECE2] flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#3A2D24]">{rev.author}, {rev.location}</span>
                  {rev.verified && (
                    <span className="text-[10px] text-emerald-800 font-bold uppercase">Verified</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-12 border-t border-[#E5DDD3]">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-[11px] tracking-[0.2em] font-semibold text-[#8C7E72] uppercase">
              Complete The Wardrobe
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#241B15]">
              You May Also Like
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
