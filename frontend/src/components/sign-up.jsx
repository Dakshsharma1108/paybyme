import React, { useState, useCallback, useRef, useEffect, Children } from "react";
import { Link } from "./Link";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Form } from "./form";
import { OuterForm } from "./OuterForm";
import { Effect } from "./effect";
import "../css/signup.css";

export function PayByMeSignUp({ setLoading }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    fetch("http://localhost:3000/api/signup", {
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
      <Effect />

      {/* Signup form on the right (or full width on mobile) */}
      <OuterForm error={error} setError={setError}>
        <Form>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email field */}
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              spellCheck={false}
              inputMode="email"
              className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/80 shadow-inner px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
            />

            {/* Password field with validation */}
            <InputField
              label="Password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="password"
              required
              minLength={6}
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
              title="Password must be at least 6 characters and include both letters and numbers."
              value={formData.password}
              onChange={handleChange}
              showPasswordToggle={true}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword((prev) => !prev)}
              className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/80 shadow-inner px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
            />

            {/* Confirm Password field with show/hide icon */}
            <InputField
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={6}
              value={formData.confirmPassword}
              onChange={handleChange}
              showPasswordToggle={true}
              showPassword={showConfirmPassword}
              onTogglePassword={() => setShowConfirmPassword((prev) => !prev)}
              className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/80 shadow-inner px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all"
            />

            <Button type="submit" label="Sign Up" />
          </form>
          <Link to="/login" label="Login" />
        </Form>
      </OuterForm>
      
      {/* Styles are in signup.css */}
    </div>
  );
}



