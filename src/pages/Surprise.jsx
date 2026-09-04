import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SurpriseGift } from '../components/SurpriseGift';

export const Surprise = () => {
  return (
    <PageTransition>
      <div className="page-container" style={{ justifyContent: 'center' }}>
        <SurpriseGift />
      </div>
    </PageTransition>
  );
};
