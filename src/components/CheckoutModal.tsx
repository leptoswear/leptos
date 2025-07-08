import React, { useState } from 'react';
import { X, CreditCard, Smartphone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CheckoutData } from '../types/Product';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'pix'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCheckoutData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparar dados do pedido para enviar ao seu checkout personalizado
    const orderData = {
      customer: checkoutData,
      items: cartItems,
      total: checkoutData.paymentMethod === 'pix' ? getTotalPrice() * 0.95 : getTotalPrice(),
      paymentMethod: checkoutData.paymentMethod,
      timestamp: new Date().toISOString()
    };

    // Aqui você pode integrar com seu sistema de checkout
    // Exemplo 1: Redirecionar para uma URL externa
    // window.location.href = `https://seu-checkout.com/payment?data=${encodeURIComponent(JSON.stringify(orderData))}`;
    
    // Exemplo 2: Fazer uma chamada para sua API
    // fetch('https://sua-api.com/create-payment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(orderData)
    // }).then(response => response.json())
    //   .then(data => {
    //     window.location.href = data.paymentUrl;
    //   });

    // Exemplo 3: Integração com WhatsApp Business
    const whatsappMessage = generateWhatsAppMessage(orderData);
    const whatsappUrl = `https://wa.me/5511964522053?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    onClose();
    alert('Redirecionando para finalizar o pagamento...');
  };

  const generateWhatsAppMessage = (orderData: any) => {
    let message = `🛍️ *NOVO PEDIDO - LEPTOSWEAR*\n\n`;
    message += `👤 *Cliente:* ${orderData.customer.name}\n`;
    message += `📧 *Email:* ${orderData.customer.email}\n`;
    message += `📱 *Telefone:* ${orderData.customer.phone}\n\n`;
    
    message += `📦 *Produtos:*\n`;
    orderData.items.forEach((item: any, index: number) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   Tamanho: ${item.size} | Cor: ${item.color}\n`;
      message += `   Qtd: ${item.quantity} | Valor: R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });
    
    message += `🏠 *Endereço de Entrega:*\n`;
    message += `${orderData.customer.address}\n`;
    message += `${orderData.customer.city} - CEP: ${orderData.customer.zipCode}\n\n`;
    
    message += `💰 *Total: R$ ${orderData.total.toFixed(2).replace('.', ',')}*\n`;
    message += `💳 *Forma de Pagamento:* ${orderData.paymentMethod === 'pix' ? 'PIX (5% desconto)' : 'Cartão de Crédito'}\n\n`;
    
    message += `⏰ *Data do Pedido:* ${new Date(orderData.timestamp).toLocaleString('pt-BR')}`;
    
    return message;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
      <div className="bg-gray-900 w-full max-w-4xl mx-4 rounded-lg shadow-2xl border border-gray-700 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-black text-white" style={{ fontFamily: '"Cinzel", "Pirata One", "Metal Mania", "Butcherman", serif' }}>
            FINALIZAR COMPRA
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Formulário de Checkout */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Dados Pessoais</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={checkoutData.name}
                    onChange={handleInputChange}
                    placeholder="Nome completo"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={checkoutData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={checkoutData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefone"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    required
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Endereço de Entrega</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="zipCode"
                    value={checkoutData.zipCode}
                    onChange={handleInputChange}
                    placeholder="CEP"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    value={checkoutData.address}
                    onChange={handleInputChange}
                    placeholder="Endereço completo"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    required
                  />
                  <input
                    type="text"
                    name="city"
                    value={checkoutData.city}
                    onChange={handleInputChange}
                    placeholder="Cidade"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    required
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Forma de Pagamento</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pix"
                      checked={checkoutData.paymentMethod === 'pix'}
                      onChange={handleInputChange}
                      className="text-red-600"
                    />
                    <Smartphone className="text-green-500" size={20} />
                    <span className="text-white">PIX (5% de desconto)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={checkoutData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="text-red-600"
                    />
                    <CreditCard className="text-blue-500" size={20} />
                    <span className="text-white">Cartão de Crédito</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                CONFIRMAR PEDIDO
              </button>
            </form>
          </div>

          {/* Resumo do Pedido */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resumo do Pedido</h3>
            <div className="bg-gray-800 rounded-lg p-4 space-y-4">
              {cartItems.map((item, index) => (
                <div key={`${item.product.id}-${item.size}-${item.color}-${index}`} className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">{item.product.name}</p>
                    <p className="text-gray-400 text-sm">
                      {item.size} | {item.color} | Qtd: {item.quantity}
                    </p>
                  </div>
                  <p className="text-red-400 font-bold">
                    R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                  </p>
                </div>
              ))}
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Subtotal:</span>
                  <span className="text-white">R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                </div>
                {checkoutData.paymentMethod === 'pix' && (
                  <div className="flex justify-between items-center text-green-400">
                    <span>Desconto PIX (5%):</span>
                    <span>- R$ {(getTotalPrice() * 0.05).toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-red-400">
                    R$ {(checkoutData.paymentMethod === 'pix' 
                      ? getTotalPrice() * 0.95 
                      : getTotalPrice()
                    ).toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;