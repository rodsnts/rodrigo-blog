import styled from "styled-components";

export const H1 = styled.h1`
  display: inline-block;
  width: fit-content;
  position: relative;
  font-size: 2.4rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: bold;
  color: ${(props) => (props.color === "light" ? "#c9cacc" : "#000")};

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 8px;
    width: 53%;
    z-index: -1;
    background-color: #2bbc8a;
    transition: all 0.3s ease-in-out;
  }

  :hover::before {
    width: 105%;
  }
`;
