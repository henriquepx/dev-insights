import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    scroll-behavior: smooth;
    vertical-align: baseline;
    list-style: none;
    text-decoration: none;
    line-height: 1.5;
    font-family: 'Montserrat', sans-serif;
  }   
`;

export default GlobalStyles;