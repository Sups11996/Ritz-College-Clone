import { IoCallSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

import NavButton from "./NavButton";
import { PATHS } from "../../routes/paths";

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 md:px-12 lg:px-16 bg-[#1100AB] text-[#f3f3f3] text-[10px] font-light md:text-[12px] lg:text-sm lapl:text-base ">
      {/* Phone Number */}
      <div>
        <a href="tel:025587251" className="flex items-center gap-1">
          <IoCallSharp className="mt-0 text-[12px] md:text-[16px]" />
          <span className="hover:text-[#cfcaff] transition-colors">
            025-587251
          </span>
        </a>
      </div>

      {/* Email Address */}
      <div className="hidden md:flex items-center">
        <a
          href="mailto:sups11996@gmail.com"
          className="flex items-center gap-1"
        >
          <MdMailOutline className="mt-0.5 text-[16px]" />
          <span className="hover:text-[#cfcaff] transition-colors">
            ritzcollegeofhm@gmail.com
          </span>
        </a>
      </div>

      {/* Apply Button */}
      <Link to={`/${PATHS.CONTACT}`}>
        <NavButton className="bg-[#f3f3f3] text-[#1100AB] md:px-3 md:py-1.5">
          Apply Now
        </NavButton>
      </Link>
    </div>
  );
};

export default TopNavbar;