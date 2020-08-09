import React, { FC, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';

import { Container } from './styles';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utlis/getValidationErrors';
import Input from '../../components/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Informe a sua senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, signIn]
  );

  return (
    <Container>
      <h1>Pet Hero</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Login</button>
      </Form>

      <Link to="/register">Não tenho cadastro</Link>
    </Container>
  );
};

export default SignIn;
