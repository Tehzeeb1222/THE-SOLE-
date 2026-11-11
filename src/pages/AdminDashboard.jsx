import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  SlidersHorizontal, 
  Package, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Plus, 
  Edit3, 
  Trash2, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Tag, 
  ArrowLeft, 
  Sparkles,
  Search,
  Eye,
  Save
} from 'lucide-react';

export default function AdminDashboard() {
  const { products, setProducts, orders, setOrders, navigateTo, addToast } = useStore();

  const [activeAdminTab, setActiveAdminTab] = useState('products'); // 'products' | 'orders' | 'discounts' | 'analytics'
  const [editingProductId, setEditingProductId] = useState(null);
  
  // New Product Modal form
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdCategory, setNewProdCategory] = useState('formal');
  const [newProdPrice, setNewProdPrice] = useState(899);
  const [newProdStock, setNewProdStock] = useState(50);
  const [newProdSubtitle, setNewProdSubtitle] = useState('Hydrophobic Dress Sock');

  // Edit stock/price helper
  const handleUpdateProduct = (id, field, value) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
    addToast('Product updated successfully.', 'success');
  };

  const handleDeleteProduct = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      addToast('Product removed from catalog.', 'info');
    }
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: `ts-${Date.now()}`,
      name: newProdName,
      subtitle: newProdSubtitle,
      category: newProdCategory,
      categoryLabel: newProdCategory === 'formal' ? 'Formal & Business' : 'Everyday Defense',
      price: Number(newProdPrice),
      originalPrice: Number(newProdPrice) + 300,
      rating: 5.0,
      reviewCount: 1,
      badge: 'New Launch',
      featured: true,
      inStock: true,
      stockCount: Number(newProdStock),
      colors: [{ name: 'Classic Black', hex: '#1A1A1A', image: '/assets/The Sole  main .png' }],
      sizes: ['UK/IN 6–7', 'UK/IN 8–9', 'UK/IN 10–11', 'UK/IN 12+'],
      images: ['/assets/The Sole  main .png', '/assets/working.png'],
      shortDesc: 'New edition hydrophobic footwear accessory.',
      description: 'Engineered for complete water protection during rainy seasons.',
      technology: 'Nano-Shield™ yarn treatment.',
      material: '74% Combed Cotton, 22% Polyamide, 4% Elastane.',
      care: 'Machine wash cold.',
      protectionLevel: '100% Repellent',
      useCases: ['Monsoon', 'Office']
    };

    setProducts([newProduct, ...products]);
    setShowAddModal(false);
    setNewProdName('');
    addToast(`Product "${newProdName}" added to live store!`, 'success');
  };

  const handleUpdateOrderStatus = (orderId, newStatus, newStep) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: newStatus, statusStep: newStep } : o
      )
    );
    addToast(`Order ${orderId} updated to "${newStatus}".`, 'success');
  };

  return (
    <div className="py-10 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#3A2D24] text-[#FAF7F2] p-6 rounded-3xl shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#241B15] border border-[#C49F6A] flex items-center justify-center text-[#C49F6A]">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-script text-3xl text-[#FAF7F2]">The Sole</span>
                <span className="text-[10px] bg-[#C49F6A] text-[#241B15] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  Admin CMS
                </span>
              </div>
              <p className="text-xs text-[#A69788]">Store Management, Catalog Inventory & Order Telemetry</p>
            </div>
          </div>

          <button
            onClick={() => navigateTo('home')}
            className="px-5 py-2.5 bg-[#FAF7F2] text-[#3A2D24] hover:bg-[#EAE0D5] text-xs uppercase tracking-wider font-bold rounded-sm transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Storefront</span>
          </button>
        </div>

        {/* Executive Metrics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FFFFFF] border border-[#E5DDD3] p-5 rounded-2xl shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#8C7E72]">
              <span className="text-xs uppercase tracking-wider font-semibold">Total Revenue (INR)</span>
              <DollarSign className="w-4 h-4 text-[#C49F6A]" />
            </div>
            <p className="font-serif-display font-bold text-3xl text-[#241B15]">₹14,82,900</p>
            <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              +24.5% this monsoon season
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5DDD3] p-5 rounded-2xl shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#8C7E72]">
              <span className="text-xs uppercase tracking-wider font-semibold">Active Orders</span>
              <ShoppingCart className="w-4 h-4 text-[#C49F6A]" />
            </div>
            <p className="font-serif-display font-bold text-3xl text-[#241B15]">{orders.length + 124}</p>
            <p className="text-[11px] text-[#8C7E72]">4 pending dispatch via BlueDart</p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5DDD3] p-5 rounded-2xl shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#8C7E72]">
              <span className="text-xs uppercase tracking-wider font-semibold">Live Products</span>
              <Package className="w-4 h-4 text-[#C49F6A]" />
            </div>
            <p className="font-serif-display font-bold text-3xl text-[#241B15]">{products.length}</p>
            <p className="text-[11px] text-[#8C7E72]">100% hydrophobic catalog active</p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5DDD3] p-5 rounded-2xl shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#8C7E72]">
              <span className="text-xs uppercase tracking-wider font-semibold">Registered Buyers</span>
              <Users className="w-4 h-4 text-[#C49F6A]" />
            </div>
            <p className="font-serif-display font-bold text-3xl text-[#241B15]">3,892</p>
            <p className="text-[11px] text-emerald-700 font-semibold">98.6% 5-Star Satisfaction</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#E5DDD3] pb-2">
          <button
            onClick={() => setActiveAdminTab('products')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
              activeAdminTab === 'products'
                ? 'bg-[#3A2D24] text-[#FAF7F2]'
                : 'bg-[#FFFFFF] text-[#5A483E] border border-[#E5DDD3] hover:bg-[#FAF7F2]'
            }`}
          >
            Product Catalog & Inventory ({products.length})
          </button>

          <button
            onClick={() => setActiveAdminTab('orders')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
              activeAdminTab === 'orders'
                ? 'bg-[#3A2D24] text-[#FAF7F2]'
                : 'bg-[#FFFFFF] text-[#5A483E] border border-[#E5DDD3] hover:bg-[#FAF7F2]'
            }`}
          >
            Live Customer Orders ({orders.length})
          </button>

          <button
            onClick={() => setActiveAdminTab('discounts')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
              activeAdminTab === 'discounts'
                ? 'bg-[#3A2D24] text-[#FAF7F2]'
                : 'bg-[#FFFFFF] text-[#5A483E] border border-[#E5DDD3] hover:bg-[#FAF7F2]'
            }`}
          >
            Discount Coupons & Campaigns
          </button>
        </div>

        {/* TAB 1: PRODUCT CATALOG CMS */}
        {activeAdminTab === 'products' && (
          <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="font-serif-display font-bold text-xl text-[#3A2D24]">
                  Product Inventory Management
                </h2>
                <p className="text-xs text-[#8C7E72]">Add, edit pricing, or manage stock levels</p>
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="px-5 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#241B15] flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4 text-[#C49F6A]" />
                <span>Add New Product</span>
              </button>
            </div>

            {/* Add Product Modal Drawer */}
            {showAddModal && (
              <form onSubmit={handleCreateProduct} className="p-6 bg-[#FAF7F2] border border-[#C49F6A] rounded-2xl space-y-4 animate-fadeIn">
                <h3 className="font-serif-display font-bold text-base text-[#3A2D24]">
                  Add Product to Store
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-semibold text-[#3A2D24]">Product Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. The Sole Merino Edition"
                      value={newProdName}
                      onChange={(e) => setNewProdName(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-[#3A2D24]">Subtitle</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Premium Wool Hydrophobic Sock"
                      value={newProdSubtitle}
                      onChange={(e) => setNewProdSubtitle(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-[#3A2D24]">Price in INR</label>
                    <input
                      type="number"
                      required
                      value={newProdPrice}
                      onChange={(e) => setNewProdPrice(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-[#3A2D24]">Initial Stock Units</label>
                    <input
                      type="number"
                      required
                      value={newProdStock}
                      onChange={(e) => setNewProdStock(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-2"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 border border-[#8C7E72] text-xs font-semibold rounded-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold rounded-sm"
                  >
                    Publish Product
                  </button>
                </div>
              </form>
            )}

            {/* Product Table */}
            <div className="overflow-x-auto border border-[#E5DDD3] rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#F3ECE2] text-[#3A2D24] font-semibold border-b border-[#E5DDD3]">
                  <tr>
                    <th className="p-3">Product</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price (INR)</th>
                    <th className="p-3">Stock Units</th>
                    <th className="p-3">Rating</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE8DE] bg-[#FFFFFF]">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FAF7F2]">
                      <td className="p-3 flex items-center gap-3">
                        <img src={p.images[0]} alt={p.name} className="w-10 h-10 object-cover rounded-md border border-[#E5DDD3]" />
                        <div>
                          <p className="font-serif-display font-bold text-xs text-[#3A2D24]">{p.name}</p>
                          <p className="text-[10px] text-[#8C7E72]">{p.subtitle}</p>
                        </div>
                      </td>
                      <td className="p-3 text-[#5A483E] uppercase text-[10px] font-semibold">
                        {p.categoryLabel}
                      </td>
                      <td className="p-3 font-bold text-[#3A2D24]">
                        ₹{p.price}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-xs font-semibold text-[10px] ${
                          (p.stockCount || 50) > 20 ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                        }`}>
                          {p.stockCount || 50} units
                        </span>
                      </td>
                      <td className="p-3 text-[#C49F6A] font-semibold">
                        ★ {p.rating} ({p.reviewCount})
                      </td>
                      <td className="p-3 text-right space-x-2">
                        <button
                          onClick={() => {
                            const newPrice = prompt(`Enter new price for ${p.name}:`, p.price);
                            if (newPrice && !isNaN(newPrice)) {
                              handleUpdateProduct(p.id, 'price', Number(newPrice));
                            }
                          }}
                          className="p-1 text-[#5A483E] hover:text-[#3A2D24]"
                          title="Edit Price"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="p-1 text-[#A69788] hover:text-rose-700"
                          title="Delete Product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: LIVE ORDERS CMS */}
        {activeAdminTab === 'orders' && (
          <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
            <h2 className="font-serif-display font-bold text-xl text-[#3A2D24]">
              Customer Order Dispatch & Status Management
            </h2>

            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="p-5 bg-[#FAF7F2] border border-[#E5DDD3] rounded-2xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EFE8DE] text-xs">
                    <div>
                      <span className="font-mono font-bold text-sm text-[#3A2D24]">{order.id}</span>
                      <span className="text-[#8C7E72] ml-2">Customer: <strong>{order.shippingAddress?.fullName}</strong> ({order.shippingAddress?.city})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#8C7E72]">Status:</span>
                      <select
                        value={order.status}
                        onChange={(e) => {
                          const val = e.target.value;
                          let step = 1;
                          if (val === 'Packed') step = 2;
                          if (val === 'In Transit' || val === 'Shipped') step = 3;
                          if (val === 'Out for Delivery') step = 4;
                          if (val === 'Delivered') step = 5;
                          handleUpdateOrderStatus(order.id, val, step);
                        }}
                        className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-sm p-1.5 text-xs text-[#3A2D24] font-semibold"
                      >
                        <option value="Order Placed">Order Placed (Stage 1)</option>
                        <option value="Packed">Packed (Stage 2)</option>
                        <option value="In Transit">In Transit (Stage 3)</option>
                        <option value="Out for Delivery">Out for Delivery (Stage 4)</option>
                        <option value="Delivered">Delivered (Stage 5)</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-xs text-[#5A483E] space-y-1">
                    <p>Total Value: <strong className="text-[#3A2D24]">₹{order.total}</strong> • Carrier: {order.courier} (AWB: <code className="bg-[#EAE0D5] px-1 py-0.5 rounded-xs">{order.trackingNumber}</code>)</p>
                    <p>Delivery Destination: {order.shippingAddress?.address}, {order.shippingAddress?.city} - {order.shippingAddress?.pincode}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: DISCOUNTS & CAMPAIGNS */}
        {activeAdminTab === 'discounts' && (
          <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
            <h2 className="font-serif-display font-bold text-xl text-[#3A2D24]">
              Active Promotional Discount Codes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#FAF7F2] border border-[#C49F6A] rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-sm text-[#3A2D24]">RAINREADY15</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-xs uppercase">Active</span>
                </div>
                <p className="text-xs text-[#5A483E]">15% Off Welcome Promotion for new Rain Collective members.</p>
              </div>

              <div className="p-4 bg-[#FAF7F2] border border-[#E5DDD3] rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-sm text-[#3A2D24]">MONSOON10</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-xs uppercase">Active</span>
                </div>
                <p className="text-xs text-[#5A483E]">10% Off Seasonal Monsoon defense offer.</p>
              </div>

              <div className="p-4 bg-[#FAF7F2] border border-[#E5DDD3] rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-sm text-[#3A2D24]">OFFICE300</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-xs uppercase">Active</span>
                </div>
                <p className="text-xs text-[#5A483E]">Flat ₹300 Off on Multi-pack bundles & corporate packs.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
