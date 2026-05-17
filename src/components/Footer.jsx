'use client';

import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#2DD4BF]/10 bg-[#0A0F1E] py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <div className="flex items-center gap-3 text-[#E2E8F0]/40 ml-5">
              <span className="hover:text-[#2DD4BF] transition-colors duration-200 cursor-pointer">
                <FaFacebook size={18} />
              </span>
              <span className="hover:text-[#2DD4BF] transition-colors duration-200 cursor-pointer">
                <FaXTwitter size={18} />
              </span>
              <span className="hover:text-[#2DD4BF] transition-colors duration-200 cursor-pointer">
                <FaYoutube size={18} />
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-6 text-sm font-semibold text-[#E2E8F0]/70">
              <span className="hover:text-[#2DD4BF] transition-colors duration-200 cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-[#2DD4BF] transition-colors duration-200 cursor-pointer">
                Terms of Service
              </span>
              <span className="hover:text-[#2DD4BF] transition-colors duration-200 cursor-pointer">
                Contact Support
              </span>
            </div>
            <p className="text-sm text-[#E2E8F0]/40 font-medium mt-1">
              &copy; {currentYear} Healync. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
