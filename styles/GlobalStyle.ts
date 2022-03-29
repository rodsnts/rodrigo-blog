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

  a {
    margin: 0;
    width: fit-content;
    text-decoration: none;
    color: inherit;
  }

  .body {
    margin: 0 30.2rem;
    animation: fadeIn 0.5s ease-in-out;
  }


  @keyframes fadeIn {
    from {
      transform: translate(0, 3px);
      opacity: 0;
    }
    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
