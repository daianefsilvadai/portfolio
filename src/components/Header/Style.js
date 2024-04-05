import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 15vh;
  background-color: #6050af;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    height: 25vh;
  }
`;

export const Span = styled.span`
  font-size: 2.5rem;
  font-weight: bold;

  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
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

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 25vh;
    /* border: solid red; */
    justify-content: space-evenly;
    align-items: start;

    a {
      display: flex;
      font-size: 2rem;
    }
  }
`;
