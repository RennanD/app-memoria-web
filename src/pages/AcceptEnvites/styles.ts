import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background: #fff;

  .header {
    display: flex;
    height: 100px;
    background: #65c4b0;
    padding: 20px;
    align-items: center;

    strong {
      font-size: 28px;
      color: #fff;
    }
  }

  .content {
    padding: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
    }

    span {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
      text-align: center;
    }

    .buttonsContainer {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export const ConfirmButton = styled.button`
  height: 50px;
  border-radius: 5px;
  width: 48%;
  background: #65c4b0;
  border: 0;
  color: #fff;
`;

export const CancelButton = styled.button`
  height: 50px;
  border-radius: 5px;
  width: 48%;
  background: #c53030;
  border: 0;
  color: #fff;
`;
