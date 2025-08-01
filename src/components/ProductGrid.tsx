import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductGridProps {
  category: 'all' | 'camiseta';
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ category, onProductClick }) => {
  const products: Product[] = [
       
    {
      id: 1,
      name: "Camiseta FUBU Clássica",
      price: 99.90,
      image: "https://i.postimg.cc/br4kqVMm/Whats-App-Image-2025-07-31-at-1-45-40-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Camiseta oversized com estilo urbano autêntico das ruas de LA. Tecido premium com caimento perfeito.'
    },
    {
      id: 2,
      name: "Camiseta SIDESHOW BOB",
      price: 99.90,
      image: "https://i.postimg.cc/NMBgSj2j/Whats-App-Image-2025-08-01-at-3-05-19-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Camiseta oversized com estilo urbano autêntico das ruas de LA. Tecido premium com caimento perfeito.'
    },
    {
      id: 3,
      name: "Camiseta Cat & Dog Simpsons",
      price: 99.90,
      image: "https://i.postimg.cc/2yd9JCvr/Whats-App-Image-2025-08-01-at-3-05-20-PM.jpg",
      category: 'camiseta',
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Design exclusivo com atitude gangster. Perfeita para quem quer se destacar com estilo.'
    },
    {
      id: 4,
      name: "Camiseta Cat & Dog Guns",
      price: 99.90,
      image: "https://i.postimg.cc/tT3zR2gz/Whats-App-Image-2025-08-01-at-3-05-20-PM-1.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Camiseta oversized com estilo urbano autêntico das ruas de LA. Tecido premium com caimento perfeito.'
    },
    {
      id: 5,
      name: "Camiseta El Chavo 8",
      price: 99.90,
      image: "https://i.postimg.cc/9FrqJLjN/Whats-App-Image-2025-08-01-at-3-05-22-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Camiseta oversized com estilo urbano autêntico das ruas de LA. Tecido premium com caimento perfeito.'
    },
    {
      id: 6,
      name: "Camiseta Death Row",
      price: 99.90,
      image: "https://i.postimg.cc/t49J8D0j/Whats-App-Image-2025-08-01-at-3-05-23-PM.jpg",
      category: 'camiseta',
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Design exclusivo com atitude gangster. Perfeita para quem quer se destacar com estilo.'
    },
    {
      id: 7,
      name: "Camiseta Good Fellas Red Sky",
      price: 99.90,
      image: "https://i.postimg.cc/TY63WQ3D/Whats-App-Image-2025-08-01-at-3-05-23-PM-1.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Inspirada nas ruas de Ferraz City. Design único com elementos urbanos autênticos.'
    },
    {
      id: 8,
      name: "Camiseta Los Pollos",
      price: 99.90,
      image: "https://i.postimg.cc/MZyWxRmK/Whats-App-Image-2025-08-01-at-3-05-24-PM.jpg",
      category: 'camiseta',
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Vibe californiana com toque brasileiro. Conforto e estilo em uma peça única.'
    },
    {
      id: 9,
      name: "Camiseta Pink & Cérebro Breaking Bad",
      price: 99.90,
      image: "https://i.postimg.cc/g06CsFMk/Whats-App-Image-2025-08-01-at-3-05-25-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Para os reis da rua. Design premium com detalhes exclusivos que fazem a diferença.'
    },
    {
      id: 10,
      name: "Camiseta Good Fellas Killers Red",
      price: 99.90,
      image: "https://i.postimg.cc/9XxLDgpx/Whats-App-Image-2025-08-01-at-3-05-26-PM.jpg",
      category: 'camiseta',
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Vermelho intenso que chama atenção. Oversized com atitude e personalidade única.'
    },
    {
      id: 11,
      name: "Camiseta Good Fellas Carro Rosa",
      price: 99.90,
      image: "https://i.postimg.cc/6qSVYSbt/Whats-App-Image-2025-08-01-at-3-05-27-PM.jpg",
      category: 'camiseta',
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Para almas sombrias com estilo. Design gótico moderno com toque contemporâneo.'
    },
    {
      id: 12,
      name: "Camiseta Good Fellas Carro Rosa ll",
      price: 99.90,
      image: "https://i.postimg.cc/j5nkKHVx/Whats-App-Image-2025-08-01-at-3-05-28-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
   {
      id: 13,
      name: "Camiseta Good Fellas Sapato Preto",
      price: 99.90,
      image: "https://i.postimg.cc/qRpzHL6n/Whats-App-Image-2025-08-01-at-3-05-29-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 14,
      name: "Camiseta Sopranos Digital Crime",
      price: 99.90,
      image: "https://i.postimg.cc/Z53R9grp/Whats-App-Image-2025-08-01-at-3-05-29-PM-1.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 15,
      name: "Camiseta Scarface Néon",
      price: 99.90,
      image: "https://i.postimg.cc/yxbd9CQX/Whats-App-Image-2025-08-01-at-3-05-30-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },{
      id: 16,
      name: "Camiseta Scarface Clássica",
      price: 99.90,
      image: "https://i.postimg.cc/MGSG1DD4/Whats-App-Image-2025-08-01-at-3-05-31-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 17,
      name: "Camiseta Sopranos Black",
      price: 99.90,
      image: "https://i.postimg.cc/rs0TB0jx/Whats-App-Image-2025-08-01-at-3-05-32-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 18,
      name: "Camiseta Sopranos Capa De Jornal",
      price: 99.90,
      image: "https://i.postimg.cc/LXZR7gNf/Whats-App-Image-2025-08-01-at-3-05-33-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 19,
      name: "Camiseta Scarface Caos Vermelho",
      price: 99.90,
      image: "https://i.postimg.cc/pdmthnN7/Whats-App-Image-2025-08-01-at-3-05-34-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 20,
      name: "Camiseta Good Fellas Capa de Jornal",
      price: 99.90,
      image: "https://i.postimg.cc/90hPSSGh/Whats-App-Image-2025-08-01-at-3-05-34-PM-2.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 21,
      name: "Camiseta GodFather Gravata",
      price: 99.90,
      image: "https://i.postimg.cc/5y3rkxdL/Whats-App-Image-2025-08-01-at-3-05-35-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 22,
      name: "Camiseta GodFather Marlon Brando",
      price: 99.90,
      image: "https://i.postimg.cc/QxfPQxqr/Whats-App-Image-2025-08-01-at-3-05-36-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 23,
      name: "Camiseta GodFather - O padrinho",
      price: 99.90,
      image: "https://i.postimg.cc/LXMNKnpw/Whats-App-Image-2025-08-01-at-3-05-36-PM-2.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 24,
      name: "Camiseta GodFather 50 anos",
      price: 99.90,
      image: "https://i.postimg.cc/ZnnYTYPF/Whats-App-Image-2025-08-01-at-3-05-37-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 25,
      name: "Camiseta GodFather Cavalo 50 anos",
      price: 99.90,
      image: "https://i.postimg.cc/jqnPQsYJ/Whats-App-Image-2025-08-01-at-3-05-38-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 26,
      name: "Camiseta GodFather 50 anos Clássico",
      price: 99.90,
      image: "https://i.postimg.cc/zf31b2H8/Whats-App-Image-2025-08-01-at-3-05-39-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 27,
      name: "Camiseta GodFather Part II",
      price: 99.90,
      image: "https://i.postimg.cc/7hnRQSJK/Whats-App-Image-2025-08-01-at-3-05-40-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 28,
      name: "Camiseta Scarface Trono",
      price: 99.90,
      image: "https://i.postimg.cc/kMYKWBHC/Whats-App-Image-2025-08-01-at-3-05-41-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 29,
      name: "Camiseta Scarface Trono Solitário",
      price: 99.90,
      image: "https://i.postimg.cc/HnkNRV0H/Whats-App-Image-2025-08-01-at-3-05-41-PM-1.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 31,
      name: "Camiseta Pablo Escobar Coca-Cola",
      price: 99.90,
      image: "https://i.postimg.cc/c1mHq2WL/Whats-App-Image-2025-08-01-at-3-05-43-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 32,
      name: "Camiseta Scarface Tony Montana",
      price: 99.90,
      image: "https://i.postimg.cc/qvtM373N/Whats-App-Image-2025-08-01-at-3-05-44-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 33,
      name: "Camiseta Scarface Red",
      price: 99.90,
      image: "https://i.postimg.cc/pTPHqVpY/Whats-App-Image-2025-08-01-at-3-05-45-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 34,
      name: "Camiseta Nipsey Visionário",
      price: 99.90,
      image: "https://i.postimg.cc/zvcYznp0/Whats-App-Image-2025-08-01-at-3-05-46-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 35,
      name: "Camiseta Mapa Da Coca",
      price: 99.90,
      image: "https://i.postimg.cc/kMh0tvFy/Whats-App-Image-2025-08-01-at-3-05-47-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 36,
      name: "Camiseta Plata ou Plomo",
      price: 99.90,
      image: "https://i.postimg.cc/sgSxLXDt/Whats-App-Image-2025-08-01-at-3-05-48-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 37,
      name: "Camiseta Plata ou Plomo ll",
      price: 99.90,
      image: "https://i.postimg.cc/Bb0fXSG1/Whats-App-Image-2025-08-01-at-3-05-49-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 38,
      name: "Camiseta Ice Cube Presidencial ",
      price: 99.90,
      image: "https://i.postimg.cc/L4tMG1zk/Whats-App-Image-2025-08-01-at-3-05-50-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preta'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 39,
      name: "Camiseta Eazy E Presidencial",
      price: 99.90,
      image: "https://i.postimg.cc/yY7zK8PM/Whats-App-Image-2025-08-01-at-3-05-51-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
    {
      id: 30,
      name: "Camiseta GodFather Al Pacino",
      price: 99.90,
      image: "https://i.postimg.cc/QxVPqKxJ/Whats-App-Image-2025-08-01-at-3-05-42-PM.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Branca'],
      sizes: ['M', 'G', 'GG'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    },
  ];

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)),
          url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
          radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%)
        `,
        backgroundSize: 'cover, cover, 100%',
        backgroundPosition: 'center, center, center',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat'
      }}
    >
      {/* Chain Link Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L30 10L20 20L10 10L20 0ZM0 20L10 30L20 20L10 10L0 20ZM20 20L30 30L20 40L10 30L20 20ZM20 20L30 10L40 20L30 30L20 20Z' fill='none' stroke='%23666' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Gangster Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border border-red-600 rotate-45"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 border border-red-600 -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-red-600 rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-14 border border-red-600 -rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span style={{ fontFamily: '"Cinzel", "Pirata One", "Metal Mania", "Butcherman", serif', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
              {category === 'all' ? 'NOSSA COLEÇÃO' : 'CAMISETAS'}
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Peças oversized com o estilo autêntico das ruas de FERRAZ CITY
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-gray-800/95 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700/30 shadow-2xl"
              onClick={() => onProductClick(product)}
            >
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-bold">
                  NOVO
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); }}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Eye size={20} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); }}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Heart size={20} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); onProductClick(product); }}
                      className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-red-400 font-black text-xl">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;