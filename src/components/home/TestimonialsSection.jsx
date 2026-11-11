import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const { testimonials, navigateTo } = useStore();

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#EBE3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-script text-3xl sm:text-4xl text-[#3A2D24]">
              The Sole
            </span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#241B15] tracking-tight uppercase">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base font-serif-classic italic text-[#5A483E]">
            “Dry feet. Confident steps. Happy customers.”
          </p>
          <p className="text-[10px] uppercase tracking-widest text-[#8C7E72] font-semibold">
            NOTE: Verified customer experiences & sample testimonials.
          </p>
          <div className="w-12 h-0.5 bg-[#C49F6A] mx-auto mt-3"></div>
        </div>

        {/* 2-Column Testimonials + Editorial Artwork Showcase matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Testimonial Cards Grid (Cols 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5DDD3] shadow-xs hover:border-[#C49F6A] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Star Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#C49F6A] text-sm">
                        {'★'.repeat(item.rating)}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8C7E72]">
                        {item.date}
                      </span>
                    </div>

                    {/* Review Quote */}
                    <p className="text-xs sm:text-[13px] text-[#2C241E] font-serif-display leading-relaxed italic">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* Customer Meta */}
                  <div className="pt-4 mt-4 border-t border-[#F3ECE2] flex items-center justify-between">
                    <div>
                      <p className="font-serif-display font-bold text-xs text-[#3A2D24]">
                        — {item.name}, {item.city}
                      </p>
                      <p className="text-[10px] text-[#8C7E72]">{item.role}</p>
                    </div>

                    {item.verified && (
                      <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-xs">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials Trust Banner */}
            <div className="p-4 bg-[#F3ECE2] rounded-xl border border-[#E5DDD3] flex items-center justify-between text-xs text-[#5A483E]">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C49F6A]" />
                Rated <strong>4.9 / 5.0</strong> by over 2,400+ professionals across Mumbai, Bengaluru, Delhi & Pune.
              </span>
              <button
                onClick={() => navigateTo('shop')}
                className="text-xs font-semibold text-[#3A2D24] hover:text-[#C49F6A] underline uppercase tracking-wider"
              >
                Join Them
              </button>
            </div>
          </div>

          {/* RIGHT: Editorial Artwork Panel from Reference (Cols 5) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#D9CEC1] shadow-xl overflow-hidden">
              <img
                src="/assets/customer .png"
                alt="Woman with umbrella walking in rain surrounded by customer testimonial callouts"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="p-3 text-center bg-[#FAF7F2] rounded-lg mt-3 border border-[#E5DDD3]">
                <p className="font-serif-display text-xs italic text-[#5A483E]">
                  “Never worry about wet socks in your formal shoes again.”
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
