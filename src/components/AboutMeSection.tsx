import { useNavigate } from "react-router-dom";
import Button from "./Button";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pt-10 w-full h-full justify-between pr-10">
      <h1 className="text-[3rem]">Eu amo tecnologia!</h1>
      <p className="font-light">
        Um dia, me colocaram na frente de um computador com um curso de HTML no
        navegador. Eu tinha 10 anos na época. Daquele momento até agora,
        continuo estudando desenvolvimento e suas diversas áreas. A que mais me
        chamou atenção foi a de{" "}
        <span className="font-bold">desenvolvimento web</span>. Já criei{" "}
        <a>projetos</a> como jogos, apis, sites inteligentes e até assistentes
        virtuais usando LLMs.
      </p>
      <div
        onClick={() => {
          navigate("/?page=projects");
        }}
      >
        <Button label="Ver projetos" />
      </div>
    </div>
  );
}

export default AboutMe;
