import type { Course } from "../../types/course";

// props for course cards
interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

const CourseCard = ({ course, onSelect }: CourseCardProps) => {
  return (
    <div
      className="group cursor-pointer rounded-[18px] border border-[#cfcaff] bg-[#f3f3f3] p-4 text-left shadow-[0_10px_30px_rgba(17,0,171,0.06)] transition-all duration-250 ease-out hover:-translate-y-1.5 hover:border-[#1100AB] hover:shadow-[0_14px_36px_rgba(19,0,185,0.14)]"
      onClick={() => onSelect(course)}
    >
      <div className="relative mb-3">
        <img
          src={course.image}
          alt={course.title}
          className="block h-50 w-full rounded-xl object-cover md:h-55"
        />
        <span className="absolute bottom-2 right-2 rounded-xl bg-[#1100AB]/95 px-2 py-0.5 text-[10px] font-semibold text-[#f3f3f3]">
          {course.duration}
        </span>
      </div>
      <h3 className="mb-1 text-sm font-bold leading-snug text-[#1a1a1a]">
        {course.title}
      </h3>
      <p className="mb-2.5 text-[11px] font-semibold text-[#1100AB]">
        {course.affiliation}
      </p>
      <span className="inline-block text-[11px] font-semibold text-[#1300b9] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        View Details →
      </span>
    </div>
  );
};

export default CourseCard;
