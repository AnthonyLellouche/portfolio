import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

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

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/portfolio" : "";
  return (
    <ThemeProvider>
      {" "}
      <Router basename={basename}>
        <ScrollToHashElement />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Hero id="home" />
                <About id="about" />
                <Service id="service" />
                <Projects id="project" />
                <Contact id="contact" />

                <Footer />
              </div>
            }
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
