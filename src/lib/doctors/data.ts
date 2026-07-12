import { Doctor } from '@/types';

interface DoctorsResponse {
  doctors: Doctor[];
  total: number;
  page: number;
  totalPages: number;
}

interface FetchDoctorsParams {
  searchTerm?: string;
  specialty?: string;
  minFee?: string;
  maxFee?: string;
  sortBy?: string;
  page?: string;
  limit?: string;
}

export const fetchDoctors = async (
  params: FetchDoctorsParams = {},
): Promise<DoctorsResponse> => {
  const {
    searchTerm = '',
    specialty = '',
    minFee = '',
    maxFee = '',
    sortBy = '',
    page = '1',
    limit = '8',
  } = params;

  const query = new URLSearchParams();
  if (searchTerm) query.set('searchTerm', searchTerm);
  if (specialty) query.set('specialty', specialty);
  if (minFee) query.set('minFee', minFee);
  if (maxFee) query.set('maxFee', maxFee);
  if (sortBy) query.set('sortBy', sortBy);
  query.set('page', page);
  query.set('limit', limit);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/doctors?${query.toString()}`,
      { cache: 'no-store' },
    );
    if (!res.ok) return { doctors: [], total: 0, page: 1, totalPages: 0 };
    const data = await res.json();
    return data;
  } catch (error) {
    return { doctors: [], total: 0, page: 1, totalPages: 0 };
  }
};

export const fetchTopRatedDoctors = async (): Promise<Doctor[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/toprated`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data || [];
  } catch (error) {
    return [];
  }
};
