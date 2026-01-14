
import React from 'react';
import { motion } from 'framer-motion';

const StatsShowcase: React.FC = () => {
  const stats = [
    { label: 'Précision IA', val: '92%' },
    { label: 'Matchs / Jour', val: '500+' },
    { label: 'Utilisateurs', val: '12k' },
    { label: 'Ligues', val: '80+' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="gold-gradient p-1 rounded-[40px]">
          <div className="bg-dark rounded-[38px] py-12 px-6 flex flex-wrap justify-around items-center gap-12">
            {stats.map((s, i) => (
                <div key={s.label} className="text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-5xl font-display font-black gold-text mb-2"
                    >
                        {s.val}
                    </motion.div>
                    <div className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500">{s.label}</div>
                </div>
            ))}
          </div>
      </div>
      
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-8 italic">"L'un des outils les plus complets du marché pour l'aide aux paris sportifs."</h3>
        <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors flex items-center gap-2">
                <i className="fa-brands fa-apple text-xl"></i> App Store
            </button>
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors flex items-center gap-2">
                <i className="fa-brands fa-google-play text-xl"></i> Google Play
            </button>
        </div>
      </div>
    </div>
  );
};

export default StatsShowcase;
