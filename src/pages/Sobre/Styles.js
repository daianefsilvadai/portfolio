import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-block: 40px;
`;

export const DivBio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 1.5rem;

  @media (min-width: 201px) and (max-width: 700px) {
    flex-direction: column;
    padding-inline: 20px;
    gap: 1rem;
  }
`;

export const ImgFoto = styled.img`
  /* border: solid pink; */
  border-radius: 50%;
  height: 42vh;
  width: 19vw;

  @media (min-width: 201px) and (max-width: 700px) {
    width: 30vw;
    height: 20vh;
  }
`;

export const DivText = styled.div`
  /* border: solid red; */
  height: 47vh;
  width: 40%;
  text-align: left;
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

  @media (min-width: 201px) and (max-width: 700px) {
    height: 60vh;
    width: 50%;
    h2,
    p {
      margin-bottom: 0.7rem;
    }
  }
`;

export const DivTechs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-direction: column;
  color: #16213e;
`;

export const DivIcons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;

  img {
    width: 50px;
  }

  @media (min-width: 201px) and (max-width: 700px) {
    gap: 0.5rem;
  }
  img {
    height: 40px;
  }
`;
