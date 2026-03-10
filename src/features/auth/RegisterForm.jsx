import React from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Error from '@/components/ui/Error';
import { Link } from 'react-router-dom';
import useForm from '@/hooks/useForm';
import usePasswordValidation from '@/hooks/auth/usePasswordValidation';
import { useAuth } from '../../hooks/auth/useAuth';

const RegisterForm = () => {
  const email = useForm('email', true);
  const password = useForm('password', true);
  const confirmPassword = useForm('password', true);
  const fullName = useForm('text', true);
  const { register, loading, error } = useAuth();
  const { passwordError, confirmPasswordError } = usePasswordValidation({
    password: password.value,
    confirmPassword: confirmPassword.value,
  });

  const handleSubmit = async function handleSubmit(e) {
    e.preventDefault();

    if (
      !email.validate() ||
      !password.validate() ||
      !confirmPassword.validate() ||
      !fullName.validate() ||
      passwordError ||
      confirmPasswordError
    ) {
      return;
    }

    await register({
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
  };

  return (
    <div className="bg-white py-12 px-8 border-2 border-[var(--grey-b2)] rounded-xl max-w-3xl w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Input
            label="Nome Completo"
            type="text"
            name="name"
            placeholder="Ex. Seu Nome"
            className="flex-1 !mt-0 "
            {...fullName}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Ex. seu.email@email.com"
            className="flex-1 md:!mt-0"
            {...email}
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Ex. Sua Senha"
            className="flex-1"
            {...password}
            error={passwordError || password.error}
          />
          <Input
            label="Confirmação de Senha"
            type="password"
            name="confirmPassword"
            placeholder="Ex. Confirme sua senha"
            className="flex-1"
            {...confirmPassword}
            error={confirmPasswordError || confirmPassword.error}
          />
        </div>
        <hr className="mt-8" />
        {loading ? (
          <Button disabled className="w-full mt-8">
            Criando...
          </Button>
        ) : (
          <Button className="w-full mt-8">Criar Conta</Button>
        )}
        {error && <Error error={error} className="mt-8" />}
      </form>
      <p className="text-center mt-8 text-[var(--grey-c3)]">
        Já tem uma conta?{' '}
        <Link to="/login" className="link">
          Acesse Aqui
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
