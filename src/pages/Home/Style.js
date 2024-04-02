import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  /* border: solid yellow; */

  //Responsividade mobile

  //Responsividade web
`;

export const ImgDev = styled.img`
  height: 300px;
  margin-top: 1rem;
`;

export const P = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Span = styled.span`
  color: #a511c0;
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
  }
`;
