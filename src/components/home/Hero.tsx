import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { PATHS } from "../../routes/paths";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {images} from "../../data/home/heroImages"

import "swiper/css";
import { Link } from "react-router-dom";

const Hero = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.image}
              alt={`Hero ${img.id}`}
              className="h-[44vh] md:h-[68vh] lg:h-[83vh] w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-5 top-1/2 z-58 -translate-y-1/2 rounded-full p-2 md:p-3 lg:p-4 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
      >
        <FaChevronLeft className="text-[#333] text-xs md:text-sm lg:text-base" />
      </motion.button>

      {/* Right Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-5 top-1/2 z-58 -translate-y-1/2 rounded-full p-2 md:p-4 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
      >
        <FaChevronRight className="text-[#333] text-xs md:text-sm lg:text-base" />
      </motion.button>

      <Link to={`/${PATHS.ABOUT}`}>
        {/* Bottom Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 z-58 -translate-x-1/2 rounded-lg bg-[#1100AB] px-5 py-2 md:px-8 md:py-3 text-[#f3f3f3] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1300b9] cursor-pointer text-sm md:text-base"
        >
          Read More
        </motion.button>
      </Link>
    </section>
  );
};

export default Hero;
