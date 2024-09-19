import Aboutme from "../assets/aboutme.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          A propos de moi
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Aboutme}
            alt=""
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
