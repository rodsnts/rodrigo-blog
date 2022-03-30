import styled from "styled-components";

export const Wraped = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

export const Loader = styled.div`
  width: 355px;
  height: 8px;
  background-color: #00000010;
  position: relative;

  ::before {
    content: " ";
    display: block;
    width: 40px;
    height: 8px;
    position: absolute;
    animation: loading ease-in-out 0.8s alternate infinite;
    background-color: #2bbc8a;
  }

  @keyframes loading {
    0% {
      left: 0;
      width: 40px;
    }
    50% {
      width: 120px;
    }
    100% {
      left: 313px;
      width: 40px;
    }
  }
`;
