import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../../params/ThemeContext";

// Mock pour useTranslation
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

beforeAll(() => {
  global.window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false, // Simule que le mode clair est activé par défaut
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
});

describe("Hero Component", () => {
  const renderWithProviders = (ui, darkMode = false) =>
    render(
      <ThemeProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </ThemeProvider>
    );

  it("renders the services and projects links with correct aria-labels", () => {
    renderWithProviders(<Hero />);

    expect(screen.getByLabelText("hero.viewServices")).toBeInTheDocument();
    expect(screen.getByLabelText("hero.viewProjects")).toBeInTheDocument();
  });

  it("has clickable links for services and projects", () => {
    renderWithProviders(<Hero />);

    const servicesLink = screen.getByText(/hero\.myServices/i);
    const projectsLink = screen.getByText(/hero\.myProjects/i);

    expect(servicesLink).toHaveAttribute("href", "#service");
    expect(projectsLink).toHaveAttribute("href", "#project");
  });
});
