import * as S from "./Style";
import Dev from "../../assets/dev.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <S.Section>
      <S.Div>
        <S.P>
          <p>Olá, sou</p>
          <S.Span>Daiane Morais</S.Span>
          <p>Dev Front-end</p>
        </S.P>
        <S.Btn>
          <Link to="/Sobre">Saiba mais</Link>
        </S.Btn>
      </S.Div>
      <figure>
        <S.ImgDev src={Dev} alt="Menina sentada com notebook no colo" />
      </figure>
    </S.Section>
  );
}
