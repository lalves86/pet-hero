import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { RouteComponentProps } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

type TParams = { petId: string };

interface Pet {
  id: string;
  userId: string;
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

const PetDetails = ({ match }: RouteComponentProps<TParams>): JSX.Element => {
  const [pet, setPet] = useState({} as Pet);
  const [user, setUser] = useState({} as User);
  const { petId } = match.params;

  useEffect(() => {
    api.get(`pets/${petId}`).then((response) => {
      setPet(response.data);
    });
  }, [petId]);

  useEffect(() => {
    if (pet.userId) {
      api.get(`users/${pet.userId}`).then((response) => {
        setUser(response.data);
      });
    }
  }, [pet.userId]);

  return (
    <Container>
      <h2>Entre em contato com o anunciante</h2>
      <p>
        <strong>{user.name}</strong>
      </p>
      <p>
        <strong>E-mail para contato: </strong>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
      <p>
        <strong>Endereço: </strong>
        {user.address}
      </p>

      <hr />

      <h2>Informações do Pet</h2>
      <h3>{pet.name}</h3>
      <strong>{pet.species}</strong>
      <span>
        <strong>Raça: </strong>
        {pet.breed}
      </span>
      <span>
        <strong>Peso: </strong>
        {`${pet.weight} `}
        Kg.
      </span>
      <span>
        <strong>Idade: </strong>
        {`${pet.age} ano`}
        {pet.age > 1 ? 's.' : '.'}
      </span>

      <Link to="/">Voltar para Home</Link>
    </Container>
  );
};

export default PetDetails;
