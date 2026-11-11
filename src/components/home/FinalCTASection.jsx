import React from 'react';
import { useStore } from '../../context/StoreContext';
import { ArrowRight, Droplets, Sparkles } from 'lucide-react';

export default function FinalCTASection() {
  const { navigateTo, setActiveCategoryFilter } = useStore();

  return (
    <section className="py-24 bg-[#241B15] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49F6A]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3A2D24]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Brand Script Signature */}
        <div className="flex items-center justify-center gap-2">
          <span className="font-script text-4xl sm:text-5xl text-[#C49F6A]">The Sole</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-3">
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] tracking-tight uppercase leading-tight max-w-3xl mx-auto">
            Never Let Rain <br />
            <span className="italic font-light text-[#C49F6A]">Dictate Your Day.</span>
          </h2>
          <p className="font-serif-classic italic text-base sm:text-xl text-[#DFD3C3] max-w-xl mx-auto">
            “Step out confidently. Stay dry comfortably.”
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#A69788] max-w-lg mx-auto font-light leading-relaxed">
          Join thousands of professionals across India who have upgraded their footwear routine with hydrophobic socks that repel water while preserving formal elegance.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              setActiveCategoryFilter('all');
              navigateTo('shop');
            }}
            className="w-full sm:w-auto px-8 py-4 bg-[#C49F6A] hover:bg-[#B38D56] text-[#241B15] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Shop The Sole</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => navigateTo('collections')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#E5DDD3]/40 text-[#FAF7F2] hover:bg-[#FAF7F2]/10 font-medium text-xs tracking-[0.18em] uppercase rounded-sm transition-colors"
          >
            Explore The Collections
          </button>
        </div>

        {/* Micro Guarantee Note */}
        <p className="text-[11px] text-[#8C7E72] uppercase tracking-widest pt-4">
          Backed by our 30-Day "Dry Feet" Guarantee • Free Express Delivery Across India
        </p>

      </div>
    </section>
  );
}
