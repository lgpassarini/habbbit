import LoginForm from '@/features/auth/LoginForm';
import loginImage from '@/assets/images/login.jpg';
import React from 'react';

const LoginPage = () => {
  return (
    <section className="mainContainer min-h-screen flex py-32 px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
        <div className="flex flex-col justify-center">
          <LoginForm />
        </div>
        <div className="hidden lg:block relative m-4 rounded-2xl overflow-hidden">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
