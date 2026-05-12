import { motion } from 'framer-motion';

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
        className="text-4xl md:text-5xl font-heading font-bold"
      >
        {title}
      </motion.h1>
    </div>
  </div>
);

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="Legal" />
      <div className="py-24 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-invert prose-gold">
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            At SU Group, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make an inquiry on our website.
          </p>
          <h2 className="text-2xl font-heading font-bold mt-12 mb-4 text-white">Information We Collect</h2>
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          </p>
          <h2 className="text-2xl font-heading font-bold mt-12 mb-4 text-white">How Do We Use Your Personal Information?</h2>
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            We use the personal information that we collect generally to fulfill any inquiries placed through the Site (including processing your contact details and providing you with real estate consultation).
          </p>
          <h2 className="text-2xl font-heading font-bold mt-12 mb-4 text-white">Contact Us</h2>
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy@sugroup.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
