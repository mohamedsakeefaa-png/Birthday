import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { AudioProvider } from './context/AudioContext';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { ProgressNavigation } from './components/ProgressNavigation';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Memories } from './pages/Memories';
import { Special } from './pages/Special';
import { Letter } from './pages/Letter';
import { Journey } from './pages/Journey';
import { Surprise } from './pages/Surprise';

// Scroll to top automatically when location changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/special" element={<Special />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <AudioProvider>
      <Router>
        <ScrollToTop />
        <ThreeBackground />
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1
        }}>
          <Navbar />
          <main style={{ flex: 1, width: '100%' }}>
            <AnimatedRoutes />
          </main>
          <Footer />
          <ProgressNavigation />
        </div>
      </Router>
    </AudioProvider>
  );
}
