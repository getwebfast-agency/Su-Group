import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden bg-background-secondary border-b border-white/5">
    <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="container mx-auto relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-4 mb-4"
      >
        <div className="h-[1px] w-8 bg-gold"></div>
        <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold">{subtitle}</span>
        <div className="h-[1px] w-8 bg-gold"></div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-6xl font-heading font-bold"
      >
        {title}
      </motion.h1>
    </div>
  </div>
);

const GalleryPage = () => {
  return (
    <>
      <PageHeader title="Visual Excellence" subtitle="Gallery" />
      <Gallery />
    </>
  );
};

export default GalleryPage;
