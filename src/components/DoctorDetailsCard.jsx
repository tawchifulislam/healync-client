'use client';

import Image from 'next/image';
import {
  FiClock,
  FiMapPin,
  FiAward,
  FiDollarSign,
  FiCalendar,
  FiShield,
} from 'react-icons/fi';
import { Toaster } from 'react-hot-toast';
import { showSuccessToast } from '@/lib/notification';

const DoctorDetailsCard = ({ doctor }) => {
  const {
    name,
    specialty,
    image,
    experience,
    availability,
    description,
    hospital,
    location,
    fee,
  } = doctor;

  const handleBooking = () => {
    showSuccessToast('Appointment booked successfully!');
  };

  return (
    <div className="w-full bg-white border border-slate-200/60 rounded-3xl p-6 lg:p-8 shadow-sm select-none">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="relative w-full aspect-4/3 lg:aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top"
              sizes="(max-w-1024px) 100vw, 320px"
              priority
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
                {specialty}
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1">
                <FiShield size={13} /> Verified
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
              {name}
            </h1>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-semibold mt-2">
              <FiAward size={15} className="text-[#0284C7]" />
              <span>{experience} Professional Experience</span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mt-4 max-w-2xl">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <FiMapPin
                  size={18}
                  className="text-slate-400 mt-0.5 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Hospital & Location
                  </p>
                  <p className="text-sm text-[#0F172A] font-bold truncate">
                    {hospital}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5 truncate">
                    {location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiClock size={18} className="text-slate-400 mt-0.5 shrink-0" />
                <div className="w-full">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Available Time Slots
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {availability?.map((time, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F8FAFC] border border-slate-200/60 px-2.5 py-1 rounded-lg text-slate-600 font-semibold text-[11px] flex items-center gap-1"
                      >
                        <FiCalendar size={11} className="text-[#0284C7]" />
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 pt-5 mt-8">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Consultation Fee
              </span>
              <div className="flex items-center text-2xl font-black text-[#0F172A] mt-0.5">
                <FiDollarSign size={20} className="text-[#0284C7] -mr-0.5" />
                <span>{fee}</span>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="h-11 px-8 rounded-xl bg-[#0284C7] text-white font-bold text-sm transition-all hover:bg-[#0284C7]/90 shadow-sm active:scale-[0.98]"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsCard;
