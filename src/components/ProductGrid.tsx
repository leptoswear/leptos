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
      name: "Camiseta Oversized LA Street",
      price: 89.90,
      image: "https://dcdn-us.mitiendanube.com/stores/004/961/337/products/1-71a6e09d38dfce70e417437800359925-480-0.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preto', 'Branco', 'Cinza'],
      sizes: ['P', 'M', 'G', 'GG', 'G3'],
      description: 'Camiseta oversized com estilo urbano autêntico das ruas de LA. Tecido premium com caimento perfeito.'
    },
    {
      id: 2,
      name: "Camiseta Gangster Black",
      price: 79.90,
      image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lznuuwomwr41ee",
      category: 'camiseta',
      colors: ['Preto', 'Vermelho', 'Branco'],
      sizes: ['P', 'M', 'G', 'GG', 'G3'],
      description: 'Design exclusivo com atitude gangster. Perfeita para quem quer se destacar com estilo.'
    },
    {
      id: 3,
      name: "Camiseta Urban Ferraz",
      price: 94.90,
      image: "https://www.tsetecustom.com/cdn/shop/files/Camiseta_B_sica_Unissex_Fake_Mafia_Night-2197-4b34-b2d7-652171be0947.jpg?v=1724173150",
      category: 'camiseta',
      isNew: true,
      colors: ['Preto', 'Cinza', 'Verde Militar'],
      sizes: ['P', 'M', 'G', 'GG', 'G3'],
      description: 'Inspirada nas ruas de Ferraz City. Design único com elementos urbanos autênticos.'
    },
    {
      id: 4,
      name: "Camiseta LA Vibes",
      price: 94.90,
      image: "https://uzistore.com.br/cdn/shop/files/camisa-hype-trap-gangster-ultra-larga_2-min.jpg?v=1737124336",
      category: 'camiseta',
      colors: ['Branco', 'Preto', 'Azul Marinho'],
      sizes: ['P', 'M', 'G', 'GG', 'G3'],
      description: 'Vibe californiana com toque brasileiro. Conforto e estilo em uma peça única.'
    },
    {
      id: 5,
      name: "Camiseta Street King",
      price: 99.90,
      image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m0nbc9magyhs26",
      category: 'camiseta',
      isNew: true,
      colors: ['Preto', 'Dourado', 'Prata'],
      sizes: ['P', 'M', 'G', 'GG', 'G3'],
      description: 'Para os reis da rua. Design premium com detalhes exclusivos que fazem a diferença.'
    },
    {
      id: 6,
      name: "Camiseta Oversized Red",
      price: 84.90,
      image: "https://down-br.img.susercontent.com/file/sg-11134201-7rcdg-lthbl614ecyk7b",
      category: 'camiseta',
      colors: ['Vermelho', 'Preto', 'Branco'],
      sizes: ['P', 'M', 'G', 'GG', 'G3'],
      description: 'Vermelho intenso que chama atenção. Oversized com atitude e personalidade única.'
    },
    {
      id: 7,
      name: "Camiseta Dark Soul",
      price: 89.90,
      image: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7CA1oWTvhXVAL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png",
      category: 'camiseta',
      colors: ['Preto', 'Cinza Escuro', 'Roxo'],
      sizes: ['P', 'M', 'G', 'GG', 'G3'],
      description: 'Para almas sombrias com estilo. Design gótico moderno com toque contemporâneo.'
    },
    {
      id: 8,
      name: "Camiseta Rebel Spirit",
      price: 92.90,
      image: "https://ae01.alicdn.com/kf/Sc161ed77982c4171bc81cda79c99ba95q.jpg",
      category: 'camiseta',
      isNew: true,
      colors: ['Preto', 'Branco', 'Vermelho'],
      sizes: ['P', 'M', 'G', 'GG', 'G3'],
      description: 'Espírito rebelde em cada fio. Para quem não segue regras e cria seu próprio estilo.'
    }
  ];

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Chain Link Fence Pattern */}
        <div 
          className="w-full h-full opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 0l15 15-15 15-15-15L30 0zm0 30l15 15-15 15-15-15L30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Urban Street Background */}
        <img 
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
          alt="Urban Street Background" 
          className="w-full h-full object-cover opacity-10 blur-sm"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95"></div>
        
        {/* Additional Gangster Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-red-600 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-red-600 rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-red-600 -rotate-45"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span style={{ fontFamily: '"Cinzel", "Pirata One", "Metal Mania", "Butcherman", serif', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
              {category === 'all' ? 'NOSSA COLEÇÃO' : 'CAMISETAS'}
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Peças oversized com o estilo autêntico das ruas de FERRAZ CITY
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700/50"
              onClick={() => onProductClick(product)}
            >
              {/* Card Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent pointer-events-none"></div>
              
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
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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