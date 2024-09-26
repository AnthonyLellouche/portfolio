import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link to="/#home" className="hover:text-gray-400">
          <div className="text-2xl font-bold">Anthony</div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white"
          >
            <RxHamburgerMenu className=" text-green-400 size-8" />
          </button>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link to="/#home" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/#about" className="hover:text-gray-400">
            À propos de moi
          </Link>
          <Link to="/#service" className="hover:text-gray-400">
            Mes services
          </Link>
          <Link to="/#project" className="hover:text-gray-400">
            Mes projets
          </Link>
          <Link to="/#contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        <Link
          to="/login"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full"
        >
          Connexion
        </Link>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-90 text-white flex flex-col space-y-4 mt-4 text-center p-4 rounded-lg">
          <Link to="/#home" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/#about" className="hover:text-gray-400">
            À propos de moi
          </Link>
          <Link to="/#service" className="hover:text-gray-400">
            Mes services
          </Link>
          <Link to="/#project" className="hover:text-gray-400">
            Mes projets
          </Link>
          <Link to="/#contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full"
          >
            Connexion
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
