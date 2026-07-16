import { motion } from "framer-motion";

/**
 * ContactInfo Component
 * 
 * Displays college contact information in a decorative panel with:
 * - Blue background bar
 * - Black overlay card with contact details
 * - Location, email, and phone information with icons
 * 
 * Features:
 * - Hidden on mobile, visible on tablet (md) and above
 * - Smooth slide-in animation from right
 * - Vertically centered alignment with contact form
 */
export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="hidden md:flex relative h-full w-72 lg:w-96 shrink-0 items-center"
    >
      {/* Blue bar - same height as form, visible on tablets and desktop */}
      <div className="absolute right-0 top-0 bottom-0 w-48 lg:w-44 bg-[#1100AB] rounded-2xl"></div>

      {/* Contact info box - overlaps blue bar and centered vertically */}
      <div className="absolute right-0 bg-black text-white p-4 lg:p-6 shadow-lg z-20 rounded-tl-2xl rounded-bl-2xl w-64 lg:w-72">
        <ul className="flex flex-col gap-3 lg:gap-4">
          <li className="flex items-center gap-2 lg:gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 mt-0.5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
            </svg>
            <span className="text-xs lg:text-sm leading-tight">Dharan Road, Itahari, Nepal</span>
          </li>

          <li className="flex items-center gap-2 lg:gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 mt-0.5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="text-xs lg:text-sm leading-tight break-words">ritzcollegeofhm@gmail.com</span>
          </li>

          <li className="flex items-center gap-2 lg:gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 mt-0.5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57.13.34.03.74-.24 1.05l-2.21 2.17z" />
            </svg>
            <span className="text-xs lg:text-sm leading-tight">+977 25-587251</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
