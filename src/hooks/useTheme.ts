import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const getPreferredTheme = (): "light" | "dark" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("light", "dark");

  const finalTheme = theme === "system" ? getPreferredTheme() : theme;

  root.classList.add(finalTheme);
  root.style.colorScheme = finalTheme;
};

const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    setThemeState(newTheme);
  };

  return { theme, setTheme };
};

export default useTheme;
