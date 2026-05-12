import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
    message: ''
  });

  const handleWhatsAppSubmit = () => {
    const phoneNumber = "917498308077"; // Real WhatsApp number
    const text = `*New Website Inquiry*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Requirement:* ${formData.requirement || 'Not specified'}

*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    // Clear form after slight delay
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', requirement: '', message: '' });
    }, 500);
  };
  return (
    <section id="contact" className="py-14 md:py-24 relative bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16">

          {/* Left Info & Map */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="uppercase tracking-[0.3em] text-gold text-sm font-bold">Connect</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10">Get in Touch</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Office Location</h4>
                    <p className="text-soft-white/60 font-light">SU Group HQ, Premium Business Park,<br />Navi Mumbai, Maharashtra 400705</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Phone</h4>
                    <p className="text-soft-white/60 font-light">+91 74983 08077</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email</h4>
                    <p className="text-soft-white/60 font-light">ulderayyan02@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Minimal Map Placeholder */}
              <div className="w-full h-[250px] glass-dark border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center mix-blend-overlay">
                  <span className="text-soft-white/40 uppercase tracking-widest text-sm">Interactive Map</span>
                </div>
                <img src="/luxury_aerial.png" alt="Map Area" className="w-full h-full object-cover opacity-30 grayscale" />
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-6 md:p-12 relative"
            >
              <h3 className="text-2xl font-heading font-bold mb-8">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-soft-white/60 font-bold">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-soft-white/60 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-white"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-soft-white/60 font-bold">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-soft-white/60 font-bold">Property Requirement</label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-soft-white/60"
                  >
                    <option value="" className="bg-background">Select Requirement</option>
                    <option value="Luxury Villa" className="bg-background">Luxury Villa</option>
                    <option value="Bungalow" className="bg-background">Bungalow</option>
                    <option value="Land Investment" className="bg-background">Land Investment</option>
                    <option value="General Consultation" className="bg-background">General Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-soft-white/60 font-bold">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-white resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  disabled={!formData.name || !formData.phone}
                  className="w-full bg-[#25D366] text-white py-4 uppercase tracking-widest font-bold hover:bg-[#20bd5a] transition-colors duration-300 flex items-center justify-center gap-2 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
