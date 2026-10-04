'use client';

import { setLoggedInUserData } from '@/lib/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const userLoggedIn = {
      email,
      password,
    };

    const loggedInUser = setLoggedInUserData(userLoggedIn);
    if (!loggedInUser) {
      alert('Invalid email or password');
      return;
    }

    router.replace('/dashboard');
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white text-xl font-bold">
            A
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-slate-900 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300"
              />

              <label htmlFor="remember" className="text-sm text-slate-600">
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">OR</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <span className="font-bold">G</span>
            Continue with Google
          </button>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="font-medium text-slate-900 hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          © 2026 Your Company. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default LoginForm;
