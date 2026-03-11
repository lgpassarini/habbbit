import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '@/context/UserStorage';

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = React.useContext(UserContext);

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
