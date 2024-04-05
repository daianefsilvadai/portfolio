import { BsArrowRight } from "react-icons/bs";
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
        <S.Btn>
          <a href={html_url} target="_blank" rel="nopenner norefferer">
            <BsArrowRight />
          </a>
        </S.Btn>
      </S.DivCardFooter>
    </S.SectionCard>
  );
}
