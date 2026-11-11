import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  MapPin, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

export default function ContactFAQPage() {
  const { faqs, addToast, setIsChatbotOpen } = useStore();
  
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  const [contactSubject, setContactSubject] = useState('Product Inquiry');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      addToast('Please fill all required fields.', 'error');
      return;
    }
    addToast('Message sent to The Sole Concierge! We will respond within 4 business hours.', 'success');
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            Client Concierge & Support
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#241B15] tracking-tight uppercase">
            Frequently Asked Questions
          </h1>
          <p className="text-base font-serif-classic italic text-[#5A483E]">
            “Everything you need to know about our hydrophobic technology, sizing, and guarantees.”
          </p>
          <div className="w-16 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* FAQs Accordion Section */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left text-sm sm:text-base font-serif-display font-bold text-[#3A2D24] flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-[#C49F6A] font-sans text-xs">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#8C7E72] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#8C7E72] shrink-0" />}
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#5A483E] leading-relaxed border-t border-[#F3ECE2] font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Concierge Form & Details Grid */}
        <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Details (Cols 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#C49F6A]">
                  Direct Concierge
                </span>
                <h2 className="font-serif-display text-2xl sm:text-3xl text-[#241B15]">
                  Get In Touch
                </h2>
                <p className="text-xs text-[#5A483E] font-light leading-relaxed">
                  Have bespoke tailoring questions, corporate bulk orders, or shipping inquiries? Our team is available 6 days a week.
                </p>
              </div>

              <div className="space-y-4 pt-2 text-xs text-[#3A2D24]">
                <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3]">
                  <Mail className="w-4 h-4 text-[#C49F6A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Email Concierge</p>
                    <p className="text-[#8C7E72]">concierge@thesole.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3]">
                  <Phone className="w-4 h-4 text-[#C49F6A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">WhatsApp & Phone</p>
                    <p className="text-[#8C7E72]">+91 98201 44820 (Mon–Sat 9AM–7PM IST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3]">
                  <MapPin className="w-4 h-4 text-[#C49F6A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Sartorial Headquarters</p>
                    <p className="text-[#8C7E72]">The Sole Atelier, Nariman Point, Mumbai 400021</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsChatbotOpen(true)}
                className="w-full py-3 bg-[#FAF7F2] border border-[#3A2D24] text-[#3A2D24] hover:bg-[#F3ECE2] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#C49F6A]" />
                <span>Open Instant AI Concierge</span>
              </button>
            </div>

            {/* Contact Form (Cols 7) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. aarav@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#3A2D24]">Inquiry Topic</label>
                  <select
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E]"
                  >
                    <option value="Product Inquiry">Product Inquiry & Formal Shoe Fit</option>
                    <option value="Order Tracking">Order Tracking & Shipping Status</option>
                    <option value="Returns & 30-Day Guarantee">Returns & 30-Day Guarantee</option>
                    <option value="Corporate / Bulk Gifting">Corporate / Bulk Gifting</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#3A2D24]">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How may our concierge team assist you?"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#3A2D24] hover:bg-[#241B15] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#C49F6A]" />
                  <span>Send Message to Atelier</span>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
