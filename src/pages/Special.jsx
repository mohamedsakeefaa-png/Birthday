import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { SpecialCard } from '../components/SpecialCard';
import { specialReasonsData } from '../data/specialReasonsData';
import { Mail, Sparkles } from 'lucide-react';

export const Special = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px', maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2.4rem',
            color: '#f472b6',
            marginBottom: '4px'
          }}>
            Why You Are Special ❤️
          </h2>
          <h1 className="title-gradient" style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            marginBottom: '12px'
          }}>
            Reasons Close To My Heart
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#cbd5e1',
            fontStyle: 'italic'
          }}>
            "There are so many reasons, but these are some of the ones closest to my heart."
          </p>
        </div>

        {/* 6 Special Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          width: '100%',
          marginBottom: '50px'
        }}>
          {specialReasonsData.map((reason, index) => (
            <SpecialCard key={reason.id} reason={reason} index={index} />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/letter')}
            className="btn-primary"
            style={{ fontSize: '1.05rem', padding: '14px 36px' }}
          >
            <Mail size={18} />
            READ MY LETTER 💌
          </button>
        </div>
      </div>
    </PageTransition>
  );
};
