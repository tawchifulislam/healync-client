'use client';

import { useState, useEffect } from 'react';
import { authClient } from '@/lib/auth-client';
import { FiCalendar, FiClock, FiUser, FiPhone } from 'react-icons/fi';
import toast from 'react-hot-toast';

import { DeleteAppointment } from '@/components/DeleteAppointment';
import UpdateBookingModal from '@/components/UpdateBookingModal';

export default function MyBookingPage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userEmail = user?.email || '';

  const [bookings, setBookings] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!userEmail) return;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/booking/${userEmail}`,
        {
          cache: 'no-store',
        },
      );
      const data = await res.json();
      setBookings(data);
    };

    fetchBookings();
  }, [userEmail, reload]);

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

              <div className="flex items-center gap-2.5 mt-2 sm:mt-1">
                <UpdateBookingModal
                  booking={booking}
                  onUpdateSuccess={() => {
                    toast.success('Appointment updated successfully!');
                    setReload(prev => !prev);
                  }}
                />
                <DeleteAppointment
                  booking={booking}
                  onDeleteSuccess={() => {
                    toast.success('Appointment deleted successfully!');
                    setReload(prev => !prev);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
