import Argentbank from "../assets/argentbank.png";
import Events from "../assets/724events.png";
import Ninacarducci from "../assets/ninacarducci.webp";
import Kasa from "../assets/kasa.png";
import Ohmyfood from "../assets/ohmyfood.png";
import Booki from "../assets/booki.jpg";

const projects = [
  {
    id: 1,
    name: "ArgentBank",
    technologies: "React & Redux & NodeJS",
    image: Argentbank,
    github: "https://github.com/AnthonyLellouche/argentBankRedux",
    description: "Création d'une application bancaire avec React.",
  },
  {
    id: 2,
    name: "724 Events",
    technologies: "React",
    image: Events,
    github: "https://github.com/AnthonyLellouche/724events",
    description:
      "Site internet d'une agence événementiel, deboggage du site.",
  },
  {
    id: 3,
    name: "Nina-Carducci",
    technologies: "SEO, accessibilité, Lighthouse",
    image: Ninacarducci,
    github: "https://github.com/AnthonyLellouche/nina-carducci",
    description: "Optimisation du référencement du site de Nina Carducci.",
  },
  {
    id: 4,
    name: "Kasa",
    technologies: "React, CRA et SCSS",
    image: Kasa,
    github: "https://github.com/AnthonyLellouche/kasa",
    description: "Création d'une application web de location immobilière.",
  },
  {
    id: 5,
    name: "OhmyfoodParis",
    technologies: "HTML & SCSS",
    image: Ohmyfood,
    github: "https://github.com/AnthonyLellouche/ohmyfoodparis",
    description:
      "Développer un site mobile-first qui répertorie les menus de restaurants.",
  },
  {
    id: 6,
    name: "Booki",
    technologies: "HTML & CSS",
    image: Booki,
    github: "https://github.com/AnthonyLellouche/booki",
    description: "Création d'un site d'une agence de voyage.",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt=""
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-500 mb-4">{project.technologies}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
