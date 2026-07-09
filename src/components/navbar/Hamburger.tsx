import type { Dispatch, RefObject, SetStateAction } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface HamburgerProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  hamburgerRef: RefObject<HTMLDivElement | null>;
}

const Hamburger = ({
  isMenuOpen,
  setIsMenuOpen,
  hamburgerRef,
}: HamburgerProps) => {
  return (
    <div ref={hamburgerRef} className="lg:hidden">
      <RxHamburgerMenu
        className={`z-60 text-lg mobl:text-2xl cursor-pointer transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
};

export default Hamburger;