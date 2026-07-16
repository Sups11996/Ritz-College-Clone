import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all gallery images (optimized versions)
import img1 from "../../assets/img1-min.jpg";
import img2 from "../../assets/img2-min.jpg";
import img3 from "../../assets/img3-min.jpg";
import img4 from "../../assets/img4-min.jpg";
import img5 from "../../assets/img5-min.jpg";
import img6 from "../../assets/img6-min.jpg";
import img7 from "../../assets/img7-min.jpg";
import img8 from "../../assets/img8-min.jpg";
import img9 from "../../assets/img9-min.jpg";
import img10 from "../../assets/img10-min.jpg";
import img11 from "../../assets/img11-min.jpg";
import img12 from "../../assets/img12-min.jpg";
import img13 from "../../assets/img13-min.jpg";
import img14 from "../../assets/img14-min.jpg";
import img15 from "../../assets/img15-min.jpg";
import img16 from "../../assets/img16-min.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

/**
 * Random varied heights for masonry-style layout
 * Creates visual interest with different image sizes
 */
// Random varied heights for masonry effect - much more variety
const imageHeights = [
  "h-44", "h-72", "h-56", "h-80",
  "h-64", "h-48", "h-88", "h-60",
  "h-68", "h-52", "h-76", "h-92",
  "h-56", "h-84", "h-60", "h-52",
];

/**
 * Gallery Component
 * 
 * Displays a masonry-style photo gallery with:
 * - Random varied image heights for visual interest
 * - 4-column layout on desktop, 2-column on mobile
 * - Click to open fullscreen modal
 * - Smooth scroll animations
 * - Background scroll lock when modal is open
 * 
 * Features:
 * - Responsive masonry layout
 * - Hover effects with instant response
 * - Keyboard navigation (ESC to close modal)
 * - Portrait and landscape image support
 */
function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  // Split into 4 columns manually
  const col1 = images.filter((_, i) => i % 4 === 0);
  const col2 = images.filter((_, i) => i % 4 === 1);
  const col3 = images.filter((_, i) => i % 4 === 2);
  const col4 = images.filter((_, i) => i % 4 === 3);
  const cols = [col1, col2, col3, col4];

  // Varied heights for each column - much more random and varied
  const colHeights = [
    ["h-96", "h-80", "h-56", "h-64"], // First image is portrait - taller
    ["h-72", "h-52", "h-96", "h-60"],
    ["h-60", "h-68", "h-48", "h-88"],
    ["h-52", "h-92", "h-64", "h-56"],
  ];

  return (
    <>
      <div className="px-6 md:px-12 lg:px-32 mt-5 md:mt-10 pb-10 md:pb-15">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8"
      >
        Gallery
      </motion.h2>
      
      {/* Desktop: 4 columns with aligned tops */}
      <div className="hidden md:flex gap-4 items-start">
        {cols.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-4 flex-1">
            {col.map((img, rowIdx) => (
              <motion.div 
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (colIdx * 0.1) + (rowIdx * 0.1) }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: "easeInOut" } }}
                onClick={() => setSelectedImage(img)}
                className="overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery image ${colIdx * 4 + rowIdx + 1}`}
                  className={`w-full object-cover rounded-xl ${colHeights[colIdx][rowIdx]}`}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Mobile: 2 columns masonry */}
      <div className="md:hidden columns-2 gap-4">
        {images.map((img, index) => (
          <motion.div 
            key={img}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: "easeInOut" } }}
            onClick={() => setSelectedImage(img)}
            className="break-inside-avoid mb-4 overflow-hidden rounded-xl cursor-pointer"
          >
            <img 
              src={img} 
              alt={`Gallery image ${index + 1}`}
              className={`w-full object-cover rounded-xl ${imageHeights[index % imageHeights.length]}`} 
            />
          </motion.div>
        ))}
      </div>
    </div>

    {/* Image Modal */}
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-auto h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-2 -top-2 md:right-4 md:top-4 z-10 h-10 w-10 cursor-pointer rounded-full border-none bg-white text-lg text-[#1a1a1a] transition-colors duration-200 hover:bg-gray-200 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="w-auto h-full object-contain rounded-xl mx-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}

export default Gallery;
