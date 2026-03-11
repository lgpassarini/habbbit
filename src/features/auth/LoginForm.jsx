import React from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import useForm from '../../hooks/useForm';
import { useAuth } from '../../hooks/auth/useAuth';
import { FcGoogle } from 'react-icons/fc';

import { Link } from 'react-router-dom';
import Error from '@/components/ui/Error';

const LoginForm = () => {
  const email = useForm('email', true);
  const password = useForm('password', true);
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = email.validate();
    const isPasswordValid = password.validate();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    await login({ email: email.value, password: password.value });
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="subtitle">Bem vindo(a) de volta! 👋</h3>
        <p className="text-[var(--grey-c3)]">
          Entre na sua conta usando email e senha.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg">
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Ex. email@email.com"
          className="mt-0"
          {...email}
        />
        <div className="mb-8">
          <Input label="Senha" type="password" name="password" {...password} />
          <Link
            to="/forgot-password"
            className="text-base underline mt-2 block text-[var(--grey-c3)]"
          >
            Esqueceu sua senha?
          </Link>
        </div>
        {loading ? (
          <Button disabled>Entrando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <Error error={error} className="mt-8" />}
        <div className="flex items-center gap-12 mt-6 mb-6">
          <div className="flex-1 h-px bg-[var(--grey-b3)]" />
          <span className="text-sm">ou</span>
          <div className="flex-1 h-px bg-[var(--grey-b3)]" />
        </div>
        <button className="w-full flex items-center justify-center gap-2 border border-blue-600 text-blue-600 font-semibold py-3 px-4 rounded-xl hover:bg-blue-50 transition">
          <FcGoogle size={15} />
          Entrar com o Google
        </button>
        <span className="text-base mt-12 font-medium">
          Não tem uma conta?{' '}
          <Link to="/register" className="link">
            Cadastre-se
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
