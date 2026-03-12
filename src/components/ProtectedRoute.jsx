import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '@/context/UserStorage';
import Loading from './ui/Loading';

const ProtectedRoute = ({ children }) => {
  const { loggedIn, authLoading } = React.useContext(UserContext);

  if (authLoading) return <Loading />;

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
