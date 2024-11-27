import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import { ThemeProvider } from "./params/ThemeContext";

import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Service,
} from "./components";

import { Privacy, Login } from "./pages";

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
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
