'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
}

const ErrorPage = ({ error }: ErrorPageProps): React.ReactElement => {
  const [Lottie, setLottie] = useState<React.ComponentType<{
    src: string;
    background: string;
    loop: boolean;
    autoplay: boolean;
    className: string;
  }> | null>(null);

  useEffect(() => {
    console.error(error);
    import('@dotlottie/react-player').then(mod =>
      setLottie(() => mod.DotLottiePlayer as any),
    );
  }, [error]);

  return (
    <main className="w-full min-h-[85vh] bg-[#F8FAFC] flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-red-500/10 rounded-full filter blur-3xl pointer-events-none animate-pulse duration-4000" />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-md w-full text-center py-6">
        <div className="w-full max-w-70 sm:max-w-[320px] aspect-square flex items-center justify-center transition-all duration-300">
          {Lottie ? (
            <Lottie
              src="/animation/404.json"
              background="transparent"
              loop
              autoplay
              className="w-full h-full object-contain pointer-events-none"
            />
          ) : (
            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
          )}
        </div>

        <h2 className="mt-6 text-xl sm:text-2xl font-extrabold text-gray-800 tracking-tight">
          Something went wrong!
        </h2>

        <div className="mt-8 w-full sm:w-auto flex justify-center min-w-60">
          <Link href="/appointments" className="w-full sm:w-auto">
            <button className="h-11 px-8 rounded-xl bg-[#0284C7] text-white font-bold text-sm transition-all duration-200 hover:bg-[#026497] hover:shadow-lg hover:shadow-[#0284C7]/20 active:scale-[0.97] w-full">
              Back to Appointments
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
