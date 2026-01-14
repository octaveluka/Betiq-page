
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PredictionsDemo: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotateSection = useTransform(scrollYProgress, [0.3, 0.5], [10, 0]);
  const scaleSection = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 1]);

  const predictions = [
    { label: 'Résultat Final (1X2)', value: 'Victoire Real Madrid', conf: 94, color: 'text-emerald-400' },
    { label: 'Total Buts', value: '+ 2.5 Over', conf: 82, color: 'text-emerald-400' },
    { label: 'Les deux marquent', value: 'OUI', conf: 76, color: 'text-gold' },
    { label: 'Précision Corners', value: '9.5+', conf: 88, color: 'text-emerald-400' },
  ];

  const stats = [
    { name: 'Possession IA', val: '62%' },
    { name: 'XG Prédit', val: '2.4' },
    { name: 'Intensité', val: 'Haut' },
    { name: 'Dangerosité', val: 'Elevé' },
  ];

  return (
    <motion.div 
      style={{ rotateX: rotateSection, scale: scaleSection }}
      className="container mx-auto px-6 perspective-2000"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-start">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-display font-black mb-6 md:mb-12 leading-[1.1] tracking-tighter">
            ANALYSES <br/><span className="gold-text italic">SANS CONCESSION</span>
          </h2>
          <p className="text-base md:text-2xl text-slate-400 mb-8 md:mb-16 font-light leading-relaxed">
            Chaque match est une équation. BETIQ résout les variables tactiques les plus complexes pour vous offrir une vision limpide du terrain.
          </p>

          <div className="space-y-4 md:space-y-8 mb-12 md:mb-20">
            {predictions.map((p, i) => (
              <motion.div 
                key={p.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 md:p-8 rounded-2xl md:rounded-[35px] bg-white/5 border border-white/10 group hover:bg-white/10 transition-all relative overflow-hidden backdrop-blur-3xl gap-4"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 md:w-2 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <span className="font-black text-base md:text-xl text-slate-200 uppercase tracking-tight">{p.label}</span>
                <div className="flex items-center gap-6 md:gap-10 w-full sm:w-auto justify-between sm:justify-end">
                  <span className={`font-black text-lg md:text-2xl ${p.color}`}>{p.value}</span>
                  <div className="relative group/circle">
                    <svg className="w-14 h-14 md:w-20 md:h-20 transform -rotate-90">
                      <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5 md:hidden" />
                      <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5 hidden md:block" />
                      
                      {/* Desktop SVG circle */}
                      <motion.circle 
                        cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="213.6" 
                        initial={{ strokeDashoffset: 213.6 }}
                        whileInView={{ strokeDashoffset: 213.6 - (213.6 * p.conf) / 100 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="text-gold hidden md:block" 
                      />
                      
                      {/* Mobile SVG circle version */}
                       <motion.circle 
                        cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="150.8" 
                        initial={{ strokeDashoffset: 150.8 }}
                        whileInView={{ strokeDashoffset: 150.8 - (150.8 * p.conf) / 100 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="text-gold md:hidden" 
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[9px] md:text-xs font-black">{p.conf}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, z: -100, rotateY: 15 }}
          whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative lg:sticky lg:top-32 perspective-2000"
        >
            <div className="glass p-6 md:p-16 rounded-[30px] md:rounded-[70px] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative z-10 group overflow-hidden preserve-3d">
                <div className="absolute -top-10 md:-top-40 -right-10 md:-right-40 w-32 md:w-96 h-32 md:h-96 bg-gold/10 rounded-full blur-[40px] md:blur-[100px] group-hover:bg-gold/20 transition-colors"></div>
                
                <div className="flex items-center justify-between mb-8 md:mb-16">
                    <h3 className="text-xl md:text-4xl font-display font-black">AI <span className="text-gold">Tension</span> Score</h3>
                    <div className="px-3 md:px-6 py-1 md:py-2 rounded-xl bg-gold/10 border border-gold/20 text-gold text-[7px] md:text-xs font-black uppercase tracking-[0.2em]">PRO MODE</div>
                </div>

                <div className="space-y-6 md:space-y-10">
                    <div className="bg-slate-900/60 p-5 md:p-10 rounded-[25px] md:rounded-[45px] border border-white/5 relative overflow-hidden group/card preserve-3d">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 md:mb-10 gap-3">
                            <div>
                                <h4 className="text-xl md:text-3xl font-black mb-1">Vinicius Jr.</h4>
                                <p className="text-xs md:text-lg text-slate-500 font-bold uppercase tracking-widest">A tout moment</p>
                            </div>
                            <div className="text-left sm:text-right">
                                <div className="text-emerald-400 font-black text-3xl md:text-6xl mb-1 tracking-tighter">84.2%</div>
                                <div className="text-[7px] md:text-[10px] uppercase font-black text-emerald-500/50 tracking-[0.2em]">HAUTE PROBABILITÉ</div>
                            </div>
                        </div>
                        <div className="h-2 md:h-4 w-full bg-slate-800 rounded-full overflow-hidden shadow-2xl">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '84.2%' }}
                                transition={{ duration: 2.5, ease: "circOut" }}
                                viewport={{ once: true }}
                                className="h-full gold-gradient relative"
                            >
                                <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        {stats.map((s, idx) => (
                            <motion.div 
                                key={s.name}
                                whileHover={{ scale: 1.05, translateZ: 20 }}
                                className="bg-white/5 p-4 md:p-8 rounded-xl md:rounded-[40px] border border-white/5 text-center group/stat hover:border-gold/30 transition-all backdrop-blur-2xl"
                            >
                                <div className="text-xl md:text-5xl font-display font-black mb-1 md:mb-3 group-hover/stat:text-gold transition-colors">{s.val}</div>
                                <div className="text-[7px] md:text-xs uppercase text-slate-500 font-black tracking-[0.1em] md:tracking-[0.4em]">{s.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PredictionsDemo;
