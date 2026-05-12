import { motion } from 'framer-motion';
import { Home, Trees, Building, Map, Key, Ruler } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Luxury Villa Construction',
    description: 'End-to-end construction of ultra-premium villas designed with visionary architecture and world-class materials.',
  },
  {
    icon: Building,
    title: 'Bungalow Development',
    description: 'Bespoke bungalow projects that offer ultimate privacy, expansive spaces, and timeless elegance.',
  },
  {
    icon: Map,
    title: 'Land Buying & Selling',
    description: 'Exclusive access to prime, high-appreciation land parcels in and around Navi Mumbai.',
  },
  {
    icon: Key,
    title: 'Property Consultation',
    description: 'Expert advisory for high-net-worth individuals on real estate investments and portfolio expansion.',
  },
  {
    icon: Trees,
    title: 'Investment Guidance',
    description: 'Strategic insights to maximize ROI through premium land and property acquisitions.',
  },
  {
    icon: Ruler,
    title: 'Architecture Planning',
    description: 'Collaborating with elite architects to design masterpieces that blend aesthetics with functionality.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-14 md:py-24 bg-background-secondary relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold"></div>
            <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold">Expertise</span>
            <div className="h-[1px] w-8 bg-gold"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-heading font-bold"
          >
            Our Premium Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-gold/50 hover:to-gold/10 transition-colors duration-500 overflow-hidden"
            >
              <div className="bg-background h-full p-6 md:p-10 relative z-10 overflow-hidden">
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                <div className="relative z-20">
                  <service.icon className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500" size={40} strokeWidth={1.5} />
                  <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-soft-white/60 font-light leading-relaxed mb-6 group-hover:text-soft-white/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-white/40 group-hover:text-gold transition-colors duration-300">
                    <span>Learn More</span>
                    <div className="w-4 h-[1px] bg-current group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
