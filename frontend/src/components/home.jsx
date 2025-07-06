import React from "react";
import { Link } from "react-router-dom";

export function PayByMeHome() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 py-20 text-center animate-fade-in">
        <div className="mb-6 animate-fade-in delay-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-20 w-20 text-indigo-600 animate-bounce"
            viewBox="0 0 48 48"
            fill="none"
          >
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="4" />
            <path
              d="M16 24h16M24 16v16"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 animate-fade-in delay-300">
          Welcome to <span className="text-indigo-600">PayByMe</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 animate-fade-in delay-400">
          The easiest way to manage your payments. Fast, secure, and reliable.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Link
            to="/signup"
            className="rounded-md bg-indigo-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-indigo-500 transition-colors text-lg"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="rounded-md border border-indigo-600 px-8 py-3 text-indigo-600 font-semibold shadow-lg hover:bg-indigo-50 transition-colors text-lg"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white/80 animate-fade-in delay-700">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Why PayByMe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <span className="text-4xl mb-4">⚡</span>
              <h3 className="text-xl font-semibold mb-2">Instant Payments</h3>
              <p className="text-gray-600">Send and receive money in seconds, anytime, anywhere.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <span className="text-4xl mb-4">🔒</span>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data and transactions are protected with bank-level security.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <span className="text-4xl mb-4">💡</span>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">A simple, intuitive interface for everyone. No learning curve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center animate-fade-in delay-1000">
        <p className="text-sm">&copy; {new Date().getFullYear()} PayByMe. All rights reserved.</p>
      </footer>
    </div>
  );
}
