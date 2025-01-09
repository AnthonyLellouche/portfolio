import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../params/ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={`relative text-white text-center h-[80vh] min-h-[600px] flex flex-col items-center justify-center`}
    >
      <video
        className="absolute top-0 left-0 w-full h-[100%] object-cover z-0"
        src={`${import.meta.env.BASE_URL}assets/animate-bg.mp4`}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 z-1"
        aria-hidden="true"
      ></div>
      <div className="relative z-10 px-4">
        <img
          src={`${import.meta.env.BASE_URL}assets/dev-profil.webp`}
          alt={t("hero.profilePhotoAlt")}
          className="mx-auto mb-8 w-60 h-60 mt-3 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-3xl sm:text-4xl font-bold">
          {t("hero.iam")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Anthony Lellouche
          </span>
          , {t("hero.jobTitle")}
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          {t("hero.specialistInModernSites")}
        </p>
        <div className="flex flex-row mt-4 p-4 rounded-lg items-center justify-center gap-6">
          <a
            href="#service"
            aria-label={t("hero.viewServices")}
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-200 hover:scale-x-105 px-4 py-2 rounded-full"
          >
            {t("hero.myServices")}
          </a>
          <a
            href="#project"
            aria-label={t("hero.viewProjects")}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-200 hover:scale-x-105 px-4 py-2 rounded-full"
          >
            {t("hero.myProjects")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
