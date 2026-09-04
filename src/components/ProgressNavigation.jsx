import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const ProgressNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { path: '/', name: 'Home', step: 1 },
    { path: '/memories', name: 'Memories', step: 2 },
    { path: '/special', name: 'Special', step: 3 },
    { path: '/letter', name: 'Letter', step: 4 },
    { path: '/journey', name: 'Journey', step: 5 },
    { path: '/surprise', name: 'Surprise', step: 6 },
  ];

  const currentIndex = routes.findIndex((r) => r.path === location.pathname);
  const activeIndex = currentIndex === -1 ? 0 : currentIndex;
  const currentStep = activeIndex + 1;

  const handlePrev = () => {
    if (activeIndex > 0) {
      navigate(routes[activeIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (activeIndex < routes.length - 1) {
      navigate(routes[activeIndex + 1].path);
    } else {
      navigate('/');
    }
  };

  const prevRoute = activeIndex > 0 ? routes[activeIndex - 1] : null;
  const nextRoute = activeIndex < routes.length - 1 ? routes[activeIndex + 1] : routes[0];

  return (
    <div style={{
      position: 'fixed',
      bottom: '18px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 90,
      width: '92%',
      maxWidth: '850px'
    }}>
      <div className="glass-panel-glow" style={{
        padding: '12px 22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '9999px',
        background: 'rgba(17, 8, 36, 0.85)',
        border: '1px solid rgba(236, 72, 153, 0.4)',
        boxShadow: '0 0 25px rgba(236, 72, 153, 0.25), 0 10px 40px rgba(0,0,0,0.6)'
      }}>
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="btn-secondary"
          style={{
            padding: '8px 16px',
            fontSize: '0.85rem',
            opacity: activeIndex === 0 ? 0.35 : 1,
            cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
            minWidth: '100px'
          }}
          aria-label="Previous Page"
        >
          <ChevronLeft size={16} />
          <span className="nav-btn-text">Previous</span>
        </button>

        {/* Center Progress Timeline */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          flex: 1,
          padding: '0 16px'
        }}>
          {/* Step Dots & Line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '360px',
            position: 'relative'
          }}>
            {/* Background Line */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '12px',
              right: '12px',
              height: '3px',
              background: 'rgba(255, 255, 255, 0.15)',
              transform: 'translateY(-50%)',
              zIndex: 1
            }} />

            {/* Filled Progress Line */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '12px',
              width: `${(activeIndex / (routes.length - 1)) * 92}%`,
              height: '3px',
              background: 'linear-gradient(90deg, #ec4899, #fbbf24)',
              boxShadow: '0 0 10px #ec4899',
              transform: 'translateY(-50%)',
              transition: 'width 0.4s ease',
              zIndex: 2
            }} />

            {/* Dots */}
            {routes.map((r, idx) => {
              const isActive = idx === activeIndex;
              const isPassed = idx < activeIndex;

              return (
                <button
                  key={r.path}
                  onClick={() => navigate(r.path)}
                  title={r.name}
                  style={{
                    width: isActive ? '20px' : '12px',
                    height: isActive ? '20px' : '12px',
                    borderRadius: '50%',
                    background: isActive
                      ? 'radial-gradient(circle, #fbbf24 0%, #ec4899 100%)'
                      : isPassed
                      ? '#ec4899'
                      : 'rgba(255, 255, 255, 0.25)',
                    border: isActive ? '3px solid #ffffff' : 'none',
                    boxShadow: isActive ? '0 0 15px #fbbf24, 0 0 20px #ec4899' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    zIndex: 3,
                    margin: '0 auto'
                  }}
                />
              );
            })}
          </div>

          {/* Chapter Text Indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: '#cbd5e1',
            letterSpacing: '0.5px'
          }}>
            <span style={{ color: '#fbbf24' }}>{currentStep} / 6</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span style={{ color: '#ffffff' }}>{routes[activeIndex].name}</span>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="btn-primary"
          style={{
            padding: '8px 18px',
            fontSize: '0.85rem',
            minWidth: '100px'
          }}
          aria-label="Next Page"
        >
          <span className="nav-btn-text">
            {activeIndex === routes.length - 1 ? 'Start Over' : 'Next'}
          </span>
          {activeIndex === routes.length - 1 ? <Sparkles size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .nav-btn-text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
