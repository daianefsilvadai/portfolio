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
    margin-top: 9rem;
  }
`;

export const DivBio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`;

export const ImgFoto = styled.img`
  border-radius: 50%;
  height: 40vh;
  width: 18vw;

  @media (min-width: 320px) and (max-width: 768px) {
    height: 30vh;
    width: 45vw;
  }
`;

export const DivText = styled.div`
  height: 40vh;
  width: 40%;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2rem;

  p {
    margin-bottom: 0.7rem;
    color: #16213e;
  }

  span {
    color: #a511c0;
    font-weight: bold;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    justify-content: space-evenly;
    width: 80vw;
    margin-top: 1rem;
    p {
      font-size: 1.5rem;
    }
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

  @media (min-width: 320px) and (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
      margin-top: 3rem;
    }
  }
`;

export const DivIcons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  img {
    width: 40px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 70%;
  }
`;
