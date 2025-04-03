import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../Projects";
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

// Mock des données
jest.mock("../../data/data.json", () => ({
  fr: {
    projects: [
      {
        id: 1,
        name: "Projet 1",
        technologies: "React, Tailwind",
        description: "Description du projet 1",
        image: "projet1.png",
        github: "https://github.com/projet1",
        site: "https://projet1.com",
      },
      {
        id: 2,
        name: "Projet 2",
        technologies: "Vue, Bootstrap",
        description: "Description du projet 2",
        image: "projet2.png",
        github: "https://github.com/projet2",
      },
    ],
  },
  en: {
    projects: [
      {
        id: 1,
        name: "Project 1",
        technologies: "React, Tailwind",
        description: "Description of Project 1",
        image: "project1.png",
        github: "https://github.com/project1",
        site: "https://project1.com",
      },
      {
        id: 2,
        name: "Project 2",
        technologies: "Vue, Bootstrap",
        description: "Description of Project 2",
        image: "project2.png",
        github: "https://github.com/project2",
      },
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

describe("Projects Component", () => {
  const renderWithProviders = (ui) =>
    render(
      <ThemeProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </ThemeProvider>
    );

  it("renders the projects component correctly in light mode", () => {
    renderWithProviders(<Projects />);

    const projectContainer = screen.getByTestId("project");
    expect(projectContainer).toHaveClass("bg-white text-black"); // Mode clair
  });

  it("renders the projects component correctly in dark mode", () => {
    global.window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true, // Simule que le mode sombre est activé
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    renderWithProviders(<Projects />);

    const projectContainer = screen.getByTestId("project");
    expect(projectContainer).toHaveClass("bg-black text-white"); // Mode sombre
  });

  it("renders all projects with correct names and descriptions", () => {
    renderWithProviders(<Projects />);

    expect(screen.getByText("Projet 1")).toBeInTheDocument();
    expect(screen.getByText("Description du projet 1")).toBeInTheDocument();
    expect(screen.getByText("Projet 2")).toBeInTheDocument();
    expect(screen.getByText("Description du projet 2")).toBeInTheDocument();
  });

  it("renders GitHub links with correct aria-labels", () => {
    renderWithProviders(<Projects />);

    const githubLinks = screen.getAllByRole("link", { name: /GitHub/i });
    expect(githubLinks[0]).toHaveAttribute(
      "href",
      "https://github.com/projet2"
    );
    expect(githubLinks[1]).toHaveAttribute(
      "href",
      "https://github.com/projet1"
    );
  });

  it("renders site links for projects that have them", () => {
    renderWithProviders(<Projects />);

    const siteLink = screen.getByRole("link", {
      name: "Visiter le site de Projet 1",
    });
    expect(siteLink).toHaveAttribute("href", "https://projet1.com");
    expect(
      screen.queryByRole("link", { name: "Visiter le site de Projet 2" })
    ).not.toBeInTheDocument();
  });

  it("renders images with correct alt attributes", () => {
    renderWithProviders(<Projects />);

    const images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute("alt", "Projet 2");
    expect(images[1]).toHaveAttribute("alt", "Projet 1");
  });
});
