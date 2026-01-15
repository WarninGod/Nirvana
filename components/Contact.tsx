import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
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

          <div className="grid grid-cols-2 gap-8 text-sm text-nirvana-muted">
            <div className="flex flex-col gap-4">
              <span className="text-nirvana-light uppercase tracking-widest text-xs mb-2">Studio</span>
              <p>Shop No. 436-A, Ground Floor</p>
              <p>C-2 Block, Phase-IV, Kilokri</p>
              <p>Aya Nagar Extension</p>
              <p>New Delhi – 110047, India</p>
              <p>gamerfreakin6@gmail.com</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-nirvana-light uppercase tracking-widest text-xs mb-2">Socials</span>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/nirvanainteriorstudio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram 
                    size={20} 
                    className="hover:text-nirvana-gold cursor-pointer transition-colors outline-none focus:text-nirvana-gold" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-nirvana-muted/50 uppercase tracking-widest">
          <p>© 2026 Nirvana Interiors. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy:\n\nWe collect and protect your personal information in accordance with Indian data protection laws. Your contact details are used solely for project inquiries and will never be shared with third parties.'); }} className="hover:text-nirvana-muted cursor-pointer">Privacy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service:\n\nBy contacting Nirvana Interiors, you agree to our service terms. All designs and concepts remain our intellectual property until full payment is received. Project timelines and costs will be provided in detailed quotations.'); }} className="hover:text-nirvana-muted cursor-pointer">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;