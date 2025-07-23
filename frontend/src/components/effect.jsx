// import React from 'react'

// export const Effect = () => {
//   return (
//     <div>
//       {/* 3D Effect Logo/Branding on the left for md+ screens */}
//       <div className="hidden md:flex flex-col items-center justify-center w-1/2 pr-8 relative overflow-visible min-h-[700px] h-full max-h-[900px]">
//         {/* Animated background blobs for fullness */}
//         <div className="absolute inset-0 z-0 pointer-events-none select-none">
//           {/* Top left blob */}
//           <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 opacity-40 rounded-full blur-3xl animate-blob-move1"></div>
//           {/* Bottom right blob */}
//           <div className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-tr from-pink-200 via-indigo-100 to-purple-200 opacity-30 rounded-full blur-3xl animate-blob-move2"></div>
//           {/* Center faint ring */}
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] border-8 border-purple-200/30 rounded-full blur-2xl animate-spin-slow"></div>
//         </div>
//         {/* Animated, glowing, floating orb background with extra effects */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] z-0 pointer-events-none">
//           {/* Main orb, now extra large and with a subtle animated rainbow border */}
//           <div className="w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-60 blur-[100px] animate-orbit-glow shadow-3xl border-8 border-transparent animate-orb-rainbow"></div>
//           {/* Inner glass orb with rainbow border, sparkles, and animated content */}
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] rounded-full bg-white/10 border-4 border-gradient-to-r from-pink-400 via-indigo-400 to-purple-400 shadow-2xl animate-pulse-orb glass-orb-glow flex items-center justify-center">
//             {/* Animated SVG with a lively, premium, financial theme */}
//             <svg className="w-32 h-32 animate-spin-slow opacity-90" viewBox="0 0 128 128" fill="none">
//               {/* Glowing coin */}
//               <circle cx="64" cy="64" r="38" fill="url(#coinGradient)" stroke="#fff" strokeWidth="4" filter="url(#coinGlow)" />
//               <circle cx="64" cy="64" r="28" fill="#fff" opacity="0.7" />
//               {/* Card */}
//               <rect x="44" y="38" width="40" height="28" rx="6" fill="url(#cardGradient)" stroke="#a5b4fc" strokeWidth="2" className="animate-float" />
//               {/* Sparkle */}
//               <circle cx="90" cy="50" r="3" fill="#fff" opacity="0.8" className="animate-sparkle-burst" />
//               {/* Dollar sign */}
//               <text x="64" y="56" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#a78bfa" opacity="0.9" fontFamily="Arial">$</text>
//               {/* Arrows for movement */}
//               <path d="M64 80 l0 16" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" className="animate-float" />
//               <path d="M64 96 l-6 -6" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
//               <path d="M64 96 l6 -6" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
//               <defs>
//                 <radialGradient id="coinGradient" cx="0" cy="0" r="1" gradientTransform="translate(64 64) scale(38)" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#fffbe7" />
//                   <stop offset="1" stopColor="#f472b6" />
//                 </radialGradient>
//                 <linearGradient id="cardGradient" x1="44" y1="38" x2="84" y2="66" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#a5b4fc" />
//                   <stop offset="1" stopColor="#f472b6" />
//                 </linearGradient>
//                 <filter id="coinGlow" x="0" y="0" width="128" height="128" filterUnits="userSpaceOnUse">
//                   <feGaussianBlur stdDeviation="6" result="blur" />
//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>
//             </svg>
//             {/* Sparkle burst */}
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//               <div className="w-3 h-3 bg-white rounded-full opacity-80 animate-sparkle-burst"></div>
//             </div>
//           </div>
//         </div>
//         {/* Floating glassmorphic card with animated border and reflection */}
//         <div className="absolute left-1/2 top-[68%] -translate-x-1/2 -translate-y-1/2 z-10">
//           <div className="w-[23rem] h-48 rounded-3xl bg-white/30 backdrop-blur-xl shadow-3xl border-4 border-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-float-card glass-card-glow relative overflow-hidden">
//             {/* Reflection effect */}
//             <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/60 to-transparent opacity-40 pointer-events-none animate-reflection"></div>
//             {/* Subtle animated lines */}
//             <div className="absolute bottom-2 left-4 w-2/3 h-1 bg-gradient-to-r from-pink-300 via-indigo-300 to-purple-300 opacity-40 animate-gradient-x"></div>
//           </div>
//         </div>
//         {/* Animated Logo Text with 3D Effect and glow */}
//         <div className="mb-12 transform transition-all duration-1000 hover:scale-110 group z-20 absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
//           {/* logo container*/}
//           <div className="relative flex flex-col items-center justify-center">
//             <h1 className="text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x-fast relative z-10 text-center drop-shadow-3xl animate-logo-pop shadow-indigo-400/40">
//               <span className="inline-block animate-letter-float delay-100">P</span>
//               <span className="inline-block animate-letter-float delay-200">a</span>
//               <span className="inline-block animate-letter-float delay-300">y</span>
//               <span className="inline-block animate-letter-float delay-400">B</span>
//               <span className="inline-block animate-letter-float delay-500">y</span>
//               <span className="inline-block animate-letter-float delay-600">M</span>
//               <span className="inline-block animate-letter-float delay-700">e</span>
//             </h1>
//             {/* Text shadow for 3D effect, perfectly centered */}
//             <h1 className="absolute top-2 left-2 text-6xl font-black text-indigo-300 opacity-30 -z-10 w-full text-center select-none pointer-events-none blur-sm">
//               PayByMe
//             </h1>
//             {/* Animated underline with sparkles and a rainbow shimmer */}
//             <div className="relative mx-auto mt-6 w-40 h-2">
//               <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-scale-x delay-500 shadow-lg animate-underline-shimmer"></div>
//               <div className="absolute -top-1 left-0 w-3 h-3 bg-white rounded-full animate-sparkle delay-1000"></div>
//               <div className="absolute -top-1 right-0 w-2 h-2 bg-white rounded-full animate-sparkle delay-1500"></div>
//               <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full animate-sparkle delay-2000"></div>
//             </div>
//           </div>
//           {/* Tagline with typewriter effect, floating, and a neon glow */}
//           <div className="mt-6 text-xl text-purple-700 font-semibold animate-float drop-shadow-[0_2px_16px_rgba(168,85,247,0.4)] animate-typewriter-glow">
//             <span className="inline-block animate-typewriter">💳 Secure • Fast • Reliable</span>
//           </div>
//         </div>
//         {/* Inspiring Quotes to fill empty space */}
//         <div className="absolute left-1/2 top-[78%] -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-20 flex flex-col items-center space-y-4 animate-fade-in pointer-events-none select-none">
//           <div className="bg-white/60 rounded-xl shadow-lg px-6 py-4 backdrop-blur-md border border-purple-100/60 max-w-md w-full animate-float-card">
//             <p className="text-lg text-gray-700 italic text-center font-medium">
//               “The best way to predict the future is to create it.”
//             </p>
//             <p className="text-right text-sm text-purple-500 mt-2">– Peter Drucker</p>
//           </div>
//           <div className="bg-white/50 rounded-xl shadow px-5 py-3 backdrop-blur-md border border-indigo-100/50 max-w-md w-full animate-float-card delay-400">
//             <p className="text-base text-gray-600 italic text-center">
//               “Innovation distinguishes between a leader and a follower.”
//             </p>
//             <p className="text-right text-xs text-indigo-400 mt-1">– Steve Jobs</p>
//           </div>
//           <div className="bg-white/40 rounded-xl shadow px-4 py-2 backdrop-blur-md border border-pink-100/40 max-w-md w-full animate-float-card delay-700">
//             <p className="text-sm text-gray-500 italic text-center">
//               “Great things are done by a series of small things brought together.”
//             </p>
//             <p className="text-right text-xs text-pink-400 mt-1">– Vincent Van Gogh</p>
//           </div>
//         </div>
//         {/* Animated floating sparkles, confetti, and geometric shapes */}
//         <div className="pointer-events-none z-30">
//           <div className="absolute left-1/3 top-1/4 w-8 h-8 bg-white/70 rounded-full blur-lg animate-sparkle-float1"></div>
//           <div className="absolute left-2/3 top-2/3 w-6 h-6 bg-pink-200/80 rounded-full blur-md animate-sparkle-float2"></div>
//           <div className="absolute left-1/4 top-2/3 w-5 h-5 bg-purple-200/90 rounded-full blur-md animate-sparkle-float3"></div>
//           {/* Extra sparkles for fullness */}
//           <div className="absolute left-1/4 top-1/3 w-3 h-3 bg-white/60 rounded-full blur-md animate-sparkle-float2"></div>
//           <div className="absolute left-2/5 top-2/5 w-2 h-2 bg-pink-100/80 rounded-full blur-sm animate-sparkle-float3"></div>
//           {/* Confetti burst (increased to 12) */}
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//             {[...Array(12)].map((_, i) => (
//               <div key={i} className={`absolute w-2 h-2 rounded-full bg-gradient-to-br from-pink-400 via-indigo-400 to-purple-400 opacity-80 animate-confetti-burst`} style={{ transform: `rotate(${i * 30}deg) translateY(-90px)` }}></div>
//             ))}
//           </div>
//           {/* Floating geometric shapes */}
//           <div className="absolute left-1/3 top-2/3 w-8 h-8 opacity-30 animate-geo-float1">
//             <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="6" fill="url(#geo1)" /></svg>
//           </div>
//           <div className="absolute left-2/3 top-1/4 w-10 h-10 opacity-25 animate-geo-float2">
//             <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,4 36,36 4,36" fill="url(#geo2)" /></svg>
//           </div>
//           <div className="absolute left-1/2 top-1/5 w-7 h-7 opacity-20 animate-geo-float3">
//             <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="url(#geo3)" strokeWidth="3" fill="none" /></svg>
//           </div>
//           {/* SVG gradients for geometric shapes */}
//           <svg width="0" height="0">
//             <defs>
//               <linearGradient id="geo1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
//                 <stop stopColor="#a5b4fc" />
//                 <stop offset="1" stopColor="#f472b6" />
//               </linearGradient>
//               <linearGradient id="geo2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
//                 <stop stopColor="#f472b6" />
//                 <stop offset="1" stopColor="#c4b5fd" />
//               </linearGradient>
//               <linearGradient id="geo3" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
//                 <stop stopColor="#a5b4fc" />
//                 <stop offset="1" stopColor="#c4b5fd" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </div>
//     </div>
//   )
// }

// src/components/Left3DShowcase.jsx

import React from "react";

export const Effect = () => {
  return (
    <div className="hidden md:flex flex-col items-center justify-center w-1/2 pr-8 relative overflow-visible min-h-[700px] h-full max-h-[900px]">

      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 opacity-40 rounded-full blur-3xl animate-blob-move1"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-tr from-pink-200 via-indigo-100 to-purple-200 opacity-30 rounded-full blur-3xl animate-blob-move2"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] border-8 border-purple-200/30 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Orb Effects */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] z-0 pointer-events-none">
        <div className="w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-60 blur-[100px] animate-orbit-glow shadow-3xl border-8 border-transparent animate-orb-rainbow"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] rounded-full bg-white/10 border-4 border-gradient-to-r from-pink-400 via-indigo-400 to-purple-400 shadow-2xl animate-pulse-orb glass-orb-glow flex items-center justify-center">
          <svg className="w-32 h-32 animate-spin-slow opacity-90" viewBox="0 0 128 128" fill="none">
            <circle cx="64" cy="64" r="38" fill="url(#coinGradient)" stroke="#fff" strokeWidth="4" filter="url(#coinGlow)" />
            <circle cx="64" cy="64" r="28" fill="#fff" opacity="0.7" />
            <rect x="44" y="38" width="40" height="28" rx="6" fill="url(#cardGradient)" stroke="#a5b4fc" strokeWidth="2" className="animate-float" />
            <circle cx="90" cy="50" r="3" fill="#fff" opacity="0.8" className="animate-sparkle-burst" />
            <text x="64" y="56" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#a78bfa" opacity="0.9" fontFamily="Arial">$</text>
            <path d="M64 80 l0 16" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" className="animate-float" />
            <path d="M64 96 l-6 -6" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
            <path d="M64 96 l6 -6" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <radialGradient id="coinGradient" cx="0" cy="0" r="1" gradientTransform="translate(64 64) scale(38)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fffbe7" />
                <stop offset="1" stopColor="#f472b6" />
              </radialGradient>
              <linearGradient id="cardGradient" x1="44" y1="38" x2="84" y2="66" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a5b4fc" />
                <stop offset="1" stopColor="#f472b6" />
              </linearGradient>
              <filter id="coinGlow" x="0" y="0" width="128" height="128" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Floating Glassmorphism Card */}
      <div className="absolute left-1/2 top-[68%] -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-[23rem] h-48 rounded-3xl bg-white/30 backdrop-blur-xl shadow-3xl border-4 border-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-float-card glass-card-glow relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/60 to-transparent opacity-40 pointer-events-none animate-reflection"></div>
          <div className="absolute bottom-2 left-4 w-2/3 h-1 bg-gradient-to-r from-pink-300 via-indigo-300 to-purple-300 opacity-40 animate-gradient-x"></div>
        </div>
      </div>

      {/* Logo Text */}
      <div className="mb-12 transform transition-all duration-1000 hover:scale-110 group z-20 absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x-fast relative z-10 text-center drop-shadow-3xl animate-logo-pop shadow-indigo-400/40">
            <span className="inline-block animate-letter-float delay-100">P</span>
            <span className="inline-block animate-letter-float delay-200">a</span>
            <span className="inline-block animate-letter-float delay-300">y</span>
            <span className="inline-block animate-letter-float delay-400">B</span>
            <span className="inline-block animate-letter-float delay-500">y</span>
            <span className="inline-block animate-letter-float delay-600">M</span>
            <span className="inline-block animate-letter-float delay-700">e</span>
          </h1>
          <h1 className="absolute top-2 left-2 text-6xl font-black text-indigo-300 opacity-30 -z-10 w-full text-center select-none pointer-events-none blur-sm">PayByMe</h1>
          <div className="relative mx-auto mt-6 w-40 h-2">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-scale-x delay-500 shadow-lg animate-underline-shimmer"></div>
            <div className="absolute -top-1 left-0 w-3 h-3 bg-white rounded-full animate-sparkle delay-1000"></div>
            <div className="absolute -top-1 right-0 w-2 h-2 bg-white rounded-full animate-sparkle delay-1500"></div>
            <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full animate-sparkle delay-2000"></div>
          </div>
        </div>
        <div className="mt-6 text-xl text-purple-700 font-semibold animate-float drop-shadow-[0_2px_16px_rgba(168,85,247,0.4)] animate-typewriter-glow">
          <span className="inline-block animate-typewriter">💳 Secure • Fast • Reliable</span>
        </div>
      </div>

      {/* Quotes */}
      <div className="absolute left-1/2 top-[78%] -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-20 flex flex-col items-center space-y-4 animate-fade-in pointer-events-none select-none">
        <div className="bg-white/60 rounded-xl shadow-lg px-6 py-4 backdrop-blur-md border border-purple-100/60 max-w-md w-full animate-float-card">
          <p className="text-lg text-gray-700 italic text-center font-medium">“The best way to predict the future is to create it.”</p>
          <p className="text-right text-sm text-purple-500 mt-2">– Peter Drucker</p>
        </div>
        <div className="bg-white/50 rounded-xl shadow px-5 py-3 backdrop-blur-md border border-indigo-100/50 max-w-md w-full animate-float-card delay-400">
          <p className="text-base text-gray-600 italic text-center">“Innovation distinguishes between a leader and a follower.”</p>
          <p className="text-right text-xs text-indigo-400 mt-1">– Steve Jobs</p>
        </div>
        <div className="bg-white/40 rounded-xl shadow px-4 py-2 backdrop-blur-md border border-pink-100/40 max-w-md w-full animate-float-card delay-700">
          <p className="text-sm text-gray-500 italic text-center">“Great things are done by a series of small things brought together.”</p>
          <p className="text-right text-xs text-pink-400 mt-1">– Vincent Van Gogh</p>
        </div>
      </div>

      {/* Sparkles / Confetti / Geometrics */}
      <div className="pointer-events-none z-30">
        <div className="absolute left-1/3 top-1/4 w-8 h-8 bg-white/70 rounded-full blur-lg animate-sparkle-float1"></div>
        <div className="absolute left-2/3 top-2/3 w-6 h-6 bg-pink-200/80 rounded-full blur-md animate-sparkle-float2"></div>
        <div className="absolute left-1/4 top-2/3 w-5 h-5 bg-purple-200/90 rounded-full blur-md animate-sparkle-float3"></div>
        <div className="absolute left-1/4 top-1/3 w-3 h-3 bg-white/60 rounded-full blur-md animate-sparkle-float2"></div>
        <div className="absolute left-2/5 top-2/5 w-2 h-2 bg-pink-100/80 rounded-full blur-sm animate-sparkle-float3"></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-pink-400 via-indigo-400 to-purple-400 opacity-80 animate-confetti-burst" style={{ transform: `rotate(${i * 30}deg) translateY(-90px)` }}></div>
          ))}
        </div>

        <div className="absolute left-1/3 top-2/3 w-8 h-8 opacity-30 animate-geo-float1">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="6" fill="url(#geo1)" /></svg>
        </div>
        <div className="absolute left-2/3 top-1/4 w-10 h-10 opacity-25 animate-geo-float2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,4 36,36 4,36" fill="url(#geo2)" /></svg>
        </div>
        <div className="absolute left-1/2 top-1/5 w-7 h-7 opacity-20 animate-geo-float3">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="url(#geo3)" strokeWidth="3" fill="none" /></svg>
        </div>
        <svg width="0" height="0">
          <defs>
            <linearGradient id="geo1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#f472b6" />
            </linearGradient>
            <linearGradient id="geo2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f472b6" />
              <stop offset="1" stopColor="#c4b5fd" />
            </linearGradient>
            <linearGradient id="geo3" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#c4b5fd" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
