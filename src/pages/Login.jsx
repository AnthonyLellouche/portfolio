const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-40 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Connexion
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Adresse e-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 focus:outline-none sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mot de passe
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    aria-label="Récupérer le mot de passe oublié"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Mot de passe perdu?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 focus:outline-none sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div className="flex justify-center">
              {" "}
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-x-105 px-4 py-2 rounded-full"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
