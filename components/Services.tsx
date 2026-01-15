import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, ChefHat, Monitor, Layers } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description, features, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative p-8 md:p-10 bg-nirvana-dark border border-white/5 overflow-hidden flex flex-col h-full gpu-accelerate"
    >
      {/* Glow Effect - Simplified */}
      <div className="absolute inset-0 bg-gradient-to-b from-nirvana-gold/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 text-nirvana-gold p-3 bg-nirvana-bg/50 w-fit rounded-full border border-nirvana-gold/10 group-hover:border-nirvana-gold/20 transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="font-serif text-3xl text-nirvana-light mb-2">{title}</h3>
        <p className="text-nirvana-gold font-sans text-sm tracking-widest uppercase mb-6">{price}</p>
        <p className="text-nirvana-muted text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <ul className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-nirvana-light/80">
              <span className="w-1.5 h-1.5 rounded-full bg-nirvana-gold mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-nirvana-muted group-hover:text-nirvana-gold transition-colors duration-200 mt-auto">
          Explore Service <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Modular Culinary",
      price: "Kitchens",
      description: "Functional art for the heart of the home. We design intelligent, sleek modular kitchens featuring matte finishes and automated cabinetry.",
      features: ["Custom Island Designs", "Hidden Appliances", "Stone & Marble Countertops", "Smart Storage Solutions"],
      icon: <ChefHat size={24} />,
      delay: 0
    },
    {
      title: "Media & Panels",
      price: "TV Systems",
      description: "Elevate your entertainment zone. Floating TV panels with integrated lighting, hidden wiring, and textured backdrops.",
      features: ["Floating Units", "Backlit Onyx/Stone", "Acoustic Wood Paneling", "Concealed Consoles"],
      icon: <Monitor size={24} />,
      delay: 0.2
    },
    {
      title: "Interior Decor",
      price: "Walls & Ceilings",
      description: "Complete spatial transformation through architectural ceiling designs, textured feature walls, and bespoke furnishing.",
      features: ["False Ceiling Concepts", "Textured Wall Finishes", "Custom Tables & Cabinets", "Ambient Lighting"],
      icon: <Layers size={24} />,
      delay: 0.4
    }
  ];

  return (
    <section className="py-32 relative bg-nirvana-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-nirvana-gold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
            <h2 className="font-serif text-5xl md:text-6xl text-nirvana-light">
              Refined <br /> <span className="text-nirvana-muted">Living Systems.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-nirvana-muted max-w-sm text-sm leading-relaxed"
          >
            Established in 2026, we redefine the modern home with precision-engineered modular solutions and high-end aesthetic finishes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;