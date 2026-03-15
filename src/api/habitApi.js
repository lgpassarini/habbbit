import { client } from './client';

export const habitApi = {
  create: async (data) => client.post('/habits', data),
  getTodayHabits: async () => client.get(`/habits/today`),
};
