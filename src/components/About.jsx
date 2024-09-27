/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-12">
          A propos de moi
        </h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src="./assets/aboutme.webp"
            alt="Photo d'Anthony"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              Fort d’une passion prononcée pour le développement web, je me suis
              spécialisé dans le secteur médical, avec un intérêt particulier
              pour le domaine de l’imagerie médicale. Ce secteur m’inspire par
              son potentiel à améliorer les diagnostics et les soins grâce à des
              solutions technologiques innovantes et performantes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="Compétence HTML et CSS"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="Compétence React JS"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="angular" className="w-2/12">
                  Angular
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="Compétence Angular"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  NodeJS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="Compétence NodeJS"
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
                <p>Années d'expériences</p>
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                  aria-label="10 projets terminés"
                >
                  10 +
                </h2>
                <p>Projets terminés</p>
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                  aria-label="2 clients satisfaits"
                >
                  2 +
                </h2>
                <p>Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
