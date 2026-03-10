import React from 'react';

const usePasswordValidation = ({ password, confirmPassword }) => {
  const [passwordError, setPasswordError] = React.useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(null);

  React.useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setPasswordError('As senhas não correspondem');
      setConfirmPasswordError('As senhas não correspondem');
    } else {
      setPasswordError(null);
      setConfirmPasswordError(null);
    }
  }, [password, confirmPassword]);

  return {
    passwordError,
    confirmPasswordError,
  };
};

export default usePasswordValidation;
