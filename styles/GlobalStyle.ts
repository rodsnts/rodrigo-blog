import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Menlo";
    src: url("/fonts/Menlo-Regular.woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  html {
    background-color: #1d1f21;
    font-family: "Menlo", sans-serif;
    font-size: 62.5%;
    margin: 0;
    padding: 0;
    max-height: 100vh;
  }
`;

export default GlobalStyle;
