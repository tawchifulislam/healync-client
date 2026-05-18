import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center select-none group">
      <div className="relative transform rotate-30 z-10">
        <Image
          src="/images/logoimg.svg"
          alt="Healync Logo"
          width={36}
          height={36}
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-black tracking-tight text-[#0284C7] -ml-2.5 relative z-0 pl-1">
        Healync
      </h1>
    </Link>
  );
};

export default Logo;
