/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gray-100 text-gray-800 py-10 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8">
            Politique de Confidentialité
          </h1>

          <p className="mb-4">
            Chez Anthony Portfolio, accessible depuis{" "}
            <a
              href={`${import.meta.env.BASE_URL}#home`}
              className="text-blue-500 hover:underline"
              aria-label="Accéder à anthonyportfolio.com"
            >
              anthonylellouche.github.io/portfolio/
            </a>
            , la confidentialité de nos visiteurs est une priorité absolue. Ce
            document de politique de confidentialité décrit les types
            d'informations collectées et enregistrées par Anthony Portfolio et
            comment nous les utilisons.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            1. Collecte des Informations
          </h2>
          <p className="mb-4">
            Les informations que vous nous fournissez directement incluent :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Nom et adresse e-mail lorsque vous nous contactez directement via
              des formulaires de contact ou par e-mail.
            </li>
            <li>
              Les commentaires ou toute autre information que vous nous envoyez
              volontairement.
            </li>
          </ul>
          <p className="mb-4">
            Nous ne collectons pas de données sensibles comme votre adresse
            physique, vos coordonnées bancaires, ou autres données personnelles
            sans votre consentement préalable.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            2. Utilisation des Informations
          </h2>
          <p className="mb-4">
            Les informations que nous collectons sont utilisées principalement
            pour :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Répondre à vos questions ou demandes de renseignements.</li>
            <li>
              Améliorer les services proposés sur le portfolio, comme l'ajout de
              nouvelles sections ou projets.
            </li>
            <li>
              Envoyer des mises à jour ou des notifications si vous avez opté
              pour une telle communication.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            3. Partage des Informations
          </h2>
          <p className="mb-4">
            Nous ne vendons, n'échangeons, ni ne louons vos informations
            personnelles à des tiers. Toutefois, nous pouvons partager des
            informations non personnelles (comme des statistiques anonymes) avec
            des partenaires pour améliorer nos services.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">4. Sécurité</h2>
          <p className="mb-4">
            Nous mettons en œuvre des mesures de sécurité standard pour protéger
            vos informations contre l'accès non autorisé, la modification ou la
            divulgation. Cependant, aucune méthode de transmission ou de
            stockage électronique n'est totalement sécurisée, nous ne pouvons
            donc pas garantir une sécurité absolue.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">5. Vos Droits</h2>
          <p className="mb-4">
            Conformément au RGPD et à d'autres lois sur la protection des
            données, vous avez le droit d'accéder, de corriger, de supprimer ou
            de limiter le traitement de vos données personnelles. Si vous avez
            des questions ou souhaitez exercer vos droits, veuillez nous
            contacter à{" "}
            <a
              href="mailto:an.lellouche@gmail.com"
              className="text-blue-500 hover:underline"
              aria-label="Envoyer un email à Anthony Portfolio"
            >
              an.lellouche@gmail.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">6. Cookies</h2>
          <p className="mb-4">
            Ce site utilise des cookies pour analyser le trafic et améliorer
            votre expérience utilisateur. Vous pouvez désactiver les cookies via
            les paramètres de votre navigateur, mais cela peut limiter certaines
            fonctionnalités du site.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            7. Modifications de la Politique de Confidentialité
          </h2>
          <p className="mb-4">
            Cette politique peut être mise à jour de temps à autre pour refléter
            des changements dans nos pratiques. Toute modification sera publiée
            sur cette page, et nous vous encourageons à consulter régulièrement
            notre politique de confidentialité pour rester informé.
          </p>

          <p className="mt-6">
            Si vous avez des questions concernant cette politique de
            confidentialité, n'hésitez pas à nous contacter via{" "}
            <a
              href="mailto:an.lellouche@gmail.com"
              className="text-blue-500 hover:underline"
              aria-label="Envoyer un email à Anthony Portfolio"
            >
              an.lellouche@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
