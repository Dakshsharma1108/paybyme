import React from 'react'

export const Button = ({ label, onClick }) => {
  return (
    <div className="animate-slide-up delay-600">
                <button
                  type="submit"
                  onClick={onClick}
                  className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4
                             text-white shadow-sm transition-colors hover:bg-indigo-500
                             focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {label}
                </button>
              </div>
  )
}
