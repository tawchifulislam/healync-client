'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiStar, FiMapPin, FiBriefcase, FiGlobe } from 'react-icons/fi';
import { Toaster } from 'react-hot-toast';
import { showSuccessToast } from '@/lib/notification';

const Companions = () => {
  const [companions, setCompanions] = useState([]);

  useEffect(() => {
    const loadCompanions = async () => {
      const res = await fetch('/companions.json');
      const data = await res.json();

      if (data?.companions) {
        const selectedIds = [2, 4, 7, 8];
        const filtered = data.companions.filter(item =>
          selectedIds.includes(item.id),
        );
        setCompanions(filtered);
      }
    };

    loadCompanions();
  }, []);

  const handleBooking = name => {
    showSuccessToast(`Companion request sent to ${name}!`);
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-14 select-none">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-slate-200/60">
          <div className="max-w-md">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
              Medical Companion
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-2">
              Care Beyond Clinic
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-xl leading-relaxed">
            A trained professional to accompany you or your loved ones during
            hospital check-ins, medical tests, and prescriptions-offering
            complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companions.map(item => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover border border-slate-100"
                    sizes="80px"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white border border-slate-100 px-1.5 py-0.5 rounded-lg flex items-center gap-1 shadow-sm">
                    <FiStar
                      className="text-amber-500 fill-amber-500"
                      size={11}
                    />
                    <span className="text-xs font-bold text-slate-700">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-base font-bold text-[#0F172A] truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs font-medium mt-1">
                    <FiBriefcase size={12} className="text-[#0284C7]" />
                    <span>{item.experience_years} Yrs Exp</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <FiMapPin size={13} className="text-slate-400 shrink-0" />
                  <span className="truncate">
                    {item.service_areas.join(', ')}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pb-2">
                  <FiGlobe size={13} className="text-slate-400 shrink-0" />
                  <span className="truncate">{item.languages.join(', ')}</span>
                </div>

                <button
                  onClick={() => handleBooking(item.name)}
                  className="w-full h-9 rounded-xl bg-[#0284C7] text-white font-bold text-xs transition-all hover:bg-[#0284C7]/90 active:scale-[0.98] shadow-sm"
                >
                  Request Companion
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companions;
