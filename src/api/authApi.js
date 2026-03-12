import { client } from './client';

export const authApi = {
  login: (credentials) => client.post('/auth/login', credentials),
  register: (credentials) => client.post('/auth/register', credentials),
  validateToken: () => client.get('/auth/verify', {}),
  getUser: (id) => client.get(`/auth/user/${id}`, {}),
};
