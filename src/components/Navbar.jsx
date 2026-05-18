'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/60 py-1'
          : 'bg-[#F8FAFC] border-b border-transparent py-2'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
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
                pathname === '/dashboard'
                  ? 'text-[#0284C7]'
                  : 'text-slate-600 hover:text-[#0284C7]'
              }`}
            >
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
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
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-[#0284C7] transition-colors"
            >
              {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 shadow-lg">
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
              pathname === '/dashboard'
                ? 'text-[#0284C7] bg-[#0284C7]/5'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Dashboard
          </Link>

          <div className="pt-4 border-t border-slate-100 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold transition-colors hover:bg-slate-50">
                  Login
                </button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <button className="w-full py-2.5 rounded-xl bg-[#0284C7] text-white text-sm font-bold transition-colors hover:bg-[#0284C7]/90">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
