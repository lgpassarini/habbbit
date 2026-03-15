import React from 'react';
import { habitService } from '@/services/habitService';

const useHabit = () => {
  const [todayHabits, setTodayHabits] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const create = async ({ title, emoji, daysOfWeek }) => {
    setLoading(true);
    setError(null);
    try {
      await habitService.create({ title, emoji, daysOfWeek });
      await getTodayHabits();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getTodayHabits = async () => {
    setLoading(true);
    try {
      const { habits } = await habitService.getTodayHabits();
      console.log(habits);
      setTodayHabits(habits);
    } catch (error) {
      setTodayHabits([]);
    } finally {
      setLoading(false);
    }
  };
  return { create, getTodayHabits, todayHabits, loading, error };
};

export default useHabit;
