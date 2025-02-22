'use client';

import { createGlobalStyle, css } from 'styled-components';
import './fonts.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const styles = css`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: white;
    // font-family: 'Graphik Trial', sans-serif;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  button {
    font-family: 'Graphik Trial', sans-serif;
    cursor: pointer;

    :disabled {
      cursor: default;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
    ${styles}
  `;

export default GlobalStyles;
