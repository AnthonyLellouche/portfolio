// Mock de ResizeObserver pour Jest
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../../params/ThemeContext";
import "@testing-library/jest-dom";

// Mock pour `useTranslation` pour les traductions
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

// Mock pour `i18n.changeLanguage` afin de tester le changement de langue
jest.mock("../../params/i18n", () => ({
  changeLanguage: jest.fn(),
  language: "en",
}));

const renderWithProviders = (ui, darkMode = false) => {
  global.window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: darkMode, // Active ou désactive le mode sombre
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

describe("Navbar Component", () => {
  it("renders the navbar correctly in light mode", () => {
    renderWithProviders(<Navbar />, false); // Mode clair

    // Vérifier le texte et les liens principaux
    expect(screen.getByText("Tony")).toBeInTheDocument();
    expect(screen.getByText("navbar.aboutMe")).toBeInTheDocument();
    expect(screen.getByText("navbar.myServices")).toBeInTheDocument();
    expect(screen.getByText("navbar.myProjects")).toBeInTheDocument();
    expect(screen.getByText("navbar.contact")).toBeInTheDocument();

    // Vérifier si la navbar est en mode clair
    const navbar = screen.getByRole("navigation");
    expect(navbar).toHaveClass("bg-white text-black");
  });

  it("renders the navbar correctly in dark mode", () => {
    renderWithProviders(<Navbar />, true); // Mode sombre

    const navbar = screen.getByRole("navigation");
    expect(navbar).toHaveClass("bg-black text-white");
  });

  it("opens and closes the mobile menu", () => {
    renderWithProviders(<Navbar />);

    // Vérifie que le menu mobile est fermé par défaut
    expect(screen.queryByText("navbar.home")).not.toBeInTheDocument();

    // Ouvrir le menu mobile
    fireEvent.click(screen.getByLabelText("navbar.openMenu"));
    expect(screen.getByText("navbar.home")).toBeInTheDocument();

    // Fermer le menu mobile
    fireEvent.click(screen.getByLabelText("navbar.closeMenu"));
    expect(screen.queryByText("navbar.home")).not.toBeInTheDocument();
  });

  it("changes language when language option is clicked", () => {
    renderWithProviders(<Navbar />);

    // Obtenir tous les boutons et filtrer pour trouver le bouton de langue "EN"
    const languageButtons = screen.getAllByRole("button", { name: /EN/i });
    const languageButton = languageButtons.find(
      (button) => button.getAttribute("aria-haspopup") === "menu"
    );

    // Ouvrir le menu de sélection de langue
    fireEvent.click(languageButton);

    // Sélectionner l'option "FR" dans le menu
    const languageOptions = screen.getAllByText("FR");
    const languageMenuItem = languageOptions.find(
      (option) => option.getAttribute("role") === "menuitem"
    );

    // Cliquer pour changer la langue en français
    fireEvent.click(languageMenuItem);

    // Vérifie que la langue a été changée en français
    expect(screen.getByRole("button", { name: /FR/i })).toBeInTheDocument();
  });

  it("has accessible links with correct aria-labels", () => {
    renderWithProviders(<Navbar />);

    expect(screen.getByLabelText("navbar.openMenu")).toBeInTheDocument();
  });
});
