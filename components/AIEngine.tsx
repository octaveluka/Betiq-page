
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Fixed TypeScript error: Defined TiltCard as a React.FC to correctly handle standard props like key when used in lists
const TiltCard: React.FC<{ children: React.ReactNode; className: string }> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - rect.left / rect.width - 0.5);
    y.set(e.clientY / rect.height - rect.top / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

const AIEngine: React.FC = () => {
  const steps = [
    { 
      name: 'Copilot Advanced', 
      desc: 'Moteur Primaire de corrélation statistique avancée et analyse historique profonde.', 
      icon: 'fa-microchip',
      priority: 1 
    },
    { 
      name: 'Venice Tactical', 
      desc: 'Système de failover n°1 pour la profondeur tactique et les stratégies d\'équipes complexes.', 
      icon: 'fa-brain',
      priority: 2 
    },
    { 
      name: 'Gemini 3 Pro', 
      desc: 'Analyste final pour la recherche Google Search en temps réel et la validation des faits.', 
      icon: 'fa-bolt-lightning',
      priority: 3 
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-5xl mx-auto mb-32">
        <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-6xl lg:text-8xl font-display font-black mb-10 leading-tight tracking-tighter"
        >
            HYPER-PRECISION <br/><span className="gold-text">FAILOVER SYSTEM</span>
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-slate-400 font-light max-w-3xl mx-auto"
        >
          Notre technologie de triple redondance élimine l'erreur humaine et les biais algorithmiques pour une objectivité totale.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 relative perspective-2000">
        <div className="hidden lg:block absolute top-[6rem] left-[10%] right-[10%] h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
                animate={{ x: ['-100%', '300%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-full w-1/4 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80"
            ></motion.div>
        </div>
        
        {steps.map((step, idx) => (
          <TiltCard
            key={step.name}
            className="glass p-12 rounded-[50px] relative z-10 hover:border-gold/60 transition-all group cursor-default preserve-3d"
          >
            <div className="w-24 h-24 gold-gradient rounded-[35px] flex items-center justify-center text-4xl mb-12 shadow-[0_30px_60px_-10px_rgba(193,140,50,0.5)] group-hover:scale-110 transition-transform duration-500 relative preserve-3d">
              <i className={`fa-solid ${step.icon} text-white`}></i>
              <div className="absolute -inset-2 bg-gold/20 blur-xl rounded-[35px] -z-10 animate-pulse"></div>
            </div>
            
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-3xl font-black tracking-tight">{step.name}</h3>
               <span className="text-[10px] font-black px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold uppercase tracking-[0.2em]">Tier {step.priority}</span>
            </div>
            
            <p className="text-xl text-slate-400 leading-relaxed mb-10 font-light group-hover:text-white transition-colors duration-500">{step.desc}</p>
            
            <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                <span className="text-emerald-500 font-black text-xs uppercase tracking-widest">Opérationnel</span>
            </div>
          </TiltCard>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, rotateX: 20 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        className="mt-32 bg-slate-900/40 border border-white/5 rounded-[60px] p-16 flex flex-col lg:row items-center gap-16 relative overflow-hidden group perspective-2000"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="w-32 h-32 bg-tech-blue/20 rounded-[40px] flex items-center justify-center text-5xl text-tech-blue shadow-2xl relative z-10 group-hover:rotate-12 transition-transform">
            <i className="fa-brands fa-google"></i>
        </div>
        <div className="relative z-10 text-center lg:text-left">
            <h4 className="text-4xl font-black mb-6 tracking-tight">Real-Time Google Grounding</h4>
            <p className="text-2xl text-slate-400 leading-relaxed max-w-4xl font-light">
                Nous fusionnons les données froides (statistiques) avec les données chaudes (news en direct) via un <span className="text-white font-bold underline decoration-gold">maillage de recherche web</span> propriétaire. 
                <span className="text-gold font-black ml-6 inline-flex items-center gap-3 cursor-pointer hover:translate-x-3 transition-transform">
                    Explorer les sources <i className="fa-solid fa-arrow-right-long"></i>
                </span>
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AIEngine;
