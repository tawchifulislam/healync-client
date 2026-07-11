'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import { authClient, useSession } from '@/lib/auth-client';

const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = useSession();
  const user = session?.user;

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLogOut = async (): Promise<void> => {
    await authClient.signOut();
    router.replace('/');
    router.refresh();
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 h-16 flex items-center transition-all duration-300 ease-in-out border-b ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-slate-200/60'
          : 'bg-[#F8FAFC] border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === '/'
                  ? 'text-[#0284C7]'
                  : 'text-slate-600 hover:text-[#0284C7]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/appointments"
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === '/appointments'
                  ? 'text-[#0284C7]'
                  : 'text-slate-600 hover:text-[#0284C7]'
              }`}
            >
              All Appointments
            </Link>
            <Link
              href="/dashboard"
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === '/dashboard' || pathname.startsWith('/dashboard/')
                  ? 'text-[#0284C7]'
                  : 'text-slate-600 hover:text-[#0284C7]'
              }`}
            >
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {!isPending && user ? (
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#0284C7]/5 border border-slate-200 flex items-center justify-center shrink-0">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || 'User'}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="text-sm font-bold text-[#0284C7]">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleLogOut}
                  className="rounded-xl border border-red-100 bg-red-50 text-red-600 font-bold text-sm px-4 py-2 transition-all hover:bg-red-600 hover:text-white shadow-sm cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : !isPending ? (
              <>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-slate-600 hover:text-[#0284C7] transition-colors px-3 py-2"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="rounded-xl bg-[#0284C7] px-4 py-2 text-white font-bold text-sm transition-all hover:bg-[#0284C7]/90 hover:shadow-md hover:shadow-[#0284C7]/15"
                >
                  Signup
                </Link>
              </>
            ) : (
              <div className="w-6 h-6 border-2 border-[#0284C7] border-t-transparent rounded-full animate-spin" />
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-[#0284C7] transition-colors cursor-pointer"
            >
              {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto animate-fadeIn">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-4 text-base font-semibold rounded-xl transition-colors ${
              pathname === '/'
                ? 'text-[#0284C7] bg-[#0284C7]/5'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Home
          </Link>
          <Link
            href="/appointments"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-4 text-base font-semibold rounded-xl transition-colors ${
              pathname === '/appointments'
                ? 'text-[#0284C7] bg-[#0284C7]/5'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            All Appointments
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-4 text-base font-semibold rounded-xl transition-colors ${
              pathname === '/dashboard' || pathname.startsWith('/dashboard/')
                ? 'text-[#0284C7] bg-[#0284C7]/5'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Dashboard
          </Link>

          <div className="pt-4 border-t border-slate-100 mt-4">
            {!isPending && user ? (
              <div className="flex items-center justify-between px-4 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#0284C7]/5 border border-slate-200 flex items-center justify-center shrink-0">
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || 'User'}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-sm font-bold text-[#0284C7]">
                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-bold text-slate-700 truncate">
                    {user?.name}
                  </span>
                </div>
                <button
                  onClick={() => {
                    handleLogOut();
                    setIsOpen(false);
                  }}
                  className="rounded-xl border border-red-100 bg-red-50 text-red-600 font-bold text-sm px-4 py-2 shadow-sm cursor-pointer whitespace-nowrap shrink-0"
                >
                  Logout
                </button>
              </div>
            ) : !isPending ? (
              <div className="grid grid-cols-2 gap-4 px-2">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold transition-colors hover:bg-slate-50 cursor-pointer">
                    Login
                  </button>
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-2.5 rounded-xl bg-[#0284C7] text-white text-sm font-bold transition-colors hover:bg-[#0284C7]/90 cursor-pointer">
                    Signup
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex justify-center py-2">
                <div className="w-6 h-6 border-2 border-[#0284C7] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
