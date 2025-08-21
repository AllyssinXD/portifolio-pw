import Button from "./Button";
import CircularButton from "./CircularButton";

function FixedAside() {
  const socialMedias = [
    {
      link: "https://www.youtube.com/@AllySilvaDev",
      img: "/YouTube-icon.png",
    },
    {
      link: "https://www.instagram.com/alisson_ally_/",
      img: "/instagram-53.png",
    },
    {
      link: "https://www.linkedin.com/in/alisson-ally/",
      img: "/linkedin.png",
    },
    {
      link: "https://github.com/AllyssinXD",
      img: "/github-icon.png",
    },
  ];

  return (
    <aside className="min-w-64 bg-background text-foreground rounded-xl p-10">
      <div className="space-y-5">
        <h1 className="text-xl">Alisson Ally Silva</h1>
        <div className="relative group h-50">
          <img
            src="/5cd9a755-4e27-4d8d-a101-31f438c982b6.png"
            className="absolute w-full h-50 object-cover rounded-md bg-foreground z-2 shadow-[10px_10px_0px_0px] hover:shadow-[20px_20px_0px_0px] transition shadow-complementary"
            alt="profile-pic"
          />
        </div>
      </div>
      <div className="mt-10">
        <span className="block text-[0.8rem] opacity-50">Eu sou</span>
        <span className="block text-[0.8rem]">
          Desenvolvedor Full-Stack e entusiasta da tecnologia
        </span>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between">
          {socialMedias.map((socialMedia) => {
            return (
              <a href={socialMedia.link} target="_blank">
                {<CircularButton img={socialMedia.img} />}
              </a>
            );
          })}
        </div>
        <a href="https://api.whatsapp.com/send?phone=5511969422347">
          <Button label={"Me contate"} />
        </a>
      </div>
    </aside>
  );
}

export default FixedAside;
