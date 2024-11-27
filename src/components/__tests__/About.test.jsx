import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";
import { ThemeProvider } from "../../params/ThemeContext";
import { MemoryRouter } from "react-router-dom";

// Mock du hook `useTranslation`
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

beforeAll(() => {
  // Mock global pour `window.matchMedia`
  global.window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query.includes("(prefers-color-scheme: dark)"),
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
});

describe("About Component", () => {
  const renderWithProviders = (ui, darkMode = false) => {
    global.window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: darkMode,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    render(
      <ThemeProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </ThemeProvider>
    );
  };

  it("renders About component correctly with light mode", () => {
    renderWithProviders(<About />, false); // Mode clair

    // Vérifie la présence du titre
    expect(screen.getByText("about.aboutTitle")).toBeInTheDocument();

    // Vérifie l'image avec l'alt
    expect(screen.getByAltText("about.costumePhotoAlt")).toBeInTheDocument();

    // Vérifie que le fond de l'élément principal est en mode clair
    expect(screen.getByTestId("about")).toHaveClass("bg-white text-black");
  });

  it("renders About component correctly with dark mode", () => {
    renderWithProviders(<About />, true); // Mode sombre

    // Vérifie la présence du titre
    expect(screen.getByText("about.aboutTitle")).toBeInTheDocument();

    // Vérifie l'image avec l'alt
    expect(screen.getByAltText("about.costumePhotoAlt")).toBeInTheDocument();

    // Vérifie que le fond de l'élément principal est en mode sombre
    expect(screen.getByTestId("about")).toHaveClass("bg-black text-white");
  });

  it("renders skill progress bars correctly", () => {
    renderWithProviders(<About />, false); // Mode clair

    const htmlCssProgress = screen.getByRole("progressbar", {
      name: "about.skill.htmlcss",
    });
    expect(htmlCssProgress).toHaveAttribute("aria-valuenow", "90");

    const reactProgress = screen.getByRole("progressbar", {
      name: "about.skill.react",
    });
    expect(reactProgress).toHaveAttribute("aria-valuenow", "80");
  });

  it("renders experience stats correctly", () => {
    renderWithProviders(<About />, false); // Mode clair

    expect(screen.getByLabelText("3 années d'expérience")).toBeInTheDocument();
    expect(screen.getByLabelText("10 projets terminés")).toBeInTheDocument();
    expect(screen.getByLabelText("2 clients satisfaits")).toBeInTheDocument();
  });
});
