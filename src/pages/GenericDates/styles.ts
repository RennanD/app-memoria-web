import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  main {
    width: 100%;
    max-width: 1000px;
    margin: 50px auto 0;
    overflow: auto;
    padding: 0 10px;

    header {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;

      h2 {
        color: #333;
        font-size: 32px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      margin: 200px auto;

      .input-block {
        color: #333;
        border: 1px solid #ddd;
        border-radius: 20px;
        padding: 10px 20px;
        background: #fff;

        input {
          border: 0;
          background: none;
        }

        & + .input-block {
          margin-top: 10px;
        }
      }

      > button {
        background: #65c4b0;
        color: #fff;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 10px;
        font-size: 18px;
        margin-top: 15px;
      }
    }
  }
`;
