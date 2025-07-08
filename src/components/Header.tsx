import React, { useState } from 'react';
import { Menu, X, User, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onLoginClick: () => void;
  onHomeClick: () => void;
  onShirtsClick: () => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onHomeClick, onShirtsClick, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={onHomeClick}
            >
              <img 
                src="/leptoswear-logo.jpg" 
                alt="Leptoswear Logo"
                className="h-12 md:h-16 w-auto object-contain"
                style={{ filter: 'brightness(1.1) contrast(1.2)' }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onHomeClick}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={onShirtsClick}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Camisetas
            </button>
            <div className="flex items-center space-x-4">
              <button 
                onClick={onLoginClick}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <User size={18} />
                <span>Login</span>
              </button>
              <button 
                onClick={onCartClick}
                className="text-gray-300 hover:text-white transition-colors relative"
              >
                <ShoppingBag size={20} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => { onHomeClick(); setIsMenuOpen(false); }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => { onShirtsClick(); setIsMenuOpen(false); }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Camisetas
              </button>
              <button 
                onClick={() => { onLoginClick(); setIsMenuOpen(false); }}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors w-fit"
              >
                <User size={18} />
                <span>Login</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;