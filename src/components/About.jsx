import useDarkMode from "../params/useDarkMode";
import { useTranslation } from "react-i18next";

const About = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } py-10`}
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-12">
          {t("about.aboutTitle")}
        </h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src="./assets/aboutme.webp"
            alt={t("about.costumePhotoAlt")}
            className="w-72 h-96 rounded-md object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}">
              {t("about.description")}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div
                  className={`${
                    darkMode ? "bg-gray-800" : "bg-gray-200"
                  } grow rounded-full h-2.5`}
                >
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={t("about.skill.htmlcss")}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div
                  className={`${
                    darkMode ? "bg-gray-800" : "bg-gray-200"
                  } grow rounded-full h-2.5`}
                >
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={t("about.skill.react")}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="angular" className="w-2/12">
                  Angular
                </label>
                <div
                  className={`${
                    darkMode ? "bg-gray-800" : "bg-gray-200"
                  } grow rounded-full h-2.5`}
                >
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={t("about.skill.angular")}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="nodejs" className="w-2/12">
                  NodeJS
                </label>
                <div
                  className={`${
                    darkMode ? "bg-gray-800" : "bg-gray-200"
                  } grow rounded-full h-2.5`}
                >
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={t("about.skill.node")}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h2
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                  aria-label="3 années d'expérience"
                >
                  3
                </h2>
                <p>{t("about.xp.years")}</p>
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                  aria-label="10 projets terminés"
                >
                  10 +
                </h2>
                <p>{t("about.xp.projects")}</p>
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                  aria-label="2 clients satisfaits"
                >
                  2 +
                </h2>
                <p>{t("about.xp.satisfied")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
