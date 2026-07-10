import { Doctor } from '@/types';

export const fetchDoctors = async (
  searchTerm: string = '',
): Promise<Doctor[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctors?searchTerm=${searchTerm}`,
    {
      cache: 'no-store',
    },
  );
  const data = await res.json();
  return data;
};

export const fetchTopRatedDoctors = async (): Promise<Doctor[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/toprated`);
  const data = await res.json();
  return data || [];
};
