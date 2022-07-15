import styled from "styled-components";

type StyledProps = {
  width: number;
};

export const ReadingProgress = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => props.width}%;
  height: 2px;
  background-color: #2bbc8a;
  z-index: 10;
`;
