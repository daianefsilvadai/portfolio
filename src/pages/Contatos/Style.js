import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  background-color: #f5e7f5;

  h2 {
    color: #16213e;
  }
`;

export const DivIcon = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 3rem;
  margin-top: 2rem;

  a {
    color: #a511c0;
  }
`;
