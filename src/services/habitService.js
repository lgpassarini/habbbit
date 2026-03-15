import { habitApi } from '@/api/habitApi';

export const habitService = {
  create: async (data) => {
    const response = await habitApi.create(data);
    return response;
  },
  getTodayHabits: async () => {
    const response = await habitApi.getTodayHabits();
    return response;
  },
};
