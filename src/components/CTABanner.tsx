import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto rounded-sm relative overflow-hidden"
      >
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury_interior.png"
            alt="Luxury Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-7 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4 md:mb-6">
              Let’s Build Your <span className="text-gradient">Dream Property</span>
            </h2>
            <p className="text-base md:text-lg text-soft-white/80 font-light max-w-lg mb-6 md:mb-8">
              Start your journey towards unparalleled luxury. Our experts are ready to turn your vision into an architectural masterpiece.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
            <Link to="/contact" className="bg-gold text-background px-10 py-5 uppercase text-sm tracking-widest font-bold hover:bg-white transition-colors duration-300 w-full sm:w-auto text-center block">
              Call Now
            </Link>
            <a href="https://wa.me/917498308077" target="_blank" rel="noreferrer" className="border border-white/20 hover:border-gold px-10 py-5 uppercase text-sm tracking-widest font-bold transition-colors duration-300 glass w-full sm:w-auto text-center hover:bg-white/10 block">
              WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
