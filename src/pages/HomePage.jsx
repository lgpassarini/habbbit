import React from 'react';
import { UserContext } from '@/context/UserStorage';
import DayHabitList from '@/features/Habit/DayHabitList';

const HomePage = () => {
  const { user } = React.useContext(UserContext);

  return (
    <section className="mainContainer min-h-screen">
      <div className="dashboard py-24">
        <div className="totalTasks"></div>
        <div className="tasks">
          <DayHabitList />
        </div>
        <div className="header"></div>
        <div className="profile"></div>
        <div className="score"></div>
        <div className="streak"></div>
        <div className="habits"></div>
        <div className="progress"></div>
      </div>
    </section>
  );
};

export default HomePage;
