import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white px-8 md:px-12 lg:px-24">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link to="/#home" className="hover:text-gray-400">
          <div className="text-2xl font-bold">Anthony</div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <RxHamburgerMenu className=" text-green-400 size-8" />
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
            Home
          </Link>
          <Link
            to="/#about"
            className="hover:text-gray-400"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            À propos de moi
          </Link>
          <Link
            to="/#service"
            className="hover:text-gray-400"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            Mes services
          </Link>
          <Link
            to="/#project"
            className="hover:text-gray-400"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            Mes projets
          </Link>
          <Link
            to="/#contact"
            className="hover:text-gray-400"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            Contact
          </Link>
        </div>

        {/* <Link
          to="/login"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full"
        >
          Connexion
        </Link> */}
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-90 text-white flex flex-col space-y-4 mt-4 text-center p-4 rounded-lg">
          <Link
            to="/#home"
            className="hover:text-gray-400"
            aria-label="Aller à la section Accueil"
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="hover:text-gray-400"
            aria-label="Aller à la section a propos de moi"
          >
            À propos de moi
          </Link>
          <Link
            to="/#service"
            className="hover:text-gray-400"
            aria-label="Aller à la section services"
          >
            Mes services
          </Link>
          <Link
            to="/#project"
            className="hover:text-gray-400"
            aria-label="Aller à la section projets"
          >
            Mes projets
          </Link>
          <Link
            to="/#contact"
            className="hover:text-gray-400"
            aria-label="Aller à la section Contact"
          >
            Contact
          </Link>
          {/* <Link
            aria-label="Aller à la section connexion"
            to="/login"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full"
          >
            Connexion
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
