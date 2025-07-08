import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    onCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
      <div className="bg-gray-900 w-full max-w-2xl mx-4 rounded-lg shadow-2xl border border-gray-700 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-black text-white" style={{ fontFamily: '"Cinzel", "Pirata One", "Metal Mania", "Butcherman", serif' }}>
            CARRINHO DE COMPRAS
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400 text-lg">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={`${item.product.id}-${item.size}-${item.color}-${index}`} className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-bold">{item.product.name}</h3>
                    <p className="text-gray-400 text-sm">
                      Tamanho: {item.size} | Cor: {item.color}
                    </p>
                    <p className="text-red-400 font-bold">
                      R$ {item.product.price.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                      className="bg-gray-700 text-white p-1 rounded hover:bg-gray-600 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                      className="bg-gray-700 text-white p-1 rounded hover:bg-gray-600 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                      className="bg-red-600 text-white p-1 rounded hover:bg-red-700 transition-colors ml-2"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-700 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-white">Total:</span>
              <span className="text-2xl font-black text-red-400">
                R$ {getTotalPrice().toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              FINALIZAR COMPRA
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;