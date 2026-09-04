import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const SpecialCard = ({ reason, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const IconComponent = Icons[reason.icon] || Icons.Heart;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        width: '100%'
      }}
    >
      <div
        className="glass-panel"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
          padding: '30px 24px',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '16px',
          height: '100%',
          background: 'rgba(23, 14, 46, 0.65)',
          border: `1px solid ${reason.color}40`,
          boxShadow: `0 0 25px ${reason.bgGlow}, 0 10px 30px rgba(0,0,0,0.4)`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Glow Sphere Background */}
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: reason.bgGlow,
          filter: 'blur(30px)',
          zIndex: 0
        }} />

        {/* Icon Badge */}
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${reason.color}30 0%, rgba(23, 14, 46, 0.8) 100%)`,
          border: `1px solid ${reason.color}60`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 20px ${reason.bgGlow}`,
          zIndex: 1
        }}>
          <IconComponent size={30} color={reason.color} />
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#ffffff',
          zIndex: 1
        }}>
          {reason.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '0.96rem',
          color: '#cbd5e1',
          lineHeight: 1.6,
          zIndex: 1
        }}>
          {reason.text}
        </p>
      </div>
    </motion.div>
  );
};
