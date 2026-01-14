
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

  const handleDownloadApk = () => {
    window.location.href = 'https://github.com/octaveluka/Betiq-page/releases/download/v1.0.0/_BETIQ_AI_19434243.apk';
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
    <div className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-20 overflow-hidden perspective-2000">
      {/* Dynamic Background */}
      <motion.div style={{ y: y1 }} className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-gold/10 rounded-full blur-[80px] md:blur-[160px] animate-pulse-slow"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-0 -right-10 md:-right-20 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-tech-blue/10 rounded-full blur-[80px] md:blur-[160px] animate-pulse-slow"></motion.div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ opacity: heroOpacity }}>
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-6 md:mb-10 shadow-2xl">
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-gold animate-ping"></div>
            Intelligence Artificielle de Précision
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-display font-black mb-6 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter">
            RE-THINK <br/><span className="gold-text text-glow">WINNING</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base md:text-2xl text-slate-400 mb-8 md:mb-12 max-w-xl leading-relaxed font-light">
            L'excellence technologique au service de la performance sportive. <span className="text-white font-medium">Trois IA. Zéro Biais. Précision Totale.</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
            <motion.button 
              onClick={handleDownloadApk}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-8 md:px-10 py-4 md:py-6 rounded-2xl md:rounded-[30px] text-lg md:text-xl font-black shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] flex items-center justify-center gap-4 group"
            >
              <i className="fa-solid fa-download group-hover:bounce transition-transform"></i> APK Android
            </motion.button>

            <motion.button 
              onClick={handleRedirect}
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.98 }}
              className="gold-gradient px-8 md:px-10 py-4 md:py-6 rounded-2xl md:rounded-[30px] text-lg md:text-xl font-black shadow-[0_20px_40px_-15px_rgba(193,140,50,0.4)] flex items-center justify-center gap-4 group preserve-3d"
            >
              Lancer le Web <i className="fa-solid fa-bolt-lightning group-hover:scale-125 transition-transform"></i>
            </motion.button>
            
            <motion.button 
              onClick={handleRedirect}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="bg-white/5 backdrop-blur-3xl border border-white/10 px-8 md:px-10 py-4 md:py-6 rounded-2xl md:rounded-[30px] text-lg md:text-xl font-black transition-all text-center"
            >
              VIP Access
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative block"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="bg-slate-900 p-2 md:p-4 rounded-[40px] md:rounded-[60px] border-[8px] md:border-[12px] border-slate-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden aspect-[9/19] w-full max-w-[220px] sm:max-w-[260px] md:max-w-[340px] mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-30"></div>
                <div className="h-full w-full bg-dark rounded-[30px] md:rounded-[40px] overflow-y-auto no-scrollbar relative flex flex-col">
                    <div className="p-4 md:p-8 border-b border-white/5 flex justify-between items-center bg-dark/80 backdrop-blur-md sticky top-0 z-20">
                        <div className="text-gold font-black text-sm md:text-xl tracking-tighter">BETIQ</div>
                        <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-white/5 flex items-center justify-center"><i className="fa-solid fa-user text-[8px] md:text-[10px]"></i></div>
                    </div>
                    
                    <div className="p-4 md:p-8 space-y-4 md:space-y-8">
                        <div className="bg-white/5 rounded-[18px] md:rounded-[32px] p-4 md:p-6 border border-white/10">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[7px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">IA LIVE</span>
                                <div className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[6px] md:text-[8px] font-black animate-pulse">OPTIMIZED</div>
                            </div>
                            <div className="flex justify-between items-center mb-4 md:mb-8">
                                <div className="text-center">
                                    <div className="w-8 md:w-14 h-8 md:h-14 bg-slate-800 rounded-lg md:rounded-2xl mb-1.5 flex items-center justify-center shadow-lg"><i className="fa-solid fa-shield-halved text-white text-xs md:text-xl"></i></div>
                                    <div className="text-[7px] md:text-xs font-black">R. MADRID</div>
                                </div>
                                <div className="text-sm md:text-2xl font-black text-gold/50">VS</div>
                                <div className="text-center">
                                    <div className="w-8 md:w-14 h-8 md:h-14 bg-slate-800 rounded-lg md:rounded-2xl mb-1.5 flex items-center justify-center shadow-lg"><i className="fa-solid fa-shield-halved text-tech-blue text-xs md:text-xl"></i></div>
                                    <div className="text-[7px] md:text-xs font-black">MAN CITY</div>
                                </div>
                            </div>
                            <div className="space-y-1.5 md:space-y-3">
                                <div className="flex justify-between text-[6px] md:text-[10px] font-black text-slate-400">
                                    <span>TRUST INDEX</span>
                                    <span className="text-gold">94.8%</span>
                                </div>
                                <div className="h-1 md:h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "94.8%" }} transition={{ duration: 2 }} className="h-full gold-gradient"></motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gold p-4 md:p-6 rounded-[18px] md:rounded-[32px] text-white shadow-2xl">
                             <div className="text-[7px] md:text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">WINNER PICK</div>
                             <div className="text-sm md:text-2xl font-black leading-tight">MADRID TO WIN</div>
                             <div className="text-[8px] md:text-xs font-bold opacity-70">Odds: 2.15</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <motion.div style={{ translateZ: "80px" }} animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute -top-3 md:-top-10 -right-3 md:-right-10 w-10 md:w-32 h-10 md:h-32 glass rounded-lg md:rounded-[30px] flex items-center justify-center border-gold/40 shadow-2xl z-40 backdrop-blur-3xl">
                <i className="fa-solid fa-brain text-xs md:text-4xl text-gold"></i>
            </motion.div>
            <motion.div style={{ translateZ: "120px" }} animate={{ y: [0, -10, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute bottom-3 md:bottom-10 -left-3 md:-left-10 w-8 md:w-24 h-8 md:h-24 glass rounded-lg md:rounded-[30px] flex items-center justify-center border-tech-blue/40 shadow-2xl z-40 backdrop-blur-3xl">
                <i className="fa-solid fa-microchip text-[10px] md:text-3xl text-tech-blue"></i>
            </motion.div>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[600px] h-[220px] md:h-[600px] bg-gold/5 rounded-full blur-[60px] md:blur-[120px] -z-10 animate-pulse-slow"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
