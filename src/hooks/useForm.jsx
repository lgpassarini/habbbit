import React from 'react';

const useForm = (type, required = false) => {
  const types = {
    email: {
      regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: 'Preencha um email válido',
    },
  };

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (required && value.length === 0) {
      setError('Este campo é obrigatório');
      return false;
    }

    switch (type) {
      case 'email':
        if (!types.email.regex.test(value)) {
          setError(types.email.message);
          return false;
        }
        break;
      case 'password':
        if (value.length < 4) {
          setError('A senha deve conter no mínimo 4 caracteres');
          return false;
        }
        break;
      default:
        break;
    }

    setError(null);
    return true;
  }
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
    setError,
    error,
  };
};

export default useForm;
