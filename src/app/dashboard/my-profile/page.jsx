'use client';

import Image from 'next/image';
import { redirect } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { UpdateUserModal } from '@/components/UpdateUserModal';

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if (userData.isPending) {
    return null;
  }

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="w-full max-w-sm mx-auto select-none py-2">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full p-1 bg-white border-2 border-slate-200 shadow-sm overflow-hidden flex items-center justify-center mb-6 shrink-0">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0284C7]/5 flex items-center justify-center">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name || 'User profile'}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-3xl font-black text-[#0284C7]">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-1 mb-8">
          <h2 className="text-2xl font-black text-[#0F172A] tracking-tight">
            {user?.name}
          </h2>
          <p className="text-slate-400 text-sm font-medium">{user?.email}</p>
        </div>

        <div className="w-full border-t border-slate-100 my-6"></div>

        <div className="w-full">
          <UpdateUserModal />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
