import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ServiceType, servicesData } from './serviceData';

interface ServicePageLayoutProps {
  serviceType: ServiceType;
  onBack: () => void;
  onOpenBooking: () => void;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  serviceType,
  onBack,
  onOpenBooking,
}) => {
  const service = servicesData[serviceType];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <div className="bg-nirvana-bg">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nirvana-bg/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-nirvana-muted hover:text-nirvana-light transition-colors text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <span className="font-serif text-nirvana-light text-lg">Nirvana</span>
          <button
            onClick={onOpenBooking}
            className="text-nirvana-gold text-sm uppercase tracking-widest hover:text-nirvana-light transition-colors"
          >
            Book
          </button>
        </div>
      </nav>

      {/* Section 1: Service Hero */}
      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left"
          >
            <motion.span
              variants={fadeInUp}
              className="text-nirvana-gold uppercase tracking-[0.3em] text-xs mb-6 block"
            >
              {service.hero.category}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-nirvana-light mb-6"
            >
              {service.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-nirvana-muted text-lg md:text-xl max-w-2xl"
            >
              {service.hero.subtitle}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 h-px w-24 bg-nirvana-gold mx-auto md:mx-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Editorial Description */}
      <section className="py-24 px-6 md:px-12 bg-nirvana-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            {service.description.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className="text-nirvana-light/90 text-base md:text-lg leading-relaxed mb-6 last:mb-0"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Capabilities */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-nirvana-gold uppercase tracking-widest text-xs mb-4 block">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-nirvana-light">
              Capabilities
            </h2>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {service.capabilities.map((capability, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 p-6 border border-white/5 bg-nirvana-dark/50 group hover:border-nirvana-gold/20 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-nirvana-gold mt-2 flex-shrink-0" />
                <span className="text-nirvana-light/80 text-sm md:text-base">
                  {capability}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="py-24 px-6 md:px-12 bg-nirvana-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-nirvana-gold uppercase tracking-widest text-xs mb-4 block">
              How We Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-nirvana-light">
              Our Process
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                {/* Connecting line before steps 2, 3, 4 */}
                {index > 0 && (
                  <div className="hidden lg:block absolute top-6 right-full w-8 h-px bg-nirvana-gold/20 mr-4" />
                )}
                <span className="font-serif text-5xl text-nirvana-gold/20 mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl text-nirvana-light mb-3">
                  {step.title}
                </h3>
                <p className="text-nirvana-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5: Portfolio Preview */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-nirvana-gold uppercase tracking-widest text-xs mb-4 block">
              Our Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-nirvana-light">
              Selected Projects
            </h2>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative py-24 border border-white/5 bg-nirvana-dark/50 text-center"
          >
            <span className="text-nirvana-gold uppercase tracking-[0.2em] text-xs mb-4 block">
              Portfolio
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-nirvana-light mb-4">
              Coming Soon
            </h3>
            <p className="text-nirvana-muted text-sm max-w-sm mx-auto">
              We're currently curating our finest work in this category.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-24 px-6 md:px-12 bg-nirvana-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-nirvana-light mb-6">
              Ready to Begin?
            </h2>
            <p className="text-nirvana-muted text-base md:text-lg max-w-xl mx-auto mb-10">
              Every exceptional space starts with a conversation. Let us understand your vision.
            </p>
            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(201, 162, 77, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-nirvana-gold text-nirvana-gold uppercase tracking-widest text-sm transition-colors"
            >
              Book a Private Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-nirvana-muted text-xs">
            © 2026 Delhi 47 Traders. All rights reserved.
          </span>
          <button
            onClick={onBack}
            className="text-nirvana-muted hover:text-nirvana-light transition-colors text-xs uppercase tracking-widest"
          >
            Back to Home
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ServicePageLayout;
