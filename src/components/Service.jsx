const services = [
  {
    id: 1,
    title: "Applications",
    description:
      "Développe des sites vitrines, e-commerce, applications web, responsive",
  },
  {
    id: 2,
    title: "UI & UX",
    description: "Une expérience fluide et magnifique pour vos clients",
  },
  {
    id: 3,
    title: "Spécialiste Imagerie Médicale",
    description: "Création des applications web sur le médical",
  },
  {
    id: 4,
    title: "Accessibilité",
    description:
      "Revu de la sémantique ARIA, et de quelques normes sur l'accessibilité",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Mes services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
