import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import BookingPage from './components/BookingPage';
import ServicePageLayout from './components/services/ServicePageLayout';
import { ServiceType } from './components/services/serviceData';
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

type PageType = 'home' | 'booking' | 'service-kitchens' | 'service-media-panels' | 'service-interior-decor';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
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

  const handleNavigateToService = useCallback((serviceType: ServiceType) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentPage(`service-${serviceType}` as PageType);
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
              <Services onExploreService={handleNavigateToService} />
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
        ) : currentPage === 'booking' ? (
          <motion.div
            key="booking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
             <BookingPage onBack={handleNavigateToHome} />
          </motion.div>
        ) : (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ServicePageLayout
              serviceType={currentPage.replace('service-', '') as ServiceType}
              onBack={handleNavigateToHome}
              onOpenBooking={handleNavigateToBooking}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;