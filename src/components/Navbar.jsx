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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F1E]/80 backdrop-blur-md shadow-sm border-b border-[#2DD4BF]/10 py-1'
          : 'bg-[#0A0F1E] py-3'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/'
                  ? 'text-[#2DD4BF]'
                  : 'text-[#E2E8F0]/70 hover:text-[#2DD4BF]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/appointments"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/appointments'
                  ? 'text-[#2DD4BF]'
                  : 'text-[#E2E8F0]/70 hover:text-[#2DD4BF]'
              }`}
            >
              All Appointments
            </Link>
            <Link
              href="/dashboard"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/dashboard'
                  ? 'text-[#2DD4BF]'
                  : 'text-[#E2E8F0]/70 hover:text-[#2DD4BF]'
              }`}
            >
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-[#E2E8F0]/70 hover:text-[#2DD4BF] transition-colors px-3 py-2"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-[#2DD4BF] px-4 py-2 text-[#0A0F1E] font-semibold transition-all hover:bg-[#2DD4BF]/90 hover:shadow-lg hover:shadow-[#2DD4BF]/20"
            >
              Signup
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#E2E8F0] hover:text-[#2DD4BF] transition-colors"
            >
              {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-[#0A0F1E] border-b border-[#2DD4BF]/10">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-4 text-base font-medium rounded-xl transition-colors ${
              pathname === '/'
                ? 'text-[#2DD4BF] bg-[#2DD4BF]/5'
                : 'text-[#E2E8F0]/70 hover:bg-[#2DD4BF]/5'
            }`}
          >
            Home
          </Link>
          <Link
            href="/appointments"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-4 text-base font-medium rounded-xl transition-colors ${
              pathname === '/appointments'
                ? 'text-[#2DD4BF] bg-[#2DD4BF]/5'
                : 'text-[#E2E8F0]/70 hover:bg-[#2DD4BF]/5'
            }`}
          >
            All Appointments
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-4 text-base font-medium rounded-xl transition-colors ${
              pathname === '/dashboard'
                ? 'text-[#2DD4BF] bg-[#2DD4BF]/5'
                : 'text-[#E2E8F0]/70 hover:bg-[#2DD4BF]/5'
            }`}
          >
            Dashboard
          </Link>

          <div className="pt-4 border-t border-[#2DD4BF]/10 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full py-2.5 rounded-xl border border-[#2DD4BF]/20 text-[#E2E8F0] text-sm font-medium transition-colors hover:bg-[#2DD4BF]/5">
                  Login
                </button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <button className="w-full py-2.5 rounded-xl bg-[#2DD4BF] text-[#0A0F1E] text-sm font-semibold transition-colors hover:bg-[#2DD4BF]/90">
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
