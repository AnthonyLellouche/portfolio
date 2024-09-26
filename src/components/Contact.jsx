/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Me contacter
            </h3>
            <p>Vous voulez en savoir plus sur moi? Contactez moi!</p>
            <div className="mb-4 mt-8">
              <FaEnvelope
                className="inline-block text-green-400 mr-2"
                aria-hidden="true"
              />
              <a
                href="mailto:an.lellouche@gmail.com"
                className="hover:underline"
              >
                an.lellouche@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone
                className="inline-block text-green-400 mr-2"
                aria-hidden="true"
              />
              <span>06.25.78.27.84</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt
                className="inline-block text-green-400 mr-2"
                aria-hidden="true"
              />
              <span>1501, Routes des Dolines, 06600 Valbonne.</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Entrez votre nom"
                  aria-label="Indiquez votre nom"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Votre e-mail
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Entrez votre email"
                  aria-label="Indiquez votre email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Votre message
                </label>
                <textarea
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Ecrivez votre message"
                  rows="4"
                  aria-label="Indiquez votre message"
                  required
                />
              </div>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-8 py-4 rounded-full">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      {isSubmitted && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-20"
          role="dialog"
          aria-labelledby="modalTitle"
        >
          <div className="bg-black p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Message envoyé</h3>
            <p>
              Merci de m'avoir contacté. Je vous répondrai dès que possible.
            </p>
            <button
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 mt-5 rounded-full"
              onClick={closeModal}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
