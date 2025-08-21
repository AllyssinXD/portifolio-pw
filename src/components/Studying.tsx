function Studying() {
  const educations = [
    {
      dateLabel: "2025 - junho",
      title: "Desenvolvimento de Sistemas",
      subtitle: "Curso ETEC - Primeiro semestre",
      description: "Curso técnico",
    },
    {
      dateLabel: "2025 - fevereiro",
      title: "Javascript, TypeScript",
      subtitle: "Curso Online",
      description:
        "Aprendi Node, Express, noSQL, React, hooks, Redux, Design Patterns",
    },
    {
      dateLabel: "2020",
      title: "C#",
      subtitle: "Educação Autodidata",
      description:
        "Simpatizei com a sintaxe, criei alguns jogos com Windows Forms, fiz CRUD simples com banco de dados",
    },
    {
      dateLabel: "2019",
      title: "PHP",
      subtitle: "Curso Online",
      description:
        "WAMP, XAMP, Criação de páginas dinâmicas, conexão com banco",
    },
    {
      dateLabel: "2018",
      title: "Java",
      subtitle: "Curso Online",
      description: "POO, JavaFX, Netbeans",
    },
    {
      dateLabel: "2017",
      title: "Algorítimos",
      subtitle: "Curso Online",
      description: "Reforcei minha lógica para aplicação em outras linguagens",
    },
    {
      dateLabel: "2017",
      title: "Python",
      subtitle: "Curso Online",
      description: "Aprendi todos os conceitos básicos e POO",
    },
    {
      dateLabel: "2016",
      title: "HTML e CSS",
      subtitle: "Curso Online",
      description: "Fiz minhas primeiras páginas web",
    },
  ];

  return (
    <div className="flex flex-col pt-10 h-full px-10 pr-20">
      <h1 className="text-[3rem]">Continuo estudando...</h1>
      <p className="font-light">
        Minha jornada de aprenzidado nunca vai parar!{" "}
      </p>
      <div className="mt-10 overflow-auto h-50 w-full">
        {educations.map(({ dateLabel, title, subtitle, description }, i) => {
          return (
            <div
              className={`flex items-center justify-between ${
                i < educations.length - 1 ? "border-b" : ""
              } border-foreground py-4 text-sm font-light`}
            >
              <div className="pl-2 w-30 opacity-50"> {dateLabel} </div>
              <div className="w-64 flex flex-col">
                <span className="font-bold">{title}</span>
                <span>{subtitle}</span>
              </div>
              <div className="w-64">
                <span>{description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Studying;
