import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import cartoon from "../../pages/Projetos/imagens/catoon.png";
import fantastika from "../../pages/Projetos/imagens/fantastika.png";
import curriculo from "../../pages/Projetos/imagens/curriculo.png";
import contador from "../../pages/Projetos/imagens/contador.png";
import padaria from "../../pages/Projetos/imagens/padaria.png";
import patrocinadores from "../../pages/Projetos/imagens/patrocinadores.png";
import myshop from "../../pages/Projetos/imagens/myshop.png";

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
            "Desafio1-Logica-Vai-na-web",
            "desafio_t1_vai_na_web",
            "Primeiro-Projeto-Funcional",
            "projeto1-serfrontend",
          ].includes(p.name)
      );

      for (let item = 0; item < dadosFiltrados.length; item++) {
        if (dadosFiltrados[item].languages_url) {
          const response = await fetch(dadosFiltrados[item].languages_url);
          const result = await response.json();

          let linguagens = [];

          for (const propriedade in result) {
            linguagens.push(propriedade);
          }
          dadosFiltrados[item].linguagens = linguagens.join(" / ");
        }
      }

      const dadosAtualizados = dadosFiltrados.map((item) => {
        let imagem;
        switch (item.name.toUpperCase()) {
          case "CARTOON":
            imagem = cartoon;
            break;
          case "DESAFIO-FINAL-FANTASTIKA":
            imagem = fantastika;
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
          case "MYSHOP":
            imagem = myshop;
            break;
          case "PADARIA":
            imagem = padaria;
            break;
          case "PATROCINADORES":
            imagem = patrocinadores;
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
              language={repo.linguagens}
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
