import crowne from '../../assets/crowneplaza.png';
import Hilton from '../../assets/hilton.webp';
import Soaltee from '../../assets/soaltee.png';
import marriott from '../../assets/mariott.jpg';
import radisson from '../../assets/radisson.png';  
import yak from '../../assets/Yak And Yati.png';
import { motion } from "framer-motion";

/**
 * National Internship Component
 * 
 * Displays partner hotels and resorts for national internships:
 * - Premium hotel brand logos in circular containers
 * - Responsive grid layout (2 columns mobile, 3 desktop)
 * - Hover scale effect on logos
 * - Staggered scroll animations
 * 
 * Partners featured: Crowne Plaza, Hilton, Soaltee, Marriott, Radisson, Yak & Yeti
 */
const countries = [
  { name: 'Crowne plaza', flag: crowne },
  { name: 'Hilton', flag: Hilton },
  { name: 'Soaltee Hotel And Resort', flag: Soaltee },
  { name: 'Marriott', flag: marriott },
  { name: 'Radisson', flag: radisson },
  { name: 'Yak And Yati', flag: yak },
];


function NationalInternship() {
  return (
    <div className="px-6 md:px-12 lg:px-16 pt-21 md:pt-25 pb-10 md:pb-15">
      <div className="flex flex-col justify-center md:block">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-6 md:mb-8"
        >
          National Internship
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {countries.map((c, index) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl p-4 md:p-5 text-center "
            >
              <div className="w-20 h-20 md:w-30 md:h-30 lg:h-40 lg:w-40 mx-auto rounded-full overflow-hidden hover:scale-105 transition-all duration-500 border border-[black]">
                <img src={c.flag} className="w-full h-full object-cover" />
              </div>
              <p className="mt-3 text-sm md:text-base font-semibold">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NationalInternship;