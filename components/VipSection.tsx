
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VipSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0.6, 0.8], [30, 0]);
  const translateZ = useTransform(scrollYProgress, [0.6, 0.8], [-500, 0]);

  const handleRedirect = () => {
    window.location.href = 'https://betiq-ai-l2ax.onrender.com';
  };

  return (
    <div className="container mx-auto px-6 perspective-2000">
      <motion.div 
        style={{ rotateX, translateZ }}
        className="relative overflow-hidden bg-gradient-to-br from-[#0c0f14] to-black rounded-[30px] md:rounded-[100px] border border-gold/10 p-10 md:p-24 lg:p-40 shadow-[0_50px_100px_-25px_rgba(0,0,0,1)] group preserve-3d"
      >
        {/* Animated 3D Light Source */}
        <motion.div 
            animate={{ 
                x: [-200, 200],
                y: [-200, 200]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gold/5 rounded-full blur-[100px] md:blur-[200px] pointer-events-none"
        ></motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 md:gap-32 items-center relative z-10 preserve-3d">
          <div className="preserve-3d text-center lg:text-left">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-5 md:px-8 py-2 md:py-3 rounded-full bg-gold text-white text-[9px] md:text-[12px] font-black uppercase mb-6 md:mb-12 tracking-[0.3em] shadow-[0_10px_20px_rgba(193,140,50,0.4)]"
            >
                VIP EXCLUSIVE
            </motion.div>
            <h2 className="text-4xl md:text-7xl lg:text-[7.5rem] font-display font-black mb-8 md:mb-12 leading-[0.9] tracking-tighter">
              ELITE <br/><span className="gold-text text-glow italic">CLUB</span>
            </h2>
            <p className="text-lg md:text-3xl text-slate-400 mb-8 md:mb-16 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                L'accès ultime aux marchés réservés. <span className="text-white font-medium">Ligue des Champions, Grand Chelem, NBA.</span> La victoire ne se discute pas, elle se prévoit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16 text-left">
                {[
                    'Matchs Elite 100% Précis',
                    'Filtres VIP Avancés',
                    'Accès Algorithme Pro',
                    'Support dédié 24/7'
                ].map((item, idx) => (
                    <motion.div 
                        key={item} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 group/item"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-gold transition-all duration-500">
                            <i className="fa-solid fa-gem text-gold text-sm md:text-lg"></i>
                        </div>
                        <span className="text-base md:text-xl text-slate-300 font-bold group-hover/item:text-white transition-colors">{item}</span>
                    </motion.div>
                ))}
            </div>

            <motion.button 
                onClick={handleRedirect}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="gold-gradient w-full sm:w-auto px-10 md:px-16 py-5 md:py-8 rounded-2xl md:rounded-[40px] text-lg md:text-3xl font-black shadow-[0_20px_40px_rgba(193,140,50,0.3)] relative overflow-hidden group/btn"
            >
                <span className="relative z-10">ACTIVER LE CODE</span>
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
            </motion.button>
          </div>

          <div className="relative group/card preserve-3d h-[350px] md:h-[600px] flex items-center justify-center">
            <motion.div 
                whileHover={{ rotateY: 20, rotateX: -10 }}
                className="bg-slate-900/40 border border-white/10 backdrop-blur-3xl p-8 md:p-16 rounded-[40px] md:rounded-[80px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden w-full max-w-[300px] md:max-w-[500px] h-full flex flex-col justify-center preserve-3d"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                
                <div className="text-center mb-10 md:mb-16">
                    <p className="text-slate-500 text-[10px] md:text-sm uppercase tracking-[0.3em] font-black mb-6 md:mb-10">CRYPTAGE ELITE</p>
                    <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
                        {['B','E','T','I','Q','•'].map((char, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, z: -100 }}
                                whileInView={{ opacity: 1, z: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="w-10 h-16 md:w-16 md:h-24 bg-dark/60 rounded-xl md:rounded-3xl border border-gold/30 flex items-center justify-center text-xl md:text-4xl font-black text-gold shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)]"
                            >
                                {char}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 rounded-[30px] md:rounded-[50px] p-6 md:p-10 border border-white/10 relative group/elite preserve-3d">
                    <div className="flex items-center justify-between mb-4 md:mb-8">
                        <div className="flex items-center gap-2 md:gap-4">
                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gold animate-ping"></div>
                            <span className="text-sm md:text-lg font-black text-slate-300 uppercase tracking-[0.2em]">SECURE</span>
                        </div>
                        <i className="fa-solid fa-fingerprint text-gold text-2xl md:text-4xl opacity-50"></i>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                        <div className="h-4 md:h-6 w-full bg-slate-800/50 rounded-xl blur-md"></div>
                        <div className="h-4 md:h-6 w-5/6 bg-slate-800/50 rounded-xl blur-lg opacity-60"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/elite:opacity-100 transition-all duration-500 scale-90 group-hover/elite:scale-110">
                        <span onClick={handleRedirect} className="text-xs md:text-xl font-black text-gold uppercase tracking-[0.4em] bg-dark/90 px-5 md:px-8 py-3 md:py-4 rounded-2xl border border-gold/50 backdrop-blur-xl cursor-pointer">VÉRIFICATION...</span>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VipSection;
