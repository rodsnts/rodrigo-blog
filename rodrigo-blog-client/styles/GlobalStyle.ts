import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Menlo";
    src: url("/fonts/Menlo-Regular.woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  ::selection {
    background: #2bbc8a;
    color: #c9cacc;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  body, html {
    margin: 0;
    padding: 0;
  }

  html {
    background-color: #1d1f21;
    font-family: "Menlo", sans-serif;
    font-size: 62.5%;
    height: 100vh;
  }

  body {
    margin: auto;
    padding: 0 3.2rem;
    max-width: 76.8rem;
  }

  a {
    margin: 0;
    width: fit-content;
    text-decoration: none;
    color: inherit;
  }

  .body {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
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
