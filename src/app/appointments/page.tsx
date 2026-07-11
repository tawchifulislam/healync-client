import DoctorCard from '@/components/DoctorCard';
import DoctorCardSkeleton from '@/components/DoctorCardSkeleton';
import SearchBar from '@/components/SearchBar';
import { fetchDoctors } from '@/lib/doctors/data';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import type { Doctor } from '@/types';

export const metadata: Metadata = {
  title: 'All Appointments | Healync',
  description: 'Find and book top-rated specialists.',
};

interface AppointmentsPageProps {
  searchParams: Promise<{ searchTerm?: string }>;
}

const DoctorsGrid = async ({
  searchTerm,
}: {
  searchTerm: string;
}): Promise<React.ReactElement> => {
  const doctors: Doctor[] = await fetchDoctors(searchTerm);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {doctors.map((doctor: Doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

const SkeletonGrid = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, idx) => (
        <DoctorCardSkeleton key={idx} />
      ))}
    </div>
  );
};

const AppointmentsPage = async ({
  searchParams,
}: AppointmentsPageProps): Promise<React.ReactElement> => {
  const { searchTerm = '' } = await searchParams;

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] py-12 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-slate-200/60 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-md">
            <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">
              All Appointments
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
              Find and book top-rated specialists suited to your health
              requirements.
            </p>
          </div>
          <div className="w-full md:max-w-md shrink-0">
            <SearchBar />
          </div>
        </div>

        <Suspense fallback={<SkeletonGrid />}>
          <DoctorsGrid searchTerm={searchTerm} />
        </Suspense>
      </div>
    </main>
  );
};

export default AppointmentsPage;
