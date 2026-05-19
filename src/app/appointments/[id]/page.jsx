import DoctorDetailsCard from '@/components/DoctorDetailsCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const metadata = {
  title: 'Doctor Profile',
  description: 'View doctor profile and schedule your appointment.',
};

export default async function DoctorDetails({ params }) {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const fetchDoctor = async doctorsId => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/doctors/${doctorsId}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    return data || {};
  };

  const doctor = await fetchDoctor(id);

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] py-12 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-4 border-b border-slate-200/60">
          <h1 className="text-2xl font-black text-[#0F172A] tracking-tight">
            Doctor Profile
          </h1>
        </div>

        <DoctorDetailsCard doctor={doctor} />
      </div>
    </main>
  );
}
