import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Tag, 
  Sparkles,
  Heart
} from 'lucide-react';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
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
    setPromoCode, 
    applyPromoCode, 
    removePromoCode, 
    navigateTo, 
    products, 
    addToCart,
    toggleWishlist
  } = useStore();

  const [inputCode, setInputCode] = useState('');

  if (!isCartOpen) return null;

  const progressPct = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const amountNeeded = freeShippingThreshold - cartSubtotal;

  // Cross-sell items (shoe covers, care spray)
  const crossSellProducts = products.filter(
    (p) => (p.category === 'shoe-covers' || p.category === 'accessories') && !cart.some((item) => item.productId === p.id)
  ).slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-[#241B15]/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#D9CEC1] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 bg-[#FAF7F2] border-b border-[#E5DDD3] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#3A2D24]" />
              <h2 className="font-serif-display text-xl font-bold tracking-wide text-[#3A2D24]">
                Your Rain-Ready Bag
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EAE0D5] text-[#5A483E]">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#8C7E72] hover:text-[#3A2D24] hover:bg-[#F3ECE2] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-5 py-3 bg-[#F3ECE2] border-b border-[#E5DDD3]">
            <div className="flex items-center justify-between text-xs text-[#5A483E] mb-1.5">
              {isFreeShipping ? (
                <span className="font-semibold text-emerald-800 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Unlocked: Free Express Shipping Across India!
                </span>
              ) : (
                <span>
                  Add <strong className="font-bold text-[#3A2D24]">₹{amountNeeded}</strong> more for <strong>Free Express Shipping</strong>
                </span>
              )}
              <span className="text-[11px] font-bold">{progressPct}%</span>
            </div>
            <div className="w-full bg-[#DFD3C3] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-[#C49F6A] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F3ECE2] border border-[#D9CEC1] mx-auto flex items-center justify-center text-[#8C7E72]">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-display text-lg text-[#3A2D24]">Your bag is empty</h3>
                  <p className="text-xs text-[#8C7E72] max-w-xs mx-auto">
                    Prepare your footwear for unpredictable weather with our hydrophobic socks.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('shop');
                  }}
                  className="px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-[#241B15] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3 bg-[#FFFFFF] border border-[#EBE3D7] rounded-lg shadow-2xs flex gap-3.5"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-md border border-[#E5DDD3] shrink-0"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-serif-display font-semibold text-sm text-[#3A2D24] leading-snug">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#A69788] hover:text-rose-700 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px] text-[#8C7E72]">
                          <span>{item.color}</span>
                          <span>•</span>
                          <span className="font-medium text-[#5A483E]">{item.size}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F3ECE2]">
                        <div className="flex items-center border border-[#D9CEC1] rounded-sm bg-[#FAF7F2]">
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-[#EAE0D5] text-[#5A483E] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-[#3A2D24]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-[#EAE0D5] text-[#5A483E] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="font-serif-display font-bold text-sm text-[#3A2D24]">
                            ₹{item.price * item.quantity}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="block text-[10px] text-[#A69788] line-through">
                              ₹{item.originalPrice * item.quantity}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Complete your rain kit recommendation */}
                {crossSellProducts.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-[#E5DDD3]">
                    <p className="text-[11px] tracking-wider uppercase font-semibold text-[#8C7E72] mb-3">
                      Complete Your Rain-Ready Kit
                    </p>
                    <div className="space-y-2">
                      {crossSellProducts.map((cross) => (
                        <div key={cross.id} className="p-2.5 bg-[#F3ECE2]/80 border border-[#E5DDD3] rounded-md flex items-center justify-between gap-3">
                          <img src={cross.images[0]} alt={cross.name} className="w-10 h-10 object-cover rounded-sm" />
                          <div className="flex-1 min-w-0">
                            <p className="font-serif-display text-xs font-semibold truncate text-[#3A2D24]">{cross.name}</p>
                            <p className="text-[11px] font-bold text-[#C49F6A]">₹{cross.price}</p>
                          </div>
                          <button
                            onClick={() => addToCart(cross)}
                            className="px-2.5 py-1 bg-[#3A2D24] text-[#FAF7F2] text-[10px] uppercase font-semibold rounded-xs hover:bg-[#241B15]"
                          >
                            + Add
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer Calculations & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 bg-[#FAF7F2] border-t border-[#E5DDD3] space-y-3">
              
              {/* Promo Code Box */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (e.g. RAINREADY15)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="flex-1 bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm px-3 py-1.5 text-xs text-[#3A2D24] uppercase placeholder-none focus:outline-hidden focus:border-[#C49F6A]"
                />
                <button
                  onClick={() => {
                    applyPromoCode(inputCode);
                    setInputCode('');
                  }}
                  className="px-3 py-1.5 bg-[#EAE0D5] text-[#3A2D24] hover:bg-[#DFD3C3] text-xs font-semibold uppercase rounded-sm transition-colors"
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
                  <button onClick={removePromoCode} className="text-emerald-900 hover:text-red-700 font-bold ml-2">
                    ×
                  </button>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#5A483E] pt-2 border-t border-[#EFE8DE]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{cartSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-medium">
                    <span>Discount ({appliedDiscount?.code})</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Shipping</span>
                  <span>{shippingFee === 0 ? <strong className="text-emerald-700 uppercase text-[11px]">Free</strong> : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#3A2D24] pt-2 border-t border-[#E5DDD3]">
                  <span>Total (Incl. all taxes)</span>
                  <span className="font-serif-display text-base">₹{cartTotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('checkout');
                  }}
                  className="w-full py-3.5 bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15] font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('cart');
                  }}
                  className="w-full py-2.5 bg-transparent border border-[#3A2D24] text-[#3A2D24] hover:bg-[#F3ECE2] font-medium text-xs tracking-wider uppercase rounded-sm transition-colors text-center"
                >
                  View Full Cart Details
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
