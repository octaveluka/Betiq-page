
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
        className="relative overflow-hidden bg-gradient-to-br from-[#0c0f14] to-black rounded-[100px] border border-gold/10 p-24 lg:p-40 shadow-[0_120px_200px_-50px_rgba(0,0,0,1)] group preserve-3d"
      >
        {/* Animated 3D Light Source */}
        <motion.div 
            animate={{ 
                x: [-500, 500],
                y: [-500, 500]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            className="absolute top-0 left-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[200px] pointer-events-none"
        ></motion.div>
        
        <div className="grid lg:grid-cols-2 gap-32 items-center relative z-10 preserve-3d">
          <div className="preserve-3d">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-8 py-3 rounded-full bg-gold text-white text-[12px] font-black uppercase mb-12 tracking-[0.5em] shadow-[0_15px_30px_rgba(193,140,50,0.4)]"
            >
                VIP EXCLUSIVE
            </motion.div>
            <h2 className="text-7xl lg:text-[7.5rem] font-display font-black mb-12 leading-[0.85] tracking-tighter">
              ELITE <br/><span className="gold-text text-glow italic">CLUB</span>
            </h2>
            <p className="text-3xl text-slate-400 mb-16 leading-relaxed font-extralight max-w-xl">
                L'accès ultime aux marchés réservés. <span className="text-white font-medium">Ligue des Champions, Grand Chelem, NBA.</span> La victoire ne se discute pas, elle se prévoit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
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
                        className="flex items-center gap-6 group/item"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-gold transition-all duration-500">
                            <i className="fa-solid fa-gem text-gold text-lg"></i>
                        </div>
                        <span className="text-xl text-slate-300 font-bold group-hover/item:text-white transition-colors">{item}</span>
                    </motion.div>
                ))}
            </div>

            <motion.button 
                onClick={handleRedirect}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="gold-gradient px-16 py-8 rounded-[40px] text-3xl font-black shadow-[0_40px_80px_rgba(193,140,50,0.4)] relative overflow-hidden group/btn"
            >
                <span className="relative z-10">ACTIVER LE CODE</span>
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
            </motion.button>
          </div>

          <div className="relative group/card preserve-3d h-[600px] flex items-center justify-center">
            <motion.div 
                whileHover={{ rotateY: 20, rotateX: -10 }}
                className="bg-slate-900/40 border border-white/10 backdrop-blur-3xl p-16 rounded-[80px] shadow-[0_100px_200px_-50px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden w-full max-w-[500px] h-full flex flex-col justify-center preserve-3d"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                
                <div className="text-center mb-16">
                    <p className="text-slate-500 text-sm uppercase tracking-[0.5em] font-black mb-10">CRYPTAGE ELITE</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        {['B','E','T','I','Q','•'].map((char, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, z: -100 }}
                                whileInView={{ opacity: 1, z: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="w-16 h-24 bg-dark/60 rounded-3xl border border-gold/30 flex items-center justify-center text-4xl font-black text-gold shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)]"
                            >
                                {char}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 rounded-[50px] p-10 border border-white/10 relative group/elite preserve-3d">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-4 h-4 rounded-full bg-gold animate-ping"></div>
                            <span className="text-lg font-black text-slate-300 uppercase tracking-[0.3em]">SECURE ACCESS</span>
                        </div>
                        <i className="fa-solid fa-fingerprint text-gold text-4xl opacity-50"></i>
                    </div>
                    <div className="space-y-4">
                        <div className="h-6 w-full bg-slate-800/50 rounded-xl blur-lg"></div>
                        <div className="h-6 w-5/6 bg-slate-800/50 rounded-xl blur-lg opacity-60"></div>
                        <div className="h-6 w-4/6 bg-slate-800/50 rounded-xl blur-lg opacity-30"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/elite:opacity-100 transition-all duration-500 scale-90 group-hover/elite:scale-110">
                        <span onClick={handleRedirect} className="text-xl font-black text-gold uppercase tracking-[0.6em] bg-dark/90 px-8 py-4 rounded-3xl border border-gold/50 backdrop-blur-xl cursor-pointer">VÉRIFICATION...</span>
                    </div>
                </div>
            </motion.div>
            
            {/* Background 3D Objects */}
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-64 h-64 border-[30px] border-gold/5 rounded-full -z-10"
            ></motion.div>
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-white/5 rounded-full -z-20"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VipSection;
