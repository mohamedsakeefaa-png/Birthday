import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MusicPlayer } from './MusicPlayer';
import { Menu, X, Heart, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/memories', label: 'Memories' },
    { path: '/special', label: 'Special' },
    { path: '/letter', label: 'Letter' },
    { path: '/journey', label: 'Journey' },
    { path: '/surprise', label: 'Surprise' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: '12px 24px',
      transition: 'all 0.3s ease'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '9999px',
        borderColor: 'rgba(255, 255, 255, 0.16)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
      }}>
        {/* Brand Logo & Title */}
        <NavLink to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          color: '#ffffff'
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(236, 72, 153, 0.6)'
          }}>
            <Heart size={20} fill="#ffffff" color="#ffffff" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#f472b6',
              lineHeight: 1.1,
              letterSpacing: '0.5px'
            }}>
              For My Chella Kuttiii ❤️
            </span>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '1px' }}>
              NISMA NAHAR • 5 SEPT 2026
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={{
                  position: 'relative',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.75)',
                  background: isActive ? 'rgba(236, 72, 153, 0.25)' : 'transparent',
                  border: isActive ? '1px solid rgba(236, 72, 153, 0.5)' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 15px rgba(236, 72, 153, 0.3)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#fbbf24',
                    boxShadow: '0 0 8px #fbbf24'
                  }} />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Section: Music Player & Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <MusicPlayer />

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="glass-panel-glow" style={{
          position: 'absolute',
          top: '75px',
          left: '20px',
          right: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 99
        }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '12px 18px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                  background: isActive ? 'linear-gradient(90deg, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.4))' : 'rgba(255, 255, 255, 0.05)',
                  border: isActive ? '1px solid rgba(236, 72, 153, 0.6)' : '1px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
                {isActive && <Sparkles size={16} color="#fbbf24" />}
              </NavLink>
            );
          })}
        </div>
      )}

      {/* Media query styling for responsive navbar */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
