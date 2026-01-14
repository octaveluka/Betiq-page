
import React from 'react';
import { motion } from 'framer-motion';

const StatsShowcase: React.FC = () => {
  const stats = [
    { label: 'Précision IA', val: '92%' },
    { label: 'Analyses / Jour', val: '500+' },
    { label: 'Utilisateurs', val: '12k' },
    { label: 'Championnats', val: '80+' },
  ];

  const handleDownloadApk = () => {
    window.location.href = 'https://github.com/octaveluka/Betiq-page/releases/download/v1.0.0/_BETIQ_AI_19434243.apk';
  };

  const handleWebRedirect = () => {
    window.location.href = 'https://betiq-ai-l2ax.onrender.com';
  };

  return (
    <div className="container mx-auto px-6">
      <div className="gold-gradient p-[1px] md:p-1 rounded-[20px] md:rounded-[40px]">
          <div className="bg-dark rounded-[19px] md:rounded-[38px] py-8 md:py-12 px-4 md:px-6 grid grid-cols-2 md:flex md:flex-wrap justify-around items-center gap-6 md:gap-12">
            {stats.map((s, i) => (
                <div key={s.label} className="text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-2xl md:text-5xl font-display font-black gold-text mb-1 md:mb-2"
                    >
                        {s.val}
                    </motion.div>
                    <div className="text-[7px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.3em] font-bold text-slate-500">{s.label}</div>
                </div>
            ))}
          </div>
      </div>
      
      <div className="mt-12 md:mt-20 text-center">
        <h3 className="text-lg md:text-2xl font-bold mb-8 md:mb-12 italic text-slate-300 px-4">"L'outil indispensable pour transformer vos analyses en victoires."</h3>
        
        <div className="flex flex-col items-center gap-6">
            <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-black">Prêt à dominer le terrain ?</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-lg px-4">
                <motion.button 
                    onClick={handleDownloadApk}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)] w-full"
                >
                    <i className="fa-solid fa-download text-xl"></i> Android APK
                </motion.button>
                
                <motion.button 
                    onClick={handleWebRedirect}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-900 border border-white/10 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 w-full"
                >
                    <i className="fa-solid fa-laptop text-xl text-gold"></i> Version Navigateur
                </motion.button>
            </div>
            
            <p className="text-[10px] text-slate-600 max-w-xs md:max-w-sm px-6 leading-relaxed">
                Note : APK Directement installable sur Android. Pour iOS et Desktop, utilisez la version Web optimisée.
            </p>
        </div>
      </div>
    </div>
  );
};

export default StatsShowcase;
