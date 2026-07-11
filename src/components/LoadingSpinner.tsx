'use client';

import { useEffect, useState } from 'react';

type LottiePlayerType = React.ComponentType<{
  src: string;
  background: string;
  loop: boolean;
  autoplay: boolean;
  speed: number;
  className: string;
}>;

export default function LoadingSpinner(): React.ReactElement {
  const [Lottie, setLottie] = useState<LottiePlayerType | null>(null);
  const [shouldShow, setShouldShow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldShow(true), 100);

    import('@dotlottie/react-player').then(mod => {
      setLottie(() => mod.DotLottiePlayer as LottiePlayerType);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center select-none bg-transparent">
      <div
        className={`w-36 h-36 relative transition-all duration-500 ease-out transform ${
          shouldShow ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {Lottie ? (
          <Lottie
            src="/animation/loading.json"
            background="transparent"
            loop
            autoplay
            speed={1}
            className="w-full h-full object-contain pointer-events-none"
          />
        ) : (
          <div className="w-10 h-10 border-2 border-[#0284C7] border-t-transparent rounded-full animate-spin absolute inset-0 m-auto" />
        )}
      </div>
    </div>
  );
}
