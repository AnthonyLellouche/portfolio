import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { useTranslation } from "react-i18next";
import useDarkMode from "../../params/useDarkMode";

// Mock pour `useTranslation` pour injecter des valeurs de traduction
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

// Mock pour `useDarkMode` pour simuler le mode sombre et clair
jest.mock("../../params/useDarkMode");

describe("Hero Component", () => {
  beforeEach(() => {
    useDarkMode.mockReturnValue(false); // Par défaut en mode clair
  });

  it("renders the hero component correctly in light mode", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(screen.getByAltText("hero.profilePhotoAlt")).toBeInTheDocument();
    expect(screen.getByText(/hero\.iam/i)).toBeInTheDocument();
    expect(screen.getByText("Anthony Lellouche")).toBeInTheDocument();
    expect(screen.getByText(/hero\.jobTitle/i)).toBeInTheDocument();
    expect(
      screen.getByText(/hero\.specialistInModernSites/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/hero\.myServices/i)).toBeInTheDocument();
    expect(screen.getByText(/hero\.myProjects/i)).toBeInTheDocument();

    const heroContainer = screen.getByText(/hero\.iam/i).closest("div");
    expect(heroContainer).toHaveClass("bg-white text-black");
  });

  it("renders the hero component correctly in dark mode", () => {
    useDarkMode.mockReturnValue(true); // Simule le mode sombre

    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroContainer = screen.getByText(/hero\.iam/i).closest("div");
    expect(heroContainer).toHaveClass("bg-black text-white");
  });

  it("renders the services and projects links with correct aria-labels", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("hero.viewServices")).toBeInTheDocument();
    expect(screen.getByLabelText("hero.viewProjects")).toBeInTheDocument();
  });

  it("has clickable links for services and projects", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const servicesLink = screen.getByText(/hero\.myServices/i);
    const projectsLink = screen.getByText(/hero\.myProjects/i);

    expect(servicesLink).toHaveAttribute("href", "/#service");
    expect(projectsLink).toHaveAttribute("href", "/#project");
  });
});
