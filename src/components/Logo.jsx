import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center select-none group">
      <div className="relative transform rotate-30 z-10">
        <Image
          src="/images/logoimg.svg"
          alt="Healync Logo"
          width={38}
          height={38}
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-[#2DD4BF] -ml-2 relative z-0 pl-1">
        Healync
      </h1>
    </Link>
  );
};

export default Logo;
