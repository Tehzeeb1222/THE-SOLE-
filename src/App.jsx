import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CartDrawer from './components/common/CartDrawer';
import SearchModal from './components/common/SearchModal';
import SizeGuideModal from './components/common/SizeGuideModal';
import Chatbot from './components/common/Chatbot';
import WhatsAppButton from './components/common/WhatsAppButton';
import ToastContainer from './components/common/ToastContainer';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CollectionsPage from './pages/CollectionsPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import WhyTheSolePage from './pages/WhyTheSolePage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';
import JournalDetailPage from './pages/JournalDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import AccountPage from './pages/AccountPage';
import WishlistPage from './pages/WishlistPage';
import ContactFAQPage from './pages/ContactFAQPage';
import AdminDashboard from './pages/AdminDashboard';

function MainRouter() {
  const { currentPage } = useStore();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductDetailPage />;
      case 'collections':
        return <CollectionsPage />;
      case 'services':
        return <ServicesPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'pricing':
        return <PricingPage />;
      case 'why-the-sole':
        return <WhyTheSolePage />;
      case 'about':
        return <AboutPage />;
      case 'journal':
        return <JournalPage />;
      case 'journal-detail':
        return <JournalDetailPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'order-confirmation':
        return <OrderConfirmationPage />;
      case 'order-tracking':
        return <OrderTrackingPage />;
      case 'account':
        return <AccountPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'contact-faq':
        return <ContactFAQPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF7F2] text-[#2C241E] relative">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />

      {/* Global Modals & Floating Contact Tools */}
      <CartDrawer />
      <SearchModal />
      <SizeGuideModal />
      <Chatbot />
      <WhatsAppButton />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <MainRouter />
    </StoreProvider>
  );
}
