import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container mx-auto py-2 flex  md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Anthony</div>
        <div className="space-x-6">
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
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full">
          Connexion
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
