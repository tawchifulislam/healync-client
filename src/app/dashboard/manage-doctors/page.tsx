'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { isAdmin } from '@/lib/isAdmin';
import { showSuccessToast, showErrorToast } from '@/lib/notification';
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiTrash2,
  FiEye,
  FiAward,
  FiDollarSign,
  FiMapPin,
} from 'react-icons/fi';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { Doctor } from '@/types';

export default function ManageDoctorsPage(): React.ReactElement | null {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async (): Promise<void> => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/doctors?limit=100`,
        );
        const data = await res.json();
        setDoctors(data.doctors || []);
      } catch (error) {
        showErrorToast('Failed to fetch doctors.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (isPending) return null;

  if (!user || !isAdmin(user.email)) {
    router.replace('/dashboard');
    return null;
  }

  const handleDelete = async (id: string, name: string): Promise<void> => {
    if (!confirm(`Are you sure you want to delete ${name}?`)) return;

    setDeletingId(id);

    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/doctors/${id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );

    if (res.ok) {
      setDoctors(prev => prev.filter(d => d._id !== id));
      showSuccessToast(`${name} deleted successfully!`);
    } else {
      showErrorToast('Failed to delete doctor.');
    }

    setDeletingId(null);
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="w-full select-none py-2 animate-fadeIn">
      <Toaster />

      {doctors.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-400 font-semibold text-sm">
            No doctors found.
          </p>
          <Link href="/dashboard/add-doctor" className="inline-block mt-4">
            <button className="h-10 px-5 rounded-xl bg-[#0284C7] text-white font-bold text-xs hover:bg-[#0284C7]/90 transition-all shadow-sm cursor-pointer">
              Add Doctor
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {doctors.map((doctor: Doctor) => (
            <div
              key={doctor._id}
              className="w-full bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-slate-300 transition-all"
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-slate-100 shrink-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="56px"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-sm font-black text-[#0F172A] truncate">
                    {doctor.name}
                  </h3>
                  <span className="text-[10px] font-bold text-[#0284C7] bg-[#0284C7]/5 px-2 py-0.5 rounded-md">
                    {doctor.specialty}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 font-semibold">
                  <div className="flex items-center gap-1">
                    <FiAward size={12} className="text-[#0284C7]" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMapPin size={12} className="text-slate-400" />
                    <span className="truncate">{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiDollarSign size={12} className="text-[#0284C7]" />
                    <span>{doctor.fee}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link href={`/appointments/${doctor._id}`}>
                  <button className="h-8 px-3 rounded-lg border border-slate-200 text-slate-600 hover:text-[#0284C7] hover:border-[#0284C7] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer bg-white">
                    <FiEye size={12} />
                    View
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(doctor._id, doctor.name)}
                  disabled={deletingId === doctor._id}
                  className="h-8 px-3 rounded-lg bg-rose-50/60 hover:bg-rose-600 text-rose-600 hover:text-white border border-rose-100 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <FiTrash2 size={12} />
                  {deletingId === doctor._id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
