import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
    </div>
  );
};

export default App;
