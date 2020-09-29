import React, { useCallback, useState } from 'react';

import { Container, ConfirmButton, CancelButton } from './styles';

interface SelectedOption {
  selected: boolean;
  type: 'confirmed' | 'canceled';
}

const AcceptInvites: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<SelectedOption>(
    {} as SelectedOption,
  );

  const [invite, setEnvite] = useState({});

  const handleClickOnActionButton = useCallback(
    (type: 'canceled' | 'confirmed') => {
      setSelectedOption({
        selected: true,
        type,
      });
    },
    [],
  );

  if (selectedOption.selected) {
    return (
      <Container>
        <div className="header">
          <strong>Aceitar convite</strong>
        </div>

        <div className="content">
          <img src="" alt="" />
          {selectedOption.type === 'confirmed' ? (
            <span>
              Rennan agora faz parte da sua lista de contatos do Memória.
            </span>
          ) : (
            <span>
              Que pena que não aceitou, mas poderá adicionar Rennan a sua lista
              de contantos em outro momento.
            </span>
          )}
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="header">
        <strong>Aceitar convite</strong>
      </div>

      <div className="content">
        <img src="" alt="" />
        <span>
          Rennan deseja fazer parte da sua lista de contatos do Memória, clique
          abaixo para aceitar ou recusar
        </span>

        <div className="buttonsContainer">
          <CancelButton onClick={() => handleClickOnActionButton('canceled')}>
            Cancelar
          </CancelButton>
          <ConfirmButton onClick={() => handleClickOnActionButton('confirmed')}>
            Confirmar
          </ConfirmButton>
        </div>
      </div>
    </Container>
  );
};

export default AcceptInvites;
