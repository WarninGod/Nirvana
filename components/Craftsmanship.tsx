import React from 'react';
import { motion } from 'framer-motion';

const Craftsmanship: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="craftsmanship" className="py-24 bg-nirvana-bg relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nirvana-gold/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <motion.div 
          className="text-center w-full max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Title Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="text-nirvana-gold uppercase tracking-widest text-[10px] sm:text-xs mb-4 block flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-nirvana-gold/50"></span>
              ✨ The Art of Timeless Craftsmanship
              <span className="w-8 h-[1px] bg-nirvana-gold/50"></span>
            </span>
            <p className="text-nirvana-muted text-lg md:text-xl font-light leading-relaxed">
              At <strong className="text-nirvana-light font-normal text-xl md:text-2xl font-serif block mt-4 mb-2">Nirvana Interiors Studio</strong>
              luxury is not just seen—it is experienced through detail, heritage, and authenticity. We curate and create exceptional handcrafted pieces that embody the soul of Indian artistry, bridging our rich legacy with the refined tastes of the global market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
            {/* Commitment Section */}
            <motion.div variants={itemVariants} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="font-serif text-2xl text-nirvana-light mb-4 flex items-center gap-3">
                <span className="text-nirvana-gold">🌿</span> A Commitment to Indian Artisans
              </h3>
              <p className="text-nirvana-muted font-light leading-relaxed">
                Behind every creation lies the dedication of master artisans whose skills have been passed down through generations. We proudly partner with these craftsmen, bringing their authentic work across borders to global clients. We preserve their legacy while elevating it to international standards of design and quality.
              </p>
            </motion.div>

            {/* Signature Collection Section */}
            <motion.div variants={itemVariants} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="font-serif text-2xl text-nirvana-light mb-4 flex items-center gap-3">
                <span className="text-nirvana-gold">🏛️</span> Our Signature Collection
              </h3>
              <p className="text-nirvana-muted font-light leading-relaxed mb-4">
                Our portfolio reflects elegance, exclusivity, and fine craftsmanship:
              </p>
              <ul className="space-y-3">
                {[
                  "Bespoke Wall Décor that transforms spaces into statement experiences",
                  "Exquisite Gifts & Souvenirs designed for timeless impressions",
                  "Handcrafted Luxury Handbags blending tradition with contemporary style",
                  "Curated lifestyle pieces crafted for discerning clients"
                ].map((item, idx) => (
                  <li key={idx} className="text-sm text-nirvana-muted flex items-start gap-3">
                    <span className="text-nirvana-gold text-[10px] mt-1">◆</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Worldwide Delivery Section */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto border-t border-b border-nirvana-gold/20 py-10 relative">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-nirvana-bg px-4 text-2xl">🌏</div>
            <h3 className="font-serif text-3xl text-nirvana-light mb-6 text-center">Crafted in India. Delivered Worldwide.</h3>
            <p className="text-nirvana-muted text-base md:text-lg font-light leading-relaxed text-center">
              Each creation is a harmony of tradition and modern sophistication—designed for those who appreciate rarity, detail, and true luxury. Distance is no barrier; <span className="text-nirvana-light font-medium">we deliver across borders</span>, sharing Indian artisans' work globally. With Nirvana Interiors Studio, you don’t just acquire a product—you invest in a story, a legacy, and an experience of refined living.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Craftsmanship;