'use client';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FiUser, FiMail, FiImage, FiLock } from 'react-icons/fi';
import { Toaster } from 'react-hot-toast';
import { signIn, signUp } from '@/lib/auth-client';
import { showSuccessToast, showErrorToast } from '@/lib/notification';
import type { FormEvent } from 'react';

export default function Register(): React.ReactElement {
  const handleRegister = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { error } = await signUp.email({
      name: registerData.name,
      email: registerData.email,
      image: registerData.image,
      password: registerData.password,
    });

    if (error) {
      showErrorToast(error.message || 'Registration failed. Please try again.');
      return;
    }
    showSuccessToast('Account created successfully! Please login.');
    setTimeout(() => {
      window.location.href = '/login';
    }, 200);
  };

  const handleGoogleSignin = async (): Promise<void> => {
    await signIn.social({
      provider: 'google',
    });
  };

  return (
    <main className="w-full min-h-[85vh] bg-[#F8FAFC] flex items-center justify-center px-4 select-none py-12">
      <Toaster />
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white border border-slate-200/60 rounded-3xl p-5 sm:p-8 shadow-sm"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-[#0F172A] tracking-tight">
            Register
          </h1>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Name
            </label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-4 text-slate-400" size={18} />
              <input
                name="name"
                type="text"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Email
            </label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-4 text-slate-400" size={18} />
              <input
                name="email"
                type="email"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Photo URL
            </label>
            <div className="relative flex items-center">
              <FiImage className="absolute left-4 text-slate-400" size={18} />
              <input
                name="image"
                type="url"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Password
            </label>
            <div className="relative flex items-center">
              <FiLock className="absolute left-4 text-slate-400" size={18} />
              <input
                name="password"
                type="password"
                minLength={6}
                pattern="^(?=.*[a-z])(?=.*[A-Z]).+$"
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
            <p className="text-[11px] text-slate-400 font-semibold pl-1 leading-relaxed">
              Must contain at least 1 uppercase, 1 lowercase & minimum 6
              characters.
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-[#0284C7] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0284C7]/90 transition-all shadow-sm active:scale-[0.98] mt-2 cursor-pointer"
          >
            Register
          </button>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-slate-100"></div>
          <span className="shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
            Or
          </span>
          <div className="grow border-t border-slate-100"></div>
        </div>

        <button
          onClick={handleGoogleSignin}
          type="button"
          className="w-full h-11 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm flex items-center justify-center gap-2.5 hover:bg-slate-50 transition-all shadow-sm active:scale-[0.98] cursor-pointer"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center text-sm text-slate-500 font-medium mt-6">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-[#0284C7] font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
