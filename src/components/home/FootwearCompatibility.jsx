import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Check, Sparkles, Droplets } from 'lucide-react';

export default function FootwearCompatibility() {
  const { navigateTo } = useStore();

  const shoes = [
    {
      name: "Penny Loafers",
      pairing: "The Sole Deep Brown & Everyday Beige",
      desc: "Low-vamp design leaves ankles vulnerable to puddle splashes. The Sole provides 100% invisible water shielding."
    },
    {
      name: "Double Monk Straps",
      pairing: "The Sole Executive Grey",
      desc: "Sartorial buckle detailing requires a sleek, non-bulky 200-needle knit that stays taut across the instep."
    },
    {
      name: "Cap-Toe Oxfords",
      pairing: "The Sole Obsidian Black",
      desc: "Closed-lacing formal dress shoes demand ultra-fine yarn thickness with zero bunching in the toe box."
    },
    {
      name: "Chelsea Boots",
      pairing: "The Sole Monsoon Master Trio",
      desc: "High-ankle elasticated side gussets seal smoothly around The Sole's non-slip graduated calf band."
    }
  ];

  return (
    <section className="py-20 bg-[#F3ECE2]/50 border-b border-[#E5DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            Universal Fit
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#241B15] tracking-tight uppercase">
            Uncompromising Style & Protection
          </h2>
          <p className="text-sm sm:text-base font-serif-classic italic text-[#5A483E]">
            “Engineered for real life. Perfected for formal wear.”
          </p>
          <div className="w-12 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* Reference Artwork Lineup */}
        <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="mb-8 overflow-hidden rounded-xl bg-[#FAF7F2] p-4 border border-[#E5DDD3]">
            <img
              src="/assets/media_1791112644453.jpg"
              alt="Lineup of four formal shoes: Loafer, Monk Strap, Oxford, Chelsea Boot in the rain with The Sole socks"
              className="w-full max-h-[380px] object-contain mx-auto"
            />
          </div>

          {/* 4 Shoe Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#EFE8DE]">
            {shoes.map((shoe, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C49F6A]"></span>
                  <h3 className="font-serif-display font-bold text-base text-[#241B15]">
                    {shoe.name}
                  </h3>
                </div>
                <p className="text-[11px] font-semibold text-[#8C7E72] uppercase tracking-wider">
                  Recommended: {shoe.pairing}
                </p>
                <p className="text-xs text-[#5A483E] leading-relaxed">
                  {shoe.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Footnote */}
          <div className="mt-8 p-4 bg-[#FAF7F2] rounded-lg border border-[#E5DDD3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs text-[#5A483E]">
              <Sparkles className="w-4 h-4 text-[#C49F6A] shrink-0" />
              <span>
                <strong>Zero Shoe-Size Alteration:</strong> Woven to the exact thickness of luxury Italian combed cotton dress socks.
              </span>
            </div>
            <button
              onClick={() => navigateTo('shop')}
              className="px-4 py-2 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#241B15] transition-colors shrink-0"
            >
              Shop For Your Shoes
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
