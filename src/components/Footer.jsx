/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  const closeModal = () => {
    setIsSubscribed(false);
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Anthony</h3>
            <p className="text-gray-400">
              Intégrateur Web basé sur Sophia-Antipolis, spécialisé dans
              l'Imagerie Médicale.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form
              className="flex items-center justify-center"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Votre adresse mail"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                M'abonner
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            {new Date().getFullYear()} Anthony &copy;
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.facebook.com/tonyy459/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/Tonyy459"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-lellouche-2722451a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AnthonyLellouche"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/privacy" className="text-gray-400 hover:text-white">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
      {isSubscribed && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-20">
          <div className="bg-black p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Abonnement réussi</h3>
            <p>Merci de vous être abonné à notre newsletter.</p>
            <button
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 mt-5 rounded-full"
              onClick={closeModal}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
