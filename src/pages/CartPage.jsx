import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Tag, 
  Sparkles,
  Heart,
  ArrowLeft
} from 'lucide-react';

export default function CartPage() {
  const { 
    cart, 
    updateCartQuantity, 
    removeFromCart, 
    cartSubtotal, 
    freeShippingThreshold, 
    isFreeShipping, 
    shippingFee, 
    appliedDiscount, 
    discountAmount, 
    cartTotal, 
    promoCode, 
    applyPromoCode, 
    removePromoCode, 
    navigateTo, 
    products, 
    addToCart,
    toggleWishlist 
  } = useStore();

  const [inputCode, setInputCode] = useState('');

  const progressPct = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const amountNeeded = freeShippingThreshold - cartSubtotal;

  if (cart.length === 0) {
    return (
      <div className="py-20 bg-[#FAF7F2] min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-[#FFFFFF] border border-[#E5DDD3] rounded-3xl shadow-lg space-y-4">
          <div className="w-20 h-20 rounded-full bg-[#F3ECE2] border border-[#D9CEC1] mx-auto flex items-center justify-center text-[#8C7E72]">
            <ShoppingBag className="w-10 h-10 stroke-1" />
          </div>
          <h2 className="font-serif-display text-2xl text-[#3A2D24]">
            Your Bag is Empty
          </h2>
          <p className="text-xs text-[#8C7E72] leading-relaxed">
            Prepare your feet for torrential rains and sudden monsoons with our hydrophobic socks.
          </p>
          <button
            onClick={() => navigateTo('shop')}
            className="px-8 py-3 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#241B15] transition-colors"
          >
            Explore Hydrophobic Socks
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5DDD3] pb-6">
          <div>
            <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
              Review Your Items
            </span>
            <h1 className="font-serif-display text-3xl sm:text-4xl text-[#241B15]">
              Shopping Bag ({cart.reduce((sum, i) => sum + i.quantity, 0)})
            </h1>
          </div>
          <button
            onClick={() => navigateTo('shop')}
            className="text-xs text-[#8C7E72] hover:text-[#3A2D24] uppercase tracking-wider font-semibold flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="p-4 bg-[#F3ECE2] rounded-xl border border-[#E5DDD3]">
          <div className="flex items-center justify-between text-xs text-[#5A483E] mb-2">
            {isFreeShipping ? (
              <span className="font-semibold text-emerald-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                You've unlocked <strong>Complimentary Express Shipping Across India!</strong>
              </span>
            ) : (
              <span>
                Add <strong className="font-bold text-[#3A2D24]">₹{amountNeeded}</strong> more to qualify for <strong>Free Express Shipping</strong>
              </span>
            )}
            <span className="font-bold">{progressPct}%</span>
          </div>
          <div className="w-full bg-[#DFD3C3] h-2 rounded-full overflow-hidden">
            <div className="bg-[#C49F6A] h-full transition-all duration-500 rounded-full" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {/* Cart Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Item Table (Cols 8) */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item) => (
              <div 
                key={item.id}
                className="bg-[#FFFFFF] border border-[#EBE3D7] rounded-2xl p-5 shadow-2xs flex flex-col sm:flex-row items-center gap-5 justify-between"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border border-[#E5DDD3] shrink-0"
                  />
                  <div className="space-y-1">
                    <h3 className="font-serif-display font-bold text-base text-[#3A2D24]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#8C7E72]">{item.subtitle}</p>
                    <div className="flex items-center gap-2 text-xs text-[#5A483E] pt-1">
                      <span className="font-medium">{item.color}</span>
                      <span>•</span>
                      <span className="font-semibold bg-[#FAF7F2] px-2 py-0.5 rounded-sm border border-[#E5DDD3]">{item.size}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#F3ECE2]">
                  {/* Qty Box */}
                  <div className="flex items-center border border-[#D9CEC1] rounded-sm bg-[#FAF7F2]">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-[#EAE0D5] text-[#5A483E]"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-[#3A2D24]">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-[#EAE0D5] text-[#5A483E]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-right min-w-[80px]">
                    <span className="font-serif-display font-bold text-base text-[#241B15]">
                      ₹{item.price * item.quantity}
                    </span>
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span className="block text-[11px] text-[#A69788] line-through">
                        ₹{item.originalPrice * item.quantity}
                      </span>
                    )}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 text-[#A69788] hover:text-rose-600 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Complete Kit Recommendations */}
            <div className="pt-6">
              <h3 className="font-serif-display font-bold text-lg text-[#3A2D24] mb-3">
                Complete Your Rain-Ready Setup
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.filter(p => p.category === 'shoe-covers' || p.category === 'accessories').slice(0, 2).map((rec) => (
                  <div key={rec.id} className="p-3.5 bg-[#FFFFFF] border border-[#E5DDD3] rounded-xl flex items-center justify-between gap-3 shadow-2xs">
                    <img src={rec.images[0]} alt={rec.name} className="w-14 h-14 object-cover rounded-lg border border-[#E5DDD3]" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-display font-bold text-xs truncate text-[#3A2D24]">{rec.name}</h4>
                      <p className="text-[11px] text-[#8C7E72]">{rec.subtitle}</p>
                      <p className="text-xs font-bold text-[#C49F6A]">₹{rec.price}</p>
                    </div>
                    <button
                      onClick={() => addToCart(rec)}
                      className="px-3 py-1.5 bg-[#3A2D24] text-[#FAF7F2] text-[10px] uppercase font-semibold rounded-xs hover:bg-[#241B15]"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary (Cols 4) */}
          <div className="lg:col-span-4">
            <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md sticky top-28">
              <h2 className="font-serif-display font-bold text-xl text-[#3A2D24] pb-3 border-b border-[#EFE8DE]">
                Order Summary
              </h2>

              {/* Promo code field */}
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon (e.g. RAINREADY15)"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    className="flex-1 bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm px-3 py-2 text-xs uppercase focus:outline-hidden focus:border-[#3A2D24]"
                  />
                  <button
                    onClick={() => {
                      applyPromoCode(inputCode);
                      setInputCode('');
                    }}
                    className="px-4 py-2 bg-[#EAE0D5] text-[#3A2D24] hover:bg-[#DFD3C3] text-xs font-semibold uppercase rounded-sm"
                  >
                    Apply
                  </button>
                </div>

                {appliedDiscount && (
                  <div className="flex items-center justify-between text-xs bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-sm">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      <strong>{appliedDiscount.code}</strong>: {appliedDiscount.description}
                    </span>
                    <button onClick={removePromoCode} className="text-emerald-900 font-bold ml-2">
                      ×
                    </button>
                  </div>
                )}
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-2.5 text-xs text-[#5A483E] pt-2 border-t border-[#EFE8DE]">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span>₹{cartSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-semibold">
                    <span>Special Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Express Delivery</span>
                  <span>{shippingFee === 0 ? <strong className="text-emerald-700 uppercase">Free</strong> : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#241B15] pt-3 border-t border-[#E5DDD3]">
                  <span>Total Amount</span>
                  <span className="font-serif-display text-xl text-[#3A2D24]">₹{cartTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => navigateTo('checkout')}
                className="w-full py-4 bg-[#3A2D24] hover:bg-[#241B15] text-[#FAF7F2] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#C49F6A] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <div className="pt-2 text-[11px] text-[#8C7E72] space-y-1.5 text-center">
                <p className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C49F6A]" />
                  <span>30-Day Money-Back "Dry Feet" Guarantee</span>
                </p>
                <p>256-Bit Encrypted Secure Checkout</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
