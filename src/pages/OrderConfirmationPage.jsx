import React from 'react';
import { useStore } from '../context/StoreContext';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  ArrowRight, 
  Download, 
  MapPin, 
  Calendar,
  Sparkles,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';

export default function OrderConfirmationPage() {
  const { orders, activeTrackingId, navigateTo } = useStore();

  const currentOrder = orders.find((o) => o.id === activeTrackingId) || orders[0] || {
    id: 'TS-94821',
    date: 'Today',
    status: 'Order Placed',
    trackingNumber: 'BD-884920194IN',
    courier: 'BlueDart Air Express',
    estimatedDelivery: 'In 2–3 business days',
    items: [],
    total: 1798,
    shippingAddress: {
      fullName: 'Aarav Sharma',
      address: 'A-402, Imperial Heights, Nariman Point',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400021'
    },
    paymentMethod: 'UPI Instant Pay'
  };

  return (
    <div className="py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Success Card */}
        <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-8 sm:p-12 text-center shadow-xl space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#EAE0D5] border-2 border-[#C49F6A] flex items-center justify-center text-[#3A2D24] mx-auto shadow-md animate-subtle-pulse">
            <CheckCircle2 className="w-8 h-8 text-[#C49F6A]" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] tracking-[0.25em] font-bold text-[#C49F6A] uppercase">
              Dry Steps Await You
            </span>
            <h1 className="font-serif-display text-3xl sm:text-4xl text-[#241B15]">
              Order Confirmed
            </h1>
            <p className="text-xs sm:text-sm text-[#5A483E] font-light max-w-md mx-auto">
              Thank you for choosing The Sole. Your pair of hydrophobic formal socks is being prepared with tailored care.
            </p>
          </div>

          {/* Key Order Meta Box */}
          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E5DDD3] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
            <div>
              <span className="text-[10px] text-[#8C7E72] uppercase tracking-wider block">Order Reference</span>
              <span className="font-mono font-bold text-sm text-[#3A2D24]">{currentOrder.id}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#8C7E72] uppercase tracking-wider block">Estimated Delivery</span>
              <span className="font-serif-display font-semibold text-xs text-[#3A2D24]">{currentOrder.estimatedDelivery}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[10px] text-[#8C7E72] uppercase tracking-wider block">Carrier</span>
              <span className="font-medium text-xs text-[#3A2D24]">{currentOrder.courier}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigateTo('order-tracking', currentOrder.id)}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#3A2D24] hover:bg-[#241B15] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Truck className="w-4 h-4 text-[#C49F6A]" />
              <span>Track Live Order</span>
            </button>

            <button
              onClick={() => navigateTo('shop')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#FFFFFF] border border-[#3A2D24] text-[#3A2D24] hover:bg-[#F3ECE2] text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>

        {/* Order Details Receipt */}
        <div className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <h2 className="font-serif-display font-bold text-lg text-[#3A2D24] pb-3 border-b border-[#F3ECE2]">
            Package Manifest
          </h2>

          <div className="space-y-3">
            {currentOrder.items && currentOrder.items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-[#FAF7F2] rounded-xl border border-[#EBE3D7]">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md border border-[#E5DDD3]" />
                  <div>
                    <h4 className="font-serif-display font-bold text-xs text-[#3A2D24]">{item.name}</h4>
                    <p className="text-[10px] text-[#8C7E72]">{item.color} • {item.size} • Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-serif-display font-bold text-sm text-[#3A2D24]">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#F3ECE2] grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#5A483E]">
            <div className="space-y-1">
              <span className="font-bold text-[#3A2D24] uppercase text-[10px] tracking-wider block">Shipping Address</span>
              <p>{currentOrder.shippingAddress?.fullName}</p>
              <p>{currentOrder.shippingAddress?.address}</p>
              <p>{currentOrder.shippingAddress?.city}, {currentOrder.shippingAddress?.state} - {currentOrder.shippingAddress?.pincode}</p>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-[#3A2D24] uppercase text-[10px] tracking-wider block">Payment Information</span>
              <p>Method: {currentOrder.paymentMethod}</p>
              <p>Status: <span className="text-emerald-800 font-bold uppercase text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded-xs">Authorized / Paid</span></p>
              <p className="font-bold text-sm text-[#3A2D24] pt-1">Total Paid: ₹{currentOrder.total}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
