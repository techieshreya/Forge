import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', fullWidth, children, ...props }, ref) => {
    const baseStyles = "font-bold py-3 px-6 rounded-xl transition-all duration-150 ease-out flex items-center justify-center gap-2 border-2";
    
    const variants = {
      primary: "bg-primary text-white border-ink dark:border-ink shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1 active:shadow-none",
      secondary: "bg-paper text-ink border-ink dark:bg-paper-dark dark:text-white shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1 active:shadow-none",
      outline: "bg-transparent text-ink dark:text-white border-ink shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1 active:shadow-none",
      ghost: "bg-transparent hover:bg-ink/5 text-ink dark:text-white shadow-none border-transparent hover:border-ink/20",
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
