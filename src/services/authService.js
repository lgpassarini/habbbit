import { authApi } from '../api/authApi';

export const authService = {
  login: async (credentials) => {
    const data = await authApi.login(credentials);
    localStorage.setItem('token', data.token);
    return data;
  },

  register: async (credentials) => {
    const data = await authApi.register(credentials);
    localStorage.setItem('token', data.token);
    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  autoLogin: async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const data = await authApi.validateToken();
    return data;
  },
};
