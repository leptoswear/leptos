import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Lista de músicas (usando URLs do YouTube convertidas ou outras fontes)
  const playlist = [
    {
      title: "Gangster Paradise",
      artist: "Coolio",
      url: "https://www.youtube.com/watch?v=oTB64AuSIYk&list=RDoTB64AuSIYk&start_radio=1" // Substitua por URLs reais
    },
    {
      title: "Still D.R.E.",
      artist: "Dr. Dre",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Substitua por URLs reais
    },
    {
      title: "Straight Outta Compton",
      artist: "N.W.A",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Substitua por URLs reais
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.loop = false;
      
      const handleEnded = () => {
        nextTrack();
      };

      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, [currentTrack, volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrack + 1) % playlist.length;
    setCurrentTrack(nextIndex);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current?.play().catch(console.error);
      }, 100);
    }
  };

  const prevTrack = () => {
    const prevIndex = currentTrack === 0 ? playlist.length - 1 : currentTrack - 1;
    setCurrentTrack(prevIndex);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current?.play().catch(console.error);
      }, 100);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors"
        title="Mostrar player de música"
      >
        <Volume2 size={20} />
      </button>
    );
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={playlist[currentTrack]?.url}
        preload="metadata"
      />
      
      <div className="fixed bottom-4 right-4 z-50 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-2xl max-w-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm truncate">
              {playlist[currentTrack]?.title}
            </p>
            <p className="text-gray-400 text-xs truncate">
              {playlist[currentTrack]?.artist}
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors ml-2"
            title="Minimizar player"
          >
            ×
          </button>
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <button
            onClick={prevTrack}
            className="text-gray-400 hover:text-white transition-colors"
            title="Música anterior"
          >
            <SkipBack size={16} />
          </button>
          
          <button
            onClick={togglePlay}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            title={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          
          <button
            onClick={nextTrack}
            className="text-gray-400 hover:text-white transition-colors"
            title="Próxima música"
          >
            <SkipForward size={16} />
          </button>
          
          <button
            onClick={toggleMute}
            className="text-gray-400 hover:text-white transition-colors"
            title={isMuted ? "Ativar som" : "Silenciar"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Volume2 size={14} className="text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
            }}
          />
        </div>

        <div className="mt-2 text-xs text-gray-500 text-center">
          {currentTrack + 1} de {playlist.length}
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;