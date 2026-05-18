import { fetchTopRatedDoctors } from '@/lib/doctors/data';
import DoctorCard from '../components/DoctorCard';
import { FiArrowRight, FiAward } from 'react-icons/fi';
import Link from 'next/link';

const TopRatedDoctors = async () => {
  const doctors = await fetchTopRatedDoctors();

  return (
    <section className="w-full bg-[#F8FAFC] py-16 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-slate-200/60">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0284C7]/5 px-2.5 py-1 text-xs font-bold text-[#0284C7] mb-2">
              <FiAward size={14} />
              Top Experts
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
              Top Rated Specialists
            </h2>
          </div>

          <Link href="/appointments" className="group shrink-0">
            <button className="h-10 px-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all hover:bg-slate-50 shadow-sm">
              View All
              <FiArrowRight
                size={14}
                className="text-slate-400 group-hover:text-[#0284C7] transition-colors"
              />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
