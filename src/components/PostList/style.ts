import styled from "styled-components";

export const PostListWrapper = styled.ul`
  li {
    display: flex;
    flex-direction: row;
    color: #c9cacc;
    align-items: center;
    font-size: 1.4rem;
    margin-top: 3rem;
  }

  time {
    color: #666;
    margin: 0;
    border-bottom: 2px solid transparent;
  }

  a {
    position: relative;
    margin-left: 3.5rem;
    height: fit-content;
    border-bottom: 2px solid #c9cacc;
  }

  a::before {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    height: 2px;
    width: 0%;
    z-index: 1;
    background-color: #2bbc8a;
    transition: all 0.3s ease-in-out;
  }

  a:hover::before {
    background-color: #2bbc8a;
    width: 100%;
  }

  @media (max-width: 768px) {
    li {
      flex-direction: column;
    }

    time {
      margin-left: 3.7rem;
      align-self: flex-start;
    }
  }
`;
