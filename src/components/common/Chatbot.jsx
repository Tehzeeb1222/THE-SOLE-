import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  X, 
  Send, 
  Droplets, 
  Sparkles, 
  ShoppingBag,
  ArrowRight,
  HelpCircle,
  Footprints,
  RotateCcw
} from 'lucide-react';
import Mascot from './Mascot';
import BrandLogo from './BrandLogo';

export default function Chatbot() {
  const { 
    isChatbotOpen, 
    setIsChatbotOpen, 
    chatMessages, 
    setChatMessages, 
    navigateTo, 
    products, 
    addToCart,
    orders
  } = useStore();

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mascotState, setMascotState] = useState('idle'); // 'idle' | 'thinking' | 'happy' | 'rain'
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatbotOpen) {
      scrollToBottom();
      setMascotState('happy');
      const timer = setTimeout(() => setMascotState('idle'), 2000);
      return () => clearTimeout(timer);
    }
  }, [chatMessages, isChatbotOpen]);

  const quickPrompts = [
    "Which socks for Oxford leather shoes?",
    "How does the hydrophobic fabric work?",
    "Show me the 3-Pack Bundle",
    "What size should I order for UK 8.5?",
    "Where is my order?"
  ];

  const handleSendMessage = (text) => {
    const query = (text || inputVal).trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);
    setMascotState('thinking');

    // Simulate smart AI concierge with Pip personality
    setTimeout(() => {
      let botReply = '';
      let recommendedProduct = null;
      const lower = query.toLowerCase();

      if (lower.includes('office') || lower.includes('oxford') || lower.includes('formal') || lower.includes('derby') || lower.includes('meeting') || lower.includes('shoe')) {
        botReply = "Cheerio! For classic Oxford dress shoes and formal business suiting, I strongly recommend **The Sole Classic Executive in Obsidian Black** or **Executive Grey**. They feature a fine 200-needle knit that preserves the tailored fit of formal shoes without squeezing your toes, while keeping your feet 100% dry from rainy streets!";
        recommendedProduct = products.find(p => p.id === 'ts-classic-black');
      } else if (lower.includes('how') || lower.includes('work') || lower.includes('technology') || lower.includes('science') || lower.includes('hydrophobic')) {
        botReply = "Allow me to explain the physics! The Sole utilizes our proprietary **Nano-Shield™ lattice**. Each combed cotton yarn is infused with micro silica particles creating a contact angle over 140°. Rain drops and puddle splashes bead up into spherical pearls and roll right off, while micro-pores allow foot sweat vapor to escape freely!";
      } else if (lower.includes('bundle') || lower.includes('pack') || lower.includes('offer') || lower.includes('discount')) {
        botReply = "Splendid choice! Our **Monsoon Master 3-Pack Bundle** is our finest value—you save 15% immediately and get Black, Grey, and Espresso in a luxury gift box! You can also apply promo code **RAINREADY15** at checkout.";
        recommendedProduct = products.find(p => p.id === 'ts-monsoon-bundle-3pack');
      } else if (lower.includes('size') || lower.includes('fit') || lower.includes('uk') || lower.includes('inches')) {
        botReply = "Our socks are true-to-size with an ergonomic elastic arch band:\n• **UK 6–7** (EU 39–41)\n• **UK 8–9** (EU 42–43) — *Most popular for Indian men*\n• **UK 10–11** (EU 44–45)\n• **UK 12+** (EU 46+)\nIf you wear a half-size (e.g. UK 8.5), select **UK 8–9**.";
      } else if (lower.includes('track') || lower.includes('order') || lower.includes('delivery') || lower.includes('status')) {
        const latestOrder = orders[0];
        if (latestOrder) {
          botReply = `Your active order **${latestOrder.id}** is currently **${latestOrder.status}** with ${latestOrder.courier} (Tracking: \`${latestOrder.trackingNumber}\`). Estimated delivery: **${latestOrder.estimatedDelivery}**.`;
        } else {
          botReply = "You can track any consignment by visiting our Live Tracking page or entering your Order ID (e.g. TS-94821). Delivery across India is expedited via BlueDart Air Express in 2–4 business days.";
        }
      } else if (lower.includes('cover') || lower.includes('slip') || lower.includes('boot')) {
        botReply = "Ah, the age-old question! **The Sole socks** are your permanent hero defense—they keep your feet 100% dry and odor-free inside your normal shoes all day. Our **Silicone Shoe Slip Covers** are a secondary shield for deep mud and waterlogged streets to preserve outer leather.";
        recommendedProduct = products.find(p => p.id === 'ts-shoe-cover-formal');
      } else {
        botReply = "Delighted to assist you! Whether you need styling advice for Oxfords, understanding our hydrophobic knit, or tracking an order, Sir Pip and The Sole atelier are here to keep your steps completely dry and confident. What else may I help you with?";
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply,
        recommendedProduct: recommendedProduct,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      setMascotState('happy');
      setTimeout(() => setMascotState('idle'), 3000);
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Trigger Button with Mascot */}
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15] p-2 pr-4 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-[#C49F6A] group"
          aria-label="Ask The Sole Concierge"
        >
          {/* Mascot in button */}
          <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C49F6A] flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
            <Mascot size={36} state="happy" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="font-serif-display text-xs font-bold leading-tight text-[#FAF7F2]">
              Sir Pip
            </p>
            <p className="text-[9px] text-[#C49F6A] uppercase tracking-wider">
              Rain Concierge
            </p>
          </div>
        </button>
      )}

      {/* Chat Widget Window */}
      {isChatbotOpen && (
        <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 w-[94vw] sm:w-[410px] h-[580px] max-h-[85vh] bg-[#FAF7F2] border-2 border-[#D9CEC1] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slideUp">
          
          {/* Header with Mascot Avatar */}
          <div className="bg-[#3A2D24] text-[#FAF7F2] p-4 flex items-center justify-between border-b border-[#4A3B32]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border-2 border-[#C49F6A] flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                <Mascot size={44} state={mascotState} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif-display text-base font-semibold tracking-wide text-[#FAF7F2]">
                    Sir Pip • Rain Concierge
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <p className="text-[10px] text-[#C49F6A] tracking-widest uppercase font-semibold">
                  The Sole Footwear Specialist
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsChatbotOpen(false)}
              className="p-1.5 text-[#A69788] hover:text-[#FAF7F2] hover:bg-[#4A3B32] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FAF7F2]">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="flex items-center gap-1.5 mb-1 pl-1 text-[10px] text-[#8C7E72] font-semibold">
                    <span className="font-serif-display text-xs text-[#3A2D24]">Sir Pip</span>
                    <span>• The Sole</span>
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#3A2D24] text-[#FAF7F2] rounded-br-xs shadow-xs'
                      : 'bg-[#FFFFFF] text-[#2C241E] border border-[#EBE3D7] shadow-2xs rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Recommended Product Card inside Chat */}
                  {msg.recommendedProduct && (
                    <div className="mt-3 pt-2.5 border-t border-[#EFE8DE] bg-[#FAF7F2] p-2.5 rounded-xl flex items-center gap-3 border border-[#E5DDD3]">
                      <img
                        src={msg.recommendedProduct.colors[0]?.image || msg.recommendedProduct.images[0]}
                        alt={msg.recommendedProduct.name}
                        className="w-14 h-14 object-cover rounded-lg border border-[#E5DDD3]"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif-display font-bold text-xs truncate text-[#3A2D24]">
                          {msg.recommendedProduct.name}
                        </p>
                        <p className="text-[10px] text-[#8C7E72]">{msg.recommendedProduct.subtitle}</p>
                        <p className="text-xs font-bold text-[#C49F6A]">
                          ₹{msg.recommendedProduct.price}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(msg.recommendedProduct);
                          setIsChatbotOpen(false);
                        }}
                        className="px-3 py-1.5 bg-[#3A2D24] text-[#FAF7F2] text-[10px] uppercase tracking-wider font-semibold rounded-xs hover:bg-[#241B15] shrink-0"
                      >
                        Add to Bag
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-[#A69788] mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 p-2 bg-[#FFFFFF] border border-[#EBE3D7] rounded-full w-24 shadow-2xs">
                <span className="text-[10px] text-[#8C7E72] font-mono pl-1">Pip:</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49F6A] animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49F6A] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49F6A] animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-[#F3ECE2] border-t border-[#E5DDD3] overflow-x-auto whitespace-nowrap flex gap-1.5 no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="inline-block px-3 py-1 bg-[#FFFFFF] hover:bg-[#FAF7F2] border border-[#D9CEC1] text-[10px] text-[#5A483E] rounded-full transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-[#FAF7F2] border-t border-[#E5DDD3]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask Sir Pip about shoes, sizing, or science..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 bg-[#FFFFFF] border border-[#D9CEC1] rounded-full px-4 py-2 text-xs text-[#2C241E] placeholder-[#A69788] focus:outline-hidden focus:border-[#C49F6A]"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="w-9 h-9 rounded-full bg-[#3A2D24] text-[#FAF7F2] flex items-center justify-center hover:bg-[#241B15] disabled:opacity-40 transition-all shrink-0"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5 text-[#C49F6A]" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
