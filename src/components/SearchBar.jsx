'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('searchTerm') || '');

  const handleSearch = e => {
    if (e) e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (search.trim()) {
      params.set('searchTerm', search.trim());
    } else {
      params.delete('searchTerm');
    }

    router.push(`/appointments?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto relative flex items-center bg-white border border-slate-200/60 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-[#0284C7]/5 focus-within:border-[#0284C7] transition-all overflow-hidden select-none"
    >
      <div className="pl-5 text-slate-400 shrink-0">
        <FiSearch size={19} />
      </div>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type="text"
        placeholder="Search doctors by name or specialty..."
        className="flex-1 h-14 px-4 outline-none bg-transparent text-sm font-semibold text-[#0F172A] placeholder:text-slate-400"
      />

      <button
        type="submit"
        className="h-10 px-6 mr-2 rounded-xl bg-[#0284C7] text-white font-bold text-xs hover:bg-[#0284C7]/90 active:scale-[0.98] transition-all shadow-sm cursor-pointer shrink-0"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
