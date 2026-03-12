import React from 'react';
import { UserContext } from '@/context/UserStorage';

const HomePage = () => {
  const { user } = React.useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user?.fullName}</h1>
    </div>
  );
};

export default HomePage;
