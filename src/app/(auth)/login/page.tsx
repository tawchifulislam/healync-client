'use client';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FiMail, FiLock } from 'react-icons/fi';
import { Toaster } from 'react-hot-toast';
import { signIn } from '@/lib/auth-client';
import { showSuccessToast, showErrorToast } from '@/lib/notification';
import { useState } from 'react';
import type { FormEvent } from 'react';

const DEMO_EMAIL = 'demo@healync.com';
const DEMO_PASSWORD = 'Demo1234';

const LoginPage = (): React.ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const { error } = await signIn.email({
      email,
      password,
    });

    if (error) {
      showErrorToast('Invalid email or password');
      return;
    }
    showSuccessToast('Logged in successfully!');
    setTimeout(() => {
      window.location.href = '/';
    }, 200);
  };

  const handleGoogleSignin = async (): Promise<void> => {
    await signIn.social({
      provider: 'google',
    });
  };

  const fillDemoCredentials = (): void => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
  };

  return (
    <main className="w-full min-h-[85vh] bg-[#F8FAFC] flex items-center justify-center px-4 select-none py-12">
      <Toaster />

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white border border-slate-200/60 rounded-3xl p-5 sm:p-8 shadow-sm"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-[#0F172A] tracking-tight">
            Login
          </h1>
        </div>

        {/* Demo Credentials Button */}
        <button
          type="button"
          onClick={fillDemoCredentials}
          className="w-full h-10 rounded-xl border border-dashed border-[#0284C7] text-[#0284C7] font-bold text-xs hover:bg-[#0284C7]/5 transition-all cursor-pointer mb-5"
        >
          Use Demo Credentials
        </button>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Email
            </label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-4 text-slate-400" size={18} />
              <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap justify-between items-center gap-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Password
              </label>
              <span className="text-xs font-semibold text-[#0284C7] hover:underline cursor-pointer">
                Forgot Password
              </span>
            </div>
            <div className="relative flex items-center">
              <FiLock className="absolute left-4 text-slate-400" size={18} />
              <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#0284C7] bg-[#F8FAFC]/50 transition-colors"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-[#0284C7] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0284C7]/90 transition-all shadow-sm active:scale-[0.98] mt-2 cursor-pointer"
          >
            Login
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
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="text-[#0284C7] font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;
