import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import { UserContext } from '@/context/UserStorage';

export function useAuth() {
  const { setUser, setLoggedIn, setAuthLoading } =
    React.useContext(UserContext);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const handleAuthSuccess = (data) => {
    setUser(data);
    setLoggedIn(true);
    navigate('/');
  };

  const removeUserData = () => {
    authService.logout();
    setUser(null);
    setLoggedIn(false);
  };

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const { user } = await authService.login(credentials);
      handleAuthSuccess(user);
    } catch (err) {
      setError('Login failed.');
      removeUserData();
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const { user } = await authService.register(credentials);
      handleAuthSuccess(user);
    } catch (err) {
      removeUserData();
      setError('Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    removeUserData();
    navigate('/login');
  };

  const autoLogin = async () => {
    try {
      const { user } = await authService.autoLogin();
      if (user) {
        handleAuthSuccess(user);
      }
    } catch (err) {
      removeUserData();
    } finally {
      setAuthLoading(false);
    }
  };

  return { login, register, logout, autoLogin, loading, error };
}
