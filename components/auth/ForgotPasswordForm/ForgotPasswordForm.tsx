'use client';

import Link from 'next/link';
import { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Connect to forgot-password API
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-xl font-bold text-white">
            A
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Forgot your password?
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Enter your email and we&apos;ll send you a password reset link.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
                ✓
              </div>

              <h2 className="text-lg font-semibold text-slate-900">
                Check your email
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                If an account exists for{' '}
                <span className="font-medium text-slate-700">{email}</span>,
                you&apos;ll receive a password reset link shortly.
              </p>

              <Link
                href="/login"
                className="mt-6 inline-block text-sm font-medium text-slate-900 hover:underline"
              >
                Back to sign in
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                Send reset link
              </button>
            </form>
          )}

          {!submitted && (
            <p className="mt-6 text-center text-sm text-slate-500">
              Remember your password?{' '}
              <Link
                href="/login"
                className="font-medium text-slate-900 hover:underline"
              >
                Sign in
              </Link>
            </p>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          © 2026 Your Company. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default ForgotPasswordForm;
