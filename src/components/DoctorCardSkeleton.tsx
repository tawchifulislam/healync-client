const DoctorCardSkeleton = (): React.ReactElement => {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full animate-pulse">
      {/* Image */}
      <div className="w-full aspect-16/10 bg-slate-200" />

      {/* Content */}
      <div className="px-5 pt-4 flex-1">
        <div className="h-5 w-1/3 bg-slate-200 rounded-lg mb-3" />
        <div className="h-6 w-2/3 bg-slate-200 rounded-lg mb-4" />

        <div className="space-y-2.5 mt-4 border-t border-slate-100 pt-4">
          <div className="h-4 w-1/2 bg-slate-200 rounded-lg" />
          <div className="h-4 w-3/4 bg-slate-200 rounded-lg" />
        </div>
      </div>

      {/* Footer */}
      <div className="mx-5 pb-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-4 mt-4">
        <div className="h-6 w-16 bg-slate-200 rounded-lg" />
        <div className="h-9 w-28 bg-slate-200 rounded-xl" />
      </div>
    </div>
  );
};

export default DoctorCardSkeleton;
