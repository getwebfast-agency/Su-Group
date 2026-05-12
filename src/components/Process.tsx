import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Consultation', desc: 'Understanding your vision and lifestyle.' },
  { num: '02', title: 'Site Selection', desc: 'Curating the perfect prime location.' },
  { num: '03', title: 'Planning', desc: 'Architectural design and legal approvals.' },
  { num: '04', title: 'Construction', desc: 'Premium building with strict quality control.' },
  { num: '05', title: 'Handover', desc: 'Delivering your dream luxury property.' },
];

const Process = () => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold">Our Approach</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            The Journey to Luxury
          </motion.h2>
        </div>

        <div className="relative mt-8 md:mt-24">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-white/10 z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gold"
            ></motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-background border-2 border-gold flex items-center justify-center mb-3 md:mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <span className="text-lg md:text-2xl font-heading font-bold text-gold">{step.num}</span>
                </div>
                <h3 className="text-base md:text-xl font-heading font-bold mb-1 md:mb-3">{step.title}</h3>
                <p className="text-soft-white/60 font-light text-xs md:text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
