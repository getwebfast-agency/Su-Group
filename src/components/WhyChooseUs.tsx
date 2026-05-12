import { motion } from 'framer-motion';
import { ShieldCheck, Target, Gem, Clock } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: 'Trusted Local Expertise', desc: 'Deep understanding of the Navi Mumbai real estate landscape.' },
  { icon: Gem, title: 'Premium Construction', desc: 'Uncompromising quality using the finest materials and elite craftsmanship.' },
  { icon: Target, title: 'Transparent Deals', desc: '100% transparency in pricing, legalities, and project timelines.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Committed to handing over your dream property exactly when promised.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16">

          {/* Left Text */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold">Why SU Group</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 md:mb-8 leading-tight">
                The Gold Standard in Real Estate.
              </h2>

              <p className="text-soft-white/70 font-light text-lg leading-relaxed mb-10">
                We don't just sell properties; we build legacies. Our commitment to architectural brilliance, unwavering ethics, and customer-first approach makes us the most trusted luxury real estate developer in the region.
              </p>

              <button className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-background px-8 py-4 uppercase text-sm tracking-widest font-bold transition-colors duration-300">
                Talk to an Expert
              </button>
            </motion.div>
          </div>

          {/* Right Cards Asymmetric Grid */}
          <div className="w-full lg:w-7/12 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6 sm:mt-12">
                {reasons.slice(0, 2).map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="glass-dark p-5 md:p-8 border hover:border-gold/30 transition-colors duration-300"
                  >
                    <reason.icon className="text-gold mb-6" size={32} />
                    <h3 className="text-xl font-heading font-bold mb-3">{reason.title}</h3>
                    <p className="text-soft-white/60 font-light text-sm leading-relaxed">{reason.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {reasons.slice(2, 4).map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 2) * 0.2 }}
                    className="glass-dark p-5 md:p-8 border hover:border-gold/30 transition-colors duration-300"
                  >
                    <reason.icon className="text-gold mb-6" size={32} />
                    <h3 className="text-xl font-heading font-bold mb-3">{reason.title}</h3>
                    <p className="text-soft-white/60 font-light text-sm leading-relaxed">{reason.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
