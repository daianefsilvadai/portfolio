import * as S from "./Styles";
import foto from "./images/dai.jpg";
import html from "./images/icon-html.png";
import css from "./images/icon-css.png";
import js from "./images/icon-js.png";
import react from "./images/icon-react.png";

export default function Sobre() {
  return (
    <S.Section>
      <S.DivBio>
        <S.ImgFoto src={foto} alt="Foto do rosto da dev" />
        <S.DivText>
          <h2>Sobre</h2>
          <p>
            <span>Sou Daiane Morais</span>
          </p>
          <p>
            <strong>Dev Front-end </strong>
          </p>

          <p>
            Atualmente, estou dedicando meu tempo e energia ao aprimoramento das
            minhas habilidades como desenvolvedora Front-end.
          </p>
        </S.DivText>
      </S.DivBio>

      <S.DivTechs>
        <h3>Techs</h3>
        <S.DivIcons>
          <img src={html} alt="ícone do HTML" />
          <img src={css} alt="ícone do CSS" />
          <img src={js} alt="ícone do JS" />
          <img src={react} alt="ícone do React" />
        </S.DivIcons>
      </S.DivTechs>
    </S.Section>
  );
}
