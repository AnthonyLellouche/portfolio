import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useDarkMode from "../params/useDarkMode";

const Hero = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } text-center py-16 px-2`}
    >
      <img
        src="./assets/profil.webp"
        alt={t("hero.profilePhotoAlt")}
        className="mx-auto mb-8 w-64 h-64 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        {t("hero.iam")}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Anthony Lellouche
        </span>
        , {t("hero.jobTitle")}
      </h1>
      <p
        className={`mt-4 text-lg ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {t("hero.specialistInModernSites")}
      </p>
      <div className="flex flex-row mt-4 p-4 rounded-lg items-center justify-center gap-6">
        <Link
          to="/#service"
          aria-label={t("hero.viewServices")}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-200 hover:scale-x-105 px-4 py-2 rounded-full"
        >
          {t("hero.myServices")}
        </Link>
        <Link
          to="/#project"
          aria-label={t("hero.viewProjects")}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-200 hover:scale-x-105 px-4 py-2 rounded-full"
        >
          {t("hero.myProjects")}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
