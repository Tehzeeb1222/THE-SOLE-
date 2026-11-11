import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  User, 
  Package, 
  MapPin, 
  Heart, 
  CreditCard, 
  RotateCcw, 
  Settings, 
  LogOut, 
  Truck, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Plus
} from 'lucide-react';

export default function AccountPage() {
  const { user, setUser, orders, wishlist, products, navigateTo, addToast } = useStore();
  const [activeTab, setActiveTab] = useState('orders'); // 'profile' | 'orders' | 'addresses' | 'returns' | 'settings'

  const [editProfile, setEditProfile] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone
  });

  const handleProfileSave = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, ...editProfile }));
    addToast('Profile details updated successfully.', 'success');
  };

  const navItems = [
    { id: 'orders', label: 'Order History', icon: Package, count: orders.length },
    { id: 'profile', label: 'Personal Profile', icon: User },
    { id: 'addresses', label: 'Saved Addresses', icon: MapPin, count: user.savedAddresses?.length },
    { id: 'returns', label: 'Returns & Exchange', icon: RotateCcw },
    { id: 'settings', label: 'Account Settings', icon: Settings }
  ];

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Account Banner Header */}
        <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#3A2D24] text-[#C49F6A] flex items-center justify-center font-serif-display text-2xl font-bold border-2 border-[#C49F6A]">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <h1 className="font-serif-display font-bold text-2xl text-[#241B15]">
                  {user.name}
                </h1>
                <span className="text-[10px] bg-[#EAE0D5] text-[#3A2D24] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  {user.memberTier}
                </span>
              </div>
              <p className="text-xs text-[#8C7E72]">{user.email} • {user.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-center">
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3]">
              <span className="text-[10px] uppercase tracking-wider text-[#8C7E72] block">Reward Points</span>
              <span className="font-serif-display font-bold text-lg text-[#3A2D24]">{user.loyaltyPoints} Pts</span>
            </div>
            <button
              onClick={() => navigateTo('shop')}
              className="px-5 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#241B15] transition-colors"
            >
              Shop New Drops
            </button>
          </div>
        </div>

        {/* Master Account Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Nav (Cols 4) */}
          <div className="lg:col-span-4">
            <div className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl p-4 space-y-1 shadow-2xs">
              {navItems.map((item) => {
                const IconComp = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full p-3 rounded-xl flex items-center justify-between text-xs font-semibold uppercase tracking-wider transition-all ${
                      activeTab === item.id
                        ? 'bg-[#3A2D24] text-[#FAF7F2]'
                        : 'text-[#5A483E] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComp className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.count !== undefined && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        activeTab === item.id ? 'bg-[#C49F6A] text-[#241B15]' : 'bg-[#F3ECE2] text-[#5A483E]'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}

              <button
                onClick={() => navigateTo('wishlist')}
                className="w-full p-3 rounded-xl flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#5A483E] hover:bg-[#FAF7F2]"
              >
                <div className="flex items-center gap-2.5">
                  <Heart className="w-4 h-4" />
                  <span>My Wishlist</span>
                </div>
                <span className="text-[10px] bg-[#F3ECE2] text-[#5A483E] px-2 py-0.5 rounded-full">
                  {wishlist.length}
                </span>
              </button>
            </div>
          </div>

          {/* Main Content Pane (Cols 8) */}
          <div className="lg:col-span-8">
            <div className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-3xl p-6 sm:p-8 shadow-xs">
              
              {/* TAB 1: ORDERS */}
              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#F3ECE2] flex items-center justify-between">
                    <div>
                      <h2 className="font-serif-display font-bold text-xl text-[#3A2D24]">
                        Past Orders & Active Shipments
                      </h2>
                      <p className="text-xs text-[#8C7E72]">Track shipments and re-order signature pairs</p>
                    </div>
                  </div>

                  {orders.map((order) => (
                    <div key={order.id} className="p-5 bg-[#FAF7F2] border border-[#E5DDD3] rounded-2xl space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EFE8DE] text-xs">
                        <div>
                          <span className="font-mono font-bold text-sm text-[#3A2D24]">{order.id}</span>
                          <span className="text-[#8C7E72] ml-2">• Placed on {order.date}</span>
                        </div>
                        <span className="font-semibold text-xs text-[#C49F6A] bg-[#3A2D24] px-2.5 py-1 rounded-sm uppercase tracking-wider self-start sm:self-auto">
                          {order.status}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {order.items && order.items.map((item, i) => (
                          <div key={i} className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-3">
                              <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-md border border-[#E5DDD3]" />
                              <div>
                                <p className="font-serif-display font-bold text-[#3A2D24]">{item.name}</p>
                                <p className="text-[10px] text-[#8C7E72]">{item.color} • {item.size} • Qty {item.quantity}</p>
                              </div>
                            </div>
                            <span className="font-bold text-[#3A2D24]">₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#EFE8DE] text-xs">
                        <div className="text-[#8C7E72]">
                          <span>Courier: <strong>{order.courier}</strong></span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => navigateTo('order-tracking', order.id)}
                            className="px-4 py-2 bg-[#3A2D24] text-[#FAF7F2] text-[11px] font-semibold uppercase tracking-wider rounded-sm hover:bg-[#241B15] flex items-center gap-1.5"
                          >
                            <Truck className="w-3.5 h-3.5 text-[#C49F6A]" />
                            <span>Track Live</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: PROFILE */}
              {activeTab === 'profile' && (
                <form onSubmit={handleProfileSave} className="space-y-5">
                  <div className="pb-4 border-b border-[#F3ECE2]">
                    <h2 className="font-serif-display font-bold text-xl text-[#3A2D24]">
                      Personal Details
                    </h2>
                    <p className="text-xs text-[#8C7E72]">Update your account credentials and contact info</p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Full Name</label>
                    <input
                      type="text"
                      value={editProfile.name}
                      onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Email Address</label>
                    <input
                      type="email"
                      value={editProfile.email}
                      onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A2D24]">Mobile Number</label>
                    <input
                      type="tel"
                      value={editProfile.phone}
                      onChange={(e) => setEditProfile({ ...editProfile, phone: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm p-2.5 text-xs text-[#2C241E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#241B15]"
                  >
                    Save Changes
                  </button>
                </form>
              )}

              {/* TAB 3: ADDRESSES */}
              {activeTab === 'addresses' && (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#F3ECE2] flex items-center justify-between">
                    <div>
                      <h2 className="font-serif-display font-bold text-xl text-[#3A2D24]">
                        Saved Delivery Addresses
                      </h2>
                      <p className="text-xs text-[#8C7E72]">Manage default locations for 1-click checkout</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {user.savedAddresses.map((addr) => (
                      <div key={addr.id} className="p-4 bg-[#FAF7F2] border border-[#E5DDD3] rounded-xl flex items-start justify-between">
                        <div className="space-y-1 text-xs">
                          <span className="font-bold text-[#3A2D24] uppercase text-[10px] tracking-wider bg-[#EAE0D5] px-2 py-0.5 rounded-xs">
                            {addr.title}
                          </span>
                          <p className="text-[#3A2D24] font-medium pt-1">{addr.address}</p>
                          <p className="text-[#8C7E72]">{addr.city}, {addr.state} - {addr.pincode}</p>
                        </div>
                        <span className="text-xs text-[#C49F6A] font-semibold">Active</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: RETURNS */}
              {activeTab === 'returns' && (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#F3ECE2]">
                    <h2 className="font-serif-display font-bold text-xl text-[#3A2D24]">
                      30-Day "Dry Feet" Guarantee & Returns
                    </h2>
                    <p className="text-xs text-[#8C7E72]">Hassle-free replacement or full refund</p>
                  </div>

                  <div className="p-6 bg-[#FAF7F2] border border-[#C49F6A] rounded-2xl space-y-3">
                    <p className="text-xs text-[#5A483E] leading-relaxed">
                      Every pair of The Sole hydrophobic socks comes backed by our ironclad promise: if you get wet socks or are unsatisfied with the fit inside your shoes, initiate a complimentary doorstep pickup within 30 days.
                    </p>
                    <button
                      onClick={() => addToast('Return request initiated for Order TS-94821. BlueDart courier will contact you within 24h.', 'success')}
                      className="px-5 py-2 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#241B15]"
                    >
                      Request Return / Exchange
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 5: SETTINGS */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#F3ECE2]">
                    <h2 className="font-serif-display font-bold text-xl text-[#3A2D24]">
                      Preferences & Privacy
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-[#5A483E]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-[#3A2D24]" />
                      <span>Receive WhatsApp shipment updates from BlueDart Air Express</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-[#3A2D24]" />
                      <span>Receive early-access drops and monsoon styling guides</span>
                    </label>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
