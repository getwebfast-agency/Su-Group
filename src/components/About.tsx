import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 -left-[20%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Image Collage */}
          <div className="w-full lg:w-1/2 relative h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-[70%] h-[80%] z-10"
            >
              <img
                src="/luxury_interior.png"
                alt="Luxury Interior"
                className="w-full h-full object-cover rounded-sm shadow-2xl brightness-90"
              />
              <div className="absolute inset-0 border border-white/10 rounded-sm"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-0 right-0 w-[60%] h-[50%] z-20"
            >
              <img
                src="/luxury_aerial.png"
                alt="Villa Aerial View"
                className="w-full h-full object-cover rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[4px] border-background"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 glass p-6 z-30 flex flex-col items-center justify-center rounded-sm"
            >
              <span className="text-4xl font-heading font-bold text-gold">10+</span>
              <span className="text-xs uppercase tracking-widest text-center mt-2 max-w-[100px]">Years of Excellence</span>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold">The SU Legacy</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8">
                Redefining <br />
                <span className="text-gradient">Modern Luxury</span>
              </h2>

              <div className="space-y-6 text-soft-white/70 font-light text-lg leading-relaxed">
                <p>
                  At SU Group, we don't just build houses; we craft bespoke living experiences. Based in Navi Mumbai, we specialize in developing ultra-premium villas, luxury bungalows, and securing prime land investments for the elite.
                </p>
                <p>
                  Our philosophy is rooted in architectural excellence and emotional design. Every property is conceived as a sanctuary—a seamless blend of state-of-the-art amenities, sustainable practices, and timeless aesthetics.
                </p>
                <p className="pl-6 border-l-2 border-gold/50 italic text-soft-white/90">
                  "Our vision is to create spaces that breathe, inspire, and elevate the standard of luxury living in India."
                </p>
              </div>

              <div className="mt-12">
                <button className="uppercase tracking-widest text-sm font-bold border-b border-gold text-gold pb-2 hover:text-white hover:border-white transition-colors duration-300">
                  Discover Our Story
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
