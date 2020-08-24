import React, { useCallback, useState, FormEvent } from 'react';

import { Container } from './styles';

import SideBar from '../../components/SideBar';
import api from '../../services/api';

const GenericDates: React.FC = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        await api.post('/admin/generic-dates', {
          date,
          description,
        });

        alert('Data criada com sucesso.');
      } catch ({ response }) {
        alert('Não foi possível criar esta data');
      }
    },
    [date, description],
  );

  return (
    <Container>
      <SideBar />
      <main>
        <header>
          <h2>Crie aqui novas datas para o sistema</h2>
        </header>

        <form onSubmit={handleSubmit}>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            name=""
            id=""
          />
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição/Título para data"
          />

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </Container>
  );
};

export default GenericDates;
