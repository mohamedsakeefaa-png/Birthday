import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { LetterScene } from '../components/LetterScene';
import { ArrowRight } from 'lucide-react';

export const Letter = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '35px', maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2.4rem',
            color: '#f472b6',
            marginBottom: '4px'
          }}>
            From My Heart To Yours 💌
          </h2>
          <h1 className="title-gold-gradient" style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            marginBottom: '10px'
          }}>
            A Personal Note
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#cbd5e1',
            fontStyle: 'italic'
          }}>
            "Words written especially for you on your special day."
          </p>
        </div>

        {/* 3D Letter Scene Component */}
        <LetterScene />

        {/* Bottom CTA Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>
          <button
            onClick={() => navigate('/journey')}
            className="btn-primary"
            style={{ fontSize: '1.05rem', padding: '14px 36px' }}
          >
            <span>Continue to Our Journey</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </PageTransition>
  );
};
