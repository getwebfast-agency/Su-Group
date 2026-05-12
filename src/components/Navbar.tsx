import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ConsultationModal from './ConsultationModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group cursor-pointer -ml-4 md:-ml-8 xl:-ml-12 h-16 md:h-20 xl:h-24 w-[220px] md:w-[280px] xl:w-[350px]">
          <img 
            src="/logo_horizontal.png" 
            alt="SU Group Logo" 
            className="w-full h-full object-contain object-left scale-[1.8] md:scale-[2] xl:scale-[2.2] origin-left transition-transform duration-500 group-hover:scale-[1.9] md:group-hover:scale-[2.1] xl:group-hover:scale-[2.3]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-4 xl:gap-8">
          <div className="flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs xl:text-sm tracking-wider uppercase transition-colors duration-300 font-medium ${isActive ? 'text-gold' : 'text-soft-white/80 hover:text-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-gold text-background px-4 xl:px-6 py-2.5 xl:py-3 uppercase text-xs xl:text-sm tracking-widest font-bold hover:bg-white transition-colors duration-300">
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-soft-white relative z-[60] p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="xl:hidden absolute top-full left-0 w-full py-6 flex flex-col items-center gap-1 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          style={{
            background: 'linear-gradient(180deg, #0d0d0d 0%, #080808 100%)',
            borderTop: '1px solid rgba(212, 175, 55, 0.15)',
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-[0.25em] uppercase transition-colors duration-300 font-medium py-2.5 px-4 w-full text-center ${isActive ? 'text-gold' : 'text-soft-white/70 hover:text-gold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="w-3/4 h-[1px] bg-white/5 my-2"></div>
          <button onClick={() => setIsModalOpen(true)} className="mt-1 border border-gold/60 text-gold px-6 py-2.5 uppercase text-xs tracking-widest font-bold hover:bg-gold hover:text-background transition-colors duration-300">
            Book Consultation
          </button>
        </motion.div>
      )}

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
