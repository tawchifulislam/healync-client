'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { isAdmin } from '@/lib/isAdmin';
import { showSuccessToast, showErrorToast } from '@/lib/notification';
import { Toaster } from 'react-hot-toast';
import { FiUser, FiMapPin, FiDollarSign, FiClock } from 'react-icons/fi';
import type { FormEvent } from 'react';

export default function AddDoctorPage(): React.ReactElement | null {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (isPending) return null;

  if (!user || !isAdmin(user.email)) {
    router.replace('/dashboard');
    return null;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const doctorData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      specialty: (form.elements.namedItem('specialty') as HTMLInputElement)
        .value,
      image: (form.elements.namedItem('image') as HTMLInputElement).value,
      experience: (form.elements.namedItem('experience') as HTMLInputElement)
        .value,
      hospital: (form.elements.namedItem('hospital') as HTMLInputElement).value,
      location: (form.elements.namedItem('location') as HTMLInputElement).value,
      fee: Number((form.elements.namedItem('fee') as HTMLInputElement).value),
      description: (
        form.elements.namedItem('description') as HTMLTextAreaElement
      ).value,
      availability: (
        form.elements.namedItem('availability') as HTMLInputElement
      ).value
        .split(',')
        .map(s => s.trim()),
    };

    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(doctorData),
    });

    if (res.ok) {
      showSuccessToast('Doctor added successfully!');
      form.reset();
    } else {
      showErrorToast('Failed to add doctor. Try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full select-none py-2 px-4 animate-fadeIn">
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Doctor Name
            </label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-4 text-slate-400" size={15} />
              <input
                name="name"
                type="text"
                placeholder="Dr. John Doe"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Specialty
            </label>
            <input
              name="specialty"
              type="text"
              placeholder="e.g. Cardiologist"
              className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
              required
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
            Image URL
          </label>
          <input
            name="image"
            type="url"
            placeholder="https://example.com/image.jpg"
            className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Experience
            </label>
            <input
              name="experience"
              type="text"
              placeholder="e.g. 10 years"
              className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Consultation Fee (৳)
            </label>
            <div className="relative flex items-center">
              <FiDollarSign
                className="absolute left-4 text-slate-400"
                size={15}
              />
              <input
                name="fee"
                type="number"
                placeholder="e.g. 800"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Hospital
            </label>
            <div className="relative flex items-center">
              <FiMapPin className="absolute left-4 text-slate-400" size={15} />
              <input
                name="hospital"
                type="text"
                placeholder="e.g. Labaid Hospital"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Location
            </label>
            <div className="relative flex items-center">
              <FiMapPin className="absolute left-4 text-slate-400" size={15} />
              <input
                name="location"
                type="text"
                placeholder="e.g. Dhanmondi, Dhaka"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
            Availability
          </label>
          <div className="relative flex items-center">
            <FiClock className="absolute left-4 text-slate-400" size={15} />
            <input
              name="availability"
              type="text"
              placeholder="e.g. 09:00 AM - 12:00 PM, 04:00 PM - 07:00 PM"
              className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
              required
            />
          </div>
          <p className="text-[11px] text-slate-400 font-medium pl-1">
            Separate multiple slots with commas
          </p>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Brief description about the doctor..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 rounded-xl bg-[#0284C7] text-white font-bold text-sm hover:bg-[#0284C7]/90 active:scale-[0.98] transition-all shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Adding...' : 'Add Doctor'}
        </button>
      </form>
    </div>
  );
}
