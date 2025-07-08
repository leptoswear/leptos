import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span style={{ fontFamily: '"Cinzel", "Pirata One", "Metal Mania", "Butcherman", serif', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
              GANGSTER VIBES
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            A verdadeira essência das ruas - Crips Style
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
            {/* Video Thumbnail - Gangster Crips Style */}
            <img 
              src="https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Gangster Crips Dance"
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white rounded-full p-8 transition-all duration-300 transform hover:scale-110 shadow-2xl">
                <Play size={40} className="ml-1" />
              </button>
            </div>
            
            {/* Blue Gradient Overlay - Crips Colors */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
            
            {/* Video Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-black mb-2" style={{ fontFamily: '"Cinzel", "Pirata One", "Metal Mania", "Butcherman", serif' }}>
                CRIPS DANCE MOVES
              </h3>
              <p className="text-blue-200 text-lg">
                Autêntico estilo gangster das ruas - Represente com atitude
              </p>
            </div>
            
            {/* Crips Badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-blue-600/90 text-white px-4 py-2 rounded-full font-black text-sm">
                CRIPS STYLE
              </div>
            </div>
          </div>
          
          {/* Video Stats - Updated for Gangster Theme */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-black text-blue-400 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Gangster Authentic</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-blue-400 mb-1">CRIPS</div>
              <div className="text-gray-400 text-sm">Street Culture</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-blue-400 mb-1">REAL</div>
              <div className="text-gray-400 text-sm">Street Moves</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;