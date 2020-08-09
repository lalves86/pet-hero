import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #fafafa;
    color: #000000;
    -webkit-font-smoothing: antialised;
  }
  body, input, button {
    font-family: sans-serif;
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
`;
