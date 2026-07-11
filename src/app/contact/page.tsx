'use client';

import type { Metadata } from 'next';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { showSuccessToast } from '@/lib/notification';
import { Toaster } from 'react-hot-toast';
import type { FormEvent } from 'react';

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email Us',
    value: 'support@healync.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Call Us',
    value: '+880 1700-000000',
    sub: 'Sat–Thu, 9:00 AM – 6:00 PM',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Visit Us',
    value: 'Dhanmondi, Dhaka 1205',
    sub: 'Bangladesh',
  },
];

export default function ContactPage(): React.ReactElement {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    showSuccessToast('Message sent successfully!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] select-none">
      <Toaster />

      <section className="w-full bg-[#F8FAFC] py-16 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-4 mb-4">
              We&apos;re Here to Help
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              Have a question, feedback, or need support? Reach out to us and
              our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0284C7]/5 flex items-center justify-center text-[#0284C7] shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm font-black text-[#0F172A]">
                      {info.value}
                    </p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {info.sub}
                    </p>
                  </div>
                </div>
              ))}

              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-[#0284C7]/5 flex items-center justify-center text-[#0284C7] hover:bg-[#0284C7] hover:text-white transition-all"
                  >
                    <FaFacebook size={18} />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-[#0284C7]/5 flex items-center justify-center text-[#0284C7] hover:bg-[#0284C7] hover:text-white transition-all"
                  >
                    <FaXTwitter size={18} />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-[#0284C7]/5 flex items-center justify-center text-[#0284C7] hover:bg-[#0284C7] hover:text-white transition-all"
                  >
                    <FaYoutube size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-black text-[#0F172A] tracking-tight mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-[#0284C7] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0284C7]/90 transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <FiSend size={15} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
