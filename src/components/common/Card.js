import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`
      bg-white rounded-xl shadow-sm border border-gray-200 p-6 
      ${hover ? 'hover:shadow-lg hover:border-gray-300 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;