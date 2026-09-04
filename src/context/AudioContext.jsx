import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const AudioContextState = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [audioSource, setAudioSource] = useState('file');
  const [audioError, setAudioError] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    // Try multiple possible audio URLs for static host compatibility
    const possibleUrls = [
      './audio/birthday-song.mp3',
      '/Birthday/audio/birthday-song.mp3',
      './birthday-song.mp3',
      '/Birthday/birthday-song.mp3',
      '/audio/birthday-song.mp3'
    ];

    let currentUrlIndex = 0;
    
    // Create DOM audio element with multi-codec source tags for AAC / M4A / MP3 container support
    const audio = document.createElement('audio');
    audio.loop = true;
    audio.volume = volume;
    audio.preload = 'auto';

    const loadSources = (url) => {
      // Clear existing sources
      while (audio.firstChild) {
        audio.removeChild(audio.firstChild);
      }
      
      const mimeTypes = ['audio/mpeg', 'audio/mp4', 'audio/aac', 'audio/x-m4a'];
      mimeTypes.forEach(type => {
        const source = document.createElement('source');
        source.src = url;
        source.type = type;
        audio.appendChild(source);
      });
      
      audio.load();
    };

    loadSources(possibleUrls[0]);
    audioRef.current = audio;

    const handleCanPlay = () => {
      setAudioError(false);
      setAudioSource('file');
      console.log("Audio ready to play from:", audio.currentSrc || possibleUrls[currentUrlIndex]);
    };

    const handleError = (err) => {
      currentUrlIndex++;
      if (currentUrlIndex < possibleUrls.length) {
        console.warn("Retrying audio from next URL:", possibleUrls[currentUrlIndex]);
        loadSources(possibleUrls[currentUrlIndex]);
      } else {
        console.warn("All audio paths failed.");
        setAudioError(true);
      }
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);

    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Play error:", e);
      });
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
    }
  };

  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  return (
    <AudioContextState.Provider value={{
      isPlaying,
      isMuted,
      volume,
      audioSource,
      audioError,
      togglePlay,
      toggleMute,
      handleVolumeChange,
      playMusic,
      pauseMusic
    }}>
      {children}
    </AudioContextState.Provider>
  );
};

export const useAudio = () => useContext(AudioContextState);
