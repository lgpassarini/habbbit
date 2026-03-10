import React from 'react';
import Error from './Error';

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  className,
}) => {
  return (
    <>
      <div className={`mt-7 flex flex-col gap-2 ${className || ''}`}>
        <label className="text-base" htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          className={`py-3 px-4 rounded-xl bg-transparent border border-[var(--grey-c1)] focus:border-[var(--grey-c2)] border-2 outline-none transition ${error && 'inputError'}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {error && <Error error={error} />}
      </div>
    </>
  );
};

export default Input;
