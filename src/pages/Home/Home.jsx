import * as S from "./Style";
import Dev from "../../assets/dev.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <S.Section>
      <div>
        <S.P>
          Olá, sou <br />
          <S.Span>Daiane Morais</S.Span> <br />
          Dev Front-end
        </S.P>
        <S.Btn>
          <Link to="/Sobre">Saiba mais</Link>
        </S.Btn>
      </div>
      <figure>
        <S.ImgDev src={Dev} alt="Menina sentada com notebook no colo" />
      </figure>
    </S.Section>
  );
}
