import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <section className="mainContainer min-h-screen flex px-12 align-items-center justify-center flex-col">
      <div className="text-center">
        <h3 className="title">Crie sua conta</h3>
        <p className="text-[var(--grey-c3)]">
          Comece a acompanhar seus hábitos e seu progresso
        </p>
      </div>
      <div className="bg-white py-12 px-8 border-2 border-[var(--grey-b2)] rounded-xl mt-12 max-w-3xl w-full mx-auto">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <Input
              label="Nome Completo"
              type="text"
              name="name"
              placeholder="Ex. Seu Nome"
              className="flex-1 !mt-0 "
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Ex. seu.email@email.com"
              className="flex-1 md:!mt-0"
            />
            <Input
              label="Senha"
              type="password"
              name="password"
              placeholder="Ex. Sua Senha"
              className="flex-1"
            />
            <Input
              label="Confirmação de Senha"
              type="password"
              name="confirmPassword"
              placeholder="Ex. Confirme sua senha"
              className="flex-1"
            />
          </div>
          <hr className="mt-8" />
          <Button className="w-full mt-8">Criar Conta</Button>
        </form>
        <p className="text-center mt-8 text-[var(--grey-c3)]">
          Já tem uma conta?{' '}
          <Link to="/login" className="link">
            Acesse Aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
