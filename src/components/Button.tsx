function Button({ label }: { label: string }) {
  return (
    <button className="group relative rounded-full cool-gradient w-full text-sm p-2 hover:cursor-pointer text-background overflow-hidden">
      {/* Texto que sobe do topo */}
      <span
        className="
    block absolute left-1/2 -top-10 translate-x-[-50%] translate-y-0 
    transition-all duration-300
    group-hover:top-1/2 group-hover:translate-y-[-50%]
  "
      >
        {label}
      </span>

      {/* Texto que desce para fora */}
      <span
        className="
    block absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]
    transition-all duration-300
    group-hover:top-[150%] group-hover:translate-y-0
  "
      >
        {label}
      </span>

      {/* Texto “placeholder” pra manter altura */}
      <span className="block opacity-0">{label}</span>
    </button>
  );
}

export default Button;
