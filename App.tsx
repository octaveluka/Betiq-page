
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIEngine from './components/AIEngine';
import PredictionsDemo from './components/PredictionsDemo';
import VipSection from './components/VipSection';
import FeaturesGrid from './components/FeaturesGrid';
import StatsShowcase from './components/StatsShowcase';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-white overflow-x-hidden bg-dark">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 gold-gradient z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <motion.section 
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.section>

        <section id="engine" className="py-32 bg-dark relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
           <AIEngine />
        </section>

        <section id="predictions" className="py-32 bg-slate-950 relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
           <PredictionsDemo />
        </section>

        <section id="vip" className="py-32 bg-dark relative">
           <VipSection />
        </section>

        <section id="features" className="py-32 bg-slate-950">
           <FeaturesGrid />
        </section>

        <section id="stats" className="py-32 bg-dark">
           <StatsShowcase />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
