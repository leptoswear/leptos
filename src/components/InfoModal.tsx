import React from 'react';
import { X, ArrowLeft, Phone, Mail, MapPin, Clock, Shield, Package, Ruler, HelpCircle } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  page: 'contact' | 'returns' | 'sizes' | 'faq' | null;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, page }) => {
  if (!isOpen || !page) return null;

  const getPageContent = () => {
    switch (page) {
      case 'contact':
        return {
          title: 'CONTATO',
          icon: <Phone className="text-red-600" size={24} />,
          content: (
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Phone className="text-red-600 mr-2" size={20} />
                  Atendimento ao Cliente
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-red-600" />
                    <div>
                      <p className="text-white font-medium">WhatsApp</p>
                      <a
                        href="https://wa.me/5511964522053"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        (11) 96452-2053
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-red-600" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a
                        href="mailto:contato@leptoswear.com.br"
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        contato@leptoswear.com.br
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-red-600" />
                    <div>
                      <p className="text-white font-medium">Endereço</p>
                      <p className="text-gray-400">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={18} className="text-red-600" />
                    <div>
                      <p className="text-white font-medium">Horário de Atendimento</p>
                      <p className="text-gray-400">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-gray-400">Sábado: 9h às 14h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Como Entrar em Contato</h3>
                <div className="space-y-3 text-gray-300">
                  <p>• <strong className="text-white">WhatsApp:</strong> Atendimento rápido e direto para dúvidas, pedidos e suporte</p>
                  <p>• <strong className="text-white">Email:</strong> Para solicitações mais detalhadas e documentação</p>
                  <p>• <strong className="text-white">Redes Sociais:</strong> Acompanhe novidades e lançamentos</p>
                </div>
              </div>
            </div>
          )
        };

      case 'returns':
        return {
          title: 'TROCAS E DEVOLUÇÕES',
          icon: <Package className="text-red-600" size={24} />,
          content: (
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Shield className="text-red-600 mr-2" size={20} />
                  Política de Trocas
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>• <strong className="text-white">Prazo:</strong> 30 dias corridos a partir do recebimento</p>
                  <p>• <strong className="text-white">Condições:</strong> Produto sem uso, com etiquetas e embalagem original</p>
                  <p>• <strong className="text-white">Motivos:</strong> Defeito de fabricação, tamanho incorreto ou produto diferente do pedido</p>
                  <p>• <strong className="text-white">Processo:</strong> Entre em contato via WhatsApp com fotos do produto</p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Como Solicitar Troca</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-red-400">1.</strong> Entre em contato via WhatsApp: (11) 96452-2053</p>
                  <p><strong className="text-red-400">2.</strong> Informe o número do pedido e motivo da troca</p>
                  <p><strong className="text-red-400">3.</strong> Envie fotos do produto (se aplicável)</p>
                  <p><strong className="text-red-400">4.</strong> Aguarde as instruções de envio</p>
                  <p><strong className="text-red-400">5.</strong> Embale o produto com cuidado</p>
                  <p><strong className="text-red-400">6.</strong> Envie pelos Correios com código de rastreamento</p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Custos de Envio</h3>
                <div className="space-y-3 text-gray-300">
                  <p>• <strong className="text-white">Defeito de fabricação:</strong> Frete por nossa conta</p>
                  <p>• <strong className="text-white">Troca de tamanho:</strong> Cliente arca com o frete de ida e volta</p>
                  <p>• <strong className="text-white">Desistência:</strong> Cliente arca com todos os custos</p>
                </div>
              </div>
            </div>
          )
        };

      case 'sizes':
        return {
          title: 'GUIA DE TAMANHOS',
          icon: <Ruler className="text-red-600" size={24} />,
          content: (
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Ruler className="text-red-600 mr-2" size={20} />
                  Tabela de Medidas - Camisetas Oversized
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left py-2 px-4 text-red-400">Tamanho</th>
                        <th className="text-left py-2 px-4 text-red-400">Largura (cm)</th>
                        <th className="text-left py-2 px-4 text-red-400">Comprimento (cm)</th>
                        <th className="text-left py-2 px-4 text-red-400">Manga (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 px-4 font-bold">P</td>
                        <td className="py-2 px-4">58</td>
                        <td className="py-2 px-4">70</td>
                        <td className="py-2 px-4">22</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 px-4 font-bold">M</td>
                        <td className="py-2 px-4">62</td>
                        <td className="py-2 px-4">72</td>
                        <td className="py-2 px-4">24</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 px-4 font-bold">G</td>
                        <td className="py-2 px-4">66</td>
                        <td className="py-2 px-4">74</td>
                        <td className="py-2 px-4">26</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 px-4 font-bold">GG</td>
                        <td className="py-2 px-4">70</td>
                        <td className="py-2 px-4">76</td>
                        <td className="py-2 px-4">28</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-bold">G3</td>
                        <td className="py-2 px-4">74</td>
                        <td className="py-2 px-4">78</td>
                        <td className="py-2 px-4">30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Como Medir</h3>
                <div className="space-y-3 text-gray-300">
                  <p>• <strong className="text-white">Largura:</strong> Medida de uma axila à outra, na horizontal</p>
                  <p>• <strong className="text-white">Comprimento:</strong> Do ombro até a barra da camiseta</p>
                  <p>• <strong className="text-white">Manga:</strong> Do ombro até o punho da manga</p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Dicas Importantes</h3>
                <div className="space-y-3 text-gray-300">
                  <p>• <strong className="text-white">Estilo Oversized:</strong> Nossas peças têm caimento mais largo propositalmente</p>
                  <p>• <strong className="text-white">Tecido:</strong> 100% algodão, pode encolher até 3% na primeira lavagem</p>
                  <p>• <strong className="text-white">Dúvidas:</strong> Entre em contato via WhatsApp para orientações personalizadas</p>
                </div>
              </div>
            </div>
          )
        };

      case 'faq':
        return {
          title: 'PERGUNTAS FREQUENTES',
          icon: <HelpCircle className="text-red-600" size={24} />,
          content: (
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <HelpCircle className="text-red-600 mr-2" size={20} />
                  Pedidos e Pagamentos
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold mb-2">Como faço um pedido?</h4>
                    <p className="text-gray-300">Navegue pelo site, escolha os produtos, selecione tamanho e cor, adicione ao carrinho e finalize a compra no checkout.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Quais formas de pagamento aceitas?</h4>
                    <p className="text-gray-300">Aceitamos PIX (com 5% de desconto) e cartão de crédito. O pagamento é processado de forma segura.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Posso cancelar meu pedido?</h4>
                    <p className="text-gray-300">Sim, até 2 horas após a confirmação. Entre em contato via WhatsApp imediatamente.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Entrega</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold mb-2">Qual o prazo de entrega?</h4>
                    <p className="text-gray-300">5 a 10 dias úteis para todo o Brasil via Correios. Você receberá o código de rastreamento por email.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Quanto custa o frete?</h4>
                    <p className="text-gray-300">O valor é calculado automaticamente no checkout baseado no seu CEP e peso dos produtos.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Entregam no meu estado?</h4>
                    <p className="text-gray-300">Sim! Entregamos para todo o Brasil através dos Correios.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Produtos</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold mb-2">As camisetas são realmente oversized?</h4>
                    <p className="text-gray-300">Sim! Nosso corte é propositalmente mais largo para o estilo streetwear autêntico.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Qual a qualidade do tecido?</h4>
                    <p className="text-gray-300">100% algodão premium, gramatura 180g/m², com acabamento de alta qualidade e durabilidade.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">As estampas desbotam?</h4>
                    <p className="text-gray-300">Não! Utilizamos técnicas de impressão profissionais que garantem durabilidade das cores.</p>
                  </div>
                </div>
              </div>
            </div>
          )
        };

      default:
        return { title: '', icon: null, content: null };
    }
  };

  const { title, icon, content } = getPageContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
      <div className="bg-gray-900 w-full max-w-4xl mx-4 rounded-lg shadow-2xl border border-gray-700 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            {icon}
            <h2 className="text-2xl font-black text-white" style={{ fontFamily: '"Cinzel", "Pirata One", "Metal Mania", "Butcherman", serif' }}>
              {title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          {content}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;