import styled from "styled-components";

export const SectionCard = styled.section`
  width: 300px;
  height: 300px;
  background-color: #f1f1f1;
  color: #222222;
  border-radius: 8px;
  box-shadow: 5px 5px 10px #22222270;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: #0f3460;
    text-transform: uppercase;
    font-size: 1rem;
  }

  p {
    color: #555;
  }
`;

export const DivCardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Btn = styled.button`
  width: 35px;
  background-color: #bc80ea;
  height: 35px;
  border: 0;
  border-radius: 8px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: linear-gradient(#bc80ea, #dfbdfa);
  }
`;
