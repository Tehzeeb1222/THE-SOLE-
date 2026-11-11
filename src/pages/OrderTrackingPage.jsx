import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Truck, 
  Package, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Search, 
  Phone, 
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function OrderTrackingPage() {
  const { orders, activeTrackingId, setActiveTrackingId, setIsChatbotOpen } = useStore();

  const [inputOrderId, setInputOrderId] = useState(activeTrackingId || 'TS-94821');
  const [simulationStep, setSimulationStep] = useState(3); // 1 to 5

  const activeOrder = orders.find((o) => o.id.toUpperCase() === inputOrderId.toUpperCase()) || orders[0] || {
    id: inputOrderId,
    date: '02 Oct 2026',
    status: 'In Transit',
    trackingNumber: 'BD-884920194IN',
    courier: 'BlueDart Air Express',
    estimatedDelivery: 'Tomorrow, 05 Oct 2026',
    items: [],
    total: 1798,
    shippingAddress: {
      fullName: 'Aarav Sharma',
      address: 'A-402, Imperial Heights, Nariman Point',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400021'
    }
  };

  const trackingSteps = [
    {
      step: 1,
      title: "Order Placed & Verified",
      time: "02 Oct, 10:15 AM",
      desc: "Order confirmed at Bengaluru Sartorial Hub. Inventory reserved.",
      location: "Bengaluru Logistics Centre"
    },
    {
      step: 2,
      title: "Hand-Inspected & Packed",
      time: "02 Oct, 03:40 PM",
      desc: "Hydrophobic quality control passed. Packed in luxury cream gift box.",
      location: "Fulfillment Hub #4"
    },
    {
      step: 3,
      title: "In Transit via BlueDart Air",
      time: "03 Oct, 08:20 AM",
      desc: "Departed Kempegowda Airport for Mumbai Chhatrapati Shivaji Hub.",
      location: "Air Freight Manifest BD-884"
    },
    {
      step: 4,
      title: "Out For Delivery",
      time: "Tomorrow, 09:30 AM",
      desc: "Assigned to delivery agent (Rajesh K. • Contact: +91 98112 00412).",
      location: "Nariman Point Hub, Mumbai"
    },
    {
      step: 5,
      title: "Delivered to Customer",
      time: "Tomorrow by 2:00 PM",
      desc: "Delivered with signature. Ready for the monsoon.",
      location: "Destination Address"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveTrackingId(inputOrderId.trim().toUpperCase());
  };

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            Live Shipment Telemetry
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl text-[#241B15] uppercase tracking-tight">
            Track Your Order
          </h1>
          <p className="text-xs sm:text-sm text-[#5A483E] font-light">
            Real-time status updates from BlueDart Air Express across all Indian destinations.
          </p>
          <div className="w-16 h-0.5 bg-[#C49F6A] mx-auto mt-3"></div>
        </div>

        {/* Order Number Lookup Form */}
        <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-2xl p-4 sm:p-6 shadow-md">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-[#8C7E72] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Order ID (e.g. TS-94821)"
                value={inputOrderId}
                onChange={(e) => setInputOrderId(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm text-xs text-[#2C241E] uppercase font-mono tracking-wider focus:outline-hidden focus:border-[#3A2D24]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
            >
              Track Status
            </button>
          </form>

          {/* Interactive Step Simulator Switcher for Demos */}
          <div className="mt-4 pt-3 border-t border-[#F3ECE2] flex flex-wrap items-center justify-between gap-2 text-xs text-[#8C7E72]">
            <span><strong>Demo Stage Control:</strong> Click to simulate shipment lifecycle:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((st) => (
                <button
                  key={st}
                  onClick={() => setSimulationStep(st)}
                  className={`px-2 py-1 text-[10px] font-bold rounded-xs border transition-colors ${
                    simulationStep === st
                      ? 'bg-[#3A2D24] text-[#FAF7F2] border-[#3A2D24]'
                      : 'bg-[#FAF7F2] text-[#5A483E] border-[#D9CEC1] hover:border-[#8C7E72]'
                  }`}
                >
                  Stage {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Shipment Overview Card */}
        <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-8 shadow-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#EFE8DE]">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#C49F6A] uppercase">
                Active Consignment
              </span>
              <h2 className="font-serif-display font-bold text-2xl text-[#241B15]">
                Order {activeOrder.id}
              </h2>
              <p className="text-xs text-[#8C7E72] font-mono mt-0.5">
                Carrier: {activeOrder.courier} • AWB: {activeOrder.trackingNumber}
              </p>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3] text-right">
              <span className="text-[10px] text-[#8C7E72] uppercase tracking-wider block">Estimated Delivery</span>
              <span className="font-serif-display font-bold text-sm text-[#3A2D24]">
                {simulationStep >= 5 ? 'Delivered Today' : activeOrder.estimatedDelivery}
              </span>
            </div>
          </div>

          {/* 5-Step Visual Timeline */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#E5DDD3]">
            {trackingSteps.map((step) => {
              const isCompleted = step.step <= simulationStep;
              const isCurrent = step.step === simulationStep;

              return (
                <div key={step.step} className="relative flex items-start gap-4 group">
                  {/* Step Pin Circle */}
                  <div 
                    className={`absolute -left-6 sm:-left-8 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                      isCompleted 
                        ? 'bg-[#3A2D24] text-[#C49F6A] shadow-xs' 
                        : 'bg-[#FAF7F2] border-2 border-[#D9CEC1] text-[#A69788]'
                    } ${isCurrent ? 'ring-4 ring-[#C49F6A]/20 scale-110' : ''}`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C49F6A]" />
                    ) : (
                      <span className="text-[10px] font-bold">{step.step}</span>
                    )}
                  </div>

                  {/* Step Details */}
                  <div className="flex-1 bg-[#FAF7F2] border border-[#EBE3D7] rounded-xl p-4 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className={`font-serif-display font-bold text-sm ${isCurrent ? 'text-[#C49F6A]' : 'text-[#3A2D24]'}`}>
                        {step.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#8C7E72]">{step.time}</span>
                    </div>

                    <p className="text-xs text-[#5A483E] leading-relaxed">
                      {step.desc}
                    </p>

                    <div className="flex items-center gap-1 text-[10px] text-[#8C7E72] mt-2 pt-2 border-t border-[#EFE8DE]">
                      <MapPin className="w-3 h-3 text-[#C49F6A]" />
                      <span>{step.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery Assistance Concierge */}
          <div className="pt-4 border-t border-[#EFE8DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A483E]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C49F6A]" />
              <span>Need special delivery instructions or address modification?</span>
            </div>
            <button
              onClick={() => setIsChatbotOpen(true)}
              className="px-4 py-2 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#241B15] flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C49F6A]" />
              <span>Chat With Concierge</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
