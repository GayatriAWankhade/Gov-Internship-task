// import React from 'react';

// const Input = ({ 
//   label, 
//   type = 'text', 
//   value, 
//   onChange, 
//   placeholder, 
//   error, 
//   required = false,
//   className = '' 
// }) => {
//   return (
//     <div className={`space-y-2 ${className}`}>
//       <label className="block text-sm font-medium text-gray-700">
//         {label} {required && '*'}
//       </label>
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
//           error ? 'border-red-500' : 'border-gray-300'
//         }`}
//         placeholder={placeholder}
//       />
//       {error && <p className="text-red-500 text-sm">{error}</p>}
//     </div>
//   );
// };

// export default Input;

import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle, Check } from 'lucide-react';

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  className = '',
  icon: Icon,
  hint,
  success
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const hasValue = value && value.length > 0;
  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  return (
    <div className={`relative group ${className}`}>
      {/* Label */}
      <label className={`
        block text-sm font-semibold mb-3 transition-all duration-200
        ${error ? 'text-red-600' : success ? 'text-green-600' : isFocused ? 'text-blue-600' : 'text-gray-700'}
      `}>
        {label}
        {required && (
          <span className="text-red-500 ml-1 text-base">*</span>
        )}
      </label>
      
      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {Icon && (
          <div className={`
            absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200
            ${error ? 'text-red-400' : success ? 'text-green-400' : isFocused ? 'text-blue-500' : 'text-gray-400'}
          `}>
            <Icon size={20} />
          </div>
        )}
        
        {/* Input Field */}
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full h-14 px-4 ${Icon ? 'pl-12' : 'pl-4'} ${type === 'password' ? 'pr-12' : 'pr-4'}
            bg-white border-2 rounded-xl text-gray-900 placeholder-gray-400 text-base
            transition-all duration-300 ease-out
            focus:outline-none focus:ring-0
            hover:border-gray-300 hover:shadow-sm
            ${error 
              ? 'border-red-300 focus:border-red-500 bg-red-50 focus:bg-white' 
              : success
                ? 'border-green-300 focus:border-green-500 bg-green-50 focus:bg-white'
                : isFocused 
                  ? 'border-blue-500 bg-white shadow-lg shadow-blue-100' 
                  : hasValue
                    ? 'border-gray-300 bg-gray-50'
                    : 'border-gray-200 bg-white'
             }
            disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
          `}
        />
        
        {/* Password Toggle */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:text-gray-600"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
        
        {/* Success Icon */}
        {success && !error && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500">
            <Check size={20} />
          </div>
        )}
        
        {/* Error Icon */}
        {error && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500">
            <AlertCircle size={20} />
          </div>
        )}
        
        {/* Focus Ring */}
        <div className={`
          absolute inset-0 rounded-xl pointer-events-none transition-all duration-300
          ${isFocused && !error ? 'ring-2 ring-blue-500 ring-opacity-20' : ''}
        `} />
      </div>
      
      {/* Helper Text / Error Message */}
      {(error || hint) && (
        <div className="mt-2 flex items-start space-x-2">
          <div className={`flex-shrink-0 w-1 h-1 rounded-full mt-2 ${error ? 'bg-red-500' : 'bg-blue-500'}`} />
          <p className={`text-sm font-medium ${error ? 'text-red-600' : 'text-gray-600'}`}>
            {error || hint}
          </p>
        </div>
      )}
      
      {/* Success Message */}
      {success && !error && (
        <div className="mt-2 flex items-start space-x-2">
          <div className="flex-shrink-0 w-1 h-1 bg-green-500 rounded-full mt-2" />
          <p className="text-sm font-medium text-green-600">{success}</p>
        </div>
      )}
    </div>
  );
};

export default Input;