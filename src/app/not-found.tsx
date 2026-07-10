'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const NotFound = (): React.ReactElement => {
  const [Lottie, setLottie] = useState<React.ComponentType<{
    src: string;
    background: string;
    loop: boolean;
    autoplay: boolean;
    className: string;
  }> | null>(null);

  useEffect(() => {
    import('@dotlottie/react-player').then(mod =>
      setLottie(() => mod.DotLottiePlayer as any),
    );
  }, []);

  return (
    <main className="w-full min-h-[85vh] bg-[#F8FAFC] flex flex-col items-center justify-center px-4 relative overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-[#0284C7]/5 rounded-full filter blur-3xl pointer-events-none animate-pulse duration-4000" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        <div className="w-full max-w-85 aspect-square flex items-center justify-center transition-all duration-300">
          {Lottie ? (
            <Lottie
              src="/animation/404.json"
              background="transparent"
              loop
              autoplay
              className="w-full h-full object-contain pointer-events-none"
            />
          ) : (
            <div className="w-8 h-8 border-2 border-[#0284C7] border-t-transparent rounded-full animate-spin" />
          )}
        </div>

        <Link href="/" className="mt-8 block w-full sm:w-auto">
          <button className="h-11 px-8 rounded-xl bg-[#0284C7] text-white font-bold text-sm transition-all duration-200 hover:bg-[#026497] hover:shadow-lg hover:shadow-[#0284C7]/20 active:scale-[0.97]">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
