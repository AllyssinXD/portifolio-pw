import CircularButton from "./CircularButton";

function Projects() {
  const projects = [
    {
      label: "Projeto1",
      img: "card-game.png",
      link: "https://github.com/AllyssinXD/card_game_web",
    },
    {
      label: "Projeto1",
      img: "dynamous-software.png",
      link: "https://github.com/AllyssinXD/dynamous-software-website",
    },
    {
      label: "Projeto1",
      img: "notifiqa.png",
      link: "https://github.com/AllyssinXD/notifiqa-front-end",
    },
  ];

  return (
    <div className="flex flex-col pt-10 w-full h-full pr-10">
      <h1 className="text-[3rem]">Algumas coisas que já fiz </h1>
      <div className="flex mt-10 space-x-10 overflow-auto">
        {projects.map((project) => {
          return (
            <div className="relative w-70 h-46 rounded-xl overflow-hidden group">
              <img
                src={project.img}
                className="group-hover:scale-120 h-full object-cover transition"
              />
              <div className="absolute -bottom-10 left-0 group-hover:-translate-y-10 transition">
                <a href={project.link} target="_blank">
                  <CircularButton img="github-icon.png" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
