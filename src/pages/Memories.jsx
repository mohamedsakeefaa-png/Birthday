import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { MemoryCard } from '../components/MemoryCard';
import { MemoryModal } from '../components/MemoryModal';
import { memoriesData } from '../data/memoriesData';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Memories = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2.4rem',
            color: '#f472b6',
            marginBottom: '4px'
          }}>
            Our Beautiful Memories ❤️
          </h2>
          <h1 className="title-gradient" style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            marginBottom: '12px'
          }}>
            Chapter II: Previews of Us
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#cbd5e1',
            fontStyle: 'italic'
          }}>
            "Every picture tells a story, but our story is my favorite."
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          width: '100%',
          marginBottom: '50px'
        }}>
          {memoriesData.map((memory) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              onSelect={setSelectedMemory}
            />
          ))}
        </div>

        {/* Bottom CTA Navigation Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/special')}
            className="btn-primary"
            style={{ fontSize: '1.05rem', padding: '14px 36px' }}
          >
            <span>See Why You're Special</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Modal Lightbox */}
        {selectedMemory && (
          <MemoryModal
            memory={selectedMemory}
            onClose={() => setSelectedMemory(null)}
          />
        )}
      </div>
    </PageTransition>
  );
};
