// import { FaFacebook, FaInstagram, FaMapMarked } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { footLinks } from "../constants/footLinks";
import { Link } from "react-router-dom";
import { MdMailOutline } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="bg-[#1100AB] text-[#f3f3f3] font-light px-6 py-2 md:px-12 lg:px-16 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* About Us */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold md:text-2xl">About Us</h1>
            <span className="text-sm lg:text-base lapl:text-xl text-justify">
              Ritz College of Hotel Management equips student with world-class
              hospitality skills and industry expertise. Offering a blend of
              practical training and theoretical knowledge the college prepares
              future leaders for thriving careers in hotels, resorts and
              tourism. Join Ritz College to build a rewarding future in the
              dynamic hospitality industry.
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:items-center">
            <h1 className="text-xl font-semibold md:text-2xl">Quick Links</h1>
            <div className="flex flex-col gap-2 text-sm lg:text-base lapl:text-xl w-fit">
              {footLinks.map((link) =>
                !link.download ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="hover:text-[#cfcaff] transition-colors "
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.file}
                    download
                    className="hover:text-[#cfcaff] transition-colors "
                  >
                    {link.name}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* More Info */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold md:text-2xl">More Info</h1>
              <div className="flex flex-col gap-2 w-fit ">
                <div>
                  <a
                    href="https://maps.app.goo.gl/iDkbTrPkNog9NEGc7"
                    target="_blank"
                    className="flex gap-2 items-center hover:text-[#cfcaff]"
                  >
                    <RiMapPinLine className="text-base lg:text-xl" />
                    <span className="text-sm lg:text-base lapl:text-xl">
                      Dharan Road, Itahari, Nepal
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://wa.me/9844304974"
                    target="_blank"
                    className="flex gap-2 items-center hover:text-[#cfcaff]"
                  >
                    <FaWhatsapp className="text-base lg:text-xl" />
                    <span className="text-sm lg:text-base lapl:text-xl">
                      +977 9844304974
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:sups11996@gmail.com"
                    className="flex gap-2 items-center transition-colors hover:text-[#cfcaff]"
                  >
                    <MdMailOutline className="text-base lg:text-xl" />
                    <span className="text-sm lg:text-base lapl:text-xl">
                      ritzcollegeofhm@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact with Us */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold md:text-2xl">
                Contact With Us
              </h1>
              <div className="flex gap-4 md:gap-5 lg:gap-6 text-lg md:text-2xl ">
                <Link
                  className="transition-transform duration-200 hover:scale-110 hover:text-[#cfcaff]"
                  target="_blank"
                  to={
                    "https://www.facebook.com/people/Ritz-College-of-Hotel-Management-Itahari/100064291680950/"
                  }
                >
                  <MdFacebook />
                </Link>
                <Link
                  className="transition-transform duration-200 hover:scale-110  hover:text-[#cfcaff]"
                  target="_blank"
                  to={
                    "https://m.media-amazon.com/images/I/511CI0ghQCS._AC_UF894,1000_QL80_.jpg"
                  }
                >
                  <IoLogoInstagram />
                </Link>
                <Link
                  className="transition-transform duration-200 hover:scale-110  hover:text-[#cfcaff]"
                  target="_blank"
                  to={"https://maps.app.goo.gl/2YkaFGgGgbhGcSfA9"}
                >
                  <FaMapMarkedAlt />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="flex flex-col items-center text-center md:flex-row md:justify-center gap-1 md:gap-2 w-full">
          <span>All rights reserved</span>

          <span className="hidden md:inline">|</span>

          <span>Copyright © Ritz College Of Hotel Management</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
