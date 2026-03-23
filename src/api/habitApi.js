import { client } from './client';

export const habitApi = {
  create: async (data) => client.post('/habits', data),
  getTodayHabits: async () => client.get(`/habits/today`),
  getUserHabits: async () => client.get('/habits'),
  check: async (habitId) => client.post(`/habits/${habitId}/check`),
  uncheck: async (habitId) => client.delete(`/habits/${habitId}/check`),
};
