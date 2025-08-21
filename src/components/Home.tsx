import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [username, setUsername] = useState<string | null>(
    params.get("visitor") || null
  );

  useEffect(() => {
    setUsername(params.get("visitor") || null);
  }, [location.search]);

  return (
    <div className="flex flex-col justify-end w-full h-full">
      <h1>
        <span className="block text-[2rem]">
          Oi{username ? " " + username : ""}! Eu sou o Alisson,{" "}
        </span>
        <span className="block text-[3rem] font-bold text-primary">
          Desenvolvedor Full-Stack
        </span>
      </h1>
    </div>
  );
}

export default Home;
