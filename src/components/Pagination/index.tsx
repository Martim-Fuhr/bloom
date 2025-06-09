import React from "react";

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  onPageChange: (page: number) => void;
}

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination: React.FC<PaginationProps> = ({
  limit,
  total,
  offset,
  onPageChange,
}) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  const goToPreviousPage = () => {
    if (current > 1) {
      onPageChange(current - 1);
    }
  };

  const goToNextPage = () => {
    if (current < pages) {
      onPageChange(current + 1);
    }
  };

  return (
    <ul className="flex justify-center gap-2 my-6 items-center">
      <li>
        <button
          className="px-3 py-1 rounded bg-gray-200 text-black disabled:opacity-50"
          onClick={goToPreviousPage}
          disabled={current === 1}
        >
         ◁
        </button>
      </li>

      {Array.from({ length: Math.min(MAX_ITEMS, pages) }).map((_, i) => {
        const page = first + i;
        return (
          <li key={page}>
            <button
              className={`px-3 py-1 rounded ${
                page === current
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        );
      })}

      <li>
        <button
          className="px-3 py-1 rounded bg-gray-200 text-black disabled:opacity-50"
          onClick={goToNextPage}
          disabled={current === pages}
        >
          ▷
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
