import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 12vh;
  background-color: #6050af;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
`;

export const Span = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  font-family: "Calligraffitti", cursive;

  a {
    text-decoration: none;
    color: white;
    font-weight: 400;
    padding-right: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  a:hover {
    color: #cea2fd;
    transition: all 0.5s;
  }
`;
