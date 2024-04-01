import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import * as S from "./Style";

export default function Projetos() {
  const [respositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/daianefsilvadai/repos"
      );
      let data = await response.json();
      data = data.filter(
        (p) => p.name != "Cartoon" && p.name != "CTG1-Aula-11"
      );

      let basico = data.filter(
        (p) => p.name == "Git_Github_Basico_intermediario"
      );

      basico[0].description = "test";
      data.push(basico);

      setRepositories(data);
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
              description={repo.description}
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
