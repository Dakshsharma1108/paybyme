import React from "react";

export function InputField({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  autoComplete,
  minLength,
  pattern,
  title,
  spellCheck,
  inputMode,
  showPasswordToggle,
  showPassword,
  onTogglePassword,
  ...rest
}) {
  return (
    <div className="animate-slide-up delay-400">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          minLength={minLength}
          pattern={pattern}
          title={title}
          spellCheck={spellCheck}
          inputMode={inputMode}
          className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/80 shadow-inner px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
          {...rest}
        />
        {showPasswordToggle && (
          <button
            type="button"
            tabIndex={-1}
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none bg-transparent"
            style={{ background: 'none', border: 'none', cursor: 'pointer', justifyContent: 'center' }}
            onClick={onTogglePassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              // Eye Open
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M1 12C2.73 7.61 7.11 4.5 12 4.5c4.89 0 9.27 3.11 11 7.5-1.73 4.39-6.11 7.5-11 7.5-4.89 0-9.27-3.11-11-7.5z" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            ) : (
              // Eye Off
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17.94 17.94C16.13 19.24 14.13 20 12 20c-4.89 0-9.27-3.11-11-7.5a12.35 12.35 0 0 1 5.06-5.94M9.53 9.53A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3 0 .47-.11.91-.29 1.3M1 1l22 22" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
