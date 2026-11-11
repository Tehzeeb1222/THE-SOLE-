import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { ShieldCheck, Truck, RotateCcw, ArrowRight, Sparkles, Check } from 'lucide-react';

export default function NewsletterSection() {
  const { addToast, applyPromoCode, navigateTo } = useStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sizePref, setSizePref] = useState('UK/IN 8–9');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address.', 'error');
      return;
    }
    applyPromoCode('RAINREADY15');
    setIsSubmitted(true);
    addToast('Welcome to the Collective! 15% code RAINREADY15 applied to your bag.', 'success');
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#EBE3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Collective Frame matching reference graphic */}
        <div className="bg-[#FFFFFF] border-2 border-[#D9CEC1] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT: Trenchcoat Lady Artwork (Cols 5) */}
            <div className="lg:col-span-5 relative text-center">
              <div className="relative mx-auto max-w-sm">
                <img
                  src="/assets/sign in page png.png"
                  alt="Sophisticated woman in long grey trenchcoat with black umbrella walking in rain"
                  className="w-full h-auto object-cover rounded-2xl border border-[#E5DDD3]"
                />
                
                {/* Brand script label */}
                <div className="mt-4 text-center">
                  <span className="font-script text-3xl text-[#3A2D24]">The Sole</span>
                  <p className="text-[10px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
                    Dry Feet. Everyday.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Membership Signup Form matching reference (Cols 7) */}
            <div className="lg:col-span-7">
              <div className="border border-[#3A2D24]/20 rounded-2xl p-6 sm:p-8 bg-[#FCFAF7] space-y-6">
                
                <div className="space-y-2">
                  <span className="text-[11px] tracking-[0.25em] font-bold text-[#8C7E72] uppercase block">
                    Join The Rain-Ready Collective
                  </span>
                  <h2 className="font-serif-display text-3xl sm:text-4xl text-[#241B15] tracking-tight leading-tight">
                    Never Let Rain <br />
                    <span className="italic font-normal">Dictate Your Day.</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5A483E] leading-relaxed font-light">
                    Sign up today to receive private early access to new seasonal releases, rain care guides, and <strong>15% off your first pair</strong> of hydrophobic socks.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 bg-[#F3ECE2] border border-[#C49F6A] rounded-xl text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#3A2D24] text-[#C49F6A] flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-display font-bold text-lg text-[#3A2D24]">
                      Welcome to The Collective, {name || 'Gentleman'}!
                    </h3>
                    <p className="text-xs text-[#5A483E]">
                      Your 15% discount code <strong>RAINREADY15</strong> has been automatically unlocked for your bag.
                    </p>
                    <button
                      onClick={() => navigateTo('shop')}
                      className="px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#241B15]"
                    >
                      Shop With 15% Off
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-[#3A2D24] uppercase tracking-wider block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Aarav Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm px-4 py-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-[#3A2D24] uppercase tracking-wider block">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g., aarav@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm px-4 py-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                      />
                    </div>

                    {/* Shoe Size Preference Dropdown */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-[#3A2D24] uppercase tracking-wider block">
                        Shoe Size Preference
                      </label>
                      <select
                        value={sizePref}
                        onChange={(e) => setSizePref(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm px-4 py-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                      >
                        <option value="UK/IN 6–7">UK/IN 6–7 (EU 39–41)</option>
                        <option value="UK/IN 8–9">UK/IN 8–9 (EU 42–43) — Recommended</option>
                        <option value="UK/IN 10–11">UK/IN 10–11 (EU 44–45)</option>
                        <option value="UK/IN 12+">UK/IN 12+ (EU 46+)</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#241B15] hover:bg-[#3A2D24] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
                      >
                        <span>Claim Your 15% Off</span>
                        <ArrowRight className="w-4 h-4 text-[#C49F6A] group-hover:translate-x-1 transition-transform" />
                      </button>
                      <p className="text-[10px] text-center text-[#8C7E72] uppercase tracking-wider mt-2">
                        or get private early access to future drops
                      </p>
                    </div>
                  </form>
                )}

                {/* Bottom Trust Icons matching reference */}
                <div className="pt-4 border-t border-[#E5DDD3] grid grid-cols-3 gap-2 text-center">
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-4 h-4 text-[#C49F6A] mb-1" />
                    <span className="text-[10px] font-semibold text-[#3A2D24]">100% Water Protection</span>
                    <span className="text-[9px] text-[#8C7E72]">Guarantee</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <Truck className="w-4 h-4 text-[#C49F6A] mb-1" />
                    <span className="text-[10px] font-semibold text-[#3A2D24]">Free Shipping</span>
                    <span className="text-[9px] text-[#8C7E72]">Across India</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <RotateCcw className="w-4 h-4 text-[#C49F6A] mb-1" />
                    <span className="text-[10px] font-semibold text-[#3A2D24]">Easy 30-Day</span>
                    <span className="text-[9px] text-[#8C7E72]">Returns</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
