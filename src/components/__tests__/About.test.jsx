import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";

// Mock des hooks
jest.mock("../../params/useDarkMode", () => jest.fn());
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe("About Component", () => {
  it("renders About component correctly with light mode", () => {
    // Simuler le mode clair
    const useDarkMode = require("../../params/useDarkMode");
    useDarkMode.mockReturnValue(false);

    render(<About />);

    // Vérifie la présence du titre
    expect(screen.getByText("about.aboutTitle")).toBeInTheDocument();

    // Vérifie l'image avec l'alt
    expect(screen.getByAltText("about.costumePhotoAlt")).toBeInTheDocument();

    // Vérifie que le fond de l'élément principal est en mode clair
    expect(screen.getByTestId("about")).toHaveClass("bg-white");
  });

  it("renders About component correctly with dark mode", () => {
    // Simuler le mode sombre
    const useDarkMode = require("../../params/useDarkMode");
    useDarkMode.mockReturnValue(true);

    render(<About />);

    // Vérifie que le fond de l'élément principal est en mode sombre
    expect(screen.getByTestId("about")).toHaveClass("bg-black text-white");
  });
});
