import React from 'react';
import { habitService } from '@/services/habitService';

const useHabit = () => {
  const [todayHabits, setTodayHabits] = React.useState([]);
  const [userHabits, setUserHabits] = React.useState([]);
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
      setTodayHabits(habits);
    } catch (error) {
      setTodayHabits([]);
    } finally {
      setLoading(false);
    }
  };

  const getUserHabits = async () => {
    setLoading(true);
    try {
      const habits = await habitService.getUserHabits();
      setUserHabits(habits);
    } catch (error) {
      setUserHabits([]);
    } finally {
      setLoading(false);
    }
  };

  const check = async (habitId) => {
    try {
      await habitService.check(habitId);
      return true;
    } catch (error) {
      return false;
    }
  };

  const uncheck = async (habitId) => {
    try {
      await habitService.uncheck(habitId);
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    create,
    getTodayHabits,
    getUserHabits,
    check,
    uncheck,
    todayHabits,
    userHabits,
    loading,
    error,
  };
};

export default useHabit;
