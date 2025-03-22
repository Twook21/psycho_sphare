import React from 'react';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  className = '',
  ...props 
}) => {
  // Base classes applied to all buttons
  const baseClasses = "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Variant-specific classes
  const variantClasses = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/30",
    text: "text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:text-indigo-300 dark:hover:bg-indigo-900/30",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600"
  };
  
  // Size-specific classes
  const sizeClasses = {
    small: "px-3 py-1.5 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base"
  };
  
  // Additional conditional classes
  const fullWidthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  // Combine all classes
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidthClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </div>
      ) : children}
    </button>
  );
};

export default Button;