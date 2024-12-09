import React from "react";
import { render, screen } from "@testing-library/react";
import Service from "../Service";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../../params/ThemeContext";

// Mock pour useTranslation
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      language: "fr",
    },
    t: (key) => key,
  }),
}));

// Mock pour les données
jest.mock("../../data/data.json", () => ({
  fr: {
    services: [
      { id: 1, title: "Service 1", description: "Description 1" },
      { id: 2, title: "Service 2", description: "Description 2" },
    ],
  },
  en: {
    services: [
      { id: 1, title: "Service 1", description: "Description 1" },
      { id: 2, title: "Service 2", description: "Description 2" },
    ],
  },
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

describe("Service Component", () => {
  const renderWithProviders = (ui, darkMode = false) =>
    render(
      <ThemeProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </ThemeProvider>
    );

  it("renders the service component correctly in light mode", () => {
    renderWithProviders(<Service />);

    const serviceContainer = screen.getByTestId("service");
    expect(serviceContainer).toHaveClass("bg-white text-black"); // Mode clair
  });

  it("renders the service component correctly in dark mode", () => {
    global.window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true, // Simule que le mode sombre est activé
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    renderWithProviders(<Service />);

    const serviceContainer = screen.getByTestId("service");
    expect(serviceContainer).toHaveClass("bg-black text-white"); // Mode sombre
  });

  it("renders all services with correct titles and descriptions", () => {
    renderWithProviders(<Service />);

    expect(screen.getByText("Service 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Service 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  it("renders links with correct aria-labels", () => {
    renderWithProviders(<Service />);

    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute(
      "aria-label",
      "Me contacter pour Service 1"
    );
    expect(links[1]).toHaveAttribute(
      "aria-label",
      "Me contacter pour Service 2"
    );
  });

  it("links are clickable and lead to the contact section", () => {
    renderWithProviders(<Service />);

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/#contact");
    });
  });
});
