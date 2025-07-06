// export  function PayByMeLogin() {
//   return (
//     <div className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-indigo-50 to-white px-6 py-12">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
//         {/* Animated SVG Logo */}
//         <div className="mb-4 animate-fade-in">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="mx-auto h-12 w-auto text-indigo-600 animate-bounce"
//             viewBox="0 0 48 48"
//             fill="none"
//           >
//             <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="4" />
//             <path
//               d="M16 24h16M24 16v16"
//               stroke="currentColor"
//               strokeWidth="4"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>

//         <h2 className="text-center text-3xl font-bold text-gray-900 animate-fade-in delay-200">
//           Welcome to PayByMe
//         </h2>
//         <p className="mt-2 text-sm text-gray-600 animate-fade-in delay-300">
//           Secure payments at your fingertips
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="overflow-hidden rounded-lg bg-white px-8 py-8 shadow-lg transition-shadow hover:shadow-xl">
//           <form className="space-y-6">
//             {["email", "password"].map((field, i) => (
//               <div key={field} className={`animate-slide-up delay-${i * 200}`}>
//                 <label
//                   htmlFor={field}
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   {field.charAt(0).toUpperCase() + field.slice(1)}
//                 </label>
//                 <input
//                   id={field}
//                   name={field}
//                   type={field}
//                   autoComplete={field}
//                   required
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
//                              px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             ))}

//             <div className="flex items-center justify-between animate-slide-up delay-400">
//               <div className="text-sm">
//                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <div className="animate-slide-up delay-600">
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4
//                            text-white shadow-sm transition-colors hover:bg-indigo-500
//                            focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-6 text-center text-sm text-gray-600 animate-fade-in delay-800">
//             New to PayByMe?{" "}
//             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//               Create account
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export function PayByMeLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-white px-6 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md text-center">
        {/* Animated Logo Text with 3D Effect */}
        <div className="mb-8 transform transition-all duration-1000 hover:scale-110 group">
            {/* logo container*/}
          
          <div className="relative flex flex-col items-center justify-center">
            <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x-fast relative z-10 text-center">
              <span className="inline-block animate-letter-float delay-100">P</span>
              <span className="inline-block animate-letter-float delay-200">a</span>
              <span className="inline-block animate-letter-float delay-300">y</span>
              <span className="inline-block animate-letter-float delay-400">B</span>
              <span className="inline-block animate-letter-float delay-500">y</span>
              <span className="inline-block animate-letter-float delay-600">M</span>
              <span className="inline-block animate-letter-float delay-700">e</span>
            </h1>
            {/* Text shadow for 3D effect, perfectly centered */}
            <h1 className="absolute top-1 left-1 text-5xl font-black text-gray-400 opacity-30 -z-10 w-full text-center select-none pointer-events-none">
              PayByMe
            </h1>
            {/* Animated underline with sparkles */}
            <div className="relative mx-auto mt-4 w-32 h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-scale-x delay-500"></div>
              <div className="absolute -top-1 left-0 w-2 h-2 bg-white rounded-full animate-sparkle delay-1000"></div>
              <div className="absolute -top-1 right-0 w-1.5 h-1.5 bg-white rounded-full animate-sparkle delay-1500"></div>
              <div className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full animate-sparkle delay-2000"></div>
            </div>
          </div>
          {/* Tagline with typewriter effect */}
          <div className="mt-4 text-sm text-gray-600 font-medium">
            <span className="inline-block animate-typewriter">💳 Secure • Fast • Reliable</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-2 transform translate-y-4 opacity-0 animate-slide-up delay-300">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-600 transform translate-y-4 opacity-0 animate-slide-up delay-500">
          Secure payments at your fingertips
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md transform translate-y-8 opacity-0 animate-slide-up delay-700">
        <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm px-8 py-8 shadow-lg border border-white/20 transition-all duration-500 hover:shadow-2xl hover:bg-white/90">
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative space-y-6">
            {[
              { field: "email", type: "email", icon: "📧", placeholder: "Enter your email" },
              { field: "password", type: "password", icon: "🔒", placeholder: "Enter your password" }
            ].map(({ field, type, icon, placeholder }, i) => (
              <div key={field} className={`transform translate-y-4 opacity-0 animate-slide-up delay-${800 + i * 200}`}>
                <label
                  htmlFor={field}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                    focusedField === field ? 'text-indigo-600' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{icon}</span>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <div className="relative mt-1">
                  <input
                    id={field}
                    name={field}
                    type={type}
                    value={formData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className={`block w-full rounded-xl border px-4 py-3 shadow-sm transition-all duration-300 sm:text-sm
                               ${focusedField === field 
                                 ? 'border-indigo-500 ring-2 ring-indigo-500/20 scale-[1.02] bg-white' 
                                 : 'border-gray-300 hover:border-gray-400 bg-gray-50/50'
                               }
                               focus:outline-none placeholder-gray-400`}
                    placeholder={placeholder}
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${
                    focusedField === field ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between transform translate-y-4 opacity-0 animate-slide-up delay-1200">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <button 
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <div className="transform translate-y-4 opacity-0 animate-slide-up delay-1400">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className={`group relative flex w-full justify-center rounded-xl px-4 py-3 text-white font-medium
                           shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl
                           ${isLoading 
                             ? 'bg-gray-400 cursor-not-allowed' 
                             : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                           }
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing in...
                  </div>
                ) : (
                  <span className="flex items-center gap-2">
                    Sign in
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 transform translate-y-4 opacity-0 animate-slide-up delay-1600">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-3">
              {['Google', 'Apple'].map((provider, i) => (
                <button
                  key={provider}
                  type="button"
                  className={`group flex justify-center items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:scale-105 transform translate-y-4 opacity-0 animate-slide-up delay-${1700 + i * 100}`}
                >
                  <span className="text-lg">{provider === 'Google' ? '🔍' : '🍎'}</span>
                  {provider}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600 transform translate-y-4 opacity-0 animate-slide-up delay-1900">
            New to PayByMe?{" "}
            <button 
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200 hover:underline"
            >
              Create account
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Advanced Logo Animations */
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        @keyframes gradient-x-fast {
          0%, 100% { background-size: 400% 400%; background-position: left center; }
          25% { background-size: 400% 400%; background-position: center center; }
          50% { background-size: 400% 400%; background-position: right center; }
          75% { background-size: 400% 400%; background-position: center bottom; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        @keyframes letter-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes draw {
          0% { stroke-dasharray: 0 100; }
          100% { stroke-dasharray: 100 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes typewriter {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes scale-x {
          to { transform: scaleX(1); }
        }
        @keyframes slide-up {
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          to { opacity: 1; }
        }

        /* Animation Classes */
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-gradient-x-fast { animation: gradient-x-fast 4s ease infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-orbit { animation: orbit 8s linear infinite; }
        .animate-letter-float { animation: letter-float 2s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-draw { 
          stroke-dasharray: 100;
          animation: draw 2s ease-in-out infinite alternate;
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 6s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-typewriter { 
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 3s steps(20) 1s forwards;
        }
        .animate-scale-x { animation: scale-x 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }

        /* Utility Classes */
        .perspective-1000 { perspective: 1000px; }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .border-gradient-to-r {
          border-image: linear-gradient(to right, #4F46E5, #7C3AED, #EC4899) 1;
        }
        .border-gradient-to-l {
          border-image: linear-gradient(to left, #A78BFA, #60A5FA, #3B82F6) 1;
        }

        /* Delay Classes */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1400 { animation-delay: 1.4s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-1600 { animation-delay: 1.6s; }
        .delay-1700 { animation-delay: 1.7s; }
        .delay-1800 { animation-delay: 1.8s; }
        .delay-1900 { animation-delay: 1.9s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-3000 { animation-delay: 3s; }
      `}</style>
    </div>
  );
}