import RegisterForm from '@/features/auth/RegisterForm';
import React from 'react';

const RegisterPage = () => {
  return (
    <section className="mainContainer min-h-screen flex px-6 md:px-12 align-items-center justify-center flex-col">
      <div className="text-center  mb-6 md:mb-12">
        <h3 className="title">Crie sua conta</h3>
        <p className="text-[var(--grey-c3)]">
          Comece a acompanhar seus hábitos e seu progresso
        </p>
      </div>
      <RegisterForm />
    </section>
  );
};

export default RegisterPage;
