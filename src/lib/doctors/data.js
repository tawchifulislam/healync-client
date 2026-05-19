export const fetchDoctors = async (searchTerm = '') => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctors?searchTerm=${searchTerm}`,
    {
      cache: 'no-store',
    },
  );
  const data = await res.json();
  return data;
};

export const fetchTopRatedDoctors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/toprated`);
  const data = await res.json();
  return data || [];
};
