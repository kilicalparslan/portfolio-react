import { FiMoon, FiSun } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <span
      className={
        theme === "dark"
          ? "bg-[#4D4D4D] w-[40px] h-[40px] hidden rounded-full lg:flex justify-center items-center hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2"
          : "bg-white w-[40px] h-[40px] hidden rounded-full lg:flex justify-center items-center text-black hover:text-white hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2"
      }
      onClick={toggleTheme}
    >
      {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
    </span>
  );
}
