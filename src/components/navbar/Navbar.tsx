import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import NavButton from "./NavButton";
import TopNavbar from "./TopNavbar";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

import { useCloseMenu } from "../../hooks/useCloseMenu";
import { useDownloadForm } from "../../hooks/useDownloadForm";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();
  const location = useLocation();

  const handleDownload = useDownloadForm();

  useCloseMenu(isMenuOpen, menuRef, hamburgerRef, () => setIsMenuOpen(false));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (path: string) => {
    if (pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <TopNavbar />

      <div className="flex justify-between items-center bg-[#f3f3f3] text-[#1100AB] text-sm font-normal px-6 py-1 md:px-12 lg:px-16 sticky top-0 z-59 border border-[#e5e5e5]">
        {/* Logo */}
        <Link to="/" onClick={() => handleNavClick("/")}>
          <Logo className="lg:h-15 h-10 w-auto cursor-pointer" />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav pathname={pathname} handleNavClick={handleNavClick} />

        {/* Download Button */}
        <NavButton
          onClick={handleDownload}
          className="bg-[#1100AB] text-[#f3f3f3] font-light hover:bg-[#1300b9] text-base hidden lg:inline lapl:text-lg"
        >
          Download Form
        </NavButton>

        {/* Hamburger */}
        <Hamburger
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          hamburgerRef={hamburgerRef}
        />

        {/* Mobile Menu */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          menuRef={menuRef}
          pathname={location.pathname}
          handleNavClick={handleNavClick}
          handleDownload={handleDownload}
        />
      </div>
    </>
  );
};

export default Navbar;
