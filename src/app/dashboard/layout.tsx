'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import { FiUser, FiCalendar, FiPlusCircle, FiList } from 'react-icons/fi';
import { authClient } from '@/lib/auth-client';
import { isAdmin } from '@/lib/isAdmin';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): React.ReactElement {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const admin = isAdmin(user?.email);

  const isWide =
    pathname === '/dashboard/my-booking' ||
    pathname === '/dashboard/manage-doctors' ||
    pathname === '/dashboard/add-doctor';

  const tabs = [
    {
      href: '/dashboard/my-booking',
      label: 'My Booking',
      icon: <FiCalendar size={15} className="shrink-0" />,
      show: true,
    },
    {
      href: '/dashboard/my-profile',
      label: 'My Profile',
      icon: <FiUser size={15} className="shrink-0" />,
      show: true,
    },
    {
      href: '/dashboard/add-doctor',
      label: 'Add Doctor',
      icon: <FiPlusCircle size={15} className="shrink-0" />,
      show: admin,
    },
    {
      href: '/dashboard/manage-doctors',
      label: 'Manage Doctors',
      icon: <FiList size={15} className="shrink-0" />,
      show: admin,
    },
  ];

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

        <div className="flex flex-row flex-wrap gap-3 items-center justify-center p-1.5 bg-slate-200/40 rounded-2xl mb-12 border border-slate-200/30 w-full max-w-2xl">
          {tabs
            .filter(tab => tab.show)
            .map(tab => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex-1 min-w-fit h-11 flex items-center justify-center gap-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer px-3 ${
                  pathname === tab.href
                    ? 'bg-white text-[#0284C7] shadow-sm'
                    : 'text-slate-600 hover:text-[#0284C7]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Link>
            ))}
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
