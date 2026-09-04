import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Gift, Clock, MessageCircle, HeartHandshake, Stars } from 'lucide-react';
import { journeyData } from '../data/journeyData';

export const Timeline3D = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={20} color="#ec4899" />;
      case 'MessageCircle': return <MessageCircle size={20} color="#38bdf8" />;
      case 'HeartHandshake': return <HeartHandshake size={20} color="#f472b6" />;
      case 'Clock': return <Clock size={20} color="#c084fc" />;
      case 'Gift': return <Gift size={22} color="#fbbf24" />;
      case 'Stars': return <Stars size={22} color="#fef08a" />;
      default: return <Heart size={20} color="#ec4899" />;
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '850px',
      margin: '0 auto',
      position: 'relative',
      padding: '20px 0'
    }}>
      {/* 3D Vertical Glowing Central Path Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '50%',
        width: '4px',
        background: 'linear-gradient(to bottom, #ec4899 0%, #c084fc 40%, #fbbf24 80%, #f43f5e 100%)',
        transform: 'translateX(-50%)',
        boxShadow: '0 0 15px #ec4899',
        borderRadius: '2px',
        zIndex: 1
      }} />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '45px',
        position: 'relative',
        zIndex: 2
      }}>
        {journeyData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: isEven ? 'flex-start' : 'flex-end',
                position: 'relative',
                width: '100%'
              }}
            >
              {/* Central Glowing Node Circle */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: item.highlight ? 'linear-gradient(135deg, #fbbf24, #ec4899)' : 'rgba(23, 14, 46, 0.9)',
                border: `2px solid ${item.highlight ? '#ffffff' : '#ec4899'}`,
                boxShadow: item.highlight ? '0 0 25px #fbbf24, 0 0 35px #ec4899' : '0 0 15px rgba(236, 72, 153, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 3
              }}>
                {getIcon(item.icon)}
              </div>

              {/* Milestone Content Card */}
              <div
                className={item.highlight ? 'glass-panel-gold' : 'glass-panel-glow'}
                style={{
                  width: 'calc(50% - 40px)',
                  padding: '24px',
                  borderRadius: '20px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: item.highlight ? '#fbbf24' : '#f472b6',
                    textTransform: 'uppercase'
                  }}>
                    {item.badge}
                  </span>

                  {item.subtitle && (
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: 'rgba(251, 191, 36, 0.2)',
                      color: '#fef08a',
                      padding: '2px 10px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(251, 191, 36, 0.4)'
                    }}>
                      {item.subtitle}
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#ffffff'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.94rem',
                  color: '#cbd5e1',
                  lineHeight: 1.5
                }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="justify-content: flex-start"],
          div[style*="justify-content: flex-end"] {
            justify-content: flex-end !important;
          }
          div[style*="left: 50%"] {
            left: '24px' !important;
            transform: translateY(-50%) !important;
          }
          div[style*="width: calc(50% - 40px)"] {
            width: 'calc(100% - 60px)' !important;
          }
        }
      `}</style>
    </div>
  );
};
