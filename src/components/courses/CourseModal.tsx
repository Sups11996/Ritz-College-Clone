import type { Course } from "../../types/course";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

const CourseModal = ({ course, onClose }: CourseModalProps) => {
  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#1100AB]/20 p-5 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-120 overflow-y-auto rounded-[22px] border border-[#cfcaff] bg-[#f3f3f3] animate-slideUp shadow-[0_20px_60px_rgba(17,0,171,0.16)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-3 z-1 h-7 w-7 cursor-pointer rounded-full border-none bg-[#1100AB] text-[13px] text-[#f3f3f3] transition-colors duration-200 hover:bg-[#1300b9]"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={course.image}
          alt={course.title}
          className="h-65 w-full rounded-t-2xl object-cover md:h-75"
        />
        <div className="px-6 pb-6.5 pt-5.5">
          <span className="mb-2.5 inline-block rounded-xl border border-[#cfcaff] bg-[#f3f3f3] px-2.5 py-0.5 text-[11px] font-bold text-[#1100AB]">
            {course.category}
          </span>
          <h2 className="mb-2 text-lg font-bold leading-snug text-[#1a1a1a]">
            {course.title}
          </h2>
          <p className="mb-1.5 text-[13px] font-semibold text-[#1100AB]">
            {course.affiliation}
          </p>
          <p className="mb-3.5 text-[13px] text-[#1a1a1a]/75">
            ⏱ Duration: {course.duration}
          </p>
          <p className="mb-5 text-[13px] leading-7 text-[#1a1a1a]/80">
            {course.description}
          </p>
          <button className="cursor-pointer rounded-lg border-none bg-[#1100AB] px-5.5 py-2.5 text-[13px] font-semibold text-[#f3f3f3] transition-colors duration-200 hover:bg-[#1300b9]">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
