import React, { FC, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { Container } from './styles';
import getValidationErrors from '../../utlis/getValidationErrors';
import Input from '../../components/Input';

interface SignUpFormData {
  name: string;
  email: string;
  address: string;
  password: string;
}

const SignUp: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          address: Yup.string().required('O endereço é obrigatório'),
          password: Yup.string().min(
            6,
            'A senha deve ter no mínimo 6 caracteres'
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history]
  );

  return (
    <Container>
      <h1>Faça o seu cadastro</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="John Doe" />
        <Input name="email" type="email" placeholder="johndoe@email.com" />
        <Input name="address" type="text" placeholder="Seu endereço" />
        <Input
          name="password"
          type="password"
          placeholder="Crie uma senha segura"
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default SignUp;
