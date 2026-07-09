import type { ReactNode } from "react";
import arunImg from "../../assets/team/arun.png";
import ausikaImg from "../../assets/team/ausika.png";
import bartenderImg from "../../assets/team/bartender.jpg";
import ctevtImg from "../../assets/team/ctevt.jpg";
import imaIndiaImg from "../../assets/team/ima-india.jpg";
import kamantImg from "../../assets/team/kamant.png";
import kausalImg from "../../assets/team/kausal.png";
import puspaImg from "../../assets/team/puspa a.png";
import receptionImg from "../../assets/team/reception.jpg";
import santoshImg from "../../assets/team/santosh.png";
import whiteshirtImg from "../../assets/team/whiteshirt.jpg";
// import heroImg from "../../assets/hero image 1.jpg";

interface ServiceItem {
  title: string;
  icon: ReactNode;
}
 
const SERVICES: ServiceItem[] = [
  {
    title: "Highly Qualified Teachers",
    icon: (
      <svg className="w-8 h-8 text-[#1100AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Learn International Language",
    icon: (
      <svg className="w-8 h-8 text-[#1100AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Book Library & Stores",
    icon: (
      <svg className="w-8 h-8 text-[#1100AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Food and Beverage",
    icon: (
      <svg className="w-8 h-8 text-[#1100AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    title: "House Keeping",
    icon: (
      <svg className="w-8 h-8 text-[#1100AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Event Management",
    icon: (
      <svg className="w-8 h-8 text-[#1100AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Dual Certification",
    icon: (
      <svg className="w-8 h-8 text-[#1100AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "National and International Internship",
    icon: (
      <svg className="w-8 h-8 text-[#1100AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "100% Job Placement",
    icon: (
      <svg className="w-8 h-8 text-[#1100AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];
 
const ENDORSEMENT_PARTNERS = [
  {
    name: "IAMA India",
    logo: imaIndiaImg,
  },
  {
    name: "CTEVT Nepal",
    logo: ctevtImg,
  },
];

const ADDRESS = {
  title: "Ritz College of Hotel Management",
  line1: "M78G+G2Q, Koshi Hwy, Itahari",
  city: "Itahari, Nepal",
  phone: "+977 9844304974",
  email: "ritzcollegeofhm@gmail.com",
  mapSrc:
    "https://maps.google.com/maps?q=Ritz%20college%20of%20Hotel%20Management%20Itahari&t=&z=14&ie=UTF8&iwloc=&output=embed",
};
 
const TEAM_MEMBERS = [
  {
    name: "Mr. Puspa Adhikari",
    role: "C.E.O",
    image: puspaImg,
    description:
      "Set strategic vision, make key decisions, lead teams, ensure growth, and represent the organization globally.",
  },
  {
    name: "Mr. Santosh Rai",
    role: "Operation Manager",
    image: santoshImg,
    description:
      "Oversee daily operations, manage teams, optimize resources, ensure efficiency, and achieve organizational goals.",
  },
  {
    name: "Mr. Kaman Acharya",
    role: "Coordinator",
    image: kamantImg,
    description:
      "Organize tasks, manage communication, ensure collaboration, resolve issues, and maintain project or team efficiency.",
  },
  {
    name: "Mr. Kaushal Koirala",
    role: "Instructor of F&B Service",
    image: kausalImg,
    description:
      "Train students in food, beverage, and hospitality skills, ensuring excellent service standards and professionalism.",
  },
  {
    name: "Mrs. Anusikha Shrestha",
    role: "Instructor of Business Communication English",
    image: ausikaImg,
    description:
      "Teach effective communication skills, English proficiency, business writing, and presentation techniques.",
  },
  {
    name: "Arun Pradhan",
    role: "Instructor of Front Office & Housekeeping",
    image: arunImg,
    description:
      "Train students in front office operations, guest services, housekeeping techniques, and hospitality management standards.",
  },
];
 
interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  rating: number; // out of 5, supports .5
  quote: string;
}
 
const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Bhim Magar",
    role: "E.D.A. Itahari",
    image: bartenderImg,
    rating: 4.5,
    quote:
      "The hotel management program at Ritz College is truly world-class. The curriculum is well-structured, covering everything from front-office operations to event management. The college also emphasizes soft skills like communication and leadership.",
  },
  {
    name: "Bishal Karki",
    role: "I.D.B. Global Itahari",
    image: receptionImg,
    rating: 4.5,
    quote:
      "Teaching at Ritz College has been an incredibly rewarding experience. The students here are passionate, driven, and eager to learn, which makes my role as an educator even more fulfilling. The college provides excellent resources and a well-rounded curriculum.",
  },
  {
    name: "Prajwal Gautam",
    role: "M.H.M Australia",
    image: whiteshirtImg,
    rating: 4.5,
    quote:
      "I had a fantastic experience at Ritz College. The state-of-the-art facilities, like the mock hotel rooms and training kitchens, gave me a practical understanding of the industry. The college also organized regular guest lectures and workshops by industry experts.",
  },
];
 
function ThumbUpIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 21h2a1 1 0 001-1v-9a1 1 0 00-1-1H2v11zM22 11a2 2 0 00-2-2h-6.31l.95-4.57.03-.32a1.5 1.5 0 00-.44-1.06L13.17 2 7.59 7.59A2 2 0 007 9v10a2 2 0 002 2h9a2 2 0 001.84-1.21l3.02-7.05c.09-.23.14-.47.14-.74v-1.91z" />
    </svg>
  );
}
 
function StarRating({ rating, id }: { rating: number; id: string | number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const fill = Math.max(0, Math.min(1, rating - (i - 1))); // 0, 0.5, or 1
    const gradientId = `star-fill-${id}-${i}`;
    stars.push(
      <svg key={i} className="w-4 h-4" viewBox="0 0 20 20">
        <defs>
          <linearGradient id={gradientId}>
            <stop offset={`${fill * 100}%`} stopColor="#facc15" />
            <stop offset={`${fill * 100}%`} stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradientId})`}
          d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.59l5.79-.84L10 1.5z"
        />
      </svg>
    );
  }
  return <div className="flex items-center justify-center gap-1">{stars}</div>;
}
 
export default function Home() {
  return (
    <div className="bg-[#f3f3f3] min-h-screen py-16 px-6 md:px-12 lg:px-24">
      {/* Hero image (placed below navbar, above services)
      <div className="max-w-6xl mx-auto mb-8">
        <img
          src={heroImg}
          alt="Ritz College - Services"
          className="w-full h-52 md:h-72 lg:h-96 object-cover rounded-xl shadow-md"
        />
      </div> */}

      {/* Our Services */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-[#f3f3f3] rounded-xl border border-[#cfcaff] p-8 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group hover:-translate-y-0.5"
            >
              <div className="mb-4 bg-[#f3f3f3] p-4 rounded-full group-hover:scale-105 transition-transform duration-200">
                {service.icon}
              </div>
              <h3 className="text-[#1a1a1a] font-bold text-sm md:text-base leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-6">
          Our Team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-0.5"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-[3px] border-[#cfcaff] shadow-md mb-0"
              />

              <h3 className="text-lg font-bold text-[#1a1a1a] leading-tight">
                {member.name}
              </h3>

              <p className="text-[#1a1a1a] text-sm mb-1">
                {member.role}
              </p>

              <p className="text-sm text-[#1a1a1a] leading-5 px-0.5">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8">
          Testimonials
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="w-full bg-[#1100AB] rounded-2xl pt-5 px-4 pb-4 shadow-md"
            >
              <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm mb-10">
                <span className="bg-[#f3f3f3] text-[#1100AB] rounded-full p-1.5 flex items-center justify-center">
                  <ThumbUpIcon />
                </span>
                Testimonial
              </div>
              <div className="bg-[#f3f3f3] rounded-xl px-5 pb-6 pt-2 relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#cfcaff] shadow-md mx-auto -mt-10 mb-3 shrink-0 bg-[#f3f3f3]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="mb-3">
                  <StarRating rating={t.rating} id={index} />
                </div>
                <p className="text-[#1a1a1a] text-sm leading-relaxed text-justify mt-4 mb-5">
                  {t.quote}
                </p>
                <p className="text-center font-bold text-[#1a1a1a] text-sm">
                  {t.name}
                </p>
                <p className="text-center text-[#1a1a1a] text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* this is for endorsement partners */}

      <section className="max-w-6xl mx-auto mb-20 pt-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8">
          Our Endorsement Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ENDORSEMENT_PARTNERS.map((partner) => (
            <div key={partner.name} className="bg-[#f3f3f3] rounded-3xl border border-[#cfcaff] p-6 shadow-sm flex flex-col items-center gap-4 text-center">
              <img src={partner.logo} alt={partner.name} className="max-h-28 w-full object-contain" />
              <p className="font-semibold text-[#1a1a1a]">{partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] w-full mx-auto mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8">
          Physical Address
        </h2>
        <div className="bg-[#f3f3f3] rounded-3xl border border-[#cfcaff] shadow-sm overflow-hidden">
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#1a1a1a]">{ADDRESS.title}</h3>
              <p className="text-[#1a1a1a]">{ADDRESS.line1}</p>
              <p className="text-[#1a1a1a]">{ADDRESS.city}</p>
              <p className="text-[#1a1a1a]">Phone: {ADDRESS.phone}</p>
              <p className="text-[#1a1a1a]">Email: {ADDRESS.email}</p>
              <a
                href="https://maps.google.com?q=Ritz+college+of+Hotel+Management+Itahari"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#1100AB] px-5 py-3 text-sm font-semibold text-[#f3f3f3] transition hover:bg-[#1300b9]"
              >
                View on Google Maps
              </a>
            </div>
            <div className="h-[320px] w-full rounded-3xl overflow-hidden border-0 shadow-inner">
              <iframe
                title="Ritz College Location"
                className="w-full h-full border-0"
                src={ADDRESS.mapSrc}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 




