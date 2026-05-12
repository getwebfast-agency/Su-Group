import { motion } from 'framer-motion';

const images = [
  { src: '/luxury_interior.png', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1613490908578-f0761e860bc8?auto=format&fit=crop&w=800&q=80', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
  { src: '/luxury_aerial.png', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold"></div>
            <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold">Aesthetics</span>
            <div className="h-[1px] w-8 bg-gold"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            Our Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group overflow-hidden ${img.colSpan} ${img.rowSpan}`}
            >
              <img
                src={img.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-gold border border-gold px-6 py-2 uppercase tracking-widest text-xs font-bold scale-90 group-hover:scale-100 transition-transform duration-500">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
