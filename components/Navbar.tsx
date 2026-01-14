
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRedirect = () => {
    window.location.href = 'https://betiq-ai-l2ax.onrender.com';
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500 ${scrolled ? 'py-4 bg-dark/60 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center shadow-2xl shadow-gold/20 relative overflow-hidden">
            <span className="text-white font-black text-2xl relative z-10">B</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </div>
          <span className="text-3xl font-display font-black tracking-tighter">BET<span className="text-gold">IQ</span></span>
        </motion.div>

        <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          {['Accueil', 'Technologie', 'Analyses', 'Zone VIP'].map((link, i) => (
            <motion.a 
              key={link}
              href={`#${['home', 'engine', 'predictions', 'vip'][i]}`} 
              whileHover={{ color: '#fff', scale: 1.1 }}
              className="hover:text-gold transition-all relative group/link"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold group-hover/link:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button onClick={handleRedirect} className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors font-black">Connexion</button>
          <motion.button 
            onClick={handleRedirect}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(193, 140, 50, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="gold-gradient text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-gold/20 text-sm tracking-tight"
          >
            Commencer Gratuitement
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
