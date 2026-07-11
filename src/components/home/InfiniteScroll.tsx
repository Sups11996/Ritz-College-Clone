import { motion } from "framer-motion";
import { homeCards } from "../../data/home/homeCard";
import Cards from "./Cards";

const InfiniteScroll = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center"
    >
      <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mt-5 md:mt-10 text-center overflow-hidden">
        <div className="marquee-track flex w-max gap-6">
          {[...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards, ...homeCards].map((card, index) => (
            <Cards
              key={`${card.id}-${index}`}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InfiniteScroll;
