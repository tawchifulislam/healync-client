'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({
  currentPage,
  totalPages,
}: PaginationProps): React.ReactElement | null => {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const goToPage = (page: number): void => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`/appointments?${params.toString()}`);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-10 w-10 rounded-xl border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
      >
        <FiChevronLeft size={16} />
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`h-10 w-10 rounded-xl border font-bold text-sm transition-all cursor-pointer shadow-sm ${
            page === currentPage
              ? 'bg-[#0284C7] text-white border-[#0284C7]'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-10 w-10 rounded-xl border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
      >
        <FiChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
