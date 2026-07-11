import { FiSearch, FiCalendar, FiCheckCircle } from 'react-icons/fi';

interface Step {
  step: string;
  icon: React.ReactElement;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    step: '01',
    icon: <FiSearch size={28} />,
    title: 'Search a Specialist',
    description:
      'Browse through our wide range of verified doctors by specialty, location, or name. Find the right specialist for your health needs in seconds.',
  },
  {
    step: '02',
    icon: <FiCalendar size={28} />,
    title: 'Book an Appointment',
    description:
      'Select your preferred date and time slot. Fill in your details and confirm your booking instantly - no phone calls, no waiting in queues.',
  },
  {
    step: '03',
    icon: <FiCheckCircle size={28} />,
    title: 'Get Confirmation',
    description:
      'Receive an email reminder before your appointment. Show up on time and let Healync handle the rest - your health is our priority.',
  },
];

const HowItWorks = (): React.ReactElement => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-3">
            How Healync Works
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-2 max-w-xl mx-auto">
            Book your doctor appointment in just 3 simple steps - fast, easy,
            and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-slate-200/80 z-0" />

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-slate-200/60 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col items-center text-center z-10"
            >
              <div className="absolute -top-3 left-6 bg-[#0284C7] text-white text-[10px] font-black px-2.5 py-1 rounded-lg tracking-wider">
                STEP {item.step}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#0284C7]/5 border border-[#0284C7]/10 flex items-center justify-center text-[#0284C7] mb-5 mt-2">
                {item.icon}
              </div>

              <h3 className="text-base font-black text-[#0F172A] tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
