'use client';

import { authClient } from '@/lib/auth-client';
import { FiUser, FiImage, FiEdit2 } from 'react-icons/fi';
import { showSuccessToast } from '@/lib/notification';

export function UpdateUserModal() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });

    showSuccessToast('Profile updated successfully!');
    document.getElementById('update_modal').close();
  };

  return (
    <>
      <button
        onClick={() => document.getElementById('update_modal').showModal()}
        className="w-full h-11 rounded-xl bg-[#0284C7] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#0284C7]/90 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
      >
        <FiEdit2 size={13} /> Update Profile
      </button>

      <dialog
        id="update_modal"
        className="fixed inset-0 z-50 m-auto h-fit w-full max-w-md rounded-3xl bg-white border border-slate-200/60 shadow-2xl p-0 overflow-hidden backdrop:bg-black/40 backdrop:backdrop-blur-sm open:flex open:flex-col animate-fadeIn"
      >
        <div className="bg-[#F8FAFC] p-6 flex items-center gap-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-[#0284C7]/5 flex items-center justify-center text-[#0284C7]">
            <FiUser size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-black text-lg text-[#0F172A] tracking-tight">
              Update Profile
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Modify your account details
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">
              Full Name
            </label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-4 text-slate-400" size={16} />
              <input
                name="name"
                type="text"
                defaultValue={user?.name || ''}
                placeholder="Enter your name"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">
              Image URL
            </label>
            <div className="relative flex items-center">
              <FiImage className="absolute left-4 text-slate-400" size={16} />
              <input
                name="image"
                type="url"
                defaultValue={user?.image || ''}
                placeholder="https://example.com"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4 justify-end border-t border-slate-100 mt-6">
            <button
              type="button"
              onClick={() => document.getElementById('update_modal').close()}
              className="h-10 px-4 rounded-xl text-slate-500 font-semibold text-xs hover:bg-slate-100 transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-10 px-6 rounded-xl bg-[#0284C7] text-white font-bold text-xs hover:bg-[#0284C7]/90 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
