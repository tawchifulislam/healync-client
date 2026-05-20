'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';

import 'swiper/css';

const DailyHealthTips = () => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    import('@dotlottie/react-player').then(mod =>
      setLottie(() => mod.DotLottiePlayer),
    );
  }, []);

  return (
    <section className="w-full bg-[#F8FAFC] py-12 lg:py-16 relative overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/5 px-3.5 py-1.5 text-xs font-bold text-[#0284C7] mb-3">
            <FiHeart size={14} className="animate-pulse" />
            Live Healthy Every Day
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Daily Health Insights
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
            Small habits today lead to a healthier, happier tomorrow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-0 sm:px-6 lg:px-8">
          <button className="tips-prev-btn absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0284C7] hover:bg-slate-50 hover:text-[#026497] transition-all shadow-sm active:scale-95 cursor-pointer">
            <FiChevronLeft size={22} />
          </button>
          <button className="tips-next-btn absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0284C7] hover:bg-slate-50 hover:text-[#026497] transition-all shadow-sm active:scale-95 cursor-pointer">
            <FiChevronRight size={22} />
          </button>

          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 pb-16 sm:p-10 lg:p-12 shadow-sm relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              navigation={{
                nextEl: '.tips-next-btn',
                prevEl: '.tips-prev-btn',
              }}
              className="w-full"
            >
              <SwiperSlide>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-80 lg:min-h-90">
                  <div className="lg:col-span-7 text-center lg:text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-3 py-1 rounded-md">
                      Vision Care
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-3 mb-4 leading-snug">
                      Protect Your Eyes from Digital Strain: The 20-20-20 Rule
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-4">
                      In today&apos;s digital world, prolonged screen time
                      causes dry eyes and fatigue. To mitigate this, practice
                      the 20-20-20 rule: every 20 minutes, take a break and look
                      at something 20 feet away for at least 20 seconds.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold bg-[#F8FAFC] p-3 rounded-xl border border-slate-100">
                      💡 Extra Tip: Remember to blink frequently and adjust your
                      monitor brightness to match the surrounding room light.
                    </p>
                  </div>

                  <div className="lg:col-span-5 flex justify-center items-center w-full aspect-4/3 max-w-85 mx-auto relative">
                    <div className="absolute inset-0 bg-[#0284C7]/5 rounded-full filter blur-3xl opacity-60" />
                    {Lottie && (
                      <Lottie
                        src="/animation/eye.json"
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-80 lg:min-h-90">
                  <div className="lg:col-span-7 text-center lg:text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-3 py-1 rounded-md">
                      Skeletal Health
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-3 mb-4 leading-snug">
                      Keep Bones Stronger with Optimal Calcium & Vitamin D
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-4">
                      Bone density starts decreasing naturally after your 30s.
                      Ensure adequate daily intake of calcium via dairy, leafy
                      greens, or fortified foods. Pair it with Vitamin D through
                      safe sun exposure, as calcium cannot be properly absorbed
                      without it.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold bg-[#F8FAFC] p-3 rounded-xl border border-slate-100">
                      💡 Extra Tip: Incorporate weight-bearing exercises like
                      walking or resistance training to actively stimulate bone
                      strengthening.
                    </p>
                  </div>

                  <div className="lg:col-span-5 flex justify-center items-center w-full aspect-4/3 max-w-85 mx-auto relative">
                    <div className="absolute inset-0 bg-[#0284C7]/5 rounded-full filter blur-3xl opacity-60" />
                    {Lottie && (
                      <Lottie
                        src="/animation/bone.json"
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-4 sm:hidden">
              <button className="tips-prev-btn flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0284C7] shadow-sm cursor-pointer active:scale-95 transition-all">
                <FiChevronLeft size={18} />
              </button>
              <button className="tips-next-btn flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0284C7] shadow-sm cursor-pointer active:scale-95 transition-all">
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyHealthTips;
