import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Lock, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Banknote, 
  CheckCircle2, 
  ArrowLeft,
  Sparkles,
  Info
} from 'lucide-react';

export default function CheckoutPage() {
  const { 
    cart, 
    cartSubtotal, 
    shippingFee, 
    appliedDiscount, 
    discountAmount, 
    cartTotal, 
    placeOrder, 
    navigateTo, 
    user,
    addToast 
  } = useStore();

  const [formData, setFormData] = useState({
    fullName: user.name || 'Aarav Sharma',
    email: user.email || 'aarav.sharma@example.com',
    phone: user.phone || '+91 98201 44820',
    address: 'A-402, Imperial Heights, Nariman Point',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400021',
    country: 'India'
  });

  const [shippingMethod, setShippingMethod] = useState('express'); // 'express' (free) | 'next-day' (149)
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'netbanking' | 'cod'
  
  // Payment specifics
  const [upiId, setUpiId] = useState('aarav@okaxis');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('08/29');
  const [cardCvv, setCardCvv] = useState('884');
  const [cardName, setCardName] = useState('Aarav Sharma');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [sandboxMode, setSandboxMode] = useState(true);

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center bg-[#FAF7F2]">
        <h2 className="font-serif-display text-2xl text-[#3A2D24]">No items in checkout</h2>
        <button
          onClick={() => navigateTo('shop')}
          className="mt-4 px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase tracking-wider rounded-sm"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const indianStates = [
    'Maharashtra', 'Karnataka', 'Delhi (NCR)', 'Tamil Nadu', 'Telangana',
    'Gujarat', 'West Bengal', 'Kerala', 'Uttar Pradesh', 'Rajasthan',
    'Punjab', 'Haryana', 'Goa', 'Madhya Pradesh', 'Andhra Pradesh'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.address || !formData.pincode) {
      addToast('Please fill all required shipping fields.', 'error');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      placeOrder({
        shippingAddress: formData,
        paymentMethod: paymentMethod === 'upi' ? `UPI (${upiId})` : paymentMethod === 'card' ? `Card ending in 4242` : paymentMethod === 'netbanking' ? `Net Banking (${selectedBank})` : 'Cash on Delivery'
      });
    }, 1200);
  };

  const finalTotal = cartTotal + (shippingMethod === 'next-day' ? 149 : 0);

  return (
    <div className="py-10 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5DDD3] pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('cart')}
              className="p-1.5 text-[#8C7E72] hover:text-[#3A2D24] rounded-full border border-[#D9CEC1]"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <span className="font-script text-2xl text-[#3A2D24]">The Sole</span>
              <h1 className="font-serif-display text-2xl sm:text-3xl text-[#241B15]">
                Secure Checkout
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#5A483E] bg-[#F3ECE2] px-3 py-1.5 rounded-full border border-[#E5DDD3]">
            <Lock className="w-3.5 h-3.5 text-[#C49F6A]" />
            <span>256-Bit Encrypted Gateway</span>
          </div>
        </div>

        {/* Sandbox Indicator Banner */}
        <div className="bg-[#EAE0D5] border border-[#D4C5B3] rounded-xl p-3.5 flex items-center justify-between text-xs text-[#3A2D24]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C49F6A]" />
            <span>
              <strong>Test Mode / Sandbox Enabled:</strong> Razorpay & Stripe test environment. No real funds will be charged.
            </span>
          </div>
          <span className="text-[10px] bg-[#3A2D24] text-[#FAF7F2] px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold">
            Simulated
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: Checkout Forms (Cols 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            <form onSubmit={handleOrderSubmit} className="space-y-8">
              
              {/* Step 1: Customer Contact & Delivery Address */}
              <div className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#F3ECE2]">
                  <h2 className="font-serif-display font-bold text-lg text-[#3A2D24] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#3A2D24] text-[#FAF7F2] text-xs flex items-center justify-center font-sans">1</span>
                    Shipping Address (India)
                  </h2>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C7E72] font-semibold">Pan-India Express</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Flat, House No., Building, Street *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">State *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                    >
                      {indianStates.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Pincode (6 Digits) *</label>
                    <input
                      type="text"
                      name="pincode"
                      maxLength={6}
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Country</label>
                    <input
                      type="text"
                      disabled
                      value="India (IN)"
                      className="w-full bg-[#EFE8DE] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#7A6C60]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Method */}
              <div className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="pb-3 border-b border-[#F3ECE2]">
                  <h2 className="font-serif-display font-bold text-lg text-[#3A2D24] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#3A2D24] text-[#FAF7F2] text-xs flex items-center justify-center font-sans">2</span>
                    Shipping Method
                  </h2>
                </div>

                <div className="space-y-3">
                  <label 
                    onClick={() => setShippingMethod('express')}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      shippingMethod === 'express' ? 'border-[#3A2D24] bg-[#FAF7F2]' : 'border-[#E5DDD3] hover:border-[#8C7E72]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input type="radio" checked={shippingMethod === 'express'} onChange={() => {}} className="accent-[#3A2D24]" />
                      <div>
                        <p className="text-xs font-bold text-[#3A2D24]">Standard BlueDart Air Express</p>
                        <p className="text-[11px] text-[#8C7E72]">Estimated delivery: 2–3 Business Days</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 uppercase">
                      {shippingFee === 0 ? 'Free' : `₹${shippingFee}`}
                    </span>
                  </label>

                  <label 
                    onClick={() => setShippingMethod('next-day')}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      shippingMethod === 'next-day' ? 'border-[#3A2D24] bg-[#FAF7F2]' : 'border-[#E5DDD3] hover:border-[#8C7E72]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input type="radio" checked={shippingMethod === 'next-day'} onChange={() => {}} className="accent-[#3A2D24]" />
                      <div>
                        <p className="text-xs font-bold text-[#3A2D24]">Monsoon Priority Next-Day Delivery</p>
                        <p className="text-[11px] text-[#8C7E72]">Delivered tomorrow by 1:00 PM</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#3A2D24]">₹149</span>
                  </label>
                </div>
              </div>

              {/* Step 3: Payment Gateway Selection */}
              <div className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="pb-3 border-b border-[#F3ECE2]">
                  <h2 className="font-serif-display font-bold text-lg text-[#3A2D24] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#3A2D24] text-[#FAF7F2] text-xs flex items-center justify-center font-sans">3</span>
                    Select Payment Gateway
                  </h2>
                </div>

                {/* Gateway Tab Selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      paymentMethod === 'upi' ? 'border-[#3A2D24] bg-[#3A2D24] text-[#FAF7F2]' : 'border-[#E5DDD3] bg-[#FAF7F2] text-[#3A2D24]'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs font-semibold">UPI Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      paymentMethod === 'card' ? 'border-[#3A2D24] bg-[#3A2D24] text-[#FAF7F2]' : 'border-[#E5DDD3] bg-[#FAF7F2] text-[#3A2D24]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs font-semibold">Cards</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      paymentMethod === 'netbanking' ? 'border-[#3A2D24] bg-[#3A2D24] text-[#FAF7F2]' : 'border-[#E5DDD3] bg-[#FAF7F2] text-[#3A2D24]'
                    }`}
                  >
                    <Building2 className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs font-semibold">Net Banking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      paymentMethod === 'cod' ? 'border-[#3A2D24] bg-[#3A2D24] text-[#FAF7F2]' : 'border-[#E5DDD3] bg-[#FAF7F2] text-[#3A2D24]'
                    }`}
                  >
                    <Banknote className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs font-semibold">Cash On Delivery</span>
                  </button>
                </div>

                {/* Sub-form based on selected payment method */}
                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3] mt-4">
                  {paymentMethod === 'upi' && (
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-[#3A2D24]">Instant UPI Payment (Google Pay / PhonePe / Paytm / BHIM)</p>
                      <div className="space-y-1">
                        <label className="text-[11px] text-[#8C7E72]">Enter UPI VPA ID</label>
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="e.g. mobile@upi or username@okhdfcbank"
                          className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2 text-xs"
                        />
                      </div>
                      <p className="text-[10px] text-[#8C7E72]">A payment request will be sent to your UPI app upon clicking Pay.</p>
                    </div>
                  )}

                  {paymentMethod === 'card' && (
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-[#3A2D24]">Credit / Debit Card (Razorpay & Stripe Certified)</p>
                      <div className="space-y-1">
                        <label className="text-[11px] text-[#8C7E72]">Card Number</label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2 text-xs font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[11px] text-[#8C7E72]">Expiry</label>
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2 text-xs font-mono"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] text-[#8C7E72]">CVV</label>
                          <input
                            type="password"
                            maxLength={4}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2 text-xs font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-[#3A2D24]">All Major Indian Banks Supported</p>
                      <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2 text-xs"
                      >
                        <option value="HDFC Bank">HDFC Bank</option>
                        <option value="ICICI Bank">ICICI Bank</option>
                        <option value="State Bank of India">State Bank of India (SBI)</option>
                        <option value="Axis Bank">Axis Bank</option>
                        <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                      </select>
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="space-y-1 text-xs text-[#5A483E]">
                      <p className="font-bold text-[#3A2D24]">Cash on Delivery (Available Across India)</p>
                      <p>Pay with cash or UPI QR code directly to the BlueDart courier partner at your doorstep.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-[#3A2D24] hover:bg-[#241B15] text-[#FAF7F2] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Authorizing Payment & Reserving Stock...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-[#C49F6A]" />
                    <span>Confirm Order & Pay — ₹{finalTotal}</span>
                  </>
                )}
              </button>

            </form>

          </div>

          {/* RIGHT: Order Summary (Cols 5) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md sticky top-28">
              
              <div className="pb-3 border-b border-[#EFE8DE] flex items-center justify-between">
                <h2 className="font-serif-display font-bold text-xl text-[#3A2D24]">
                  In Your Package
                </h2>
                <span className="text-xs text-[#8C7E72]">{cart.length} items</span>
              </div>

              {/* Item thumbnails */}
              <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 bg-[#FAF7F2] rounded-lg border border-[#EBE3D7]">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md border border-[#E5DDD3]" />
                    <div className="flex-1 min-w-0">
                      <p className="font-serif-display font-bold text-xs text-[#3A2D24] truncate">{item.name}</p>
                      <p className="text-[10px] text-[#8C7E72]">{item.color} • {item.size} • Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-xs text-[#3A2D24]">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Price Calculation */}
              <div className="space-y-2 text-xs text-[#5A483E] pt-3 border-t border-[#EFE8DE]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{cartSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-semibold">
                    <span>Discount ({appliedDiscount?.code})</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Tier</span>
                  <span>{shippingMethod === 'next-day' ? '₹149' : shippingFee === 0 ? <strong className="text-emerald-700">Free</strong> : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#241B15] pt-3 border-t border-[#E5DDD3]">
                  <span>Total Due</span>
                  <span className="font-serif-display text-2xl text-[#3A2D24]">₹{finalTotal}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 border-t border-[#EFE8DE] space-y-2 text-[11px] text-[#8C7E72]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C49F6A] shrink-0" />
                  <span>30-Day Money-Back "Dry Feet" Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#C49F6A] shrink-0" />
                  <span>Dispatched within 24h via BlueDart Air</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
