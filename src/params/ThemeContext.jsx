import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
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

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
