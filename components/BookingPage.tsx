import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Send, ChevronDown } from 'lucide-react';

interface BookingPageProps {
  onBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: 'Residential',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Development mode: mock the API
      if (import.meta.env.DEV) {
        console.log('Development mode - Form data:', formState);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
        setIsSubmitted(true);
        return;
      }

      // Production mode: use real API
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send consultation request');
      }

      setIsSubmitted(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again or email us directly.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-transparent border-b border-nirvana-muted/30 py-4 text-nirvana-light placeholder:text-nirvana-muted/30 focus:outline-none focus:border-nirvana-gold transition-colors duration-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-nirvana-bg pt-32 pb-20 px-6 md:px-12 relative overflow-x-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nirvana-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-nirvana-muted hover:text-nirvana-gold transition-colors uppercase tracking-widest text-xs mb-16 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column: Context */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl text-nirvana-light mb-8 leading-[1.1]"
            >
              Begin the <br />
              <span className="text-nirvana-muted italic">Transformation.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-nirvana-muted text-lg font-light leading-relaxed max-w-md mb-12"
            >
              Share your vision with us. Whether it's a complete architectural overhaul or a curated room refinement, we approach every inquiry with the same dedication to detail.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-2 text-sm text-nirvana-light/60"
            >
              <p>Studio Address:</p>
              <p>Shop No. 436-A, Ground Floor</p>
              <p>C-2 Block, Phase-IV, Kilokri</p>
              <p>Aya Nagar Extension</p>
              <p>New Delhi – 110047, India</p>
              <p className="text-nirvana-gold font-serif text-lg mt-4">gamerfreakin6@gmail.com</p>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-nirvana-dark/50 p-8 md:p-12 border border-white/5 backdrop-blur-sm"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="text-xs uppercase tracking-widest text-nirvana-muted group-focus-within:text-nirvana-gold transition-colors">Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="John Doe" 
                      className={inputClasses}
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs uppercase tracking-widest text-nirvana-muted group-focus-within:text-nirvana-gold transition-colors">Email</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="john@example.com" 
                      className={inputClasses}
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="group relative">
                    <label className="text-xs uppercase tracking-widest text-nirvana-muted group-focus-within:text-nirvana-gold transition-colors">Project Type</label>
                    <div className="relative">
                      <select 
                        className={`${inputClasses} bg-transparent appearance-none cursor-pointer pr-10`}
                        value={formState.type}
                        onChange={(e) => setFormState({...formState, type: e.target.value})}
                      >
                        <option className="bg-[#121212] text-nirvana-light" value="Residential">Residential</option>
                        <option className="bg-[#121212] text-nirvana-light" value="Commercial">Commercial</option>
                        <option className="bg-[#121212] text-nirvana-light" value="Bespoke Art">Bespoke Art</option>
                        <option className="bg-[#121212] text-nirvana-light" value="Other">Other</option>
                      </select>
                      <ChevronDown 
                        size={16} 
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-nirvana-muted pointer-events-none" 
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="text-xs uppercase tracking-widest text-nirvana-muted group-focus-within:text-nirvana-gold transition-colors">Budget Range</label>
                    <input 
                      type="text" 
                      placeholder="₹5L - ₹50L+" 
                      className={inputClasses}
                      value={formState.budget}
                      onChange={(e) => setFormState({...formState, budget: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-nirvana-muted group-focus-within:text-nirvana-gold transition-colors">Project Details</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your space, timeline, and aspirations..." 
                    className={`${inputClasses} resize-none`}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-900/20 border border-red-500/30 text-red-300 p-4 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full bg-nirvana-gold text-nirvana-bg py-5 uppercase tracking-[0.2em] text-sm font-medium hover:bg-white transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Request Consultation'} 
                  {!isSubmitting && <Send size={16} />}
                </motion.button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 rounded-full border border-nirvana-gold flex items-center justify-center text-nirvana-gold mb-8">
                  <Check size={40} />
                </div>
                <h3 className="font-serif text-3xl text-nirvana-light mb-4">Request Received</h3>
                <p className="text-nirvana-muted max-w-sm mb-8">
                  Thank you for entrusting us with your vision. Our concierge team will review your details and reach out within 24 hours.
                </p>
                <button 
                  onClick={onBack}
                  className="text-nirvana-gold uppercase tracking-widest text-xs border-b border-nirvana-gold pb-1 hover:text-white hover:border-white transition-colors"
                >
                  Return to Home
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingPage;