import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Check, 
  Sparkles, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Building2, 
  FileText,
  Phone
} from 'lucide-react';
import BrandLogo from '../components/common/BrandLogo';
import PreRegistrationModal from '../components/common/PreRegistrationModal';

export default function PricingPage() {
  const { navigateTo, products, addToCart } = useStore();
  const [preRegOpen, setPreRegOpen] = useState(false);

  const tiers = [
    {
      id: 'single',
      name: 'Single Flagship Pair',
      subtitle: 'The Perfect Monsoon Starter',
      price: '899',
      originalPrice: '1,199',
      badge: 'Individual Essential',
      popular: false,
      desc: 'Ideal for trying out the hydrophobic lotus-effect technology inside your formal leather shoes.',
      features: [
        '1 Pair of The Sole Classic or Sartorial Sock',
        'Choice of any signature color shade',
        '200-Needle formal shoe profile',
        '100% Hydrophobic surface repellency',
        '30-Day Money-Back "Dry Feet" Guarantee',
        'Complimentary Express Shipping Across India'
      ],
      cta: 'Shop Single Pair',
      action: () => navigateTo('shop')
    },
    {
      id: 'bundle-3',
      name: 'Monsoon Master 3-Pack',
      subtitle: 'Weekly Corporate Rotation',
      price: '2,299',
      originalPrice: '2,697',
      badge: 'Most Popular (Save 15%)',
      popular: true,
      desc: 'Our bestselling set. Complete 3-color palette in our handcrafted luxury gift presentation box.',
      features: [
        '3 Pairs (Obsidian Black + Executive Grey + Deep Espresso)',
        'Handcrafted Cream & Gold Gift Keepsake Box',
        'Complete weekly formal rotation for monsoons',
        'Silver-ion anti-bacterial odor shield',
        'Guaranteed 60+ machine washes hydrophobic life',
        'Free BlueDart Air Express Priority Delivery',
        'Priority Customer Concierge Support'
      ],
      cta: 'Get 3-Pack Bundle',
      action: () => {
        const p = products.find(prod => prod.id === 'ts-monsoon-bundle-3pack');
        if (p) addToCart(p);
        navigateTo('cart');
      }
    },
    {
      id: 'box-5',
      name: 'Executive Workweek 5-Pack',
      subtitle: 'Monday-to-Friday Monsoon Defense',
      price: '3,599',
      originalPrice: '4,495',
      badge: 'Best Value (Save 20%)',
      popular: false,
      desc: 'The ultimate gentleman’s rain-ready suiting setup. 5 pairs packed in a collector presentation case.',
      features: [
        '5 Pairs (Complete tailored workweek suiting palette)',
        'Collector’s Embossed Presentation Case',
        'Complimentary 250ml Hydrophobic Refresher Spray',
        'Zero laundry drying panic on humid mornings',
        'Seamless hand-linked toe box comfort',
        'VIP Next-Day Metro Priority Dispatch',
        'Direct Atelier WhatsApp Concierge Access'
      ],
      cta: 'Get Workweek 5-Pack',
      action: () => {
        const p = products.find(prod => prod.id === 'ts-workweek-5pack');
        if (p) addToCart(p);
        navigateTo('cart');
      }
    },
    {
      id: 'corporate',
      name: 'Corporate & Bulk Gifting',
      subtitle: 'Teams & Executive Client Drops',
      price: 'Custom',
      originalPrice: 'Tiered Bulk',
      badge: '25+ Units',
      popular: false,
      desc: 'Bespoke corporate packages for law firms, leadership summits, and client appreciation.',
      features: [
        'From ₹599 per pair for 25+ orders',
        'Custom company laser-engraved monogramming',
        'Bespoke branded gift sleeves & cards',
        'Individual doorstep dispatch to executive home addresses',
        'Dedicated corporate concierge account manager',
        'GST invoice with input tax credit'
      ],
      cta: 'Pre-Register / Inquire',
      action: () => setPreRegOpen(true)
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
            Transparent Sartorial Value
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#241B15] tracking-tight uppercase">
            Pricing & Bundles
          </h1>
          <p className="text-base sm:text-lg font-serif-classic italic text-[#5A483E]">
            “Uncompromising luxury knitwear priced with transparent integrity in INR.”
          </p>
          <div className="w-16 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? 'bg-[#3A2D24] text-[#FAF7F2] shadow-2xl scale-105 border-2 border-[#C49F6A]'
                  : 'bg-[#FFFFFF] text-[#2C241E] border border-[#E5DDD3] shadow-md hover:shadow-xl'
              }`}
            >
              {/* Popular Crown Badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C49F6A] text-[#241B15] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-sm ${
                    tier.popular ? 'bg-[#241B15] text-[#C49F6A]' : 'bg-[#FAF7F2] text-[#8C7E72] border border-[#E5DDD3]'
                  }`}>
                    {tier.badge}
                  </span>
                  <h3 className={`font-serif-display font-bold text-xl mt-3 ${tier.popular ? 'text-[#FAF7F2]' : 'text-[#241B15]'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xs ${tier.popular ? 'text-[#C4B7AA]' : 'text-[#8C7E72]'}`}>
                    {tier.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-2 border-y border-white/10">
                  <div className="flex items-baseline gap-2">
                    {tier.price !== 'Custom' && <span className="text-sm font-semibold">₹</span>}
                    <span className="font-serif-display font-bold text-3xl sm:text-4xl">
                      {tier.price}
                    </span>
                    {tier.originalPrice && tier.price !== 'Custom' && (
                      <span className={`text-xs line-through ${tier.popular ? 'text-[#A69788]' : 'text-[#8C7E72]'}`}>
                        ₹{tier.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className={`text-[10px] uppercase tracking-wider mt-0.5 ${tier.popular ? 'text-[#C49F6A]' : 'text-[#8C7E72]'}`}>
                    {tier.price === 'Custom' ? 'Tailored Corporate Quotation' : 'Inclusive of all taxes'}
                  </p>
                </div>

                <p className={`text-xs leading-relaxed font-light ${tier.popular ? 'text-[#EFE8DE]' : 'text-[#5A483E]'}`}>
                  {tier.desc}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2.5 pt-2">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${tier.popular ? 'text-[#C49F6A]' : 'text-emerald-700'}`} />
                      <span className={tier.popular ? 'text-[#FAF7F2]' : 'text-[#3A2D24]'}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={tier.action}
                  className={`w-full py-3.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs ${
                    tier.popular
                      ? 'bg-[#C49F6A] text-[#241B15] hover:bg-[#B38D56]'
                      : 'bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15]'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pre-Registration & WhatsApp Banner */}
        <div className="p-8 bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif-display font-bold text-xl text-[#3A2D24]">
              Looking to reserve upcoming monsoon batches early?
            </h3>
            <p className="text-xs text-[#8C7E72]">
              Submit our VIP Pre-Registration form or connect with our concierge on WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPreRegOpen(true)}
              className="px-5 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase font-semibold rounded-sm hover:bg-[#241B15] flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-[#C49F6A]" />
              <span>Open Google Pre-Registration Form</span>
            </button>
          </div>
        </div>

      </div>

      {/* Pre-Registration Modal */}
      <PreRegistrationModal isOpen={preRegOpen} onClose={() => setPreRegOpen(false)} />
    </div>
  );
}
