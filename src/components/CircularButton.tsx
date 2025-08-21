import useAppearance from "../hooks/useAppearance";

function CircularButton({ img }: { img: string }) {
  const appearance = useAppearance();
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-complementary transition hover:cursor-pointer">
      <img
        src={img}
        className={`w-6 ${
          !appearance?.lightMode ? "invert mix-blend-screen" : ""
        } `}
      />
    </div>
  );
}

export default CircularButton;
