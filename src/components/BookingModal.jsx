'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { FiUser, FiPhone, FiCalendar, FiClock } from 'react-icons/fi';
import { showSuccessToast } from '@/lib/notification';

export default function BookingModal({ doctorName, isOpen, onClose }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userEmail = user?.email || '';

  const [appointmentDate, setAppointmentDate] = useState('');
  if (!isOpen) return null;

  const onSubmit = async e => {
    e.preventDefault();
    const patientName = e.target.patientName.value;
    const gender = e.target.gender.value;
    const phone = e.target.phone.value;
    const appointmentTime = e.target.appointmentTime.value;

    const handleBooking = async () => {
      const bookingData = {
        userEmail,
        doctorName,
        patientName,
        gender,
        phone,
        appointmentDate,
        appointmentTime,
      };

      const { data: tokenData } = await authClient.token();
      const token = tokenData?.token;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
    };

    await handleBooking();
    showSuccessToast('Appointment booked successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <dialog
        open
        className="relative z-10 m-auto max-h-[90vh] w-full max-w-md rounded-3xl bg-white border border-slate-200/60 shadow-2xl p-0 overflow-y-auto flex flex-col animate-fadeIn select-none text-left"
      >
        <div className="bg-[#F8FAFC] p-6 flex items-center gap-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-[#0284C7]/5 flex items-center justify-center text-[#0284C7]">
            <FiCalendar size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-black text-lg text-[#0F172A] tracking-tight">
              Book Appointment
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Fill in the details to secure your slot
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">
              Selected Doctor
            </label>
            <input
              type="text"
              value={doctorName}
              disabled
              className="w-full h-11 px-4 rounded-xl border border-slate-100 text-sm font-bold text-[#0284C7] bg-[#0284C7]/5 cursor-not-allowed focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">
              Patient Name
            </label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-4 text-slate-400" size={16} />
              <input
                name="patientName"
                type="text"
                placeholder="Enter patient full name"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">Gender</label>
              <select
                name="gender"
                className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors cursor-pointer"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">
                Phone Number
              </label>
              <div className="relative flex items-center">
                <FiPhone className="absolute left-4 text-slate-400" size={15} />
                <input
                  name="phone"
                  type="tel"
                  placeholder="017XXXXXXXX"
                  maxLength={11}
                  pattern="^01[3-9]\d{8}$"
                  className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">
                Appointment Date
              </label>
              <div className="relative flex items-center">
                <FiCalendar
                  className="absolute left-4 text-slate-400"
                  size={16}
                />
                <input
                  type="date"
                  value={appointmentDate}
                  onChange={e => setAppointmentDate(e.target.value)}
                  className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors cursor-pointer"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">
                Appointment Time
              </label>
              <div className="relative flex items-center">
                <FiClock className="absolute left-4 text-slate-400" size={16} />
                <input
                  name="appointmentTime"
                  type="text"
                  placeholder="e.g. 10:30 AM"
                  className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4 justify-end border-t border-slate-100 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="h-10 px-4 rounded-xl text-slate-500 font-semibold text-xs hover:bg-slate-100 transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-10 px-6 rounded-xl bg-[#0284C7] text-white font-bold text-xs hover:bg-[#0284C7]/90 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
