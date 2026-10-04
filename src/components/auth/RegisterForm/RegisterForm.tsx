'use client';

import { useState } from 'react';
import Link from 'next/link';
import { setUserData } from '@/lib/auth';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      name,
      email,
      password,
    };
    const data = setUserData(userData);
    if (data?.error) {
      alert(data.error);
      return;
    } else if (data?.token) {
      alert('Registration successful');
      router.replace('/dashboard');
    } else {
      alert('Registration failed');
    }

    // TODO: Connect to registration API
    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-xl font-bold text-white">
            A
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Create your account to get started
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

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
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                minLength={6}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                minLength={6}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />

              <label htmlFor="terms" className="text-sm text-slate-600">
                I agree to the{' '}
                <a
                  href="#"
                  className="font-medium text-slate-900 hover:underline"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="font-medium text-slate-900 hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Create account
            </button>
          </form>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-slate-900 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          © 2026 Your Company. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default RegisterForm;
