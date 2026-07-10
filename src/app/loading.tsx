import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading(): React.ReactElement {
  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center bg-[#F8FAFC]">
      <LoadingSpinner />
    </div>
  );
}
