import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [userPreference, setUserPreference] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applySystemPreference = () => {
      if (userPreference === null) {
        setDarkMode(mediaQuery.matches);
      }
    };

    applySystemPreference();

    const handleChange = (e) => {
      if (userPreference === null) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [userPreference]);

  const toggleDarkMode = (preference) => {
    setUserPreference(preference);
    setDarkMode(preference);
  };

  return { darkMode, toggleDarkMode, userPreference };
};

export default useDarkMode;