import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Feather, Heart, RotateCcw, Sparkles } from 'lucide-react';

export const LetterScene = () => {
  const fullText = `My dearest Chella kuttiii,

Happy Birthday to one of the most precious people in my life.

I still remember the first time I met you.
I never knew that one meeting would become the beginning of so many memories.

One thing I will always treasure is the way you have been beside me.

Through happy moments,
through difficult moments,
through ordinary days,
your presence has meant more to me than words can explain.

You are not just someone who became part of my story.
You became part of the way I see my life.

Three years and more have passed,
and when I look back, I realize that the little moments are some of the most beautiful ones.

On your birthday, my biggest wish is not just for today.

I pray that Allah fills your life with happiness, peace, success, good health and beautiful opportunities.

May your dreams come true.
May your heart always have reasons to smile.

And In Sha Allah, we will create many more special moments together.

Our story is still being written.

I hope the pages ahead are even more beautiful, colorful and meaningful than the ones behind us.

Happy Birthday, Nisma Nahar.
Happy Birthday, my Chella kuttiii. ❤️

Forever yours,
Sakeef`;

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 25); // Elegant typewriter typing speed
      return () => clearTimeout(timeout);
    } else {
      setIsFinished(true);
    }
  }, [currentIndex, fullText]);

  const handleReset = () => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsFinished(false);
  };

  const handleShowAll = () => {
    setDisplayedText(fullText);
    setCurrentIndex(fullText.length);
    setIsFinished(true);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '820px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* 3D Glass Parchment Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, rotateX: 6 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.7 }}
        className="glass-panel-gold"
        style={{
          padding: '48px 40px',
          borderRadius: '28px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(45, 25, 60, 0.95) 0%, rgba(20, 10, 35, 0.95) 100%)',
          border: '1px solid rgba(251, 191, 36, 0.4)',
          boxShadow: '0 0 50px rgba(251, 191, 36, 0.2), 0 20px 50px rgba(0, 0, 0, 0.7)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Vintage Floating Quill Icon */}
        <div style={{
          position: 'absolute',
          top: '24px',
          right: '28px',
          opacity: 0.25,
          color: '#fbbf24',
          transform: 'rotate(-25deg)'
        }}>
          <Feather size={90} />
        </div>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px dashed rgba(251, 191, 36, 0.3)',
          paddingBottom: '16px',
          marginBottom: '28px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={22} color="#fbbf24" />
            <span style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              color: '#fef08a',
              fontWeight: 700
            }}>
              A Letter For You 💌
            </span>
          </div>

          {!isFinished && (
            <button
              onClick={handleShowAll}
              style={{
                background: 'rgba(251, 191, 36, 0.15)',
                border: '1px solid rgba(251, 191, 36, 0.4)',
                color: '#fef08a',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Reveal All
            </button>
          )}
        </div>

        {/* Letter Text Body */}
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.12rem',
          lineHeight: '1.9',
          color: '#fef08a',
          whiteSpace: 'pre-line',
          minHeight: '400px',
          textShadow: '0 0 10px rgba(251, 191, 36, 0.2)'
        }}>
          {displayedText}
          {!isFinished && (
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1.2em',
              background: '#ec4899',
              marginLeft: '4px',
              verticalAlign: 'middle',
              animation: 'blink 1s infinite'
            }} />
          )}
        </div>

        {/* Bottom Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '32px',
          paddingTop: '20px',
          borderTop: '1px dashed rgba(251, 191, 36, 0.3)'
        }}>
          <button
            onClick={handleReset}
            className="btn-secondary"
            style={{ fontSize: '0.88rem', padding: '8px 20px' }}
          >
            <RotateCcw size={16} />
            Read Again 💌
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f472b6', fontSize: '0.9rem' }}>
            <Heart size={16} fill="#f472b6" />
            <span>Always & Forever</span>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 600px) {
          .glass-panel-gold {
            padding: 24px 18px !important;
          }
        }
      `}</style>
    </div>
  );
};
