import { useMemo, useState } from "react";
import SearchFilter from "../components/courses/SearchFilter";
import CourseCard from "../components/courses/CourseCard";
import CourseModal from "../components/courses/CourseModal";
import { courses } from "../data/courses/courses";
import type { Course } from "../types/course";

function CoursesPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter =
        activeFilter === "All" || course.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    // background change to #f3f3f3
    <main className="flex-1 bg-[#f3f3f3] px-6 py-8 pb-15 md:px-12 lg:px-16 max-md:pt-5 max-md:pb-10">
      <div className="mx-auto w-full">
        <div className="mb-6">
          <h2 className="text-3xl font-bold leading-tight text-[#1a1a1a] md:text-4xl">
            Our Courses
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[#1a1a1a]/80 md:text-base">
            Build practical skills with industry-focused training designed for real career growth.
          </p>
        </div>

        <SearchFilter
          search={search}
          onSearchChange={setSearch}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          resultCount={filteredCourses.length}
        />

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={setSelectedCourse}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] border border-[#cfcaff] bg-[#f3f3f3] py-15 text-center text-sm text-[#1a1a1a]/70 shadow-[0_10px_30px_rgba(17,0,171,0.05)]">
            <p>No courses match your search.</p>
          </div>
        )}
      </div>

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </main>
  );
}

export default CoursesPage;
