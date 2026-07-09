interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeFilter: string;
  onFilterChange: (value: string) => void;
  resultCount: number;
}

const filters = ["All", "Diploma", "Vocational"];

const SearchFilter = ({
  search,
  onSearchChange,
  activeFilter,
  onFilterChange,
  resultCount,
}: SearchFilterProps) => {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3 rounded-[20px] border border-[#cfcaff] bg-[#f3f3f3] p-3 shadow-[0_10px_30px_rgba(17,0,171,0.05)] sm:p-4">
      <div className="flex min-w-[220px] max-w-[340px] flex-1 items-center rounded-[14px] border border-[#cfcaff] bg-white px-3 py-2.5 shadow-sm">
        <span className="mr-2 text-[13px] text-[#1100AB]"></span>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 border-none bg-transparent text-[13px] text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/60"
        />
        {search && (
          <button
            className="ml-2 cursor-pointer border-none bg-transparent text-xs text-[#1a1a1a]/60"
            onClick={() => onSearchChange("")}
          >
            ✕
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
              activeFilter === f
                ? "border-[#1100AB] bg-[#1100AB] text-[#f3f3f3] shadow-sm hover:bg-[#1300b9]"
                : "border-[#cfcaff] bg-[#f3f3f3] text-[#1a1a1a] hover:border-[#1100AB] hover:text-[#1100AB]"
            }`}
            onClick={() => onFilterChange(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <span className="ml-auto rounded-full border border-[#cfcaff] bg-white px-3 py-1.5 text-sm font-semibold text-[#1100AB] shadow-sm">
        {resultCount} course{resultCount !== 1 ? "s" : ""} found
      </span>
    </div>
  );
};

export default SearchFilter;
