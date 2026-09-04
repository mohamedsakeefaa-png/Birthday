import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';
import { Gift, Heart, Sparkles, Cake, RotateCcw, Stars } from 'lucide-react';

export const SurpriseGift = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenSurprise = () => {
    setIsOpen(true);

    // Fire Confetti Explosion
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#ec4899', '#fbbf24', '#ffffff']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#f43f5e', '#c084fc', '#38bdf8']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#fbbf24', '#f472b6']
    });
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative'
    }}>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Initial Gift Unopened Stage */
          <motion.div
            key="unopened"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-panel-glow"
            style={{
              padding: '60px 36px',
              borderRadius: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              width: '100%',
              background: 'radial-gradient(circle at 50% 30%, rgba(45, 18, 75, 0.95) 0%, rgba(15, 7, 30, 0.95) 100%)'
            }}
          >
            {/* Glowing 3D Gift Box Visual */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateZ: [0, -2, 2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                position: 'relative',
                width: '140px',
                height: '140px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                boxShadow: '0 0 50px rgba(236, 72, 153, 0.7), 0 15px 35px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              onClick={handleOpenSurprise}
            >
              {/* Ribbon Overlay */}
              <div style={{
                position: 'absolute',
                width: '24px',
                height: '100%',
                background: '#fbbf24',
                boxShadow: '0 0 10px #fbbf24'
              }} />
              <div style={{
                position: 'absolute',
                height: '24px',
                width: '100%',
                background: '#fbbf24',
                boxShadow: '0 0 10px #fbbf24'
              }} />
              <Gift size={64} color="#ffffff" style={{ zIndex: 2 }} />
            </motion.div>

            <div>
              <h2 style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '2.5rem',
                color: '#f472b6',
                marginBottom: '8px'
              }}>
                One Last Surprise, My Chella kuttiii ❤️
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#cbd5e1',
                fontFamily: "'Playfair Display', serif"
              }}>
                I kept something special for you...
              </p>
            </div>

            <button
              onClick={handleOpenSurprise}
              className="btn-primary"
              style={{
                fontSize: '1.15rem',
                padding: '16px 40px',
                boxShadow: '0 0 35px rgba(236, 72, 153, 0.8)'
              }}
            >
              <Sparkles size={22} color="#fbbf24" />
              OPEN YOUR SURPRISE 🎁
            </button>
          </motion.div>
        ) : (
          /* Opened Birthday Celebration Stage */
          <motion.div
            key="opened"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-gold"
            style={{
              padding: '50px 36px',
              borderRadius: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              width: '100%',
              background: 'radial-gradient(circle at 50% 20%, rgba(55, 25, 80, 0.95) 0%, rgba(18, 8, 35, 0.98) 100%)',
              border: '1px solid rgba(251, 191, 36, 0.5)',
              boxShadow: '0 0 60px rgba(251, 191, 36, 0.3), 0 20px 60px rgba(0,0,0,0.8)'
            }}
          >
            {/* 3D Birthday Cake & Candles Graphic */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}>
              <div style={{
                padding: '20px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(251, 191, 36, 0.6)'
              }}>
                <Cake size={72} color="#fbbf24" />
              </div>
            </div>

            {/* Grand Birthday Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '2.2rem',
                color: '#f472b6'
              }}>
                Happy Birthday
              </span>

              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.8rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #ffffff 0%, #fef08a 50%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '1px'
              }}>
                NISMA NAHAR ❤️
              </h1>

              <span style={{
                fontSize: '1.4rem',
                fontFamily: "'Dancing Script', cursive",
                color: '#ec4899'
              }}>
                My Chella kuttiii
              </span>
            </div>

            {/* Heartfelt Birthday Wishes */}
            <div className="glass-panel" style={{
              padding: '24px 32px',
              borderRadius: '20px',
              maxWidth: '650px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: '#f8fafc',
                lineHeight: 1.8,
                fontFamily: "'Playfair Display', serif"
              }}>
                "May your life always be filled with happiness, peace, love, success and beautiful moments.
                <br /><br />
                In Sha Allah, we will make our special moments even more colourful."
              </p>
            </div>

            {/* Signature */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '1rem', color: '#94a3b8', fontStyle: 'italic' }}>
                Forever yours,
              </span>
              <span style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '2rem',
                color: '#f472b6',
                fontWeight: 700
              }}>
                Sakeef ❤️
              </span>
            </div>

            {/* Final CTA */}
            <button
              onClick={() => navigate('/')}
              className="btn-primary"
              style={{
                marginTop: '12px',
                fontSize: '1.05rem',
                padding: '14px 36px'
              }}
            >
              <RotateCcw size={18} />
              START OUR STORY AGAIN ❤️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
