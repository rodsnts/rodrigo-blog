import styled from "styled-components";

export const PostListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #c9cacc;

  h2 {
    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: bolder;
  }

  h2::before {
    content: "#";
    margin-right: 1.4rem;
    color: #2bbc8a;
  }

  p {
    hyphens: auto;
    text-align: justify;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  a {
    position: relative;
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

  img {
    width: 100%;
    border-radius: 5px;
  }

  strong {
    color: #2bbc8a;
  }

  code {
    border-radius: 5px;
    background-color: #2bbc8a;
    color: white;
    display: block;
    font-family: Menlo, monospace;
    font-size: 1.2rem;
    font-weight: 100;
    padding: 1rem;
  }

  blockquote {
    margin-left: 0;
    border-left: 0.5rem solid #2bbc8a;
    text-indent: 2rem;
    font-style: italic;
  }

  code::selection {
    background-color: #c9cacc;
    color: black;
  }
`;

export const PostInfo = styled.div`
  margin-top: 0.3rem;
  display: flex;
`;

export const Title = styled.h1`
  margin-bottom: 0;
  font-size: 2.1rem;
  color: #2bbc8a;
`;

export const User = styled.p`
  margin-top: 0;
  margin-right: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #c9cacc;
`;

export const PostTime = styled.p`
  margin: 0;
  font-size: 1.4rem;
`;
