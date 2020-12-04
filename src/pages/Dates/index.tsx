import React, { useCallback, useState, FormEvent } from 'react';

import { Container } from './styles';

import SideBar from '../../components/SideBar';
import api from '../../services/api';

const Dates: React.FC = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        await api.post('/admin/dates', {
          title: description,
        });

        alert('Data criada com sucesso.');
        setDescription('');
      } catch (err) {
        console.log(err);
        alert('Não foi possível criar esta data');
      }
    },
    [description],
  );

  return (
    <Container>
      <SideBar />
      <main>
        <header>
          <h2>Crie aqui novas datas para o sistema</h2>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Descrição/Título para data"
            />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </Container>
  );
};

export default Dates;
