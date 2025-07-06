import { useState, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sign-up.css";
export function PayByMeSignup({ setLoading }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isMounted = useRef(true);

  // Prevent state updates if unmounted
  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // clear error on input change
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Confirm password match validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (setLoading) setLoading(true);
    setError("");
    // Exclude confirmPassword from payload
    const { confirmPassword, ...payload } = formData;
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(async res => {
        let data;
        try {
          data = await res.json();
        } catch (err) {
          throw new Error("Server returned invalid response. Please try again later.");
        }
        return data;
      })
      .then(data => {
        if (!isMounted.current) return;
        if (setLoading) setLoading(false);
        if (data.error || data.status === 'error') {
          setError(data.error || data.message || "Signup failed. Please try again.");
        } else {
          setError("");
          alert(data.message || "Signup successful!");
        }
      })
      .catch(err => {
        if (!isMounted.current) return;
        if (setLoading) setLoading(false);
        setError("Signup error: " + (err.message || "Unknown error"));
      });
  }, [formData, setLoading]);

  return (

    <div
      className="flex min-h-screen h-screen max-h-screen overflow-hidden flex-row justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-50 to-white px-6 py-12"
      style={{
        minHeight: '100vh',
        height: '100dvh',
        overflow: 'hidden',
        position: 'relative',
        width: '100vw',
        maxWidth: '100vw',
      }}
    >
      {/* 3D Effect Logo/Branding on the left for md+ screens */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 pr-8 relative overflow-visible min-h-[700px] h-full max-h-[900px]">
        {/* Animated background blobs for fullness */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {/* Top left blob */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 opacity-40 rounded-full blur-3xl animate-blob-move1"></div>
          {/* Bottom right blob */}
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-tr from-pink-200 via-indigo-100 to-purple-200 opacity-30 rounded-full blur-3xl animate-blob-move2"></div>
          {/* Center faint ring */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] border-8 border-purple-200/30 rounded-full blur-2xl animate-spin-slow"></div>
        </div>
        {/* Animated, glowing, floating orb background with extra effects */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] z-0 pointer-events-none">
          {/* Main orb, now extra large and with a subtle animated rainbow border */}
          <div className="w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-60 blur-[100px] animate-orbit-glow shadow-3xl border-8 border-transparent animate-orb-rainbow"></div>
          {/* Inner glass orb with rainbow border, sparkles, and animated content */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] rounded-full bg-white/10 border-4 border-gradient-to-r from-pink-400 via-indigo-400 to-purple-400 shadow-2xl animate-pulse-orb glass-orb-glow flex items-center justify-center">
            {/* Animated SVG with a lively, premium, financial theme */}
            <svg className="w-32 h-32 animate-spin-slow opacity-90" viewBox="0 0 128 128" fill="none">
              {/* Glowing coin */}
              <circle cx="64" cy="64" r="38" fill="url(#coinGradient)" stroke="#fff" strokeWidth="4" filter="url(#coinGlow)"/>
              <circle cx="64" cy="64" r="28" fill="#fff" opacity="0.7"/>
              {/* Card */}
              <rect x="44" y="38" width="40" height="28" rx="6" fill="url(#cardGradient)" stroke="#a5b4fc" strokeWidth="2" className="animate-float"/>
              {/* Sparkle */}
              <circle cx="90" cy="50" r="3" fill="#fff" opacity="0.8" className="animate-sparkle-burst"/>
              {/* Dollar sign */}
              <text x="64" y="56" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#a78bfa" opacity="0.9" fontFamily="Arial">$</text>
              {/* Arrows for movement */}
              <path d="M64 80 l0 16" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" className="animate-float"/>
              <path d="M64 96 l-6 -6" stroke="#f472b6" strokeWidth="3" strokeLinecap="round"/>
              <path d="M64 96 l6 -6" stroke="#f472b6" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <radialGradient id="coinGradient" cx="0" cy="0" r="1" gradientTransform="translate(64 64) scale(38)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fffbe7"/>
                  <stop offset="1" stopColor="#f472b6"/>
                </radialGradient>
                <linearGradient id="cardGradient" x1="44" y1="38" x2="84" y2="66" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a5b4fc"/>
                  <stop offset="1" stopColor="#f472b6"/>
                </linearGradient>
                <filter id="coinGlow" x="0" y="0" width="128" height="128" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="6" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>
            {/* Sparkle burst */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-white rounded-full opacity-80 animate-sparkle-burst"></div>
            </div>
          </div>
        </div>
        {/* Floating glassmorphic card with animated border and reflection */}
        <div className="absolute left-1/2 top-[68%] -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-[23rem] h-48 rounded-3xl bg-white/30 backdrop-blur-xl shadow-3xl border-4 border-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-float-card glass-card-glow relative overflow-hidden">
            {/* Reflection effect */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/60 to-transparent opacity-40 pointer-events-none animate-reflection"></div>
            {/* Subtle animated lines */}
            <div className="absolute bottom-2 left-4 w-2/3 h-1 bg-gradient-to-r from-pink-300 via-indigo-300 to-purple-300 opacity-40 animate-gradient-x"></div>
          </div>
        </div>
        {/* Animated Logo Text with 3D Effect and glow */}
        <div className="mb-12 transform transition-all duration-1000 hover:scale-110 group z-20 absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
          {/* logo container*/}
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
            {/* Text shadow for 3D effect, perfectly centered */}
            <h1 className="absolute top-2 left-2 text-6xl font-black text-indigo-300 opacity-30 -z-10 w-full text-center select-none pointer-events-none blur-sm">
              PayByMe
            </h1>
            {/* Animated underline with sparkles and a rainbow shimmer */}
            <div className="relative mx-auto mt-6 w-40 h-2">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-scale-x delay-500 shadow-lg animate-underline-shimmer"></div>
              <div className="absolute -top-1 left-0 w-3 h-3 bg-white rounded-full animate-sparkle delay-1000"></div>
              <div className="absolute -top-1 right-0 w-2 h-2 bg-white rounded-full animate-sparkle delay-1500"></div>
              <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full animate-sparkle delay-2000"></div>
            </div>
          </div>
          {/* Tagline with typewriter effect, floating, and a neon glow */}
          <div className="mt-6 text-xl text-purple-700 font-semibold animate-float drop-shadow-[0_2px_16px_rgba(168,85,247,0.4)] animate-typewriter-glow">
            <span className="inline-block animate-typewriter">💳 Secure • Fast • Reliable</span>
          </div>
        </div>
        {/* Inspiring Quotes to fill empty space */}
        <div className="absolute left-1/2 top-[78%] -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-20 flex flex-col items-center space-y-4 animate-fade-in pointer-events-none select-none">
          <div className="bg-white/60 rounded-xl shadow-lg px-6 py-4 backdrop-blur-md border border-purple-100/60 max-w-md w-full animate-float-card">
            <p className="text-lg text-gray-700 italic text-center font-medium">
              “The best way to predict the future is to create it.”
            </p>
            <p className="text-right text-sm text-purple-500 mt-2">– Peter Drucker</p>
          </div>
          <div className="bg-white/50 rounded-xl shadow px-5 py-3 backdrop-blur-md border border-indigo-100/50 max-w-md w-full animate-float-card delay-400">
            <p className="text-base text-gray-600 italic text-center">
              “Innovation distinguishes between a leader and a follower.”
            </p>
            <p className="text-right text-xs text-indigo-400 mt-1">– Steve Jobs</p>
          </div>
          <div className="bg-white/40 rounded-xl shadow px-4 py-2 backdrop-blur-md border border-pink-100/40 max-w-md w-full animate-float-card delay-700">
            <p className="text-sm text-gray-500 italic text-center">
              “Great things are done by a series of small things brought together.”
            </p>
            <p className="text-right text-xs text-pink-400 mt-1">– Vincent Van Gogh</p>
          </div>
        </div>
        {/* Animated floating sparkles, confetti, and geometric shapes */}
        <div className="pointer-events-none z-30">
          <div className="absolute left-1/3 top-1/4 w-8 h-8 bg-white/70 rounded-full blur-lg animate-sparkle-float1"></div>
          <div className="absolute left-2/3 top-2/3 w-6 h-6 bg-pink-200/80 rounded-full blur-md animate-sparkle-float2"></div>
          <div className="absolute left-1/4 top-2/3 w-5 h-5 bg-purple-200/90 rounded-full blur-md animate-sparkle-float3"></div>
          {/* Extra sparkles for fullness */}
          <div className="absolute left-1/4 top-1/3 w-3 h-3 bg-white/60 rounded-full blur-md animate-sparkle-float2"></div>
          <div className="absolute left-2/5 top-2/5 w-2 h-2 bg-pink-100/80 rounded-full blur-sm animate-sparkle-float3"></div>
          {/* Confetti burst (increased to 12) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`absolute w-2 h-2 rounded-full bg-gradient-to-br from-pink-400 via-indigo-400 to-purple-400 opacity-80 animate-confetti-burst`} style={{ transform: `rotate(${i * 30}deg) translateY(-90px)` }}></div>
            ))}
          </div>
          {/* Floating geometric shapes */}
          <div className="absolute left-1/3 top-2/3 w-8 h-8 opacity-30 animate-geo-float1">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="6" fill="url(#geo1)"/></svg>
          </div>
          <div className="absolute left-2/3 top-1/4 w-10 h-10 opacity-25 animate-geo-float2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,4 36,36 4,36" fill="url(#geo2)"/></svg>
          </div>
          <div className="absolute left-1/2 top-1/5 w-7 h-7 opacity-20 animate-geo-float3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="url(#geo3)" strokeWidth="3" fill="none"/></svg>
          </div>
          {/* SVG gradients for geometric shapes */}
          <svg width="0" height="0">
            <defs>
              <linearGradient id="geo1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a5b4fc"/>
                <stop offset="1" stopColor="#f472b6"/>
              </linearGradient>
              <linearGradient id="geo2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f472b6"/>
                <stop offset="1" stopColor="#c4b5fd"/>
              </linearGradient>
              <linearGradient id="geo3" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a5b4fc"/>
                <stop offset="1" stopColor="#c4b5fd"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Signup form on the right (or full width on mobile) */}
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
            <div className="mt-4 mb-2 p-3 bg-red-100 text-red-700 rounded animate-fade-in text-center font-medium">
              {error}
            </div>
          )}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 via-indigo-50/80 to-purple-50/80 px-8 py-10 shadow-2xl transition-shadow hover:shadow-2xl relative form-card-glow">
            {/* Animated dots pattern background */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none animate-dots-bg opacity-30"></div>
            {/* Avatar/illustration above form */}
            <div className="flex justify-center mb-6 z-10 relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-lg animate-avatar-pop">
                <svg className="w-10 h-10 text-white/90" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="14" r="7" fill="white" fillOpacity=".7"/><ellipse cx="20" cy="29" rx="11" ry="7" fill="white" fillOpacity=".5"/></svg>
              </div>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              



              {/* Email field */}
              <div className="animate-slide-up delay-400">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/80 shadow-inner px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
                  spellCheck={false}
                  inputMode="email"
                />
              </div>

              {/* Password field with validation */}
              <div className="animate-slide-up delay-600">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    minLength={6}
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                    title="Password must be at least 6 characters and include both letters and numbers."
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/80 shadow-inner px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pr-10 transition-all"
                  />
                </div>
              </div>

              {/* Confirm Password field with show/hide icon */}
              <div className="animate-slide-up delay-700">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    minLength={6}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/80 shadow-inner px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pr-10 transition-all"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none bg-transparent"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', justifyContent: 'center' }}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? (
                      // Eye Open (Material Design)
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M1 12C2.73 7.61 7.11 4.5 12 4.5c4.89 0 9.27 3.11 11 7.5-1.73 4.39-6.11 7.5-11 7.5-4.89 0-9.27-3.11-11-7.5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    ) : (
                      // Eye Off (Material Design)
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17.94 17.94C16.13 19.24 14.13 20 12 20c-4.89 0-9.27-3.11-11-7.5a12.35 12.35 0 0 1 5.06-5.94M9.53 9.53A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3 0 .47-.11.91-.29 1.3M1 1l22 22" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot password removed as requested */}

              <div className="animate-slide-up delay-600">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4
                             text-white shadow-sm transition-colors hover:bg-indigo-500
                             focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600 animate-fade-in delay-800">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Styles moved to App.css or sign-up.css */}
    </div>
  );
}

// import { useState } from "react";

// export function PayByMeLogin() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate login process
//     setTimeout(() => setIsLoading(false), 2000);
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-white px-6 py-12 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md text-center">
//         {/* Animated Logo Text with 3D Effect */}
//         <div className="mb-8 transform transition-all duration-1000 hover:scale-110 group">
//             {/* logo container*/}
          
//           <div className="relative flex flex-col items-center justify-center">
//             <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x-fast relative z-10 text-center">
//               <span className="inline-block animate-letter-float delay-100">P</span>
//               <span className="inline-block animate-letter-float delay-200">a</span>
//               <span className="inline-block animate-letter-float delay-300">y</span>
//               <span className="inline-block animate-letter-float delay-400">B</span>
//               <span className="inline-block animate-letter-float delay-500">y</span>
//               <span className="inline-block animate-letter-float delay-600">M</span>
//               <span className="inline-block animate-letter-float delay-700">e</span>
//             </h1>
//             {/* Text shadow for 3D effect, perfectly centered */}
//             <h1 className="absolute top-1 left-1 text-5xl font-black text-gray-400 opacity-30 -z-10 w-full text-center select-none pointer-events-none">
//               PayByMe
//             </h1>
//             {/* Animated underline with sparkles */}
//             <div className="relative mx-auto mt-4 w-32 h-1">
//               <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-scale-x delay-500"></div>
//               <div className="absolute -top-1 left-0 w-2 h-2 bg-white rounded-full animate-sparkle delay-1000"></div>
//               <div className="absolute -top-1 right-0 w-1.5 h-1.5 bg-white rounded-full animate-sparkle delay-1500"></div>
//               <div className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full animate-sparkle delay-2000"></div>
//             </div>
//           </div>
//           {/* Tagline with typewriter effect */}
//           <div className="mt-4 text-sm text-gray-600 font-medium">
//             <span className="inline-block animate-typewriter">💳 Secure • Fast • Reliable</span>
//           </div>
//         </div>

//         <h2 className="text-3xl font-bold text-gray-900 mb-2 transform translate-y-4 opacity-0 animate-slide-up delay-300">
//           Welcome Back
//         </h2>
//         <p className="text-sm text-gray-600 transform translate-y-4 opacity-0 animate-slide-up delay-500">
//           Secure payments at your fingertips
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md transform translate-y-8 opacity-0 animate-slide-up delay-700">
//         <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm px-8 py-8 shadow-lg border border-white/20 transition-all duration-500 hover:shadow-2xl hover:bg-white/90">
//           {/* Card glow effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
//           <div className="relative space-y-6">
//             {[
//               { field: "email", type: "email", icon: "📧", placeholder: "Enter your email" },
//               { field: "password", type: "password", icon: "🔒", placeholder: "Enter your password" }
//             ].map(({ field, type, icon, placeholder }, i) => (
//               <div key={field} className={`transform translate-y-4 opacity-0 animate-slide-up delay-${800 + i * 200}`}>
//                 <label
//                   htmlFor={field}
//                   className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
//                     focusedField === field ? 'text-indigo-600' : 'text-gray-700'
//                   }`}
//                 >
//                   <span className="text-lg">{icon}</span>
//                   {field.charAt(0).toUpperCase() + field.slice(1)}
//                 </label>
//                 <div className="relative mt-1">
//                   <input
//                     id={field}
//                     name={field}
//                     type={type}
//                     value={formData[field]}
//                     onChange={(e) => handleInputChange(field, e.target.value)}
//                     onFocus={() => setFocusedField(field)}
//                     onBlur={() => setFocusedField(null)}
//                     className={`block w-full rounded-xl border px-4 py-3 shadow-sm transition-all duration-300 sm:text-sm
//                                ${focusedField === field 
//                                  ? 'border-indigo-500 ring-2 ring-indigo-500/20 scale-[1.02] bg-white' 
//                                  : 'border-gray-300 hover:border-gray-400 bg-gray-50/50'
//                                }
//                                focus:outline-none placeholder-gray-400`}
//                     placeholder={placeholder}
//                   />
//                   <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${
//                     focusedField === field ? 'w-full' : 'w-0'
//                   }`}></div>
//                 </div>
//               </div>
//             ))}

//             <div className="flex items-center justify-between transform translate-y-4 opacity-0 animate-slide-up delay-1200">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>
//               <div className="text-sm">
//                 <button 
//                   type="button"
//                   className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200 hover:underline"
//                 >
//                   Forgot password?
//                 </button>
//               </div>
//             </div>

//             <div className="transform translate-y-4 opacity-0 animate-slide-up delay-1400">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={isLoading}
//                 className={`group relative flex w-full justify-center rounded-xl px-4 py-3 text-white font-medium
//                            shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl
//                            ${isLoading 
//                              ? 'bg-gray-400 cursor-not-allowed' 
//                              : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
//                            }
//                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
//               >
//                 <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 {isLoading ? (
//                   <div className="flex items-center gap-3">
//                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                     Signing in...
//                   </div>
//                 ) : (
//                   <span className="flex items-center gap-2">
//                     Sign in
//                     <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>

//           <div className="mt-6 transform translate-y-4 opacity-0 animate-slide-up delay-1600">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="bg-white px-2 text-gray-500">Or continue with</span>
//               </div>
//             </div>
            
//             <div className="mt-4 grid grid-cols-2 gap-3">
//               {['Google', 'Apple'].map((provider, i) => (
//                 <button
//                   key={provider}
//                   type="button"
//                   className={`group flex justify-center items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:scale-105 transform translate-y-4 opacity-0 animate-slide-up delay-${1700 + i * 100}`}
//                 >
//                   <span className="text-lg">{provider === 'Google' ? '🔍' : '🍎'}</span>
//                   {provider}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <p className="mt-6 text-center text-sm text-gray-600 transform translate-y-4 opacity-0 animate-slide-up delay-1900">
//             New to PayByMe?{" "}
//             <button 
//               type="button"
//               className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200 hover:underline"
//             >
//               Create account
//             </button>
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Advanced Logo Animations */
//         @keyframes gradient-x {
//           0%, 100% { background-size: 200% 200%; background-position: left center; }
//           50% { background-size: 200% 200%; background-position: right center; }
//         }
//         @keyframes gradient-x-fast {
//           0%, 100% { background-size: 400% 400%; background-position: left center; }
//           25% { background-size: 400% 400%; background-position: center center; }
//           50% { background-size: 400% 400%; background-position: right center; }
//           75% { background-size: 400% 400%; background-position: center bottom; }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(5deg); }
//         }
//         @keyframes orbit {
//           0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
//           100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
//         }
//         @keyframes letter-float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         @keyframes sparkle {
//           0%, 100% { opacity: 0; transform: scale(0); }
//           50% { opacity: 1; transform: scale(1); }
//         }
//         @keyframes draw {
//           0% { stroke-dasharray: 0 100; }
//           100% { stroke-dasharray: 100 0; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes spin-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.6; transform: scale(1.1); }
//         }
//         @keyframes pulse-gentle {
//           0%, 100% { opacity: 0.8; }
//           50% { opacity: 1; }
//         }
//         @keyframes ping-slow {
//           0% { transform: scale(1); opacity: 1; }
//           75%, 100% { transform: scale(2); opacity: 0; }
//         }
//         @keyframes typewriter {
//           0% { width: 0; }
//           100% { width: 100%; }
//         }
//         @keyframes scale-x {
//           to { transform: scaleX(1); }
//         }
//         @keyframes slide-up {
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes fade-in {
//           to { opacity: 1; }
//         }

//         /* Animation Classes */
//         .animate-gradient-x { animation: gradient-x 3s ease infinite; }
//         .animate-gradient-x-fast { animation: gradient-x-fast 4s ease infinite; }
//         .animate-float { animation: float 3s ease-in-out infinite; }
//         .animate-orbit { animation: orbit 8s linear infinite; }
//         .animate-letter-float { animation: letter-float 2s ease-in-out infinite; }
//         .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
//         .animate-draw { 
//           stroke-dasharray: 100;
//           animation: draw 2s ease-in-out infinite alternate;
//         }
//         .animate-spin-slow { animation: spin-slow 8s linear infinite; }
//         .animate-spin-reverse { animation: spin-reverse 6s linear infinite; }
//         .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
//         .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
//         .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
//         .animate-typewriter { 
//           overflow: hidden;
//           white-space: nowrap;
//           animation: typewriter 3s steps(20) 1s forwards;
//         }
//         .animate-scale-x { animation: scale-x 0.8s ease-out forwards; }
//         .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
//         .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }

//         /* Utility Classes */
//         .perspective-1000 { perspective: 1000px; }
//         .bg-gradient-radial {
//           background: radial-gradient(circle, var(--tw-gradient-stops));
//         }
//         .border-gradient-to-r {
//           border-image: linear-gradient(to right, #4F46E5, #7C3AED, #EC4899) 1;
//         }
//         .border-gradient-to-l {
//           border-image: linear-gradient(to left, #A78BFA, #60A5FA, #3B82F6) 1;
//         }

//         /* Delay Classes */
//         .delay-100 { animation-delay: 0.1s; }
//         .delay-200 { animation-delay: 0.2s; }
//         .delay-300 { animation-delay: 0.3s; }
//         .delay-400 { animation-delay: 0.4s; }
//         .delay-500 { animation-delay: 0.5s; }
//         .delay-600 { animation-delay: 0.6s; }
//         .delay-700 { animation-delay: 0.7s; }
//         .delay-800 { animation-delay: 0.8s; }
//         .delay-1000 { animation-delay: 1s; }
//         .delay-1200 { animation-delay: 1.2s; }
//         .delay-1400 { animation-delay: 1.4s; }
//         .delay-1500 { animation-delay: 1.5s; }
//         .delay-1600 { animation-delay: 1.6s; }
//         .delay-1700 { animation-delay: 1.7s; }
//         .delay-1800 { animation-delay: 1.8s; }
//         .delay-1900 { animation-delay: 1.9s; }
//         .delay-2000 { animation-delay: 2s; }
//         .delay-3000 { animation-delay: 3s; }
//       `}</style>
//     </div>
//   );
// }