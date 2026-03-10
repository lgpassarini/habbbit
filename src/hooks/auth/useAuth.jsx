import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import { useAuthContext } from '../../context/AuthContext';

export function useAuth() {
  // const { setUser } = useAuthContext();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const handleAuthSuccess = (data) => {
    // setUser(data.user);
    localStorage.setItem('token', data.token);
    navigate('/');
  };

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.login(credentials);
      handleAuthSuccess(data.user);
    } catch (err) {
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
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    // setUser(null);
    navigate('/login');
  };

  return { login, register, logout, loading, error };
}
