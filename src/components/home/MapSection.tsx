import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 mt-10 md:mt-20 pb-10 md:pb-15">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8"
      >
        Physical Address
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl border-[#e0e0e0] md:p-3 shadow-lg overflow-hidden w-full"
      >
        <div className="h-64 md:h-80 lg:h-96 w-full">
          <iframe
            title="Ritz College Location"
            className="w-full h-full border-0 rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27038.031587023008!2d87.275084!3d26.665936000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d96708c609b%3A0x372941eafd76a16d!2sRitz%20college%20of%20Hotel%20Management!5e1!3m2!1sen!2sus!4v1783501505178!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
