import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { Timeline3D } from '../components/Timeline3D';
import { Gift } from 'lucide-react';

export const Journey = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '750px' }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2.4rem',
            color: '#f472b6',
            marginBottom: '4px'
          }}>
            Our Journey ❤️
          </h2>
          <h1 className="title-gradient" style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            marginBottom: '12px'
          }}>
            Chapter V: Timeline of Love
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#cbd5e1',
            fontStyle: 'italic',
            lineHeight: 1.6
          }}>
            "Three years and more... , our story is still being written and in sha allah we will live together forever with Allah's help"
          </p>
        </div>

        {/* 3D Timeline Component */}
        <Timeline3D />

        {/* Bottom CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>
          <button
            onClick={() => navigate('/surprise')}
            className="btn-primary"
            style={{
              fontSize: '1.1rem',
              padding: '16px 40px',
              boxShadow: '0 0 30px rgba(236, 72, 153, 0.8)'
            }}
          >
            <Gift size={20} color="#fbbf24" />
            ONE LAST SURPRISE 🎁
          </button>
        </div>
      </div>
    </PageTransition>
  );
};
