import { motion } from "framer-motion";

type CardProps = {
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  index?: number;
};

const Cards = ({ title, subtitle, image, description, index = 0 }: CardProps) => {
    return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="shrink-0 flex flex-col items-center justify-between border border-[#e5e5e5] rounded-2xl shadow-sm p-8 md:p-10 w-80 md:w-102.5 min-h-55 md:min-h-65 bg-[#f3f3f3] transition-all hover:shadow-md"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-bold text-base md:text-xl text-center text-[#1a1a1a]">
          {title}
        </h2>
        {subtitle && (
          <p className="font-bold text-sm md:text-base text-[#999999] text-center">
            {subtitle}
          </p>
        )}
      </div>

      <img
        src={image}
        alt={title}
        className="h-12 md:h-14 w-12 md:w-14 object-contain"
      />

      <p className="font-normal text-xs md:text-sm text-[#999999] text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default Cards;
