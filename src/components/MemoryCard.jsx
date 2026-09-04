import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Heart } from 'lucide-react';

export const MemoryCard = ({ memory, onSelect }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(memory)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        cursor: 'pointer',
        width: '100%'
      }}
    >
      <div
        className="glass-panel-glow"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
          transformStyle: 'preserve-3d',
          overflow: 'hidden',
          borderRadius: '24px',
          position: 'relative'
        }}
      >
        {/* Photo Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '240px',
          overflow: 'hidden'
        }}>
          <img
            src={memory.image}
            alt={memory.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            className="memory-card-img"
          />

          {/* Overlay Gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(17, 7, 36, 0.95) 0%, rgba(17, 7, 36, 0.3) 50%, transparent 100%)'
          }} />

          {/* Chapter Tag */}
          <span style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: 'rgba(236, 72, 153, 0.85)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            fontSize: '0.72rem',
            fontWeight: 700,
            padding: '4px 12px',
            borderRadius: '9999px',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 12px rgba(236, 72, 153, 0.4)'
          }}>
            {memory.tag}
          </span>

          {/* Zoom Icon */}
          <div style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <Maximize2 size={15} />
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.25rem',
              color: '#ffffff',
              fontWeight: 700
            }}>
              {memory.title}
            </h3>
            <Heart size={16} fill="#ec4899" color="#ec4899" />
          </div>

          <p style={{
            fontStyle: 'italic',
            fontSize: '0.88rem',
            color: '#f472b6',
            lineHeight: 1.4
          }}>
            "{memory.quote}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};
