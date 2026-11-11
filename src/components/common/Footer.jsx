import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  Droplets, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  ArrowRight, 
  Lock, 
  Mail, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const { navigateTo, setIsSizeGuideOpen, addToast, applyPromoCode } = useStore();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      addToast('Please enter a valid email address.', 'error');
      return;
    }
    applyPromoCode('RAINREADY15');
    addToast('Welcome to the Rain-Ready Collective! 15% code applied to your bag.', 'success');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#241B15] text-[#FAF7F2] border-t border-[#3A2D24] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-[#3A2D24]">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#3A2D24] border border-[#5A483E] flex items-center justify-center shrink-0 text-[#C49F6A]">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#FAF7F2]">100% Water Repellency</p>
              <p className="text-[11px] text-[#A69788]">Hydrophobic nano-fiber matrix</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#3A2D24] border border-[#5A483E] flex items-center justify-center shrink-0 text-[#C49F6A]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#FAF7F2]">Complimentary Express</p>
              <p className="text-[11px] text-[#A69788]">Delivered in 2–4 days across India</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#3A2D24] border border-[#5A483E] flex items-center justify-center shrink-0 text-[#C49F6A]">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#FAF7F2]">30-Day Dry Guarantee</p>
              <p className="text-[11px] text-[#A69788]">Hassle-free replacement / refund</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#3A2D24] border border-[#5A483E] flex items-center justify-center shrink-0 text-[#C49F6A]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#FAF7F2]">Secure UPI & Card Pay</p>
              <p className="text-[11px] text-[#A69788]">Bank-grade 256-bit encryption</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14 border-b border-[#3A2D24]">
          
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-4 pr-4">
            <BrandLogo size="lg" theme="light" />
            <p className="text-sm text-[#C4B7AA] leading-relaxed font-light max-w-sm pt-2">
              Engineered for real life. Perfected for formal wear. The Sole creates bespoke hydrophobic footwear accessories that let you stride through torrential monsoons with complete dry confidence.
            </p>
            
            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3 text-[#A69788]">
              <a href="#instagram" className="w-8 h-8 rounded-full border border-[#4A3B32] flex items-center justify-center hover:text-[#C49F6A] hover:border-[#C49F6A] transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#facebook" className="w-8 h-8 rounded-full border border-[#4A3B32] flex items-center justify-center hover:text-[#C49F6A] hover:border-[#C49F6A] transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="#youtube" className="w-8 h-8 rounded-full border border-[#4A3B32] flex items-center justify-center hover:text-[#C49F6A] hover:border-[#C49F6A] transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C49F6A]">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B7AA]">
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#FAF7F2] transition-colors">
                  Formal Hydrophobic Socks
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#FAF7F2] transition-colors">
                  Everyday Defense Socks
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#FAF7F2] transition-colors">
                  Monsoon Master Bundles
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#FAF7F2] transition-colors">
                  Formal Shoe Slip Covers
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#FAF7F2] transition-colors">
                  Hydrophobic Care Sprays
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Pages & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C49F6A]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B7AA]">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-[#FAF7F2] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#FAF7F2] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-[#FAF7F2] transition-colors">
                  Our Services (B2B & Subscription)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('how-it-works')} className="hover:text-[#FAF7F2] transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('pricing')} className="hover:text-[#FAF7F2] transition-colors">
                  Pricing & Bundles
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact-faq')} className="hover:text-[#FAF7F2] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Help & Concierge */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C49F6A]">
              Concierge
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B7AA]">
              <li>
                <button onClick={() => navigateTo('order-tracking')} className="hover:text-[#FAF7F2] transition-colors">
                  Track Live Order
                </button>
              </li>
              <li>
                <button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-[#FAF7F2] transition-colors">
                  Footwear Size Guide
                </button>
              </li>
              <li>
                <a 
                  href="https://wa.me/919820144820?text=Hello%20The%20Sole%2C%20I%20would%20like%20to%20inquire%20about%20your%20hydrophobic%20socks." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FAF7F2] transition-colors flex items-center gap-1 text-[#25D366]"
                >
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/thesole.official" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FAF7F2] transition-colors flex items-center gap-1 text-[#C49F6A]"
                >
                  <span>Instagram @thesole.official</span>
                </a>
              </li>
              <li>
                <button onClick={() => navigateTo('admin')} className="text-[#C49F6A] hover:underline flex items-center gap-1 pt-1">
                  <SlidersHorizontal className="w-3 h-3" />
                  Admin CMS Portal
                </button>
              </li>
              </ul>
          </div>
        </div>

        {/* Newsletter Collective Callout */}
        <div className="py-8 my-4 bg-[#2C211A] border border-[#3E3025] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C49F6A] uppercase flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Join The Rain-Ready Collective
            </span>
            <h3 className="font-serif-display text-xl sm:text-2xl text-[#FAF7F2]">
              Never let rain dictate your day.
            </h3>
            <p className="text-xs text-[#A69788]">
              Receive private access to new releases, monsoon care guides, and 15% off your first order.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="bg-[#1C140F] border border-[#4A3B32] rounded-sm px-4 py-2.5 text-xs text-[#FAF7F2] placeholder-[#7A6C60] focus:outline-hidden focus:border-[#C49F6A] min-w-[260px]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#C49F6A] hover:bg-[#B38D56] text-[#241B15] font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>Join Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7E72] gap-4">
          <p>© {new Date().getFullYear()} THE SOLE™. All Rights Reserved. Crafted for Indian Monsoons.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#privacy" className="hover:text-[#FAF7F2] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#FAF7F2] transition-colors">Terms of Service</a>
            <a href="#shipping" className="hover:text-[#FAF7F2] transition-colors">Shipping & Returns</a>
            <span className="text-[#C49F6A]">INR (₹) India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
