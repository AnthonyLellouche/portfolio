import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useDarkMode from "../params/useDarkMode";
import { useTranslation } from "react-i18next"; 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const darkMode = useDarkMode();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } px-8 md:px-12 lg:px-24`}
    >
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link to="/#home" className="hover:text-gray-400">
          <div className="text-2xl font-bold">Anthony</div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label={menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
          >
            <RxHamburgerMenu className="text-green-400 size-8" />
          </button>
        </div>
        <div className="space-x-6 hidden md:flex px-2">
          <Link
            to="/#home"
            className="hover:text-gray-400"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {t("navbar.home")}
          </Link>
          <Link
            to="/#about"
            className="hover:text-gray-400"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {t("navbar.aboutMe")}
          </Link>
          <Link
            to="/#service"
            className="hover:text-gray-400"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {t("navbar.myServices")}
          </Link>
          <Link
            to="/#project"
            className="hover:text-gray-400"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {t("navbar.myProjects")}
          </Link>
          <Link
            to="/#contact"
            className="hover:text-gray-400"
            style={{
              whiteSpace: "nowrap",
            }}
          >
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
        <div className="md:hidden bg-gray-800 bg-opacity-90 text-white flex flex-col space-y-4 mt-4 text-center p-4 rounded-lg">
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