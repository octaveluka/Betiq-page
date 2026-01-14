
import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 300]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
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

  const handleRedirect = () => {
    window.location.href = 'https://betiq-ai-l2ax.onrender.com';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-32 overflow-hidden perspective-2000">
      {/* Dynamic Background */}
      <motion.div style={{ y: y1 }} className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px] animate-pulse-slow"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-tech-blue/5 rounded-full blur-[160px] animate-pulse-slow"></motion.div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ opacity: heroOpacity }}>
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-gold animate-ping"></div>
            Intelligence Artificielle de Précision
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-7xl lg:text-[9rem] font-display font-black mb-10 leading-[0.9] tracking-tighter">
            RE-THINK <br/><span className="gold-text text-glow">WINNING</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
            L'excellence technologique au service de la performance sportive. <span className="text-white font-medium">Trois IA. Zéro Biais. Précision Totale.</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
            <motion.button 
              onClick={handleRedirect}
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.98 }}
              className="gold-gradient px-12 py-6 rounded-[30px] text-xl font-black shadow-[0_30px_60px_-15px_rgba(193,140,50,0.4)] flex items-center gap-4 group preserve-3d"
            >
              Lancer l'Analyse <i className="fa-solid fa-bolt-lightning group-hover:scale-125 transition-transform"></i>
            </motion.button>
            <motion.button 
              onClick={handleRedirect}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="bg-white/5 backdrop-blur-3xl border border-white/10 px-12 py-6 rounded-[30px] text-xl font-black transition-all"
            >
              VIP Access
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative hidden lg:block"
        >
          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Phone Mockup with 3D Depth */}
            <div className="bg-slate-900 p-4 rounded-[60px] border-[12px] border-slate-800 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.8)] overflow-hidden aspect-[9/19] w-[360px] mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-30"></div>
                <div className="h-full w-full bg-dark rounded-[40px] overflow-y-auto no-scrollbar relative flex flex-col">
                    <div className="p-8 border-b border-white/5 flex justify-between items-center bg-dark/80 backdrop-blur-md sticky top-0 z-20">
                        <div className="text-gold font-black text-xl tracking-tighter">BETIQ</div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><i className="fa-solid fa-user text-[10px]"></i></div>
                    </div>
                    
                    <div className="p-8 space-y-8">
                        <div className="bg-white/5 rounded-[32px] p-6 border border-white/10">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">LIVE ANALYTICS</span>
                                <div className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-500 text-[8px] font-black animate-pulse">MATCH ELITE</div>
                            </div>
                            <div className="flex justify-between items-center mb-8">
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-slate-800 rounded-2xl mb-3 flex items-center justify-center shadow-lg"><i className="fa-solid fa-shield-halved text-white text-xl"></i></div>
                                    <div className="text-xs font-black">MADRID</div>
                                </div>
                                <div className="text-2xl font-black text-gold/50">VS</div>
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-slate-800 rounded-2xl mb-3 flex items-center justify-center shadow-lg"><i className="fa-solid fa-shield-halved text-tech-blue text-xl"></i></div>
                                    <div className="text-xs font-black">CITY</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-[10px] font-black text-slate-400">
                                    <span>IA CONFIDENCE</span>
                                    <span className="text-gold">94.8%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "94.8%" }} transition={{ duration: 2 }} className="h-full gold-gradient shadow-[0_0_20px_rgba(193,140,50,0.8)]"></motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gold p-6 rounded-[32px] text-white shadow-2xl">
                             <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">BEST PICK</div>
                             <div className="text-2xl font-black mb-1">REAL MADRID WIN</div>
                             <div className="text-xs font-bold opacity-70">Cote: 2.15</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Floating 3D Elements */}
            <motion.div style={{ translateZ: "100px" }} animate={{ y: [0, 40, 0], rotate: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute -top-10 -right-20 w-32 h-32 glass rounded-[30px] flex items-center justify-center border-gold/40 shadow-2xl z-40 backdrop-blur-3xl">
                <i className="fa-solid fa-brain text-4xl text-gold"></i>
            </motion.div>
            <motion.div style={{ translateZ: "150px" }} animate={{ y: [0, -50, 0], rotate: [0, -10, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute bottom-10 -left-20 w-24 h-24 glass rounded-[30px] flex items-center justify-center border-tech-blue/40 shadow-2xl z-40 backdrop-blur-3xl">
                <i className="fa-solid fa-microchip text-3xl text-tech-blue"></i>
            </motion.div>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
