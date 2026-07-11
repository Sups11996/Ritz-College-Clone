import React from "react";
import studentImg from "../../assets/college events.webp";
import oneImg from "../../assets/sunil.png";
import twoImg from "../../assets/Numa.png";
import threeImg from "../../assets/Isha.png";
import fourImg from "../../assets/Bikash.png";
import fiveImg from "../../assets/Sucess.png";
import sixImg from "../../assets/Bishal.png";
import CountUp from "./CountUp";

interface Student {
  name: string;
  role: string;
  image: string;
}

interface Stat {
  label: string;
  target: number;
  suffix?: string;
  decimals?: number;
}

const students: Student[] = [
  {
    name: "Sunil Rai",
    role: "Commis Chef at Soltee Western Itahari",
    image: oneImg,
  },
  {
    name: "Numa Limbu",
    role: "F & B Service, Poland",
    image: twoImg,
  },
  {
    name: "Isha Rajdhami",
    role: "Commis Chef, Romania",
    image: threeImg,
  },
  {
    name: "Bikash Shrestha",
    role: "Executive Chef, Briskya Restaurant",
    image: fourImg,
  },
  {
    
    name: "Success Pathak",
    role: "Commis Chef, France",
    image: fiveImg,
  },
  {
    name: "Bishal Khatri",
    role: "F & B Service, Malta",
    image: sixImg,
  },
];

const stats: Stat[] = [
  { target: 2000, suffix: "+", decimals: 0, label: "National Internship" },
  { target: 1500, suffix: "+", decimals: 0, label: "International Internship" },
  { target: 9, suffix: "+", decimals: 0, label: "Available Courses" },
  { target: 8.5, suffix: "", decimals: 1, label: "Star Ratings" },
];

const Aboutus: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-[#f3f3f3] text-[#1a1a1a]">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-16 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div className="w-full">
            <h1 className="text-2xl md:text-[2.5rem] lg:text-[3rem] font-semibold leading-tight tracking-[-0.02em] text-[#111111]">
              Step into the World of Hospitality with{" "}
              <a
                href="https://ritzcollegeofhm.com.np/"
                target="_blank"
                rel="noreferrer"
                className="text-[#1100AB] hover:text-[#0d0088]"
              >
                Ritz College
              </a>
            </h1>
          </div>

          <div className="lg:pt-0 w-full">
            <p className="text-sm md:text-base text-[#1a1a1a] leading-7 text-justify w-full">
              Ritz College of Hotel Management offers specialized programs,
              including Diplomas in Hotel Management and Culinary Arts (Level
              III, IV, V) to shape the future leaders in hospitality. With a
              blend of advanced training, practical expertise, and
              industry-focused curriculum, we prepare students to excel in
              global hospitality, tourism, and culinary sectors. Empower your
              career with Ritz.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="relative w-full mx-auto px-6 md:px-12 lg:px-16">
          <div className="relative z-5 mx-auto overflow-hidden rounded-4xl border border-[#f3f3f3] bg-[#f3f3f3] shadow-xl" style={{ marginBottom: '-12.5rem' }}>
            <img
              src={studentImg}
              alt="Ritz College"
              className="w-full h-65 sm:h-80 md:h-95 lg:h-110 object-cover"
            />
          </div>
        </div>
        <div className="mt-6 h-58 bg-[#1100AB]"></div>
      </div>

      <div className="bg-[#f3f3f3] pt-10 pb-10 md:pb-15">
        <div className="w-full mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="w-full max-w-[240px] h-[110px] rounded-xl border border-[#cfcaff] bg-[#f3f3f3] px-5 py-4 text-center shadow-sm transition hover:border-[#1300b9] flex flex-col items-center justify-center"
              >
                <div className="mb-1 text-xs lapl:text-[15px] uppercase tracking-[0.18em] text-[#1100AB]">
                  {stat.label}
                </div>
                <div className="text-2xl lapl:text-3xl font-bold text-[#1100AB]">
                  <CountUp target={stat.target} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mx-auto mt-12">
          <h2 className="text-center text-2xl lapl:text-3xl font-bold text-[#1100AB] mb-8 px-6 md:px-12 lg:px-16">
            Our Students
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lapl:gap-7 max-w-md sm:max-w-5xl mx-auto px-6">
            {students.map((student) => (
              <div
                key={student.name}
                className="flex w-full items-center rounded-full border border-[#1100AB] bg-[#f3f3f3] px-4 md:px-6 py-3 lapl:py-3.5 shadow-sm transition duration-500 hover:shadow-lg overflow-hidden"
              >
                <div className="flex items-center gap-3 md:gap-4 w-full">
                  <div className="relative h-14 w-14 md:h-16 md:w-16 lapl:h-18 lapl:w-18 rounded-full bg-[#1100AB] p-1 shrink-0">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="h-full w-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-sm lapl:text-[0.9375rem] font-semibold text-[#1a1a1a] leading-snug">
                      {student.name}
                    </h3>
                    <p className="text-xs lapl:text-[0.8125rem] text-[#1a1a1a] opacity-80 leading-relaxed">
                      {student.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;