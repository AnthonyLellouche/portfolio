import { useTranslation } from "react-i18next";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import useDarkMode from "../params/useDarkMode";

const Service = () => {
  const { i18n } = useTranslation();
  const darkMode = useDarkMode();
  const language = i18n.language === "fr" ? "fr" : "en";
  const services = data[language].services;

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white border-t border-gray-700" : "bg-white text-black border-t border-gray-200"
      } pt-12 pb-20`}
      id="service"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          {i18n.language === "fr" ? "Mes services" : "My Services"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              } pl-6 pr-4 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="text-right pt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p
                className={`mt-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {service.description}
              </p>
              <Link
                to="/#contact"
                aria-label={`Me contacter pour ${service.title}`}
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                <p>{i18n.language === "fr" ? "Me contacter" : "Contact me"}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
