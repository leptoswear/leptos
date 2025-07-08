import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor, selecione o tamanho e a cor');
      return;
    }

    addToCart(product, selectedSize, selectedColor, quantity);
    alert('Produto adicionado ao carrinho!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
      <div className="bg-gray-900 w-full max-w-4xl mx-4 rounded-lg shadow-2xl border border-gray-700 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-black text-white" style={{ fontFamily: '"Cinzel", "Pirata One", "Metal Mania", "Butcherman", serif' }}>
            {product.name}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div className="space-y-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-3xl font-black text-red-400 mb-2">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Tamanho:</h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 border rounded-md transition-colors ${
                      selectedSize === size
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-gray-800 text-gray-300 border-gray-600 hover:border-red-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Cor:</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`py-2 px-4 border rounded-md transition-colors ${
                      selectedColor === color
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-gray-800 text-gray-300 border-gray-600 hover:border-red-600'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Quantidade:</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-white font-bold text-xl w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-md transition-colors"
            >
              <ShoppingCart size={20} />
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;