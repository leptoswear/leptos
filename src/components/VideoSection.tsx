import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span style={{ fontFamily: '"Cinzel", "Pirata One", "Metal Mania", "Butcherman", serif', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
              VIBE LEPTOSWEAR
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Sinta a energia das ruas de Ferraz City
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
            {/* Video Thumbnail */}
            <img 
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Leptoswear Video"
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="group bg-red-600 hover:bg-red-700 text-white rounded-full p-6 transition-all duration-300 transform hover:scale-110">
                <Play size={32} className="ml-1" />
              </button>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Video Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl font-bold mb-2">
                Conheça o Estilo Leptoswear
              </h3>
              <p className="text-gray-300">
                Descubra como nossas peças oversized transformam seu visual
              </p>
            </div>
          </div>
          
          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-black text-red-400 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Algodão Premium</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-red-400 mb-1">180g</div>
              <div className="text-gray-400 text-sm">Gramatura</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-red-400 mb-1">5★</div>
              <div className="text-gray-400 text-sm">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;