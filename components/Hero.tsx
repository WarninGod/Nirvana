import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity, willChange: 'transform, opacity' }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-nirvana-bg/30 via-nirvana-bg/60 to-nirvana-bg z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2674&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover opacity-60 will-change-transform"
          loading="eager"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants} style={{ willChange: 'transform' }} className="overflow-hidden">
             <span className="inline-block text-nirvana-gold uppercase tracking-[0.3em] text-sm font-medium">
               Est. 2026 — Modern Living Systems
             </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ willChange: 'transform' }} className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-[0.9] text-nirvana-light text-balance">
            Design Beyond <br />
            <span className="italic text-nirvana-muted">Convention.</span>
          </motion.h1>

          <motion.p variants={itemVariants} style={{ willChange: 'transform' }} className="max-w-xl text-nirvana-muted text-lg md:text-xl font-light leading-relaxed mt-4">
            We curate spaces that breathe. Specializing in luxury modular kitchens, avant-garde TV panels, and bespoke home decor.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ willChange: 'transform' }} className="mt-8 flex flex-col md:flex-row gap-6 items-center">
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(201, 162, 77, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-nirvana-gold text-nirvana-gold uppercase tracking-widest text-sm transition-colors cursor-pointer"
            >
              View Projects
            </motion.a>
            <span className="text-nirvana-muted/50 hidden md:inline-block">—</span>
            <button 
              onClick={onOpenBooking}
              className="text-nirvana-light hover:text-nirvana-gold transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-nirvana-gold pb-1"
            >
              Book Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-nirvana-muted flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;