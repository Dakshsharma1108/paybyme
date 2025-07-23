import React from 'react'

export const Form = ({ children }) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 via-indigo-50/80 to-purple-50/80 px-8 py-10 shadow-2xl transition-shadow hover:shadow-2xl relative form-card-glow">
        {/* Animated dots pattern background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none animate-dots-bg opacity-30"></div>
        {/* Avatar/illustration above form */}
        <div className="flex justify-center mb-6 z-10 relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-lg animate-avatar-pop">
            <svg className="w-10 h-10 text-white/90" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="14" r="7" fill="white" fillOpacity=".7" />
              <ellipse cx="20" cy="29" rx="11" ry="7" fill="white" fillOpacity=".5" />
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
