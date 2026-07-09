import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";

interface DesktopNavProps {
  pathname: string;
  handleNavClick: (path: string) => void;
}

const DesktopNav = ({
  pathname,
  handleNavClick,
}: DesktopNavProps) => {
  return (
    <div className="hidden lg:flex gap-7 lapl:gap-16 font-montserrat font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`relative group text-base lapl:text-xl transition-colors ${
            pathname === link.path
              ? "text-[#1100AB] font-semibold"
              : "hover:text-[#3D2DDB]"
          }`}
          onClick={() => handleNavClick(link.path)}
        >
          {link.name}

          <span
            className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left bg-current transition-transform duration-600 ${
              pathname === link.path
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
            }`}
          ></span>
        </Link>
      ))}
    </div>
  );
};

export default DesktopNav;