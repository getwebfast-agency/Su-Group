import { motion } from 'framer-motion';
import { Building2, Users, Calendar, MapPin } from 'lucide-react';

const stats = [
  { id: 1, number: '50+', label: 'Premium Properties', icon: Building2 },
  { id: 2, number: '100+', label: 'Happy Clients', icon: Users },
  { id: 3, number: '10+', label: 'Years Experience', icon: Calendar },
  { id: 4, number: 'Prime', label: 'Locations Near Mumbai', icon: MapPin },
];

const TrustStats = () => {
  return (
    <section className="pt-16 pb-8 md:py-24 relative z-20 -mt-20">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark p-5 md:p-8 border border-white/5 hover:border-gold/30 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <stat.icon className="text-gold/50 mb-3 md:mb-6 group-hover:text-gold transition-colors duration-500" size={24} />
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-1 md:mb-2 tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-sm uppercase tracking-wider text-soft-white/60 group-hover:text-soft-white/90 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
