import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { Container, CardContainer } from './styles';
import Card from '../../components/Card';

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

const Home: FC = () => {
  const { signOut } = useAuth();
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
      <div>
        <Link to="/new-pet">Cadastrar novo pet</Link>
        <button type="button" onClick={signOut}>
          Sair
        </button>
      </div>
      <CardContainer>
        {pets.map((pet) => (
          <Card key={pet.id} pet={pet} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Home;
