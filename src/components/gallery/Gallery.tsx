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

// Heights for each image - designed so columns end at same line
// 4 columns, 4 rows = 16 images
// Col1: 160+208+192+160 = 720, Col2: 192+176+208+144 = 720
// Col3: 176+192+160+192 = 720, Col4: 208+160+176+176 = 720
const imageHeights = [
  "h-40 lapl:h-48", "h-48 lapl:h-56", "h-44 lapl:h-52", "h-52 lapl:h-60",
  "h-52 lapl:h-60", "h-44 lapl:h-52", "h-48 lapl:h-56", "h-40 lapl:h-48",
  "h-48 lapl:h-56", "h-52 lapl:h-60", "h-40 lapl:h-48", "h-44 lapl:h-52",
  "h-40 lapl:h-48", "h-36 lapl:h-44", "h-48 lapl:h-56", "h-44 lapl:h-52",
];

function Gallery() {
  // Split into 4 columns manually
  const col1 = images.filter((_, i) => i % 4 === 0);
  const col2 = images.filter((_, i) => i % 4 === 1);
  const col3 = images.filter((_, i) => i % 4 === 2);
  const col4 = images.filter((_, i) => i % 4 === 3);
  const cols = [col1, col2, col3, col4];

  const colHeights = [
    ["h-40 lapl:h-56", "h-52 lapl:h-68", "h-48 lapl:h-64", "h-40 lapl:h-56"],
    ["h-48 lapl:h-64", "h-44 lapl:h-60", "h-52 lapl:h-68", "h-36 lapl:h-52"],
    ["h-44 lapl:h-60", "h-48 lapl:h-64", "h-40 lapl:h-56", "h-48 lapl:h-64"],
    ["h-52 lapl:h-68", "h-40 lapl:h-56", "h-44 lapl:h-60", "h-44 lapl:h-60"],
  ];

  return (
    <div className="px-6 mobl:px-16 md:px-32 lg:px-44 mt-5 md:mt-10 pb-10 md:pb-15">
      <h2 className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8">
        Gallery
      </h2>
      <div className="hidden md:flex gap-4">
        {cols.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-4 flex-1">
            {col.map((img, rowIdx) => (
              <div key={img} className="overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-all duration-500">
                <img
                  src={img}
                  className={`w-full object-cover rounded-xl ${colHeights[colIdx][rowIdx]}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Mobile: 2 columns */}
      <div className="md:hidden columns-2 gap-4">
        {images.map((img, index) => (
          <div key={img} className="break-inside-avoid mb-4 overflow-hidden rounded-xl">
            <img src={img} className={`w-full object-cover rounded-xl ${imageHeights[index % imageHeights.length]}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
