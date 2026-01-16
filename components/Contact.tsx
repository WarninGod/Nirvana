import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const phoneNumbers = [
    { number: '+91 97114 36932', label: 'Rajiv Chauhan (CEO)', isPrimary: true },
    { number: '+91 99997 47085', label: 'Team Lead', isPrimary: false },
    { number: '+91 98737 76574', label: 'Project Coordinator', isPrimary: false },
  ];

  const email = 'rajiv830@gmail.com';
  const address = {
    line1: 'Shop No. 436-A, Ground Floor',
    line2: 'C-2 Block, Phase-IV, Kilokri',
    line3: 'Aya Nagar Extension',
    line4: 'New Delhi – 110047, India',
  };

  const contactItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 mb-24 md:items-start">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl text-nirvana-light mb-8 leading-none">
              Let's build <br />
              <span className="text-nirvana-muted">your sanctuary.</span>
            </h2>
            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group flex items-center gap-4 text-nirvana-gold text-lg uppercase tracking-widest"
            >
              Start a project
              <span className="w-12 h-[1px] bg-nirvana-gold group-hover:w-20 transition-all duration-300" />
            </motion.button>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 gap-12 md:justify-self-end md:justify-items-center md:text-center max-w-sm w-full">
            {/* Phone Numbers Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-nirvana-light uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <Phone size={16} className="text-nirvana-gold" />
                Call Us
              </h3>
              <div className="space-y-3 flex flex-col items-center">
                {phoneNumbers.map((phone, index) => (
                  <motion.a
                    key={phone.number}
                    href={`tel:${phone.number.replace(/\s/g, '')}`}
                    custom={index}
                    variants={contactItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col group items-center"
                  >
                    <span className={`text-sm transition-colors ${
                      phone.isPrimary 
                        ? 'text-nirvana-gold font-semibold' 
                        : 'text-nirvana-muted group-hover:text-nirvana-gold'
                    }`}>
                      {phone.number}
                    </span>
                    <span className="text-xs text-nirvana-muted/60">{phone.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-nirvana-light uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <Mail size={16} className="text-nirvana-gold" />
                Email
              </h3>
              <motion.a
                href={`mailto:${email}`}
                variants={contactItemVariants}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-sm text-nirvana-muted hover:text-nirvana-gold transition-colors block text-center"
              >
                {email}
              </motion.a>
            </div>
          </div>
        </div>

        {/* Address & Social Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/5">
          {/* Address */}
          <div>
            <h3 className="text-nirvana-light uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <MapPin size={16} className="text-nirvana-gold" />
              Studio Location
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-nirvana-muted space-y-2 pl-6"
            >
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>{address.line3}</p>
              <p>{address.line4}</p>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="md:justify-self-end md:text-right">
            <h3 className="text-nirvana-light uppercase tracking-widest text-xs mb-6">Follow Us</h3>
            <div className="flex gap-6 justify-start md:justify-end">
              <motion.a
                href="https://wa.me/919711436932?text=Hi%20Rajiv%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Rajiv (CEO)"
                whileHover={{ scale: 1.15, color: '#C9A24D' }}
                transition={{ duration: 0.2 }}
                className="text-nirvana-muted hover:text-nirvana-gold transition-colors"
              >
                <MessageCircle size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nirvanainteriorstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.15, color: '#C9A24D' }}
                transition={{ duration: 0.2 }}
                className="text-nirvana-muted hover:text-nirvana-gold transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-nirvana-muted/50 uppercase tracking-widest">
          <p>© 2026 Nirvana Interiors. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                alert('Privacy Policy:\n\nWe collect and protect your personal information in accordance with Indian data protection laws. Your contact details are used solely for project inquiries and will never be shared with third parties.');
              }}
              className="hover:text-nirvana-muted cursor-pointer transition-colors"
            >
              Privacy
            </a>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                alert('Terms of Service:\n\nBy contacting Nirvana Interiors, you agree to our service terms. All designs and concepts remain our intellectual property until full payment is received. Project timelines and costs will be provided in detailed quotations.');
              }}
              className="hover:text-nirvana-muted cursor-pointer transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;