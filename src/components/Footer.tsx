'use client';

import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from './Logo';
import Link from 'next/link';

const Footer = (): React.ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200/60 bg-[#F8FAFC] py-10 mt-auto select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-center gap-3">
            <Logo />
            <div className="flex items-center gap-5 text-slate-400 pl-1">
              <span className="hover:text-[#0284C7] transition-colors duration-200 cursor-pointer">
                <FaFacebook size={18} />
              </span>
              <span className="hover:text-[#0284C7] transition-colors duration-200 cursor-pointer">
                <FaXTwitter size={18} />
              </span>
              <span className="hover:text-[#0284C7] transition-colors duration-200 cursor-pointer">
                <FaYoutube size={19} />
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2.5">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
              <Link href="/">
                <span className="hover:text-[#0284C7] transition-colors duration-200 cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/appointments">
                <span className="hover:text-[#0284C7] transition-colors duration-200 cursor-pointer">
                  Appointments
                </span>
              </Link>
              <Link href="/about">
                <span className="hover:text-[#0284C7] transition-colors duration-200 cursor-pointer">
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span className="hover:text-[#0284C7] transition-colors duration-200 cursor-pointer">
                  Contact
                </span>
              </Link>
              <Link href="/dashboard">
                <span className="hover:text-[#0284C7] transition-colors duration-200 cursor-pointer">
                  Dashboard
                </span>
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-slate-400/80 font-medium">
              &copy; {currentYear} Healync. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
