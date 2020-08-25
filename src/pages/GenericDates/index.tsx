import React, { useCallback, useState, FormEvent } from 'react';

import pt from 'date-fns/locale/pt-BR';

import DatePicker from 'react-datepicker';

import { Container } from './styles';

import SideBar from '../../components/SideBar';
import api from '../../services/api';

const GenericDates: React.FC = () => {
  const [date, setDate] = useState<Date | null>();
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

  const handleChangeDate = useCallback((newDate: any) => {
    if (newDate) {
      setDate(newDate);
    }
  }, []);

  return (
    <Container>
      <SideBar />
      <main>
        <header>
          <h2>Crie aqui novas datas para o sistema</h2>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <DatePicker
              selected={date}
              onChange={newDate => handleChangeDate(newDate)}
              locale={pt}
              timeFormat="p"
              dateFormat="dd 'de' MMMM"
              timeCaption="time"
              placeholderText="Selecione uma data"
            />
          </div>

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

export default GenericDates;
