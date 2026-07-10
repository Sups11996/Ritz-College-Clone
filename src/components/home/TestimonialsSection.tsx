import bartenderImg from "../../assets/team/bartender.jpg";
import receptionImg from "../../assets/team/reception.jpg";
import whiteshirtImg from "../../assets/team/whiteshirt.jpg";

interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  rating: number;
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
    const fill = Math.max(0, Math.min(1, rating - (i - 1)));
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

export default function TestimonialsSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 mt-10 md:mt-20">
      <h2 className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8">
        Testimonials
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:items-stretch lg:items-start">
        {TESTIMONIALS.map((t, index) => (
          <div
            key={index}
            className={`w-full bg-[#1100AB] rounded-2xl pt-4 px-4 pb-4 shadow-md md:h-full lg:h-auto flex flex-col ${
              index === 1 ? "lg:mt-[33%]" : ""
            } ${
              index === 2 ? "md:col-span-1 md:col-start-1 lg:col-span-1 lg:col-start-auto" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm mb-8">
              <span className="bg-[#f3f3f3] text-[#1100AB] rounded-full p-1.5 flex items-center justify-center">
                <ThumbUpIcon />
              </span>
              Testimonial
            </div>
            <div className="bg-[#f3f3f3] rounded-xl px-5 pb-4 pt-2 relative flex-1 flex flex-col">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-[#cfcaff] shadow-md mx-auto -mt-8 mb-2 shrink-0 bg-[#f3f3f3]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="mb-2">
                <StarRating rating={t.rating} id={index} />
              </div>
              <p className="text-[#1a1a1a] text-xs md:text-sm leading-relaxed text-justify mt-3 mb-4 flex-1">
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
  );
}
