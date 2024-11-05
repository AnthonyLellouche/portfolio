import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Footer";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock de `useTranslation` pour injecter des valeurs de traduction dynamiques
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
        addEventListener: function () {},
        removeEventListener: function () {},
        dispatchEvent: function () {},
      };
    };
});

describe("Footer Component", () => {
  it("renders the footer correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("footer.intro")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("footer.emailPlaceholder")
    ).toBeInTheDocument();
    expect(screen.getByText("footer.subscribeButton")).toBeInTheDocument();

    // Test pour l'année dynamique
    const year = new Date().getFullYear().toString();
    expect(
      screen.getByText((content) => content.includes(year))
    ).toBeInTheDocument();
  });

  it("opens and closes the subscription success modal", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("footer.emailPlaceholder"), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByText("footer.subscribeButton"));

    // Vérifie que la modal s'affiche avec le message de succès
    expect(screen.getByText("footer.subscriptionSuccess")).toBeInTheDocument();
    expect(screen.getByText("footer.subscriptionMessage")).toBeInTheDocument();

    // Utilise getByRole pour cibler le bouton de fermeture si `getByText` échoue
    fireEvent.click(screen.getByRole("button", { name: "footer.closeModal" }));
    expect(
      screen.queryByText("footer.subscriptionSuccess")
    ).not.toBeInTheDocument();
  });

  it("renders social media links with correct aria-labels", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("footer.facebookLink")).toBeInTheDocument();
    expect(screen.getByLabelText("footer.twitterLink")).toBeInTheDocument();
    expect(screen.getByLabelText("footer.linkedinLink")).toBeInTheDocument();
    expect(screen.getByLabelText("footer.githubLink")).toBeInTheDocument();
  });

  it("renders the privacy policy link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("footer.privacyPolicy")).toBeInTheDocument();
  });
});
