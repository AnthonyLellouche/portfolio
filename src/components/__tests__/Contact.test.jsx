import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact";
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

describe("Contact Component", () => {
  const renderWithProviders = (ui) =>
    render(
      <ThemeProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </ThemeProvider>
    );

  it("renders the contact component correctly in light mode", () => {
    renderWithProviders(<Contact />);

    const contactContainer = screen.getByTestId("contact");
    expect(contactContainer).toHaveClass("bg-white text-black"); // Mode clair
  });

  it("renders the contact component correctly in dark mode", () => {
    global.window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true, // Simule que le mode sombre est activé
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    renderWithProviders(<Contact />);

    const contactContainer = screen.getByTestId("contact");
    expect(contactContainer).toHaveClass("bg-black text-white"); // Mode sombre
  });

  it("displays the success modal after form submission", () => {
    renderWithProviders(<Contact />);

    const emailInput = screen.getByLabelText("contact.email");
    const firstNameInput = screen.getByLabelText("contact.firstName");
    const lastNameInput = screen.getByLabelText("contact.lastName");
    const phoneInput = screen.getByLabelText("contact.phone");
    const companyInput = screen.getByLabelText("contact.company");
    const messageTextarea = screen.getByLabelText("contact.message");
    const privacyCheckbox = screen.getByRole("checkbox", {
      name: /contact\.privacy/i,
    });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(companyInput, { target: { value: "Company" } });
    fireEvent.change(messageTextarea, { target: { value: "Hello" } });
    fireEvent.click(privacyCheckbox);

    const submitButton = screen.getByRole("button", { name: /contact\.send/i });
    fireEvent.click(submitButton);

    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
    expect(
      screen.getByText("contact.messageSent")
    ).toBeInTheDocument(); // Vérifie le texte de la modal
  });

  it("closes the modal when the close button is clicked", () => {
    renderWithProviders(<Contact />);

    // Remplir le formulaire pour afficher la modal
    const emailInput = screen.getByLabelText("contact.email");
    const firstNameInput = screen.getByLabelText("contact.firstName");
    const lastNameInput = screen.getByLabelText("contact.lastName");
    const phoneInput = screen.getByLabelText("contact.phone");
    const companyInput = screen.getByLabelText("contact.company");
    const messageTextarea = screen.getByLabelText("contact.message");
    const privacyCheckbox = screen.getByRole("checkbox", {
      name: /contact\.privacy/i,
    });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(companyInput, { target: { value: "Company" } });
    fireEvent.change(messageTextarea, { target: { value: "Hello" } });
    fireEvent.click(privacyCheckbox);

    const submitButton = screen.getByRole("button", { name: /contact\.send/i });
    fireEvent.click(submitButton);

    const closeButton = screen.getByRole("button", { name: /contact\.close/i });
    fireEvent.click(closeButton);

    const modal = screen.queryByRole("dialog");
    expect(modal).not.toBeInTheDocument(); // La modal est fermée
  });
});