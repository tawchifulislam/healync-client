'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I book an appointment on Healync?',
    answer:
      'Simply browse our list of verified doctors, click "View Details" on your preferred specialist, and click "Book Appointment". Fill in your details, select a date and time, and confirm your booking instantly.',
  },
  {
    question: 'Do I need to create an account to book an appointment?',
    answer:
      'Yes, you need to create a free account to book appointments. This allows us to securely store your booking history and send you appointment reminders via email.',
  },
  {
    question: 'Will I receive a reminder before my appointment?',
    answer:
      'Yes! Healync automatically sends you an email reminder the day before your appointment at 6:00 AM Bangladesh time, so you never miss a scheduled visit.',
  },
  {
    question: 'Can I cancel or reschedule my appointment?',
    answer:
      'Yes, you can cancel or update your appointment anytime from your Dashboard under "My Bookings". Simply click the Update or Cancel button on your booking card.',
  },
  {
    question: 'What is the Medical Companion service?',
    answer:
      'Our Medical Companion service connects you with trained professionals who can accompany you or your loved ones during hospital visits, medical tests, and prescription collection - providing complete support and peace of mind.',
  },
  {
    question: 'Are the doctors on Healync verified?',
    answer:
      'Yes, all doctors listed on Healync are verified specialists. Each profile includes their specialty, hospital affiliation, experience, and consultation fee for full transparency.',
  },
];

const FAQ = (): React.ReactElement => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number): void => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-16 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-2 max-w-xl mx-auto">
            Everything you need to know about Healync and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
              >
                <span className="text-sm font-bold text-[#0F172A]">
                  {faq.question}
                </span>
                <FiChevronDown
                  size={18}
                  className={`text-[#0284C7] shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-sm text-slate-500 font-medium leading-relaxed border-t border-slate-200/60 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
