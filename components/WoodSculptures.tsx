import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const WoodSculptures: React.FC = () => {
  return (
    <section className="py-32 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nirvana-gold/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* Text Content */}
        <div className="w-full md:w-1/2 z-10 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-nirvana-gold uppercase tracking-widest text-xs mb-4 block">Bespoke Furnishing</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-nirvana-light mb-8">
              Statement <br /> Joinery & Decor.
            </h2>
            <p className="text-nirvana-muted text-lg font-light leading-relaxed mb-8">
              True luxury lies in the details. We craft custom cabinetry, dining tables, and architectural wall paneling that act as the centerpiece of your room. Using premium hardwoods, fluted glass, and metal accents.
            </p>
            
            <div className="flex flex-col gap-4">
              {['Custom Dining Tables', 'TV Unit Paneling', 'Architectural Cabinets'].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 + (i * 0.08), duration: 0.4 }}
                  className="flex items-center gap-4 border-t border-white/5 py-4"
                >
                  <span className="text-nirvana-gold font-serif text-xl italic">0{i + 1}</span>
                  <span className="text-nirvana-light/80 text-sm uppercase tracking-wider">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3D Tilt Image */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 perspective-[1000px]">
           <TiltCard />
        </div>
      </div>
    </section>
  );
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-md aspect-[4/5] rounded-sm cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="absolute inset-4 border border-nirvana-gold/30 z-20 pointer-events-none" 
      />
      <motion.div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute bottom-10 left-[-20px] bg-nirvana-bg/90 backdrop-blur-sm p-6 border border-white/10 z-30 max-w-[200px]"
      >
         <p className="font-serif text-nirvana-light text-lg">The Noir Cabinet</p>
         <p className="text-nirvana-muted text-xs uppercase mt-2 tracking-widest">Custom Fluted Oak</p>
      </motion.div>

      {/* Changed image to a sleek dark cabinet/panel vibe */}
      <img 
        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop" 
        alt="Custom Cabinetry" 
        loading="lazy"
        className="w-full h-full object-cover rounded-sm shadow-2xl shadow-black/50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default WoodSculptures;