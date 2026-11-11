import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  FileText, 
  Sparkles, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  Send,
  Droplets
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function PreRegistrationModal({ isOpen, onClose }) {
  const { addToast } = useStore();
  const [activeMode, setActiveMode] = useState('interactive'); // 'interactive' | 'google-embed'
  const [googleFormUrl, setGoogleFormUrl] = useState('https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_PRE_REGISTRATION/viewform?embedded=true');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    shoeSize: 'UK/IN 8–9',
    shoeStyle: 'Oxford / Formal Leather',
    interest: 'Monsoon 3-Pack Bundle (Save 15%)'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      addToast('Please complete all required fields.', 'error');
      return;
    }
    setSubmitted(true);
    addToast('Pre-registration confirmed! You have unlocked VIP 15% Launch Offer & Priority Dispatch.', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#241B15]/75 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border-2 border-[#D9CEC1] overflow-hidden animate-slideUp">
        
        {/* Header */}
        <div className="bg-[#3A2D24] text-[#FAF7F2] p-6 flex items-center justify-between border-b border-[#4A3B32]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#241B15] border border-[#C49F6A] flex items-center justify-center text-[#C49F6A]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-script text-2xl text-[#FAF7F2]">The Sole</span>
                <span className="text-[9px] bg-[#C49F6A] text-[#241B15] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  VIP Early Access
                </span>
              </div>
              <p className="text-xs text-[#C4B7AA]">Monsoon Pre-Registration & Priority Allocation</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A69788] hover:text-[#FAF7F2] hover:bg-[#4A3B32] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher: Interactive Form vs Google Form Embed */}
        <div className="px-6 pt-4 pb-2 flex items-center justify-between border-b border-[#E5DDD3] bg-[#F3ECE2]/60">
          <span className="text-xs font-semibold text-[#5A483E] uppercase tracking-wider">
            Registration Mode:
          </span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setActiveMode('interactive')}
              className={`px-3 py-1 text-xs font-semibold rounded-sm transition-colors ${
                activeMode === 'interactive'
                  ? 'bg-[#3A2D24] text-[#FAF7F2]'
                  : 'bg-[#FFFFFF] text-[#5A483E] border border-[#D9CEC1]'
              }`}
            >
              Interactive VIP Form
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('google-embed')}
              className={`px-3 py-1 text-xs font-semibold rounded-sm transition-colors flex items-center gap-1 ${
                activeMode === 'google-embed'
                  ? 'bg-[#3A2D24] text-[#FAF7F2]'
                  : 'bg-[#FFFFFF] text-[#5A483E] border border-[#D9CEC1]'
              }`}
            >
              <span>Google Form</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {activeMode === 'google-embed' ? (
            <div className="space-y-4 text-center">
              <div className="p-4 bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl space-y-3">
                <p className="text-xs text-[#5A483E]">
                  You can submit your pre-registration directly via our official Google Form below, or open it in a new window:
                </p>
                
                <a
                  href="https://forms.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#241B15]"
                >
                  <span>Open Official Google Form in New Tab</span>
                  <ExternalLink className="w-4 h-4 text-[#C49F6A]" />
                </a>

                {/* Simulated Google Form Frame */}
                <div className="mt-4 border border-[#D9CEC1] rounded-xl overflow-hidden bg-[#FFFFFF] p-6 text-left space-y-4">
                  <div className="border-b border-[#E5DDD3] pb-3">
                    <h3 className="font-serif-display font-bold text-lg text-[#3A2D24]">
                      THE SOLE — Monsoon VIP Pre-Registration Form
                    </h3>
                    <p className="text-xs text-[#8C7E72]">
                      Google Forms • The Sole Footwear Accessories Brand India
                    </p>
                  </div>
                  <p className="text-xs text-[#5A483E]">
                    Pre-registered members receive priority dispatch on the upcoming season's limited production runs, exclusive monogramming offers, and direct concierge notifications.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EAE0D5] border-2 border-[#C49F6A] flex items-center justify-center text-[#3A2D24] mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8 text-[#C49F6A]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif-display font-bold text-2xl text-[#3A2D24]">
                      Pre-Registration Confirmed!
                    </h3>
                    <p className="text-xs text-[#5A483E] max-w-md mx-auto">
                      Thank you, <strong>{formData.fullName}</strong>. You are on the VIP priority list for the upcoming hydrophobic drop. We will notify you at <strong>{formData.email}</strong> with early-bird access.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#241B15]"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="p-3.5 bg-[#F3ECE2] rounded-xl border border-[#E5DDD3] text-[#5A483E] flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#C49F6A] shrink-0 mt-0.5" />
                    <span>
                      <strong>VIP Perks Included:</strong> Guaranteed stock allocation, 15% discount code <code className="bg-[#EAE0D5] px-1 py-0.5 rounded-xs font-bold text-[#3A2D24]">RAINREADY15</code>, and free express shipping across India.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-[#3A2D24]">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-[#3A2D24]">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. aarav@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-[#3A2D24]">Mobile Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98201 44820"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-[#3A2D24]">City / Metro</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                      >
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Other">Other Indian City</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-[#3A2D24]">Preferred Shoe Size</label>
                      <select
                        value={formData.shoeSize}
                        onChange={(e) => setFormData({ ...formData, shoeSize: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                      >
                        <option value="UK/IN 6–7">UK/IN 6–7 (EU 39–41)</option>
                        <option value="UK/IN 8–9">UK/IN 8–9 (EU 42–43) — Recommended</option>
                        <option value="UK/IN 10–11">UK/IN 10–11 (EU 44–45)</option>
                        <option value="UK/IN 12+">UK/IN 12+ (EU 46+)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-[#3A2D24]">Primary Footwear Type</label>
                      <select
                        value={formData.shoeStyle}
                        onChange={(e) => setFormData({ ...formData, shoeStyle: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                      >
                        <option value="Oxford / Formal Leather">Oxford / Formal Leather Shoes</option>
                        <option value="Loafers & Monk Straps">Penny Loafers & Monk Straps</option>
                        <option value="Chelsea / Dress Boots">Chelsea Boots / Leather Boots</option>
                        <option value="Casual & White Sneakers">Casual & White Sneakers</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#3A2D24] hover:bg-[#241B15] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Submit Pre-Registration</span>
                    <ArrowRight className="w-4 h-4 text-[#C49F6A]" />
                  </button>
                </form>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
}
