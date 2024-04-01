import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import * as S from "./Style";

export default function Contatos() {
  return (
    <S.Section>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre.</p>
      <S.DivIcon>
        <a
          href="daianefsilvadai@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdMail />
        </a>

        <a
          href="https://github.com/daianefsilvadai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/daiane-ferreira-719434258"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </S.DivIcon>
    </S.Section>
  );
}
