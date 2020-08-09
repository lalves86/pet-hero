import React, { FC, useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';
import Input from '../../components/Input';
import api from '../../services/api';

interface NewPetFormData {
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  location: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  address: string;
}

const NewPet: FC = () => {
  const history = useHistory();

  const [user, setUser] = useState(() => {
    const response = localStorage.getItem('@PetHero:user');

    if (response) {
      return JSON.parse(response);
    }

    return {} as User;
  });

  const handleSubmit = useCallback(
    async ({ name, species, breed, age, weight, location }: NewPetFormData) => {
      await api.post('/pets', {
        userId: user.id,
        name,
        species,
        breed,
        age,
        weight,
        location,
      });

      history.push('/');
    },
    [history, user.id]
  );

  return (
    <Container>
      <h2>Cadastre um pet para adoção</h2>

      <Form onSubmit={handleSubmit}>
        <strong>Nome:</strong>
        <Input name="name" type="text" placeholder="Nome do pet" />
        <strong>Espécie:</strong>
        <Input name="species" type="text" placeholder="Qual a espécie do pet" />
        <strong>Raça:</strong>
        <Input name="breed" type="text" placeholder="Raça do pet" />
        <strong>Idade:</strong>
        <Input name="age" type="number" placeholder="Idade do pet" />
        <strong>Peso:</strong>
        <Input name="weight" type="number" placeholder="Peso do pet" />
        <strong>Localização:</strong>
        <Input
          name="location"
          type="text"
          placeholder="Cidade onde está disponível"
        />

        <button type="submit">Cadastrar</button>
      </Form>

      <Link to="/">Voltar para Home</Link>
    </Container>
  );
};

export default NewPet;
