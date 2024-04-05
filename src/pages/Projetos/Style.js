import styled from "styled-components";

export const Section = styled.section`
  padding-block: 3rem;
  background-color: #f5e7f5;

  h2 {
    margin-top: 2rem;
    font-size: 2rem;
    text-align: center;
    color: #16213e;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 6rem;
    font-size: 1.5rem;
  }
`;

export const SectionList = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-block: 1rem;
`;
