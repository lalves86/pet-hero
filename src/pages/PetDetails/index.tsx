import React, { useState, useEffect, FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api';

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

const PetDetails: FC = () => {
  const [pet, setPet] = useState({} as Pet);
  const [user, setUser] = useState({} as User);
  const { petId } = useParams();

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
