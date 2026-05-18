'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import {
  FiCalendar,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import Link from 'next/link';

import 'swiper/css';

const Banner = () => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    import('@dotlottie/react-player').then(mod =>
      setLottie(() => mod.DotLottiePlayer),
    );
  }, []);

  return (
    <section className="w-full bg-[#F8FAFC] py-10 lg:py-14 relative overflow-hidden select-none">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden xl:block">
        <div className="mx-auto max-w-[88rem] px-4 flex justify-between">
          <button className="custom-prev-btn pointer-events-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0284C7] hover:bg-slate-50 hover:text-[#026497] transition-all shadow-sm active:scale-95">
            <FiChevronLeft size={22} />
          </button>
          <button className="custom-next-btn pointer-events-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0284C7] hover:bg-slate-50 hover:text-[#026497] transition-all shadow-sm active:scale-95">
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-4 xl:hidden">
        <button className="custom-prev-btn flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0284C7] shadow-sm">
          <FiChevronLeft size={20} />
        </button>
        <button className="custom-next-btn flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0284C7] shadow-sm">
          <FiChevronRight size={20} />
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.custom-next-btn',
            prevEl: '.custom-prev-btn',
          }}
          className="w-full"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pb-12 xl:pb-0 min-h-[360px] lg:min-h-[420px]">
              <div className="lg:col-span-7 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0F172A] tracking-tight leading-[1.15] mb-4">
                  Your Health, Connected in One Smart Platform
                </h1>
                <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 mb-7 leading-relaxed">
                  Experience frictionless doctor consultation booking. Healync
                  bridges the gap between top-tier medical specialists and your
                  immediate health needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <Link href="/appointments" className="w-full sm:w-auto">
                    <button className="w-full h-11 px-6 rounded-xl bg-[#0284C7] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0284C7]/90 hover:shadow-md hover:shadow-[#0284C7]/10 transition-all">
                      <FiCalendar size={16} />
                      Book Appointment
                    </button>
                  </Link>
                  <button className="w-full sm:w-auto h-11 px-6 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
                    Add your companion
                    <FiArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center items-center w-full aspect-[4/3] max-w-[420px] mx-auto relative select-none">
                <div className="absolute inset-0 bg-[#0284C7]/5 rounded-full filter blur-3xl" />
                {Lottie && (
                  <Lottie
                    src="/animation/doctor.json"
                    background="transparent"
                    loop
                    autoplay
                    className="w-full h-full relative z-10 object-contain pointer-events-none"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pb-12 xl:pb-0 min-h-[360px] lg:min-h-[420px]">
              <div className="lg:col-span-7 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0F172A] tracking-tight leading-[1.15] mb-4">
                  Skip the Waiting Room. Book Instantly.
                </h1>
                <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 mb-7 leading-relaxed">
                  Take control of your time. Consult with certified doctors
                  online or in-person with real-time slot availability tailored
                  to your busy schedule.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <Link href="/appointments" className="w-full sm:w-auto">
                    <button className="w-full h-11 px-6 rounded-xl bg-[#0284C7] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0284C7]/90 hover:shadow-md hover:shadow-[#0284C7]/10 transition-all">
                      <FiCalendar size={16} />
                      Book Online Now
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center items-center w-full aspect-[4/3] max-w-[420px] mx-auto relative select-none">
                <div className="absolute inset-0 bg-[#0284C7]/5 rounded-full filter blur-3xl" />
                {Lottie && (
                  <Lottie
                    src="/animation/health.json"
                    background="transparent"
                    loop
                    autoplay
                    className="w-full h-full relative z-10 object-contain pointer-events-none"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
