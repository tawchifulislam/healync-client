import DoctorCard from '@/components/DoctorCard';
import SearchBar from '@/components/SearchBar';
import { fetchDoctors } from '@/lib/doctors/data';

export const metadata = {
  title: 'All Appointments',
  description: 'Find and book top-rated specialists.',
};

const AppointmentsPage = async props => {
  const searchParams = await props.searchParams;
  const searchTerm = searchParams?.searchTerm || '';
  const doctors = await fetchDoctors(searchTerm);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AppointmentsPage;
