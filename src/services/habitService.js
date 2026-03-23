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
  getUserHabits: async () => {
    const response = await habitApi.getUserHabits();
    return response;
  },
  check: async (habitId) => {
    const response = await habitApi.check(habitId);
    return response;
  },
  uncheck: async (habitId) => {
    const response = await habitApi.uncheck(habitId);
    return response;
  },
};
