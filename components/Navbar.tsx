import React, { useState, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onOpenBooking: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Joinery', href: '#sculptures' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b border-transparent",
        isScrolled 
          ? "bg-nirvana-bg/90 backdrop-blur-md border-nirvana-light/5 py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <motion.img 
            src="/nirvananobg.png" 
            alt="Nirvana Interiors" 
            className={cn(
              "transition-all duration-500 object-contain",
              isScrolled ? "h-14" : "h-20"
            )}
            whileHover={{ scale: 1.05 }}
          />
          
          <div className="flex flex-col justify-center">
            <span className={cn(
              "font-serif tracking-widest text-nirvana-light leading-none group-hover:text-nirvana-gold transition-colors duration-300",
              isScrolled ? "text-xl" : "text-2xl"
            )}>
              NIRVANA
            </span>
            <span className={cn(
              "uppercase tracking-[0.35em] text-nirvana-muted leading-none mt-1.5 group-hover:text-nirvana-light transition-colors duration-300",
              isScrolled ? "text-[0.5rem]" : "text-[0.65rem]"
            )}>
              Interiors
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-nirvana-muted hover:text-nirvana-gold transition-colors duration-300 relative group overflow-hidden"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-nirvana-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          ))}
          <motion.button
            onClick={onOpenBooking}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-nirvana-gold/30 text-nirvana-gold text-xs uppercase tracking-widest hover:bg-nirvana-gold hover:text-nirvana-bg transition-colors duration-300"
          >
            Inquire
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-nirvana-light focus:outline-none"
          onClick={handleMobileMenuToggle}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-nirvana-bg border-b border-nirvana-light/10"
      >
        <div className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleMobileMenuClose}
              className="text-2xl font-serif text-nirvana-light hover:text-nirvana-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { handleMobileMenuClose(); onOpenBooking(); }}
            className="text-left text-2xl font-serif text-nirvana-gold mt-4"
          >
            Inquire Now
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;