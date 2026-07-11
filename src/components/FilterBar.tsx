'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';

const sortOptions = [
  { label: 'Default', value: '' },
  { label: 'Fee: Low to High', value: 'fee_asc' },
  { label: 'Fee: High to Low', value: 'fee_desc' },
  { label: 'Experience', value: 'experience' },
];

const FilterBar = (): React.ReactElement => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [specialties, setSpecialties] = useState<string[]>([]);
  const [specialty, setSpecialty] = useState<string>(
    searchParams.get('specialty') || '',
  );
  const [minFee, setMinFee] = useState<string>(
    searchParams.get('minFee') || '',
  );
  const [maxFee, setMaxFee] = useState<string>(
    searchParams.get('maxFee') || '',
  );
  const [sortBy, setSortBy] = useState<string>(
    searchParams.get('sortBy') || '',
  );

  useEffect(() => {
    const fetchSpecialties = async (): Promise<void> => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/specialties`);
      const data = await res.json();
      setSpecialties(data);
    };
    fetchSpecialties();
  }, []);

  const applyFilters = (): void => {
    const params = new URLSearchParams(searchParams.toString());

    if (specialty) params.set('specialty', specialty);
    else params.delete('specialty');

    if (minFee) params.set('minFee', minFee);
    else params.delete('minFee');

    if (maxFee) params.set('maxFee', maxFee);
    else params.delete('maxFee');

    if (sortBy) params.set('sortBy', sortBy);
    else params.delete('sortBy');

    params.delete('page');
    router.push(`/appointments?${params.toString()}`);
  };

  const clearFilters = (): void => {
    setSpecialty('');
    setMinFee('');
    setMaxFee('');
    setSortBy('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('specialty');
    params.delete('minFee');
    params.delete('maxFee');
    params.delete('sortBy');
    params.delete('page');
    router.push(`/appointments?${params.toString()}`);
  };

  const hasActiveFilters = specialty || minFee || maxFee || sortBy;

  return (
    <div className="w-full bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm mb-8">
      <div className="flex flex-wrap items-end gap-4">
        {/* Specialty */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-35">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Specialty
          </label>
          <select
            value={specialty}
            onChange={e => setSpecialty(e.target.value)}
            className="h-10 px-3 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 cursor-pointer"
          >
            <option value="">All Specialties</option>
            {specialties.map((s, idx) => (
              <option key={idx} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Min Fee */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-25">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Min Fee
          </label>
          <input
            type="number"
            placeholder="e.g. 500"
            value={minFee}
            onChange={e => setMinFee(e.target.value)}
            className="h-10 px-3 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50"
          />
        </div>

        {/* Max Fee */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-25">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Max Fee
          </label>
          <input
            type="number"
            placeholder="e.g. 2000"
            value={maxFee}
            onChange={e => setMaxFee(e.target.value)}
            className="h-10 px-3 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50"
          />
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-35">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="h-10 px-3 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 cursor-pointer"
          >
            {sortOptions.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 pb-0.5">
          <button
            onClick={applyFilters}
            className="h-10 px-5 rounded-xl bg-[#0284C7] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#0284C7]/90 active:scale-[0.98] transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <FiFilter size={13} />
            Apply
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="h-10 px-4 rounded-xl border border-slate-200 text-slate-500 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-50 transition-all cursor-pointer whitespace-nowrap"
            >
              <FiX size={13} />
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
