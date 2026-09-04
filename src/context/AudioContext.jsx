import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const AudioContextState = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [audioSource, setAudioSource] = useState('file');
  const [audioError, setAudioError] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const audioRef = useRef(null);
  const synthCtxRef = useRef(null);
  const synthOscillatorsRef = useRef([]);

  useEffect(() => {
    // Try romantic love audio track
    const audio = new Audio('/audio/birthday-song.mp3');
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handleCanPlay = () => {
      setAudioError(false);
      setAudioSource('file');
    };

    const handleError = () => {
      // Fallback try .wav if mp3 browser decoder issue
      if (audio.src.endsWith('.mp3')) {
        audio.src = '/audio/birthday-song.wav';
        audio.load();
      } else {
        console.warn("Audio file error. Falling back to ambient synth.");
        setAudioError(true);
        setAudioSource('synth');
      }
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);

    const handleFirstInteraction = () => {
      setUserInteracted(true);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.pause();
      stopSynth();
    };
  }, []);

  // Web Audio ambient romantic synth fallback
  const startSynth = () => {
    try {
      if (!synthCtxRef.current) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        synthCtxRef.current = new AudioContextClass();
      }
      if (synthCtxRef.current.state === 'suspended') {
        synthCtxRef.current.resume();
      }

      // Cmaj7 -> Am9 romantic chords (Hz)
      const chordFrequencies = [261.63, 329.63, 392.00, 493.88, 523.25];
      stopSynth();

      const masterGain = synthCtxRef.current.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.15, synthCtxRef.current.currentTime);
      masterGain.connect(synthCtxRef.current.destination);

      chordFrequencies.forEach((freq, idx) => {
        const osc = synthCtxRef.current.createOscillator();
        const oscGain = synthCtxRef.current.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, synthCtxRef.current.currentTime);

        const lfo = synthCtxRef.current.createOscillator();
        lfo.frequency.value = 0.2 + idx * 0.1;
        const lfoGain = synthCtxRef.current.createGain();
        lfoGain.gain.value = 2;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.05, synthCtxRef.current.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        synthOscillatorsRef.current.push({ osc, lfo, gain: oscGain });
      });
    } catch (e) {
      console.warn("Synth failed:", e);
    }
  };

  const stopSynth = () => {
    synthOscillatorsRef.current.forEach(({ osc, lfo }) => {
      try {
        osc.stop();
        lfo.stop();
      } catch (e) {}
    });
    synthOscillatorsRef.current = [];
  };

  const playMusic = () => {
    if (audioSource === 'file' && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio play error, falling back to synth", e);
        setAudioSource('synth');
        startSynth();
        setIsPlaying(true);
      });
    } else {
      startSynth();
      setIsPlaying(true);
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopSynth();
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
      userInteracted,
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
