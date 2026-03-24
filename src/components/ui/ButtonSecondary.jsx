import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`py-[11px] px-4 bg-white text-[var(--blue-button)] border border-[var(--blue-button)] rounded-xl hover:opacity-80 font-semibold transition ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
