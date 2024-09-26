import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src="/assets/profil.webp"
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        Je suis{"  "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Anthony Lellouche
        </span>
        , intégrateur Web chez NEHS Digital/Enovacom
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Spécialiste dans la création de sites modernes et responsives
      </p>
      <div className="mt-8 space-x-4">
        <Link
          to="/#contact"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full"
        >
          Me contacter
        </Link>
        <Link
          to="/#service"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full"
        >
          Mes services
        </Link>
      </div>
    </div>
  );
};

export default Hero;
