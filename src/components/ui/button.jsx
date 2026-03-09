import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`py-3 px-4 bg-[var(--blue-button)] text-white rounded-xl hover:opacity-80 font-semibold transition ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
