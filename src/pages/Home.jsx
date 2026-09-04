import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Heart, Sparkles, Calendar, ChevronRight } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1100px',
          margin: 'auto 0'
        }}>
          {/* Left Column: Text & Greetings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Top Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(236, 72, 153, 0.15)',
              border: '1px solid rgba(236, 72, 153, 0.4)',
              padding: '6px 16px',
              borderRadius: '9999px',
              width: 'fit-content'
            }}>
              <Sparkles size={16} color="#fbbf24" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f472b6' }}>
                A Birthday Gift From Sakeef
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h2 style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '2.5rem',
                color: '#f472b6',
                lineHeight: 1.1
              }}>
                Happy Birthday
              </h2>
              <h1 className="title-gradient" style={{
                fontSize: '3.2rem',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '6px'
              }}>
                Nisma Nahar
              </h1>
              <span style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '1.8rem',
                color: '#fbbf24',
                display: 'block'
              }}>
                My Chella kuttiii ❤️
              </span>
            </div>

            {/* Main Messages */}
            <div className="glass-panel" style={{
              padding: '24px',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              background: 'rgba(23, 14, 46, 0.65)'
            }}>
              <p style={{
                fontSize: '1.12rem',
                color: '#ffffff',
                fontWeight: 600,
                lineHeight: 1.6
              }}>
                "You are one of the most beautiful parts of my life. Alhamdulillah for you."
              </p>
              <p style={{
                fontSize: '0.96rem',
                color: '#cbd5e1',
                fontStyle: 'italic',
                lineHeight: 1.5
              }}>
                "In a world full of millions, my heart is grateful that I found you."
              </p>
            </div>

            {/* Details & Date */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                color: '#fef08a',
                border: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                <Calendar size={16} color="#fbbf24" />
                <span>5 September 2026</span>
              </div>

              <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontStyle: 'italic' }}>
                Forever yours, Sakeef ❤️
              </span>
            </div>

            {/* CTA Button */}
            <div style={{ marginTop: '10px' }}>
              <button
                onClick={() => navigate('/memories')}
                className="btn-primary"
                style={{ fontSize: '1.1rem', padding: '16px 36px' }}
              >
                BEGIN OUR STORY ❤️
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Right Column: AI Couple 3D Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <div className="glass-panel-glow perspective-container" style={{
              width: '100%',
              maxWidth: '460px',
              borderRadius: '28px',
              padding: '12px',
              background: 'rgba(28, 16, 52, 0.8)',
              border: '1px solid rgba(236, 72, 153, 0.4)',
              boxShadow: '0 0 40px rgba(236, 72, 153, 0.3), 0 20px 50px rgba(0,0,0,0.6)'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                width: '100%',
                height: '480px'
              }}>
                <img
                  src="/images/couple-hero.jpg"
                  alt="Sakeef and Nisma Nahar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17, 7, 36, 0.9) 0%, transparent 60%)'
                }} />

                {/* Floating Heart Badge on Image */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  background: 'rgba(23, 14, 46, 0.85)',
                  backdropFilter: 'blur(12px)',
                  padding: '12px 18px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <Heart size={24} fill="#ec4899" color="#ec4899" />
                  <div>
                    <p style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
                      Chella Kuttiii ❤️
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      3+ Years of Beautiful Memories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
