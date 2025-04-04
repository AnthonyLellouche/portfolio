import React from "react";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../params/ThemeContext";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  const closeModal = () => {
    setIsSubscribed(false);
  };

  return (
    <footer
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } py-8`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Anthony</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>
              {t("footer.intro")}
            </p>
          </div>
          <div className="flex-1 w-full">
            <form
              className="flex items-center justify-center"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className={`w-full p-2 rounded-l-lg ${
                  darkMode
                    ? "bg-gray-800 border-gray-600"
                    : "bg-gray-200 border-gray-400"
                } focus:outline-none focus:border-green-400`}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
              >
                {t("footer.subscribeButton")}
              </button>
            </form>
          </div>
        </div>

        <div
          className={`border-t ${
            darkMode ? "border-gray-600" : "border-gray-300"
          } pt-4 flex flex-col md:flex-row justify-between items-center`}
        >
          <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>
            {new Date().getFullYear()} Anthony &copy;
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.facebook.com/tonyy459/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
              aria-label={t("footer.facebookLink")}
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/Tonyy459"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
              aria-label={t("footer.twitterLink")}
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-lellouche-2722451a0/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
              aria-label={t("footer.linkedinLink")}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AnthonyLellouche"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
              aria-label={t("footer.githubLink")}
            >
              <FaGithub />
            </a>
          </div>
          <Link to="/portfolio/privacy">
            <div className="flex space-x-4">
              <p
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {t("footer.privacyPolicy")}
              </p>
            </div>
          </Link>
        </div>
      </div>

      {isSubscribed && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80"
          role="dialog"
          aria-labelledby="modalTitle"
        >
          <div
            className={`${
              darkMode ? "bg-black" : "bg-gray-100"
            } p-6 rounded-lg text-center`}
          >
            <h3 className="text-2xl font-bold mb-4">
              {t("footer.subscriptionSuccess")}
            </h3>
            <p>{t("footer.subscriptionMessage")}</p>
            <button
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 mt-5 rounded-full"
              onClick={closeModal}
              aria-label={t("footer.closeModal")}
            >
              {t("footer.closeButton")}
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
