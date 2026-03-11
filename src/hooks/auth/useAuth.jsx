import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import { UserContext } from '@/context/UserStorage';

export function useAuth() {
  const { setUser, setLoggedIn } = React.useContext(UserContext);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const handleAuthSuccess = (data) => {
    console.log(data);
    setUser(data);
    setLoggedIn(true);
    navigate('/');
  };

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.login(credentials);
      handleAuthSuccess(data.user);
    } catch (err) {
      authService.logout();
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.register(credentials);
      handleAuthSuccess(data.user);
    } catch (err) {
      authService.logout();
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setLoggedIn(false);
    navigate('/login');
  };

  const autoLogin = async () => {
    try {
      const data = await authService.autoLogin();
      if (data) {
        handleAuthSuccess(data.user);
      }
    } catch (err) {
      authService.logout();
      setUser(null);
      setLoggedIn(false);
    }
  };

  return { login, register, logout, autoLogin, loading, error };
}
