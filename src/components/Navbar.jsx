import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { Menu } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { useTheme } from "../params/ThemeContext";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import i18n from "../params/i18n";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const { darkMode, toggleDarkMode } = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const browserLang = i18n.language || navigator.language.split("-")[0];
    setSelectedLanguage(browserLang === "fr" ? "FR" : "EN");
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng === "fr" ? "FR" : "EN");
  };

  const handleNavigation = (id) => {
    if (location.pathname !== "/portfolio/") {
      navigate("/portfolio/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`${
        darkMode
          ? "bg-black text-white border-b border-gray-700"
          : "bg-white text-black border-b border-gray-200"
      } px-8 md:px-12 lg:px-24 `}
    >
      <div className="container mx-auto py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2 gap-2">
          <img
            src={`${import.meta.env.BASE_URL}assets/astro.svg`}
            alt="logo entreprise actuel"
            className="w-16"
          />
          <div
            onClick={() => handleNavigation("home")}
            className="cursor-pointer text-3xl font-bold hover:text-gray-400"
          >
            Tony
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center justify-center gap-x-1.5 rounded-md bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <span
                className={selectedLanguage === "FR" ? "fi fi-fr" : "fi fi-gb"}
              ></span>
              {selectedLanguage}
              <FaChevronDown
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </Menu.Button>
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => changeLanguage("fr")}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      <span className="fi fi-fr mr-2"></span>
                      FR
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      <span className="fi fi-gb mr-2"></span>
                      EN
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
        <div className="hidden md:flex space-x-4 font-semibold">
          <button
            onClick={() => handleNavigation("about")}
            className="hover:text-gray-400"
          >
            {t("navbar.aboutMe")}
          </button>
          <button
            onClick={() => handleNavigation("service")}
            className="hover:text-gray-400"
          >
            {t("navbar.myServices")}
          </button>
          <button
            onClick={() => handleNavigation("project")}
            className="hover:text-gray-400"
          >
            {t("navbar.myProjects")}
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="hover:text-gray-400"
          >
            {t("navbar.contact")}
          </button>
          <div className="flex items-center gap-2">
            {darkMode ? (
              <LuSun
                className="cursor-pointer"
                onClick={() => toggleDarkMode(false)}
                title="Activer le mode clair"
              />
            ) : (
              <MdOutlineDarkMode
                className="cursor-pointer"
                onClick={() => toggleDarkMode(true)}
                title="Activer le mode sombre"
              />
            )}
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label={menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
        >
          <RxHamburgerMenu className="text-green-400 size-8" />
        </button>
      </div>
      {menuOpen && (
        <div
          className={`${
            darkMode
              ? "bg-gray-800 bg-opacity-90 text-white"
              : "bg-gray-100 bg-opacity-80 text-black"
          } md:hidden flex flex-col space-y-4 text-center p-4 rounded-xl my-4`}
        >
          <button
            onClick={() => handleNavigation("home")}
            className="hover:text-gray-400"
          >
            {t("navbar.home")}
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className="hover:text-gray-400"
          >
            {t("navbar.aboutMe")}
          </button>
          <button
            onClick={() => handleNavigation("service")}
            className="hover:text-gray-400"
          >
            {t("navbar.myServices")}
          </button>
          <button
            onClick={() => handleNavigation("project")}
            className="hover:text-gray-400"
          >
            {t("navbar.myProjects")}
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="hover:text-gray-400"
          >
            {t("navbar.contact")}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
