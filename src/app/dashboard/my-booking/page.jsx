import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { FiCalendar, FiClock, FiUser, FiPhone } from 'react-icons/fi';

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const userEmail = user?.email || '';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${userEmail}`,
    {
      cache: 'no-store',
    },
  );

  const bookings = await res.json();

  return (
    <div className="w-full select-none py-2 animate-fadeIn">
      <div className="flex flex-col gap-4">
        {bookings.map(booking => (
          <div
            key={booking._id}
            className="w-full bg-white border border-slate-200/60 rounded-2xl p-5 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 transition-all duration-300 hover:border-slate-300"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-black text-[#0F172A] tracking-tight">
                  {booking.doctorName}
                </h3>
                <span className="text-[10px] font-bold text-[#0284C7] bg-[#0284C7]/5 px-2 py-0.5 rounded-md uppercase tracking-wide">
                  {booking.gender}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-1.5">
                  <FiUser size={13} className="text-[#0284C7] shrink-0" />
                  <span>Patient: {booking.patientName}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiPhone size={13} className="text-slate-400 shrink-0" />
                  <span>{booking.phone}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 w-full sm:w-auto border-t sm:border-t-0 border-slate-100 pt-4 sm:pt-0 shrink-0">
              <div className="space-y-1 text-left sm:text-right">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-bold">
                  <FiCalendar size={13} className="text-[#0284C7]" />
                  <span>{booking.appointmentDate}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold sm:justify-end">
                  <FiClock size={12} />
                  <span>{booking.appointmentTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
