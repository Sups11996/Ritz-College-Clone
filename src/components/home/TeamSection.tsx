import { motion } from "framer-motion";
import arunImg from "../../assets/team/arun.png";
import ausikaImg from "../../assets/team/ausika.png";
import kamantImg from "../../assets/team/kamant.png";
import kausalImg from "../../assets/team/kausal.png";
import puspaImg from "../../assets/team/puspa a.png";
import santoshImg from "../../assets/team/santosh.png";

/**
 * TeamSection Component
 * 
 * Displays leadership and management team with:
 * - Grid layout (1 column mobile, 2 tablet, 3 desktop)
 * - Profile photos with name, role, and description
 * - Hover effects with scale and shadow
 * - Scroll animations with staggered delays
 * 
 * Team includes: CEO, Operation Manager, Coordinator, and other key staff
 */

const TEAM_MEMBERS = [
  {
    name: "Mr. Puspa Adhikari",
    role: "C.E.O",
    image: puspaImg,
    description:
      "Set strategic vision, make key decisions, lead teams, ensure growth, and represent the organization globally.",
  },
  {
    name: "Mr. Santosh Rai",
    role: "Operation Manager",
    image: santoshImg,
    description:
      "Oversee daily operations, manage teams, optimize resources, ensure efficiency, and achieve organizational goals.",
  },
  {
    name: "Mr. Kaman Acharya",
    role: "Coordinator",
    image: kamantImg,
    description:
      "Organize tasks, manage communication, ensure collaboration, resolve issues, and maintain project or team efficiency.",
  },
  {
    name: "Mr. Kaushal Koirala",
    role: "Instructor of F&B Service",
    image: kausalImg,
    description:
      "Train students in food, beverage, and hospitality skills, ensuring excellent service standards and professionalism.",
  },
  {
    name: "Mrs. Anusikha Shrestha",
    role: "Instructor of Business Communication English",
    image: ausikaImg,
    description:
      "Teach effective communication skills, English proficiency, business writing, and presentation techniques.",
  },
  {
    name: "Arun Pradhan",
    role: "Instructor of Front Office & Housekeeping",
    image: arunImg,
    description:
      "Train students in front office operations, guest services, housekeeping techniques, and hospitality management standards.",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 mt-10 md:mt-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8"
      >
        Our Team
      </motion.h2>

      {/* Team members — responsive layout */}
      <div className="w-full">
        {/* Large screens (lapl+): overlapping images row + text below */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lapl:flex lapl:flex-col lapl:items-center"
        >
          <div className="overflow-visible flex justify-center mb-8">
            <div className="flex items-start">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center shrink-0"
                  style={{
                    marginLeft: index === 0 ? 0 : "-138px",
                    position: "relative",
                  }}
                >
                  {/* Image */}
                  <div 
                    className="w-[335px] h-[335px] rounded-full overflow-hidden mb-6"
                    style={{
                      zIndex: TEAM_MEMBERS.length - index,
                      position: "relative",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div 
                    className="flex flex-col items-center text-center"
                    style={{
                      width: "200px",
                      zIndex: 20,
                      position: "relative",
                    }}
                  >
                    <h3 className="text-[1rem] font-bold text-[#1a1a1a] leading-snug mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[0.85rem] font-semibold text-[#1a1a1a] mb-2 leading-snug">
                      {member.role}
                    </p>
                    <p className="text-[0.8rem] text-[#1a1a1a] leading-[1.6]">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Small/medium screens (below lapl): responsive card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lapl:hidden">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-[#e0e0e0] p-6 py-4 flex flex-col items-center text-center shadow-sm"
            >
              {/* Image */}
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-[#1a1a1a] mb-3 leading-snug">
                {member.role}
              </p>
              <p className="text-sm text-[#1a1a1a] leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
