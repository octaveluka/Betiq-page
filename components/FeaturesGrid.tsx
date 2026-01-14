
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: 'UI/UX Premium',
      desc: 'Design Dark Mode avec accents Or & Bleu pour une expérience prestigieuse et technologique.',
      icon: 'fa-palette',
      color: 'gold'
    },
    {
      title: 'Bilingue Intégré',
      desc: 'Support complet du Français et de l’Anglais pour une accessibilité internationale.',
      icon: 'fa-language',
      color: 'tech-blue'
    },
    {
      title: 'Filtres Avancés',
      desc: 'Recherche par équipe, ligue (UCL, CAN, PL) et filtrage par date sur 7 jours.',
      icon: 'fa-filter',
      color: 'gold'
    },
    {
      title: 'Sécurité Firebase',
      desc: 'Inscription et authentification sécurisées pour protéger vos données et vos accès VIP.',
      icon: 'fa-shield-halved',
      color: 'tech-blue'
    },
    {
      title: 'API Temps Réel',
      desc: 'Données Football en direct : scores, logos et horaires de matchs toujours actualisés.',
      icon: 'fa-clock',
      color: 'gold'
    },
    {
      title: 'Sources Vérifiées',
      desc: 'Affichage des liens Google utilisés par l’IA pour prouver la véracité des tactiques.',
      icon: 'fa-link',
      color: 'tech-blue'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-black mb-4">L'Expérience <span className="text-tech-blue">Utilisateur</span> Ultime</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Chaque détail a été pensé pour faire de BETIQ l'outil le plus complet et intuitif du marché.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[32px] bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-6 shadow-xl ${f.color === 'gold' ? 'bg-gold/10 text-gold' : 'bg-tech-blue/10 text-tech-blue'}`}>
              <i className={`fa-solid ${f.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{f.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
