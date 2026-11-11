import React from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  Droplets, 
  Wind, 
  ShieldCheck, 
  Footprints, 
  Check, 
  X, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPARISON_DATA } from '../../data/products';

export default function WhyTheSoleSection() {
  const { navigateTo } = useStore();

  const comparisonRows = [
    {
      icon: Droplets,
      feature: "Water Protection",
      theSole: "Hydrophobic sock blocks water completely at the fiber surface",
      otherBrands: "Standard socks get soggy; bulky covers often leak"
    },
    {
      icon: Wind,
      feature: "All-Day Comfort",
      theSole: "Lightweight, ultra-breathable, silky soft 200-needle knit",
      otherBrands: "Hot, bulky, sweaty, and restrictive plastic/rubber"
    },
    {
      icon: ShieldCheck,
      feature: "Durability & Wash Life",
      theSole: "Long-lasting nano-protection engineered for 60+ washes",
      otherBrands: "Wears out quickly; sprays rub off after one rain"
    },
    {
      icon: Footprints,
      feature: "Works With Your Shoes",
      theSole: "Fits perfectly in formal Oxfords, Derbys, Loafers & Casuals",
      otherBrands: "Often requires sizing up or wearing clumsy rain boots"
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#EBE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            The Difference
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#241B15] tracking-tight">
            Why The Sole?
          </h2>
          <p className="text-base sm:text-lg font-serif-classic italic text-[#5A483E]">
            “Engineered for comfort. Designed for real life.”
          </p>
          <div className="w-12 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* Comparison Table Card */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#D9CEC1] rounded-2xl shadow-xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-[#D9CEC1]">
            <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 bg-[#F3ECE2] flex items-center">
              <span className="text-xs uppercase tracking-widest font-bold text-[#5A483E]">
                Key Attributes
              </span>
            </div>
            
            <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 bg-[#3A2D24] text-[#FAF7F2] text-center border-x border-[#4A3B32] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C49F6A] text-[#241B15] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                The Gold Standard
              </div>
              <span className="font-script text-2xl sm:text-3xl leading-none text-[#FAF7F2] block">
                The Sole
              </span>
              <span className="text-[9px] text-[#C49F6A] uppercase tracking-widest font-semibold">
                Hydrophobic Sock
              </span>
            </div>

            <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 bg-[#EAE0D5]/70 text-center flex flex-col justify-center">
              <span className="text-xs font-serif-display font-semibold uppercase tracking-wider text-[#7A6C60]">
                Other Options
              </span>
              <span className="text-[9px] text-[#8C7E72]">
                (Cotton / Shoe Covers / Boots)
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#EFE8DE]">
            {comparisonRows.map((row, idx) => {
              const IconComp = row.icon;
              return (
                <div key={idx} className="grid grid-cols-12 items-center hover:bg-[#FCFAF7] transition-colors">
                  
                  {/* Metric Label */}
                  <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#F3ECE2] flex items-center justify-center text-[#5A483E] shrink-0 hidden sm:flex">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif-display font-bold text-xs sm:text-sm text-[#3A2D24]">
                        {row.feature}
                      </h4>
                    </div>
                  </div>

                  {/* The Sole Value */}
                  <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 bg-[#F7F2EB]/50 border-x border-[#E5DDD3] flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#3A2D24] text-[#C49F6A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#241B15] font-medium leading-snug">
                      {row.theSole}
                    </p>
                  </div>

                  {/* Other Brands Value */}
                  <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 flex items-start gap-2 text-[#8C7E72]">
                    <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#7A6C60] leading-snug">
                      {row.otherBrands}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Table Bottom Footer */}
          <div className="p-4 sm:p-5 bg-[#FAF7F2] border-t border-[#D9CEC1] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="font-script text-2xl text-[#3A2D24]">The Sole</span>
              <span className="text-xs text-[#8C7E72] font-serif-display italic">
                “Walk dry. Rainy or not.”
              </span>
            </div>
            <button
              onClick={() => navigateTo('why-the-sole')}
              className="text-xs font-semibold uppercase tracking-wider text-[#3A2D24] hover:text-[#C49F6A] flex items-center gap-1"
            >
              <span>Read Full Science Breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
