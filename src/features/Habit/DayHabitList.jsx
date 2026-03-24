import React from 'react';
import useHabit from '@/hooks/habit/useHabit';
import { FaCirclePlus } from 'react-icons/fa6';
import Loading from '@/components/ui/Loading';
const DayHabitList = () => {
  const { getTodayHabits, check, uncheck, error, todayHabits, loading } =
    useHabit();

  React.useEffect(() => {
    getTodayHabits();
  }, []);

  const handleHabitCheck = async ({ target }) => {
    const isChecked = target.checked;
    const span = target.closest('label').querySelector('span');

    if (isChecked) {
      const success = await check(target.dataset.habitId);
      if (success) {
        span.classList.add('line-through', 'text-[var(--grey-c2)]');
        target.checked = true;
      }
    } else {
      const success = await uncheck(target.dataset.habitId);

      if (success) {
        target.checked = false;
        span.classList.remove('line-through', 'text-[var(--grey-c2)]');
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!todayHabits.length > 0) {
    return (
      <div className="h-full bg-[var(--grey-b1)] rounded-xl flex flex-col items-center justify-center gap-4">
        <FaCirclePlus className="text-4xl fill-[var(--blue-button)] cursor-pointer hover:opacity-80" />
        <span className="text-[var(--grey-c3)]">Nenhum Hábito Hoje</span>
      </div>
    );
  }

  return (
    <>
      <div className="h-full flex flex-col">
        <h3 className="text-lg font-semibold mb-4">A Fazer</h3>
        <ul className="flex-1 overflow-y-auto pr-4">
          {todayHabits.map((habit) => (
            <li
              key={habit.id}
              className="w-full text-lg border-b-2 border-[var(--blue-border)] py-4 first:pt-0 last:border-b-0"
            >
              <label className="w-full flex items-center gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  onChange={handleHabitCheck}
                  data-habit-id={habit.id}
                  checked={habit.checked}
                  className="custom-checkbox"
                />
                <span
                  className={
                    habit.checked ? 'line-through text-[var(--grey-c2)]' : ''
                  }
                >
                  {habit.title}
                </span>
                {habit.emoji}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DayHabitList;
