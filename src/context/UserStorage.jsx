import React from 'react';
import { useAuth } from '@/hooks/auth/useAuth';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [authLoading, setAuthLoading] = React.useState(true);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        authLoading,
        setAuthLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
