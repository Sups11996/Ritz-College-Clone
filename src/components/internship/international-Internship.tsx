import france from "../../assets/france.png";
import turkey from "../../assets/turkey.png";
import china from "../../assets/china.png";
import hongkong from "../../assets/hongkong.png";
import greece from "../../assets/greece.png";
import india from "../../assets/india.png";

const countries = [
  { name: "France", flag: france },
  { name: "Turkey", flag: turkey },
  { name: "China", flag: china },
  { name: "Hongkong", flag: hongkong },
  { name: "Greece", flag: greece },
  { name: "India", flag: india },
];

function InternationalInternship() {
  return (
    <div className="px-6 md:px-12 lg:px-16 mt-10 md:mt-20 pb-10 md:pb-15">
      <div className="flex flex-col justify-center md:block">
        <h2 className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8">
          International Internship
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {countries.map((c) => (
            <div
              key={c.name}
              className="border border-gray-200 rounded-xl p-3 md:p-4 text-center "
            >
              <div className="w-30 h-30 md:h-40 md:w-40 mx-auto rounded-full overflow-hidden hover:scale-105 transition-all duration-500 rounded-50% border border-[black]  ">
                <img src={c.flag} className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-sm md:text-base font-bold">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InternationalInternship;
