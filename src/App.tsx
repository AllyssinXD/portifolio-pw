import { useEffect, useRef, useState } from "react";
import FixedAside from "./components/FixedAside";
import Home from "./components/Home";
import useAppearance from "./hooks/useAppearance";
import AboutMe from "./components/AboutMeSection";
import gsap from "gsap";
import { useLocation, useNavigate } from "react-router-dom";
import Projects from "./components/Projects";
import Studying from "./components/Studying";

function App() {
  const appearance = useAppearance();

  const pages = [
    {
      id: "home",
      label: "Home",
      component: <Home />,
    },
    {
      id: "aboutMe",
      label: "Sobre mim",
      component: <AboutMe />,
    },
    {
      id: "projects",
      label: "Projetos",
      component: <Projects />,
    },
    {
      id: "studying",
      label: "Estudos",
      component: <Studying />,
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const [selectedPage, setSelectedPage] = useState(
    pages.findIndex((p) => p.id == params.get("page")) > -1
      ? pages.findIndex((p) => p.id == params.get("page"))
      : 0
  );

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(sliderRef.current, {
      marginLeft: selectedPage > 0 ? selectedPage * -840 : 0,
      duration: 1,
    });
  }, [selectedPage]);

  useEffect(() => {
    setSelectedPage(
      pages.findIndex((p) => p.id == params.get("page")) > -1
        ? pages.findIndex((p) => p.id == params.get("page"))
        : 0
    );
  }, [location.search]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("Aaaa");
    });
  }, []);

  return (
    <div
      className={
        (appearance?.lightMode ? "light" : "dark") +
        " lexend-regular w-full h-screen"
      }
    >
      <div className="flex w-full h-screen items-center px-10 bg-complementary">
        <div className="relative grid grid-cols-[256px_880px] gap-10 h-128 z-1">
          <FixedAside />
          <div className="grid grid-rows-[40px_auto] h-full w-220 bg-background overflow-hidden rounded-xl p-10 text-foreground">
            <div className="flex items-center space-x-5">
              {pages.map((page, i) => {
                return (
                  <>
                    <div
                      className={`p-1 px-3 h-[40px] flex items-center hover:cursor-pointer font-light ${
                        selectedPage == i
                          ? "bg-foreground text-background"
                          : "hover:shadow-foreground hover:shadow-[0px_0px_10px_0px]"
                      } w-fit rounded-full transition`}
                      onClick={() => {
                        navigate("/?page=" + page.id);
                      }}
                    >
                      {page.label}
                    </div>
                  </>
                );
              })}
              <div
                className="w-8 min-h-4 bg-background border-foreground border flex items-center rounded-full"
                onClick={() => appearance?.setLightMode((prev) => !prev)}
              >
                <div
                  className={`w-4 min-h-4 bg-foreground rounded-full transition ${
                    appearance?.lightMode ? " translate-x-4" : ""
                  }
                      `}
                ></div>
              </div>
            </div>
            <div ref={sliderRef} className="flex h-full">
              {pages.map((page) => {
                return (
                  <div className={`block mr-[40px] w-[800px]`}>
                    {page.component}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mix-blend-overlay absolute top-0 z-0">
        <img
          className="w-screen h-screen object-cover"
          src="/Modern-Blue-Web-Site-Background-Graphics-5332399-1.jpg"
        />
      </div>
    </div>
  );
}

export default App;
