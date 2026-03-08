'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, type, icon, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor={inputId} className="text-sm font-bold text-ink dark:text-white">
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light">
              {icon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            type={inputType}
            className={`w-full px-4 py-3 rounded-xl border-2 border-ink bg-paper dark:bg-paper-dark focus:border-primary focus:ring-0 outline-none transition-all shadow-sketch-sm focus:shadow-sketch dark:text-white placeholder:text-ink-light/50 ${
              icon ? 'pl-11' : ''
            } ${isPassword ? 'pr-11' : ''} ${
              error ? 'border-desert-red focus:border-desert-red' : ''
            } ${className || ''}`}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-light hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          )}
        </div>
        {error && <p className="text-sm text-desert-red font-bold">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
