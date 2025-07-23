import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const Link = ({ to, label, children }) => {
    return (
        <div>
            <p className="mt-6 text-center text-sm text-gray-600 animate-fade-in delay-800">
                {children || "Already have an account?"}{' '}
                <RouterLink to={to} className="font-medium text-indigo-600 hover:text-indigo-500">
                    {label}
                </RouterLink>
            </p>
        </div>
    )
}
