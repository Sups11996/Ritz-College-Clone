import { Link } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import WhoAreWeImg from "../../assets/whoarewe.jpg";

const SectionImage = ({ className }: { className?: string }) => {
  return (
    <img
      src={WhoAreWeImg}
      alt="Who we are section image"
      className={className}
    />
  );
};

const WhoAreWe = () => {
  return (
    <div className="px-6 md:px-12 lg:px-16 mt-10 md:mt-20">
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 items-center">
        {/* Text Section */}
        <div className="flex flex-col gap-4 md:w-[46%]">
          <h2 className="text-[#1100AB] font-bold text-xl md:text-2xl">Who are we?</h2>

          <p className="text-[#1a1a1a] text-justify [word-spacing:3px] ">
            Ritz College of Hotel Management offers a variety of courses for
            students who want to establish themselves in the hospitality sector.
            We offer Diploma in Hotel Management and Diploma in Culinary Arts
            (Level III, IV, V).
          </p>

          <Link to={`/${PATHS.COURSES}`}>
            <button className="rounded-lg bg-[#1100AB] px-4 py-2 md:px-6 text-[#f3f3f3] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1300b9] cursor-pointer text-sm md:text-base w-fit">
              Read More
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:flex-1">
          <SectionImage
            className="
              w-full
              rounded-2xl
              object-cover
              h-[clamp(220px,50vw,400px)]
              md:h-[clamp(200px,30vw,300px)]
              lg:h-80
              xl:h-90
            "
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
