import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: #524f81;
  font-size: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  color: white;
  font-weight: 300;
  font-family: "Roboto Condensed", sans-serif;

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
