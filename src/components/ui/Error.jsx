import React from 'react';

const Error = ({ error, className }) => {
  return (
    <p className={`text-red-500 font-medium ${className || ''}`}>{error}</p>
  );
};

export default Error;
