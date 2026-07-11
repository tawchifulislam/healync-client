import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiAward, FiDollarSign, FiArrowRight } from 'react-icons/fi';
import type { Doctor } from '@/types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps): React.ReactElement => {
  const { _id, name, specialty, image, experience, hospital, fee } = doctor;

  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="relative w-full aspect-16/10 bg-slate-100 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white to-transparent" />
        </div>

        <div className="px-5 pt-4">
          <span className="inline-block text-xs font-bold text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md mb-2">
            {specialty}
          </span>
          <h2 className="text-lg font-black text-[#0F172A] tracking-tight truncate">
            {name}
          </h2>

          <div className="space-y-2.5 mt-4 border-t border-slate-100 pt-4">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
              <FiAward size={14} className="text-[#0284C7] shrink-0" />
              <span>{experience} Experience</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <FiMapPin size={14} className="text-slate-400 shrink-0" />
              <span className="truncate text-slate-600">{hospital}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 pb-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-4 mt-6">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Fee
          </span>
          <div className="flex items-center text-base font-black text-[#0F172A] mt-0.5">
            <FiDollarSign size={15} className="text-[#0284C7] -mr-0.5" />
            <span>{fee}</span>
          </div>
        </div>

        <Link href={`/appointments/${_id}`}>
          <button className="h-9 px-4 rounded-xl bg-[#0284C7] text-white font-bold text-xs flex items-center gap-1.5 transition-all hover:bg-[#0284C7]/90 shadow-sm active:scale-[0.98] cursor-pointer whitespace-nowrap">
            View Details
            <FiArrowRight size={13} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
