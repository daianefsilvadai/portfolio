import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-block: 30px;
  background-color: #f5e7f5;
  //mobile
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    min-height: 90vh;
  }
`;

export const DivBio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    margin-top: 8rem;
  }
`;

export const ImgFoto = styled.img`
  border-radius: 50%;
  height: 40vh;
  width: 18vw;

  @media (min-width: 320px) and (max-width: 768px) {
    height: 25vh;
    width: 35vw;
  }
`;

export const DivText = styled.div`
  height: 47vh;
  width: 40%;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2,
  p {
    margin-bottom: 0.7rem;
    color: #16213e;
  }

  P {
    color: black;
  }

  span {
    color: #a511c0;
    font-weight: bold;
  }

  strong {
    color: #16213e;
    font-weight: bold;
  }

  @media (min-width: 320px) and (max-width: 768px) {
  }
`;

export const DivTechs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #16213e;

  h3 {
    margin-bottom: 1rem;
  }
`;

export const DivIcons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;

  img {
    width: 40px;
  }
`;
