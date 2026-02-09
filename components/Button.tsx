import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'green';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  withArrow = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-500 rounded-full focus:outline-none disabled:opacity-50 tracking-wide";
  
  const variants = {
    primary: "bg-spain-red text-white hover:bg-spain-charcoal shadow-glow-red hover:shadow-premium active:scale-95",
    secondary: "bg-spain-yellow text-spain-charcoal hover:shadow-glow-yellow hover:-translate-y-1 active:scale-95",
    // Updated Green Variant
    green: "bg-spain-green text-white hover:bg-spain-greenDark shadow-glow-green hover:shadow-premium active:scale-95",
    outline: "bg-transparent border-2 border-spain-charcoal text-spain-charcoal hover:bg-spain-charcoal hover:text-white transition-all active:scale-95",
    glass: "glass-dark text-white hover:bg-white hover:text-spain-charcoal active:scale-95"
  };

  const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {withArrow && <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
      </span>
    </button>
  );
};

export default Button;