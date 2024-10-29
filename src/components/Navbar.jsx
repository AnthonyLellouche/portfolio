import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useDarkMode from "../params/useDarkMode";
import { useTranslation } from "react-i18next";
import i18n from "../params/i18n";

import { Menu } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const darkMode = useDarkMode();
  const { t } = useTranslation();

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
            src="./assets/astro.svg"
            alt="logo entreprise actuel"
            className="w-16"
          />
          <Link to="/#home" className="hover:text-gray-400">
            <div className="text-3xl font-bold">Tony</div>
          </Link>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex items-center justify-center gap-x-1.5 rounded-md bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <span
                  className={
                    selectedLanguage === "FR" ? "fi fi-fr" : "fi fi-gb"
                  }
                ></span>
                {selectedLanguage}
                <FaChevronDown
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </Menu.Button>
            </div>
            <Menu.Items
              transition
              className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
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
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label={menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
          >
            <RxHamburgerMenu className="text-green-400 size-8" />
          </button>
        </div>
        <div className="space-x-3 hidden md:flex px-2 font-semibold">
          <Link to="/#about" className="hover:text-gray-400">
            {t("navbar.aboutMe")}
          </Link>
          <Link to="/#service" className="hover:text-gray-400">
            {t("navbar.myServices")}
          </Link>
          <Link to="/#project" className="hover:text-gray-400">
            {t("navbar.myProjects")}
          </Link>
          <Link to="/#contact" className="hover:text-gray-400">
            {t("navbar.contact")}
          </Link>
        </div>

        {/* <Link
          to="/login"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full"
        >
          {t("navbar.login")}
        </Link> */}
      </div>
      {menuOpen && (
        <div
          className={`${
            darkMode
              ? "bg-gray-800 bg-opacity-90 text-white border-gray-700"
              : "bg-gray-100 bg-opacity-80 text-black border-gray-200"
          } md:hidden flex flex-col space-y-4 text-center p-4 rounded-xl my-4`}
        >
          <Link to="/#home" className="hover:text-gray-400">
            {t("navbar.home")}
          </Link>
          <Link to="/#about" className="hover:text-gray-400">
            {t("navbar.aboutMe")}
          </Link>
          <Link to="/#service" className="hover:text-gray-400">
            {t("navbar.myServices")}
          </Link>
          <Link to="/#project" className="hover:text-gray-400">
            {t("navbar.myProjects")}
          </Link>
          <Link to="/#contact" className="hover:text-gray-400">
            {t("navbar.contact")}
          </Link>
          {/* <Link
            aria-label={t("navbar.goToLogin")}
            to="/login"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full"
          >
            {t("navbar.login")}
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
