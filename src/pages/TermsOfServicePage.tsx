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

const TermsOfServicePage = () => {
  return (
    <>
      <PageHeader title="Terms of Service" subtitle="Legal" />
      <div className="py-24 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-invert prose-gold">
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            Please read these Terms of Service carefully before using the SU Group website. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
          </p>
          <h2 className="text-2xl font-heading font-bold mt-12 mb-4 text-white">Intellectual Property</h2>
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            The Service and its original content, features and functionality are and will remain the exclusive property of SU Group and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
          </p>
          <h2 className="text-2xl font-heading font-bold mt-12 mb-4 text-white">Links To Other Web Sites</h2>
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by SU Group. SU Group has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
          </p>
          <h2 className="text-2xl font-heading font-bold mt-12 mb-4 text-white">Changes</h2>
          <p className="text-soft-white/70 font-light leading-relaxed mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;
