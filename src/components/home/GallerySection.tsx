import { Link } from "react-router-dom";
import { galleryImages } from "../../data/home/galleryImages";
import { PATHS } from "../../routes/paths";

const GallerySection = () => {
  return (
    <>
      <div className=" w-full mt-10 md:mt-20 px-6 md:px-12 lg:px-16 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h2 className="text-[#1100AB] font-bold text-xl md:text-2xl">Gallery Section</h2>
          <Link to={`/${PATHS.GALLERY}`}>
            <button className="rounded-lg bg-[#1100AB] px-4 py-2 md:px-6 text-[#f3f3f3] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1300b9] cursor-pointer text-sm md:text-base w-fit">
              See All
            </button>
          </Link>
        </div>
        <div className="w-full overflow-hidden rounded-t-2xl">
          <div className="marquee-track flex w-max items-center gap-3">
            {[...galleryImages, ...galleryImages].map((item, index) => (
              <img
                key={`${item.id}-${index}`}
                src={item.image}
                alt={item.alt}
                className="h-60 md:h-75 lg:h-90 w-auto shrink-0 object-contain rounded-t-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySection;