import { useState } from "react";
import React from "react";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useTheme } from "../params/ThemeContext";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { darkMode } = useTheme();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-black text-white border-t border-gray-700"
          : "bg-white text-black border-t border-gray-200"
      } py-8`}
      id="contact"
           data-testid="contact"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t("contact.title")}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              {t("contact.contactMe")}
            </h3>
            <p>{t("contact.moreInfo")}</p>
            <div className="my-4">
              <FaEnvelope
                className="inline-block text-green-400 mr-2"
                aria-hidden="true"
              />
              <a
                href="mailto:an.lellouche@gmail.com"
                className={`${
                  darkMode ? "text-white" : "text-black"
                } hover:underline`}
              >
                an.lellouche@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt
                className="inline-block text-green-400 mr-2"
                aria-hidden="true"
              />
              <span>{t("contact.address")}</span>
            </div>
          </div>
          <div className="flex-1 w-full pt-14">
            <form
              className="max-w-md mx-auto"
              onSubmit={handleSubmit}
              id="form"
            >
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className={`block py-2.5 px-0 w-full text-sm ${
                    darkMode ? "text-white" : "text-gray-900"
                  } bg-transparent border-0 border-b-2 ${
                    darkMode ? "border-gray-600" : "border-gray-300"
                  } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className={`peer-focus:font-medium absolute text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                  {t("contact.email")}
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className={`block py-2.5 px-0 w-full text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    } bg-transparent border-0 border-b-2 ${
                      darkMode ? "border-gray-600" : "border-gray-300"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className={`peer-focus:font-medium absolute text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    } duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                  >
                    {t("contact.firstName")}
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className={`block py-2.5 px-0 w-full text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    } bg-transparent border-0 border-b-2 ${
                      darkMode ? "border-gray-600" : "border-gray-300"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className={`peer-focus:font-medium absolute text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    } duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                  >
                    {t("contact.lastName")}
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="floating_phone"
                    id="floating_phone"
                    className={`block py-2.5 px-0 w-full text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    } bg-transparent border-0 border-b-2 ${
                      darkMode ? "border-gray-600" : "border-gray-300"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className={`peer-focus:font-medium absolute text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    } duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                  >
                    {t("contact.phone")}
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className={`block py-2.5 px-0 w-full text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    } bg-transparent border-0 border-b-2 ${
                      darkMode ? "border-gray-600" : "border-gray-300"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_company"
                    className={`peer-focus:font-medium absolute text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    } duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                  >
                    {t("contact.company")}
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  name="floating_message"
                  id="floating_message"
                  rows="2"
                  className={`block py-2.5 px-0 w-full text-sm ${
                    darkMode ? "text-white" : "text-gray-900"
                  } bg-transparent border-0 border-b-2 ${
                    darkMode ? "border-gray-600" : "border-gray-300"
                  } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="floating_message"
                  className={`peer-focus:font-medium absolute text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                  {t("contact.message")}
                </label>
              </div>

              <fieldset>
                <div className="flex items-center mb-4">
                  <input
                    required
                    id="checkbox-1"
                    type="checkbox"
                    value=""
                    className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ${
                      darkMode ? "dark:bg-gray-700 dark:border-gray-600" : ""
                    }`}
                  />
                  <label
                    htmlFor="checkbox-1"
                    className={`ms-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-900"
                    }`}
                  >
                    {t("contact.privacy")}{" "}
                    <Link to="/privacy">
                      <span className="text-blue-600 hover:underline dark:text-blue-500">
                        {t("contact.privacyPolicy")}
                      </span>
                    </Link>
                  </label>
                </div>
              </fieldset>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-8 py-4 rounded-full"
                >
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isSubmitted && (
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
              {t("contact.messageSent")}
            </h3>
            <p>{t("contact.thankYouMessage")}</p>
            <button
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 mt-5 rounded-full"
              onClick={closeModal}
            >
              {t("contact.close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
