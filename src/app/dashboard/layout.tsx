'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import { FiUser, FiCalendar } from 'react-icons/fi';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): React.ReactElement {
  const pathname = usePathname();
  const isWide = pathname === '/dashboard/my-booking';

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F8FAFC] px-4 sm:px-6 lg:px-8 select-none py-12">
      <Toaster />
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">
            Dashboard
          </h1>
          <p className="text-slate-400 mt-2 text-xs sm:text-sm font-medium max-w-sm mx-auto">
            Select an option below to manage your account and activities.
          </p>
        </header>

        <div className="flex flex-row gap-3 items-center justify-center p-1.5 bg-slate-200/40 rounded-2xl mb-12 border border-slate-200/30 w-full max-w-sm">
          <Link
            href="/dashboard/my-booking"
            className={`flex-1 h-11 flex items-center justify-center gap-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
              pathname === '/dashboard/my-booking'
                ? 'bg-white text-[#0284C7] shadow-sm'
                : 'text-slate-600 hover:text-[#0284C7]'
            }`}
          >
            <FiCalendar size={15} className="shrink-0" />
            <span>My Booking</span>
          </Link>

          <Link
            href="/dashboard/my-profile"
            className={`flex-1 h-11 flex items-center justify-center gap-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
              pathname === '/dashboard/my-profile'
                ? 'bg-white text-[#0284C7] shadow-sm'
                : 'text-slate-600 hover:text-[#0284C7]'
            }`}
          >
            <FiUser size={15} className="shrink-0" />
            <span>My Profile</span>
          </Link>
        </div>

        <div
          className={`w-full bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-8 shadow-sm min-h-70 transition-all duration-300 flex items-center justify-center ${
            isWide ? 'max-w-4xl' : 'max-w-sm'
          }`}
        >
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
