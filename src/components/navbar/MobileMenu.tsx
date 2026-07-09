import type { Dispatch, RefObject, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import NavButton from "./NavButton";
import { navLinks } from "../../constants/navLinks";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuRef: RefObject<HTMLDivElement | null>;
  pathname: string;
  handleNavClick: (path: string) => void;
  handleDownload: () => void;
}

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  menuRef,
  pathname,
  handleNavClick,
  handleDownload,
}: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          ref={menuRef}
          className="absolute flex flex-col gap-5.5 top-11 right-6 md:right-12 p-4 rounded-b-lg mobl:px-8 bg-[#f3f3f3f1] shadow-lg z-61 lg:hidden text-sm md:text-base"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleNavClick(link.path);
                }}
                className={`block w-full group py-1 transition-all duration-200 ${
                  pathname === link.path
                    ? "font-semibold text-[#1100AB]"
                    : "font-normal hover:text-[#3D2DDB]"
                }`}
              >
                <span className="relative inline-block">
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left bg-current transition-transform duration-600 ${
                      pathname === link.path
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </span>
              </Link>
            ))}
          </div>

          <NavButton
            onClick={handleDownload}
            className="bg-[#1100AB] text-[#f3f3f3] font-light hover:bg-[#1300b9] px-4 py-2"
          >
            Download Form
          </NavButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;