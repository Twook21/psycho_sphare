import React, { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  type = 'text',
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  disabled = false,
  error,
  className = '',
  fullWidth = true,
  ...props
}, ref) => {
  const inputId = id || name;
  
  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-4 py-2 rounded-lg 
          border ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500'} 
          bg-white dark:bg-gray-800 
          text-gray-800 dark:text-gray-100 
          placeholder-gray-400 dark:placeholder-gray-500
          ${disabled ? 'opacity-60 cursor-not-allowed bg-gray-100 dark:bg-gray-700' : ''}
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-opacity-50
        `}
        required={required}
        {...props}
      />
      
      {error && (
        <div className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</div>
      )}
    </div>
  );
});

// Add display name for dev tools
Input.displayName = 'Input';

export default Input;