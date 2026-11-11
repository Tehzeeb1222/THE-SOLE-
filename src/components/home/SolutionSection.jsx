import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Droplets, CheckCircle2, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function SolutionSection() {
  const { navigateTo } = useStore();

  return (
    <section className="py-20 bg-[#F3ECE2]/60 border-b border-[#E5DDD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            The Solution
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#241B15] tracking-tight">
            The Sole keeps your feet dry.
          </h2>
          <p className="text-base sm:text-lg font-serif-classic italic text-[#5A483E]">
            “Hydrophobic socks. Superior protection.”
          </p>
          <div className="w-12 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* 2-Column Solution Showcase matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Editorial Artwork of Shoe + Sock Cross Section (Cols 7) */}
          <div className="lg:col-span-7 relative">
            <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-2xl border border-[#D9CEC1] shadow-xl relative overflow-hidden group">
              <img
                src="./assets/media_1791112650849.jpg"
                alt="Close-up cross section of formal loafer with The Sole hydrophobic sock repelling water droplets"
                className="w-full h-auto object-cover rounded-xl"
              />

              {/* Water Droplet Rolling Callout Overlay */}
              <div className="absolute top-8 right-8 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#C49F6A]/50 rounded-xl p-3.5 shadow-lg max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-1.5 text-[#3A2D24] mb-1">
                  <Droplets className="w-4 h-4 text-[#C49F6A]" />
                  <span className="text-xs font-bold font-serif-display uppercase">
                    Hydrophobic Fabric
                  </span>
                </div>
                <p className="text-[11px] text-[#5A483E] leading-tight">
                  Water stays out • Feet stay dry • Nano-lattice rolls moisture off instantly.
                </p>
              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-4 p-4 bg-[#FAF7F2] rounded-lg border border-[#E5DDD3] flex items-center justify-between">
                <div>
                  <span className="font-script text-2xl text-[#3A2D24]">The Sole</span>
                  <p className="text-xs font-serif-display italic text-[#5A483E]">
                    “The protection starts with the sock.”
                  </p>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#C49F6A] bg-[#3A2D24] px-3 py-1.5 rounded-sm">
                  100% Repellent
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Feature Breakdown & Science (Cols 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#C49F6A] bg-[#EAE0D5] px-2.5 py-1 rounded-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C49F6A]" />
                Proprietary Nano-Shield™
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#241B15] leading-snug">
                Water rolls off. <br />
                Your feet stay completely dry.
              </h3>
              <p className="text-sm text-[#5A483E] font-light leading-relaxed">
                Rather than forcing you into unbreathable waterproof membranes or unsightly plastic shoe covers, The Sole protects your foot directly at the sock level.
              </p>
            </div>

            {/* Benefit Checkpoints */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 bg-[#FFFFFF] rounded-lg border border-[#EBE3D7]">
                <div className="w-6 h-6 rounded-full bg-[#EAE0D5] flex items-center justify-center text-[#3A2D24] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C49F6A]" />
                </div>
                <div>
                  <h4 className="font-serif-display font-semibold text-xs text-[#3A2D24]">
                    Lotus-Effect Molecular Repellency
                  </h4>
                  <p className="text-[11px] text-[#8C7E72] leading-relaxed">
                    Water drops form beads on contact and roll away without penetrating yarn fibers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FFFFFF] rounded-lg border border-[#EBE3D7]">
                <div className="w-6 h-6 rounded-full bg-[#EAE0D5] flex items-center justify-center text-[#3A2D24] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C49F6A]" />
                </div>
                <div>
                  <h4 className="font-serif-display font-semibold text-xs text-[#3A2D24]">
                    Micro-Pore Breathability
                  </h4>
                  <p className="text-[11px] text-[#8C7E72] leading-relaxed">
                    Internal body heat and perspiration vapor escape freely, keeping feet fresh all day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FFFFFF] rounded-lg border border-[#EBE3D7]">
                <div className="w-6 h-6 rounded-full bg-[#EAE0D5] flex items-center justify-center text-[#3A2D24] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C49F6A]" />
                </div>
                <div>
                  <h4 className="font-serif-display font-semibold text-xs text-[#3A2D24]">
                    Tailored Formal Shoe Fit
                  </h4>
                  <p className="text-[11px] text-[#8C7E72] leading-relaxed">
                    Woven with 200-needle precision to maintain slim bespoke shoe volume.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => navigateTo('shop')}
                className="w-full sm:w-auto px-6 py-3 bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15] font-semibold text-xs tracking-widest uppercase rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Shop The Collection</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C49F6A]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
