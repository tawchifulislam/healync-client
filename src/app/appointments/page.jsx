import DoctorCard from '@/components/DoctorCard';
import { fetchDoctors } from '@/lib/doctors/data';

const AppointmentsPage = async () => {
  const doctors = await fetchDoctors();

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] py-12 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-slate-200/60">
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">
            All Appointments
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
            Find and book top-rated specialists suited to your health
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AppointmentsPage;
