import React, { FC, useState, useEffect } from 'react';

import api from '../../services/api';
import { Container, CardContainer, Card } from './styles';

interface Pet {
  userId: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  location: string;
}

const Home: FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    api.get('pets').then((response) => {
      setPets(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Pet Hero</h1>
      <h2>Seja um herói para um pet sem lar</h2>
      <CardContainer>
        {pets.map((pet) => (
          <Card>
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
            <button type="button">Adotar</button>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Home;
