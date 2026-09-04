import React from 'react';
import { useAudio } from '../context/AudioContext';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

export const MusicPlayer = () => {
  const { isPlaying, isMuted, togglePlay, toggleMute, audioSource } = useAudio();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255, 255, 255, 0.08)',
      padding: '4px 12px',
      borderRadius: '9999px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(12px)'
    }}>
      {/* Animated Equalizer Visualizer */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '2px',
        height: '14px',
        width: '16px',
        marginRight: '4px'
      }}>
        <span className={isPlaying ? 'eq-bar eq-1' : ''} style={{
          width: '3px',
          height: isPlaying ? '100%' : '4px',
          background: '#ec4899',
          borderRadius: '1px',
          transition: 'height 0.2s ease'
        }} />
        <span className={isPlaying ? 'eq-bar eq-2' : ''} style={{
          width: '3px',
          height: isPlaying ? '100%' : '8px',
          background: '#fbbf24',
          borderRadius: '1px',
          transition: 'height 0.2s ease'
        }} />
        <span className={isPlaying ? 'eq-bar eq-3' : ''} style={{
          width: '3px',
          height: isPlaying ? '100%' : '5px',
          background: '#c084fc',
          borderRadius: '1px',
          transition: 'height 0.2s ease'
        }} />
      </div>

      {/* Play/Pause Toggle */}
      <button
        onClick={togglePlay}
        style={{
          background: 'none',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px'
        }}
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        title={isPlaying ? 'Pause Music' : 'Play Birthday Song'}
      >
        {isPlaying ? <Pause size={17} color="#f472b6" /> : <Play size={17} color="#ffffff" />}
      </button>

      {/* Mute/Unmute Toggle */}
      <button
        onClick={toggleMute}
        style={{
          background: 'none',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px'
        }}
        aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={17} color="#94a3b8" /> : <Volume2 size={17} color="#38bdf8" />}
      </button>

      <style>{`
        @keyframes eqBounce1 { 0%, 100% { height: 4px; } 50% { height: 14px; } }
        @keyframes eqBounce2 { 0%, 100% { height: 14px; } 50% { height: 6px; } }
        @keyframes eqBounce3 { 0%, 100% { height: 8px; } 50% { height: 12px; } }
        .eq-1 { animation: eqBounce1 0.6s infinite ease-in-out; }
        .eq-2 { animation: eqBounce2 0.8s infinite ease-in-out; }
        .eq-3 { animation: eqBounce3 0.7s infinite ease-in-out; }
      `}</style>
    </div>
  );
};
