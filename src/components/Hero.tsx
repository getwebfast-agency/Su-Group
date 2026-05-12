import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg_final.jpg.jpeg"
          alt="Luxury Villa"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent w-full md:w-3/4"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full pb-32 md:pb-28 container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Premium Real Estate</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-8"
            style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
          >
            Building <span className="text-gradient">Luxury</span><br />
            Living Experiences<br />
            Near Mumbai.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-soft-white/70 max-w-2xl mb-12 font-light leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
          >
            Premium Villas, Bungalows & Land Investments Designed for Modern Lifestyles. Masterpieces of architecture blending nature with ultimate comfort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/projects" className="bg-gold text-background px-8 py-4 uppercase text-sm tracking-widest font-bold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 group">
              Explore Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/917498308077" target="_blank" rel="noreferrer" className="border border-white/20 hover:border-gold px-8 py-4 uppercase text-sm tracking-widest font-bold transition-colors duration-300 glass flex items-center justify-center">
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs uppercase tracking-widest text-soft-white/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="text-gold" size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
