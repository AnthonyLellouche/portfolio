import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ThemeProvider } from "./params/ThemeContext";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";

import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true, 
        element: (
          <>
            <Hero id="home" />
            <About id="about" />
            <Service id="service" />
            <Projects id="project" />
            <Contact id="contact" />
          </>
        ),
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
