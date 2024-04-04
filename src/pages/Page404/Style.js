import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5e7f5;

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    height: 90vh;
    padding-top: 20vh;
    font-size: 1.5rem;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Span = styled.span`
  font-size: 100px;
  color: red;
  font-weight: bold;
`;

export const Strong = styled.strong`
  color: red;
  font-weight: bold;
  font-size: 1.3rem;

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
