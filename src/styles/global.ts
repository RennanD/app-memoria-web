import { createGlobalStyle } from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #f5f5fc;
    color: #333;
    -webkit-font-smoothig: antialiased;
  }
  border-style, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, strong {
    font-weight: 500;
  }
  button {
    cursor:pointer;
  }
`;
