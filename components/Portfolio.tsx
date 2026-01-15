import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  // TALL (Portrait) Images
  { 
    id: 1, 
    title: "Obsidian Loft", 
    category: "Residential", 
    // Vertical dark living room
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop", 
    size: "tall" 
  },
  { 
    id: 2, 
    title: "Gilded Lounge", 
    category: "Commercial", 
    // Horizontal luxury lounge
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop", 
    size: "short" 
  },
  { 
    id: 3, 
    title: "Matte Kitchen", 
    category: "Residential", 
    // Horizontal modern kitchen
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop", 
    size: "short" 
  },
  { 
    id: 4, 
    title: "Stone Bath", 
    category: "Residential", 
    // Vertical dark bathroom
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2658&auto=format&fit=crop", 
    size: "tall" 
  },
  { 
    id: 5, 
    title: "The Onyx Hall", 
    category: "Commercial", 
    // Vertical dark interior/hall
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2600&auto=format&fit=crop", 
    size: "tall" 
  },
  { 
    id: 6, 
    title: "Minimal Study", 
    category: "Residential", 
    // Horizontal study
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2670&auto=format&fit=crop", 
    size: "short" 
  },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-32 px-6 md:px-12 bg-nirvana-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="font-serif text-5xl md:text-6xl text-nirvana-light mb-4">Selected Works</h2>
              <div className="h-1 w-20 bg-nirvana-gold" />
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex gap-8 text-sm uppercase tracking-widest text-nirvana-muted mt-6 md:mt-0"
            >
              <span 
                onClick={() => setActiveFilter('All')}
                className={`cursor-pointer transition-colors ${activeFilter === 'All' ? 'text-nirvana-light' : 'hover:text-nirvana-light'}`}
              >
                All
              </span>
              <span 
                onClick={() => setActiveFilter('Residential')}
                className={`cursor-pointer transition-colors ${activeFilter === 'Residential' ? 'text-nirvana-light' : 'hover:text-nirvana-light'}`}
              >
                Residential
              </span>
              <span 
                onClick={() => setActiveFilter('Commercial')}
                className={`cursor-pointer transition-colors ${activeFilter === 'Commercial' ? 'text-nirvana-light' : 'hover:text-nirvana-light'}`}
              >
                Commercial
              </span>
           </motion.div>
        </div>

        {/* Masonry-style Grid using CSS Columns */}
        {/* Removed space-y-8 to prevent top-misalignment in columns. Added mb-8 to items instead. */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {filteredProjects.map((project, i) => (
            <PortfolioItem key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: string;
}

const PortfolioItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Enforce aspect ratios based on size category for a clean grid
  const aspectRatioClass = project.size === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -15, 
        boxShadow: "0 25px 50px -12px rgba(201, 162, 77, 0.1)" 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative break-inside-avoid group cursor-pointer overflow-hidden shadow-2xl shadow-black/0 mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden w-full bg-nirvana-dark ${aspectRatioClass}`}>
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale transition-[filter] duration-700 ease-out group-hover:grayscale-0"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
        
        {/* Hover Content */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-gradient-to-t from-nirvana-bg/95 via-nirvana-bg/60 to-transparent flex flex-col justify-end p-8"
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-nirvana-gold text-xs uppercase tracking-widest mb-2"
              >
                {project.category}
              </motion.span>
              
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-3xl text-nirvana-light"
              >
                {project.title}
              </motion.h3>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="h-[1px] bg-nirvana-gold/40 mt-6 mb-4" 
              />
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-between items-center text-xs uppercase tracking-widest text-nirvana-light/80"
              >
                 <span>View Project</span>
                 <motion.span 
                   animate={{ x: [0, 5, 0] }}
                   transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                   className="text-xl"
                 >
                   →
                 </motion.span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Portfolio;