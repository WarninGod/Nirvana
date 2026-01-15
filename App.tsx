import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import BookingPage from './components/BookingPage';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

// Lazy load heavy components for better performance
const Portfolio = lazy(() => import('./components/Portfolio'));
const WoodSculptures = lazy(() => import('./components/WoodSculptures'));

// Loading fallback component
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-nirvana-bg">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-nirvana-gold text-sm uppercase tracking-widest"
    >
      Loading...
    </motion.div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'booking'>('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
    mass: 0.5
  });

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleNavigateToBooking = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentPage('booking');
  }, []);

  const handleNavigateToHome = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentPage('home');
  }, []);

  return (
    <main className="relative min-h-screen bg-nirvana-bg text-nirvana-light selection:bg-nirvana-gold/30 selection:text-nirvana-gold">
      {/* Global Progress Bar (Only visible on Home) */}
      {currentPage === 'home' && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-nirvana-gold origin-left z-50"
          style={{ scaleX, willChange: 'transform' }}
        />
      )}

      {/* Conditionally Render Pages */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar onOpenBooking={handleNavigateToBooking} />
            
            <div id="home">
              <Hero onOpenBooking={handleNavigateToBooking} />
            </div>
            
            <div id="services">
              <Services />
            </div>
            
            <Suspense fallback={<LoadingFallback />}>
              <div id="sculptures">
                <WoodSculptures />
              </div>
            </Suspense>

            <Suspense fallback={<LoadingFallback />}>
              <div id="portfolio">
                <Portfolio />
              </div>
            </Suspense>
            
            <div id="contact">
              <Contact onOpenBooking={handleNavigateToBooking} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="booking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
             {/* We can reuse Navbar if desired, or keep BookingPage standalone. 
                 Let's keep BookingPage standalone for a cleaner "focused" experience. */}
             <BookingPage onBack={handleNavigateToHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;