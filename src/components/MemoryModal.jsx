import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Calendar } from 'lucide-react';

export const MemoryModal = ({ memory, onClose }) => {
  if (!memory) return null;

  return (
    <AnimatePresence>
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(7, 3, 17, 0.85)',
        backdropFilter: 'blur(20px)'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="glass-panel-glow"
          style={{
            maxWidth: '750px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '28px',
            position: 'relative',
            background: 'rgba(23, 14, 46, 0.92)',
            border: '1px solid rgba(236, 72, 153, 0.5)',
            boxShadow: '0 0 50px rgba(236, 72, 153, 0.3), 0 20px 60px rgba(0,0,0,0.8)'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 10,
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <X size={20} />
          </button>

          {/* Full Image */}
          <div style={{ width: '100%', maxHeight: '420px', overflow: 'hidden', position: 'relative' }}>
            <img
              src={memory.image}
              alt={memory.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(23, 14, 46, 1) 0%, transparent 60%)'
            }} />
          </div>

          {/* Details Body */}
          <div style={{ padding: '24px 32px 36px 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{
                background: 'rgba(236, 72, 153, 0.3)',
                color: '#f472b6',
                border: '1px solid rgba(236, 72, 153, 0.5)',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700
              }}>
                {memory.tag}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.85rem' }}>
                <Calendar size={14} />
                <span>{memory.date}</span>
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              color: '#ffffff',
              fontWeight: 700
            }}>
              {memory.title}
            </h2>

            <p style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.4rem',
              color: '#fbbf24',
              lineHeight: 1.4
            }}>
              "{memory.quote}"
            </p>

            <p style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              lineHeight: 1.7
            }}>
              {memory.details}
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button onClick={onClose} className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                Close Story
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
