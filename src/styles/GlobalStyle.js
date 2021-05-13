import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    padding: 50px 0;
    width: 100%;
    font-family: 'Roboto','Nanum Gothic', sans-serif;
  }
  
  ul, 
  ol,  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    font-family: 'Roboto','Nanum Gothic', sans-serif;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
  }
`;

export default GlobalStyle;
