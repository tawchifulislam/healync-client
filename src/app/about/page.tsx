import type { Metadata } from 'next';
import Image from 'next/image';
import { FiHeart, FiShield, FiUsers, FiAward } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About Us | Healync',
  description:
    "Learn about Healync - our mission, values, and the team behind Bangladesh's trusted doctor appointment platform.",
};

const values = [
  {
    icon: <FiHeart size={22} />,
    title: 'Patient First',
    description:
      'Every decision we make starts with one question: is this best for the patient? We design every feature around real patient needs and experiences.',
  },
  {
    icon: <FiShield size={22} />,
    title: 'Trust & Safety',
    description:
      'All doctors on Healync are verified specialists. Your personal and medical data is handled with the highest level of security and privacy.',
  },
  {
    icon: <FiUsers size={22} />,
    title: 'Accessibility',
    description:
      'We believe quality healthcare should be accessible to everyone. Healync bridges the gap between patients and top specialists across Bangladesh.',
  },
  {
    icon: <FiAward size={22} />,
    title: 'Excellence',
    description:
      'We are committed to continuous improvement - in our platform, our service, and the healthcare experience we deliver to every user.',
  },
];

const team = [
  {
    name: 'Dr. Rafiq Hossain',
    role: 'Chief Medical Advisor',
    image: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Nadia Islam',
    role: 'Head of Operations',
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Lead Engineer',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Sadia Rahman',
    role: 'Patient Experience Lead',
    image: 'https://i.pravatar.cc/150?img=45',
  },
];

export default function AboutPage(): React.ReactElement {
  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] select-none">
      <section className="w-full bg-[#F8FAFC] py-16 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
              About Healync
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-4 mb-5">
              Reimagining Healthcare Access in Bangladesh
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              Healync was founded with a simple but powerful vision - to make
              quality healthcare accessible to every patient in Bangladesh,
              without the friction of long queues, phone calls, or uncertainty.
              We connect patients with verified specialists through a seamless,
              digital-first booking experience.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-4 mb-5">
                Connecting Patients with the Right Care
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mb-4">
                At Healync, our mission is to eliminate the barriers between
                patients and quality healthcare. We do this by building a
                transparent, reliable, and easy-to-use platform where patients
                can find the right doctor, book an appointment, and receive
                timely reminders - all in one place.
              </p>
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                We also offer our unique Medical Companion service trained
                professionals who accompany patients during hospital visits,
                tests, and consultations, ensuring no one has to navigate the
                healthcare system alone.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '120+', label: 'Verified Doctors' },
                { value: '5,000+', label: 'Appointments Booked' },
                { value: '4,500+', label: 'Happy Patients' },
                { value: '20+', label: 'Specialties' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm"
                >
                  <p className="text-3xl font-black text-[#0284C7]">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8FAFC] py-16 border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-3">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0284C7]/5 flex items-center justify-center text-[#0284C7] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-base font-black text-[#0F172A] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8FAFC] py-16 border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
              Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-3">
              The People Behind Healync
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium mt-2 max-w-xl mx-auto">
              A passionate team of healthcare advocates, engineers, and patient
              experience specialists.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-black text-[#0F172A]">
                  {member.name}
                </h3>
                <p className="text-xs text-[#0284C7] font-semibold mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
