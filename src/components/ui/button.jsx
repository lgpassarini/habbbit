import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className="py-3 px-4 bg-[var(--blue-button)] text-white rounded-xl hover:opacity-80 font-semibold transition"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
