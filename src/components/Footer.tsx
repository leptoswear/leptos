import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onInfoClick: (page: 'contact' | 'returns' | 'sizes' | 'faq') => void;
}

const Footer: React.FC<FooterProps> = ({ onInfoClick }) => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/leptoswear-logo.jpg" 
                alt="Leptoswear Logo"
                className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(1.1) contrast(1.2)' }}
              />
            </div>
            <p className="text-gray-400">
              Estilo Gangster Ferraz City.<br />
              Roupas oversized com atitude.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">NAVEGAÇÃO</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Camisetas</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">SUPORTE</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onInfoClick('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Contato
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoClick('returns')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Trocas e Devoluções
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoClick('sizes')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Guia de Tamanhos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoClick('faq')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">CONTATO</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-red-600" />
                <span className="text-gray-400">contato@leptoswear.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-red-600" />
                <a
                  href="https://wa.me/5511964522053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (11) 96452-2053
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-red-600" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Leptoswear. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;