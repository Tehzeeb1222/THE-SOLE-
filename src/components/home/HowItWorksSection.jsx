import React from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  Sparkles, 
  ShieldCheck, 
  Droplets, 
  Footprints, 
  ArrowRight,
  Wind
} from 'lucide-react';

export default function HowItWorksSection() {
  const { navigateTo } = useStore();

  const steps = [
    {
      num: "STEP 1",
      title: "PREPARE",
      desc: "Slide into your ultra-fine 200-needle hydrophobic 'The Sole' sock. Fits with bespoke precision.",
      icon: Footprints,
      highlight: "Silky 200-Needle Knit",
      note: "No bulky membrane"
    },
    {
      num: "STEP 2",
      title: "ACTIVATE PROTECTION",
      desc: "Advanced nano-lattice blocks water at the surface. Repels puddle splashes and rainwater instantly.",
      icon: Droplets,
      highlight: ">140° Lotus-Effect",
      note: "Blocks liquid intrusion"
    },
    {
      num: "STEP 3",
      title: "ENJOY DRY CONFIDENCE",
      desc: "Water rolls off like mercury beads. Walk through downpours with unwavering dry steps.",
      icon: ShieldCheck,
      highlight: "100% Surface Repellency",
      note: "Zero soggy sponge effect"
    },
    {
      num: "STEP 4",
      title: "ALL-DAY PERFORMANCE",
      desc: "Invisible protection for any formal style. Micro-pores breathe freely while silver ions eliminate odor.",
      icon: Wind,
      highlight: "Odor & Heat Vapor Shield",
      note: "Works with all shoes"
    }
  ];

  return (
    <section className="py-20 bg-[#F7F2EB]/70 border-b border-[#EBE3D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-script text-3xl sm:text-4xl text-[#3A2D24]">
              The Sole
            </span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#241B15] tracking-tight uppercase">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm font-cinzel tracking-[0.2em] text-[#8C7E72] uppercase">
            Dry Feet. Everyday.
          </p>
          <div className="w-12 h-0.5 bg-[#C49F6A] mx-auto mt-3"></div>
        </div>

        {/* 4-Step Visual Grid matching reference artwork */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-[#C49F6A] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Step Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold font-serif-classic tracking-widest text-[#C49F6A] uppercase bg-[#FAF7F2] border border-[#E5DDD3] px-2.5 py-1 rounded-sm">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F3ECE2] flex items-center justify-center text-[#3A2D24] group-hover:bg-[#3A2D24] group-hover:text-[#FAF7F2] transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif-display font-bold text-lg text-[#241B15] tracking-wide mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#5A483E] leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Step Bottom Info */}
                <div className="pt-4 border-t border-[#F3ECE2] space-y-1">
                  <span className="block text-[11px] font-bold text-[#3A2D24]">
                    {step.highlight}
                  </span>
                  <span className="block text-[10px] text-[#8C7E72] italic">
                    {step.note}
                  </span>
                </div>

                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#EAE0D5] group-hover:bg-[#C49F6A] transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Visual Artwork Showcase from Reference */}
        <div className="mt-12 bg-[#FFFFFF] border border-[#D9CEC1] rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <img
                src="./assets/working.png"
                alt="4-step visual flow showing sock preparation, water beading, walking in rain, and formal shoe compatibility"
                className="w-full h-auto object-cover rounded-xl border border-[#E5DDD3]"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] tracking-[0.2em] font-semibold text-[#C49F6A] uppercase">
                Engineered for Real Life
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#241B15]">
                Sample Process Flow: Uncompromising Elegance
              </h3>
              <p className="text-xs sm:text-sm text-[#5A483E] font-light leading-relaxed">
                From the moment you slip your feet into The Sole in the morning to the evening commute in a sudden downpour, your feet remain dry, comfortable, and fresh. No changing socks at the office. No ugly rain gear.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => navigateTo('how-it-works')}
                  className="px-5 py-2.5 bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
                >
                  <span>Interactive Science Lab</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C49F6A]" />
                </button>
                <button
                  onClick={() => navigateTo('shop')}
                  className="px-5 py-2.5 border border-[#3A2D24] text-[#3A2D24] hover:bg-[#F3ECE2] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
                >
                  Shop Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
