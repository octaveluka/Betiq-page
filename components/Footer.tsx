
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-sm">B</span>
                </div>
                <span className="text-2xl font-display font-black tracking-tighter">BET<span className="text-gold">IQ</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
                Propulsé par une intelligence artificielle de pointe, BETIQ révolutionne votre manière d'analyser le sport avec un moteur de recherche en temps réel intégré.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-gold hover:bg-gold/10 transition-all border border-white/5"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-gold hover:bg-gold/10 transition-all border border-white/5"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-gold hover:bg-gold/10 transition-all border border-white/5"><i className="fa-brands fa-telegram"></i></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-400">Navigation</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#home" className="hover:text-gold transition-colors">Accueil</a></li>
                <li><a href="#engine" className="hover:text-gold transition-colors">Technologie AI</a></li>
                <li><a href="#predictions" className="hover:text-gold transition-colors">Analyses du Jour</a></li>
                <li><a href="#vip" className="hover:text-gold transition-colors">Accès VIP Elite</a></li>
                <li><a href="#features" className="hover:text-gold transition-colors">Fonctionnalités</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-400">Ligues Majeures</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-gold transition-colors">Champions League</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Premier League</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Ligue 1 Uber Eats</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">CAN 2025</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">NBA Predictions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-400">Légal & Aide</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-gold transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Mentions Légales</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
                <p className="text-slate-600 text-[10px] mb-2 leading-loose uppercase tracking-widest">
                    BETIQ AI • Designed for Winners
                </p>
                <p className="text-slate-700 text-[9px] max-w-md">
                    Attention : Les jeux d'argent et de hasard sont interdits aux mineurs. Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13.
                </p>
            </div>
            <div className="flex gap-4">
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    API Football: Connected
                </div>
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-slate-400 flex items-center gap-2">
                    <i className="fa-solid fa-server text-gold text-[8px]"></i>
                    Status: Ultra-Stable
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
