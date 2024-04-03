import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import imgCartoon from "../../pages/Projetos/imagens/catoon.png";
import imgFantastika from "../../pages/Projetos/imagens/fantastika.png";
import curriculo from "../../pages/Projetos/imagens/curriculo.png";
import contador from "../../pages/Projetos/imagens/contador.png";
import componente from "../../pages/Projetos/imagens/componente.png";

import * as S from "./Style";

export default function Projetos() {
  const [respositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/daianefsilvadai/repos"
      );
      const data = await response.json();

      const dadosFiltrados = data.filter(
        (p) =>
          ![
            "portfolio",
            "CTG1-Aula-11",
            "turmat1_vai_na_Web",
            "daianefsilvadai",
            "Git_Github_Basico_intermediario",
            "calculadora",
          ].includes(p.name)
      );

      const dadosAtualizados = dadosFiltrados.map((item) => {
        let imagem;
        switch (item.name.toUpperCase()) {
          case "CARTOON":
            imagem = imgCartoon;
            break;
          case "DESAFIO-FINAL-FANTASTIKA":
            imagem = imgFantastika;
            break;
          case "DESAFIO-CURRICULO":
            imagem = curriculo;
            break;
          case "CONTADOR":
            imagem = contador;
            break;
          case "DESAFIOCOMPONENTE":
            imagem = componente;
            break;
          default:
            imagem = null;
        }
        return { ...item, imagem };
      });

      setRepositories(dadosAtualizados);
    };
    buscarRepositorios();
  }, []);

  return (
    <S.Section>
      <h2>Projetos</h2>

      {respositories.length > 0 ? (
        <S.SectionList>
          {respositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              imagem={repo.imagem}
              language={repo.language}
              html_url={repo.html_url}
            />
          ))}
        </S.SectionList>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </S.Section>
  );
}
