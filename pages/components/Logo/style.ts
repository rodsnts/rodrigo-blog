import styled from "styled-components";

export const H1 = styled.h1`
  width: fit-content;
  position: relative;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => (props.color === "light" ? "#fff" : "#000")};

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 10px;
    width: 53%;
    z-index: -1;
    background-color: #2bbc8a;
    transition: all 0.3s ease-in-out;
  }

  :hover::before {
    width: 105%;
  }
`;
