import data from "../data/data.json";

const Projects = () => {
  const { projects } = data;

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
                src={`${import.meta.env.BASE_URL}assets/${project.image}`}
                alt={project.name || "Image du projet"}
                className="rounded-lg mb-4 w-full h-48 object-cover"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir le projet ${project.name} sur GitHub`}
              >
                GitHub
              </a>
              {project.site && (
                <a
                  href={project.site}
                  className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visiter le site de ${project.name}`}
                >
                  Visiter le site
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
