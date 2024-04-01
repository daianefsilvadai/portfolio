import * as S from "./Style";

// eslint-disable-next-line react/prop-types
export default function Container({ children }) {
  return (
    <>
      <S.SectionContainer>{children}</S.SectionContainer>
    </>
  );
}
