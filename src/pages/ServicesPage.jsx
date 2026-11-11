import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Building2, 
  RotateCw, 
  Sparkles, 
  ShieldCheck, 
  Scissors, 
  Package, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  FileText 
} from 'lucide-react';
import BrandLogo from '../components/common/BrandLogo';
import PreRegistrationModal from '../components/common/PreRegistrationModal';

export default function ServicesPage() {
  const { navigateTo, addToast } = useStore();
  const [preRegOpen, setPreRegOpen] = useState(false);

  const services = [
    {
      id: 'corporate',
      icon: Building2,
      title: 'Corporate B2B & Executive Gifting',
      badge: 'Corporate Tier',
      tagline: 'Custom embossed gift boxes with company monogramming for executive teams & partners.',
      desc: 'Elevate your firm’s corporate gifting. We provide bespoke packaging, laser-engraved wooden presentation boxes, and custom embroidery for law firms, investment banks, tech leadership, and corporate retreats.',
      benefits: ['Custom logo embroidery & packaging', 'Tiered bulk pricing (from ₹599/pair for 25+ units)', 'Direct individual doorstep delivery to clients']
    },
    {
      id: 'subscription',
      icon: RotateCw,
      title: 'Monsoon Seasonal Replenishment Club',
      badge: 'Auto-Delivery',
      tagline: 'Never start the rainy season unprepared. Automatic June seasonal delivery.',
      desc: 'Subscribers receive a fresh curation of 3 or 5 signature hydrophobic pairs every May/June right before the monsoon breaks across India, complete with a complimentary 250ml Hydrophobic Refresher Spray.',
      benefits: ['Guaranteed priority stock allocation', 'Save 20% on all seasonal shipments', 'Pause, skip, or cancel anytime with 1 click']
    },
    {
      id: 'bespoke',
      icon: Scissors,
      title: 'Bespoke Sizing & Made-to-Measure',
      badge: 'Atelier Service',
      tagline: 'Custom hand-linked sizing for wide fittings and bespoke shoe widths.',
      desc: 'For gentlemen with bespoke orthotic needs, wide forefoot fittings, or sizes exceeding UK 13+. Our master knitters craft tailored pairs to your exact foot measurements.',
      benefits: ['1-on-1 consultation with sartorial knitters', 'Hand-linked seamless toe boxes', 'Custom arch compression grading']
    },
    {
      id: 'treatment',
      icon: Sparkles,
      title: 'Footwear Nano-Shield™ Re-Treatment',
      badge: 'Care Service',
      tagline: 'Complimentary rejuvenation service to extend hydrophobic life to 100+ washes.',
      desc: 'Send your The Sole socks or your fine leather footwear to our Mumbai atelier for high-pressure silica nanoparticle re-infusion after multiple seasons of heavy monsoon use.',
      benefits: ['Professional cleaning & ultrasonic re-coating', 'Leather conditioning with organic oils', 'Return express shipping included']
    }
  ];

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex justify-center mb-1">
            <BrandLogo size="md" showTagline={false} />
          </div>
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            Atelier Services & Programs
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#241B15] tracking-tight uppercase">
            Our Services
          </h1>
          <p className="text-base sm:text-lg font-serif-classic italic text-[#5A483E]">
            “Tailored corporate gifting, bespoke knitwear fitting, and seasonal monsoon replenishment.”
          </p>
          <div className="w-16 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div 
                key={srv.id}
                className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD3] flex items-center justify-center text-[#3A2D24] group-hover:bg-[#3A2D24] group-hover:text-[#FAF7F2] transition-colors">
                      <IconComp className="w-6 h-6 text-[#C49F6A]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#EAE0D5] text-[#3A2D24] px-3 py-1 rounded-sm">
                      {srv.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif-display font-bold text-2xl text-[#241B15] group-hover:text-[#C49F6A] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-serif-classic italic text-[#8C7E72] mt-1">
                      “{srv.tagline}”
                    </p>
                  </div>

                  <p className="text-xs text-[#5A483E] leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-[#F3ECE2]">
                    {srv.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#3A2D24]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F3ECE2] flex items-center justify-between">
                  <button
                    onClick={() => setPreRegOpen(true)}
                    className="px-5 py-2.5 bg-[#3A2D24] hover:bg-[#241B15] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
                  >
                    <span>Inquire / Pre-Register</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C49F6A]" />
                  </button>
                  <span className="text-[11px] text-[#8C7E72] font-mono">Pan-India Support</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate VIP Banner */}
        <div className="bg-[#241B15] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#3A2D24] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C49F6A]">
              Corporate & Bespoke Programs
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#FAF7F2]">
              Planning an Executive Event or Client Drop?
            </h2>
            <p className="text-xs sm:text-sm text-[#C4B7AA] max-w-xl font-light leading-relaxed">
              We create customized luxury packages with bespoke client monogramming and express bulk dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => setPreRegOpen(true)}
              className="px-6 py-3.5 bg-[#C49F6A] hover:bg-[#B38D56] text-[#241B15] text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Pre-Register via Form</span>
            </button>

            <a
              href="https://wa.me/919820144820?text=Hello%20The%20Sole%20Concierge%2C%20I%20would%20like%20to%20discuss%20Corporate%20B2B%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-transparent border border-[#E5DDD3]/40 hover:bg-[#FAF7F2]/10 text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>

      </div>

      {/* Pre-Registration Modal */}
      <PreRegistrationModal isOpen={preRegOpen} onClose={() => setPreRegOpen(false)} />
    </div>
  );
}
