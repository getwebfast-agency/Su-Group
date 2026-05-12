import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'The Aurelia Estate',
    category: 'Villas',
    location: 'Lonavala, Near Mumbai',
    price: 'Starting ₹15 Cr',
    image: '/lonavala_project.png', // Mountain/nature themed
  },
  {
    id: 2,
    title: 'Serene Heights',
    category: 'Bungalows',
    location: 'Alibaug',
    price: 'Starting ₹8 Cr',
    image: '/alibaug_project.png', // Coastal/beachside themed
  },
  {
    id: 3,
    title: 'Platinum Acres',
    category: 'Investment Lands',
    location: 'Panvel, Navi Mumbai',
    price: 'On Request',
    image: '/panvel_project.png', // Urban/city themed
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 md:w-12 bg-gold"></div>
              <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold">Portfolio</span>
              <div className="h-[1px] w-8 md:w-12 bg-gold"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Featured Projects
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Badges */}
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="glass px-4 py-1.5 text-xs uppercase tracking-widest font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <button className="bg-gold text-background px-6 py-3 uppercase text-xs tracking-widest font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Details
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-soft-white/60 text-sm">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-light text-soft-white/50 block mb-1">From</span>
                  <span className="text-gold font-bold font-heading">{project.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
