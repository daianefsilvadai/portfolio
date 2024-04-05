import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f5e7f5;

  //Responsividade mobile
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Div = styled.div``;

export const P = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    margin-top: 10rem;
    display: flex;
  }
`;

export const Span = styled.span`
  color: #a511c0;
`;

export const ImgDev = styled.img`
  height: 300px;
  margin-top: 1rem;

  @media (min-width: 320px) and (max-width: 768px) {
    max-width: 100%;
    height: auto;
    padding-inline: 2.7rem;
  }
`;
export const Btn = styled.button`
  font-size: 15px;
  font-family: Arial;
  width: 140px;
  height: 40px;
  border-width: 1px;
  border-color: #c584f3;
  font-weight: bold;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: inset 0px 1px 0px 0px #efdcfb;
  text-shadow: inset 0px 1px 0px #9752cc;
  background: linear-gradient(#dfbdfa, #bc80ea);

  &:hover {
    background: linear-gradient(#bc80ea, #dfbdfa);
  }
  * {
    text-decoration: none;
    color: #524f81;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 15px;
    width: 120px;
    height: 40px;
  }
`;
