import * as S from "./Style";
import { DiCode } from "react-icons/di";
// import { IoMdMenu } from "react-icons/io";

export default function Header() {
  return (
    <S.Header>
      <S.Span>
        {<DiCode />}
        {<DiCode />}
      </S.Span>
      <S.Nav>
        <a href="/">Início</a>
        <a href="/Sobre">Sobre</a>
        <a href="/Projetos">Projetos</a>
        <a href="/Contatos">Contatos</a>
      </S.Nav>
      {/* <S.Btn>{<IoMdMenu />}</S.Btn> */}
    </S.Header>
  );
}
