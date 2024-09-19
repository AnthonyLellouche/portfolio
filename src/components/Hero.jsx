/* eslint-disable react/no-unescaped-entities */
import HeroImage from "../assets/profil.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        C'est{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Anthony Lellouche
        </span>
        , Intégrateur Web chez NEHS Digital/Enovacom
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Spécialiste dans la création des sites modernes et responsives
      </p>
      <div>
        <button>Me contacter</button>
        <button>Resume</button>
      </div>
    </div>
  );
};

export default Hero;
