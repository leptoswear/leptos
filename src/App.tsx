import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import LoginModal from './components/LoginModal';
import ProductModal from './components/ProductModal';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import InfoModal from './components/InfoModal';
import Footer from './components/Footer';
import { Product } from './types/Product';

type ViewType = 'home' | 'camisetas';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [infoModalPage, setInfoModalPage] = useState<'contact' | 'returns' | 'sizes' | 'faq' | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCartClick = () => {
    setIsCartModalOpen(true);
  };

  const handleCheckout = () => {
    setIsCartModalOpen(false);
    setIsCheckoutModalOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-black">
        <Header 
          onLoginClick={() => setIsLoginModalOpen(true)}
          onHomeClick={() => setCurrentView('home')}
          onShirtsClick={() => setCurrentView('camisetas')}
          onCartClick={handleCartClick}
        />
        
        {currentView === 'home' && (
          <>
            <Hero onShopClick={() => setCurrentView('camisetas')} />
            <ProductGrid 
              category="all" 
              onProductClick={handleProductClick}
            />
          </>
        )}
        
        {currentView === 'camisetas' && (
          <div className="pt-20">
            <ProductGrid 
              category="camiseta" 
              onProductClick={handleProductClick}
            />
          </div>
        )}
        
        <Footer onInfoClick={(page) => setInfoModalPage(page)} />
        
        <LoginModal 
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
        
        <ProductModal 
          product={selectedProduct}
          isOpen={isProductModalOpen}
          onClose={() => setIsProductModalOpen(false)}
        />
        
        <CartModal 
          isOpen={isCartModalOpen}
          onClose={() => setIsCartModalOpen(false)}
          onCheckout={handleCheckout}
        />
        
        <CheckoutModal 
          isOpen={isCheckoutModalOpen}
          onClose={() => setIsCheckoutModalOpen(false)}
        />
        
        <InfoModal 
          isOpen={infoModalPage !== null}
          onClose={() => setInfoModalPage(null)}
          page={infoModalPage}
        />
      </div>
    </CartProvider>
  );
}

export default App;