import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      padding: '24px 16px',
      textAlign: 'center',
      marginTop: 'auto',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.86rem',
        color: 'rgba(255, 255, 255, 0.65)',
        background: 'rgba(23, 14, 46, 0.5)',
        backdropFilter: 'blur(10px)',
        padding: '8px 20px',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <span>Made with love for my Chella kuttiii</span>
        <Heart size={14} fill="#ec4899" color="#ec4899" />
        <span style={{ color: '#f472b6', fontWeight: 600 }}>— Sakeef</span>
      </div>
    </footer>
  );
};
