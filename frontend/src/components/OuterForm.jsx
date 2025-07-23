import React from 'react'

export const OuterForm = ({ children, error, setError }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center h-full max-h-[900px] overflow-y-auto scrollbar-hide">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center md:text-left">
        {/* Animated SVG Logo (mobile only) */}
        <div className="mb-4 animate-fade-in md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-12 w-auto text-indigo-600 animate-bounce"
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

        <h2 className="text-3xl font-bold text-gray-900 animate-fade-in delay-200">
          Welcome to PayByMe
        </h2>
        <p className="mt-2 text-sm text-gray-600 animate-fade-in delay-300">
          Secure payments at your fingertips
        </p>
        
        {error && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center animate-fade-in-special">
              <h2 className="text-lg font-semibold text-red-600 mb-2">Something went wrong</h2>
              <p className="text-gray-700 mb-4">{error}</p>
              <button
                onClick={() => setError("")}
                className="mt-4 inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                OK
              </button>
            </div>
          </div>
        )}
        
        {children}
      </div>
    </div>
  )
}
