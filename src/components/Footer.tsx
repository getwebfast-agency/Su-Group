import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-secondary pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/5 relative z-40">
      <div className="container mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">

          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-flex flex-col items-start group cursor-pointer mb-6 -ml-4">
              <img 
                src="/logo_vertical.png" 
                alt="SU Group Logo" 
                className="h-32 md:h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105 origin-left"
              />
            </Link>
            <p className="text-soft-white/50 text-sm font-light leading-relaxed mb-4 md:mb-6">
              Defining luxury real estate in Navi Mumbai. We build masterpieces that stand the test of time and elevate modern living.
            </p>
            <div className="flex gap-4">
              {[
                { label: 'IG', url: '' },
                { label: 'FB', url: '' },
                { label: 'X', url: '' },
                { label: 'IN', url: '' },
              ].map((social) => (
                social.url ? (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-soft-white/60 hover:text-gold hover:border-gold transition-colors duration-300 text-xs font-bold cursor-pointer"
                  >
                    {social.label}
                  </a>
                ) : (
                  <span
                    key={social.label}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-soft-white/60 text-xs font-bold cursor-default opacity-50"
                  >
                    {social.label}
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Quick Links & Featured - side by side on mobile */}
          <div className="grid grid-cols-2 lg:contents gap-6">
            <div>
              <h4 className="font-heading font-bold mb-4 md:mb-6 text-base md:text-lg">Quick Links</h4>
              <ul className="space-y-3 md:space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Portfolio', path: '/projects' },
                  { name: 'Services', path: '/services' },
                  { name: 'Contact', path: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-soft-white/60 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                      <div className="w-2 h-[1px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h4 className="font-heading font-bold mb-4 md:mb-6 text-base md:text-lg">Featured</h4>
              <ul className="space-y-3 md:space-y-4">
                {['The Aurelia Estate', 'Serene Heights', 'Platinum Acres', 'Lakeview Villas'].map((link) => (
                  <li key={link}>
                    <Link to="/projects" className="text-soft-white/60 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                      <div className="w-2 h-[1px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold mb-4 md:mb-6 text-base md:text-lg">Newsletter</h4>
            <p className="text-soft-white/50 text-sm font-light leading-relaxed mb-4">
              Subscribe to get the latest updates on premium properties and investment opportunities.
            </p>
            <div className="flex border-b border-white/20 pb-2 focus-within:border-gold transition-colors">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent w-full focus:outline-none text-sm text-white"
              />
              <button className="text-gold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4">
          <p className="text-soft-white/40 text-xs tracking-wider text-center md:text-left">
            &copy; {new Date().getFullYear()} SU Group. All rights reserved.
          </p>
          <p className="text-soft-white/60 text-xs tracking-wider flex items-center justify-center">
            Designed with <span className="text-red-500 mx-1.5 text-[10px]">❤️</span> by <a href="#" target="_blank" rel="noopener noreferrer" className="text-gold font-medium ml-1.5 hover:text-white transition-colors tracking-widest">GET WEB FAST</a>
          </p>
          <div className="flex gap-6 text-soft-white/40 text-xs tracking-wider justify-center md:justify-end">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 right-12 -translate-y-1/2 w-12 h-12 bg-gold text-background flex items-center justify-center hover:bg-white transition-colors duration-300 z-10"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
