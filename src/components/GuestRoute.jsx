import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '@/context/UserStorage';

const GuestRoute = ({ children }) => {
  const { loggedIn } = React.useContext(UserContext);

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default GuestRoute;
