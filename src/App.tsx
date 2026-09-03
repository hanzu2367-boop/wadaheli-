import { useState } from 'react';
import LockScreen from './LockScreenPasswordSource';
import HeroSection from './components/sections/HeroSection';
import TimelineSection from './components/sections/TimelineSection';
import PhotoGallerySection from './components/sections/PhotoGallerySection';
import LoveLettersSection from './components/sections/LoveLettersSection';
import MusicSection from './components/sections/MusicSection';
import SurpriseSection from './components/sections/SurpriseSection';
import FloatingButterflies from './components/effects/FloatingButterflies';
import FloatingHearts from './components/effects/FloatingHearts';
import TwinklingStars from './components/effects/TwinklingStars';
import SparkleEffect from './components/effects/SparkleEffect';
import ClickHeartEffect from './components/ClickHeartEffect';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [isLocked, setIsLocked] = useState(true);

  if (isLocked) {
    return <LockScreen onUnlock={() => setIsLocked(false)} />;
  }

  return (
    <div className="relative min-h-screen select-none cursor-heart">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Global floating effects */}
      <TwinklingStars />
      <FloatingHearts />
      <FloatingButterflies />
      <SparkleEffect />
      <ClickHeartEffect />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />

        {/* Section divider */}
        <div className="relative h-24 overflow-hidden">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="rgba(253, 246, 235, 0.3)" />
          </svg>
        </div>

        <TimelineSection />

        <div className="relative h-16">
          <div className="absolute left-1/2 -translate-x-1/2">
            <svg width="40" height="20" viewBox="0 0 40 20">
              <path d="M15 5 C15 2, 18 0, 20 3 C22 0, 25 2, 25 5 C25 10, 20 13, 20 13 C20 13, 15 10, 15 5Z" fill="#f8a0b5" opacity="0.3" />
            </svg>
          </div>
        </div>

        <PhotoGallerySection />

        <div className="relative h-16">
          <div className="absolute left-1/2 -translate-x-1/2">
            <svg width="40" height="20" viewBox="0 0 40 20">
              <path d="M15 5 C15 2, 18 0, 20 3 C22 0, 25 2, 25 5 C25 10, 20 13, 20 13 C20 13, 15 10, 15 5Z" fill="#b9a3d8" opacity="0.3" />
            </svg>
          </div>
        </div>

        <LoveLettersSection />

        <div className="relative h-16">
          <div className="absolute left-1/2 -translate-x-1/2">
            <svg width="40" height="20" viewBox="0 0 40 20">
              <path d="M15 5 C15 2, 18 0, 20 3 C22 0, 25 2, 25 5 C25 10, 20 13, 20 13 C20 13, 15 10, 15 5Z" fill="#f8a0b5" opacity="0.3" />
            </svg>
          </div>
        </div>

        <MusicSection />

        <div className="relative h-16">
          <div className="absolute left-1/2 -translate-x-1/2">
            <svg width="40" height="20" viewBox="0 0 40 20">
              <path d="M15 5 C15 2, 18 0, 20 3 C22 0, 25 2, 25 5 C25 10, 20 13, 20 13 C20 13, 15 10, 15 5Z" fill="#b9a3d8" opacity="0.3" />
            </svg>
          </div>
        </div>

        <SurpriseSection />

        <Footer />
      </main>
    </div>
  );
}

export default App;
