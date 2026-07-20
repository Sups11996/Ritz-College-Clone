import { motion } from "framer-motion";
import ctevtImg from "../../assets/team/ctevt.jpg";
import imaIndiaImg from "../../assets/team/ima-india.jpg";

/**
 * EndorsementSection Component
 * 
 * Displays institutional endorsement partners with:
 * - Grid layout (1 column mobile, 2 columns tablet+)
 * - Partner logos with hover effects
 * - Scroll animations with staggered delays
 * - Grayscale to color transition on hover
 * 
 * Partners: IAMA India, CTEVT Nepal
 */

const ENDORSEMENT_PARTNERS = [
  {
    name: "IAMA India",
    logo: imaIndiaImg,
  },
  {
    name: "CTEVT Nepal",
    logo: ctevtImg,
  },
];

export default function EndorsementSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 mt-10 md:mt-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8"
      >
        Our Endorsement Partners
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ENDORSEMENT_PARTNERS.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className="bg-[#f3f3f3] rounded-xl border border-[#cfcaff] p-8 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col items-center text-center cursor-pointer"
          >
            <img src={partner.logo} alt={partner.name} className="max-h-20 w-1/2 object-contain mb-8" />
            <p className="font-semibold text-[#1a1a1a]">{partner.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
