import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserStorage } from './context/UserStorage';
import { useAuth } from '@/hooks/auth/useAuth';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import GuestRoute from './components/GuestRoute';

function AppInit() {
  const { autoLogin } = useAuth();
  React.useEffect(() => {
    autoLogin();
  }, []);
  return null;
}

function App() {
  return (
    <UserStorage>
      <AppInit />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <RegisterPage />
            </GuestRoute>
          }
        />
      </Routes>
    </UserStorage>
  );
}

export default App;
