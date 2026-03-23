import React from 'react';
import { UserContext } from '@/context/UserStorage';
import DayHabitList from '@/features/habit/DayHabitList';
import UserHabits from '@/features/habit/UserHabits';

const HomePage = () => {
  const { user } = React.useContext(UserContext);

  return (
    <section className="mainContainer min-h-screen">
      <div className="dashboard py-24">
        <div className="totalHabits"></div>
        <div className="habits">
          <DayHabitList />
        </div>
        <div className="header"></div>
        <div className="profile"></div>
        <div className="score"></div>
        <div className="streak"></div>
        <div className="userHabits">
          <UserHabits />
        </div>
        <div className="progress"></div>
      </div>
    </section>
  );
};

export default HomePage;
