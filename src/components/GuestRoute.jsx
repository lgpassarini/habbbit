import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '@/context/UserStorage';
import Loading from './ui/Loading';

const GuestRoute = ({ children }) => {
  const { loggedIn, authLoading } = React.useContext(UserContext);

  if (authLoading) return <Loading />;

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default GuestRoute;
