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
import "@testing-library/jest-dom";
import { useTranslation } from "react-i18next";
import useDarkMode from "../../params/useDarkMode";

// Mock pour `useTranslation` pour les traductions
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

// Mock pour `useDarkMode` pour simuler les modes clair et sombre
jest.mock("../../params/useDarkMode");

// Mock pour `i18n.changeLanguage` afin de tester le changement de langue
jest.mock("../../params/i18n", () => ({
  changeLanguage: jest.fn(),
  language: "en",
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    useDarkMode.mockReturnValue(false); // Par défaut en mode clair
  });

  it("renders the navbar correctly in light mode", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

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
    useDarkMode.mockReturnValue(true); // Simule le mode sombre

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const navbar = screen.getByRole("navigation");
    expect(navbar).toHaveClass("bg-black text-white");
  });

  it("opens and closes the mobile menu", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

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
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

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
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("navbar.openMenu")).toBeInTheDocument();
  });
});
