import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

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

type Props = { pet: Pet };

const Card: FC<Props> = ({ pet }) => (
  <Container>
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
      {`Tenho ${pet.age} ano`}
      {pet.age > 1 ? 's.' : '.'}
    </span>
    <p>
      Estou em
      {` ${pet.location}`}
    </p>
    <Link to={`/details/${pet.id}`}>Adotar</Link>
  </Container>
);

export default Card;
