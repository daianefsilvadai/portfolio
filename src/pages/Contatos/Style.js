import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  h2 {
    color: #16213e;
  }

  @media (min-width: 201px) and (max-width: 700px) {
    padding-inline: 20px;
    text-align: center;
  }
`;

export const DivIcon = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 3rem;
  padding-block: 1.5rem;

  a {
    color: #a511c0;
  }
`;
