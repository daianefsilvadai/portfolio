import { BsArrowRight } from "react-icons/bs";
import iconHtml from "./images/i-html.png";
import iconCss from "./images/i-css.png";
import iconJs from "./images/i-js.png";
import iconReact from "./images/i-react.png";
import * as S from "./Style";

// eslint-disable-next-line react/prop-types
export default function Card({
  // eslint-disable-next-line react/prop-types
  name,
  // eslint-disable-next-line react/prop-types
  imagem,
  // eslint-disable-next-line react/prop-types
  language,
  // eslint-disable-next-line react/prop-types
  html_url,
}) {
  return (
    <S.SectionCard>
      <h3>{name}</h3>
      <img src={imagem} alt=""></img>
      <p>{language}</p>
      <S.DivCardFooter>
        {/* <S.DivCardIcones>
          <img src={iconHtml} alt="ícone do html" />
          <img src={iconCss} alt="ícone do js" />
          <img src={iconJs} alt="ícone do react" />
          <img src={iconReact} alt="ícone do react" />
        </S.DivCardIcones> */}
        <S.Btn>
          <a href={html_url} target="_blank" rel="nopenner norefferer">
            <BsArrowRight />
          </a>
        </S.Btn>
      </S.DivCardFooter>
    </S.SectionCard>
  );
}
