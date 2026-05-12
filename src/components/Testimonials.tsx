import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Mehta',
    role: 'CEO, Tech Ventures',
    text: 'SU Group delivered beyond our expectations. The attention to detail in our Alibaug villa is simply phenomenal. A true masterpiece of modern architecture.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Investment Banker',
    text: 'Transparent, professional, and extremely premium. Buying land through them was the most seamless real estate experience I have ever had in Navi Mumbai.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anil Desai',
    role: 'Business Owner',
    text: 'The quality of construction and the aesthetic choices made by SU Group are unparalleled. They truly understand what luxury living means today.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden bg-background-secondary">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-[1px] w-12 bg-gold"></div>
          <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold">Client Success</span>
          <div className="h-[1px] w-12 bg-gold"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass p-6 md:p-16 relative"
            >
              <Quote className="text-gold/20 absolute top-8 left-8" size={80} />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-lg md:text-3xl font-light text-soft-white/90 leading-relaxed mb-7 md:mb-10">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                  />
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <span className="text-xs text-soft-white/60 uppercase tracking-wider">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 -translate-x-1/2 md:translate-x-0">
            <button onClick={prev} className="p-3 glass rounded-full hover:bg-gold hover:text-background transition-colors duration-300">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 translate-x-1/2 md:translate-x-0">
            <button onClick={next} className="p-3 glass rounded-full hover:bg-gold hover:text-background transition-colors duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
