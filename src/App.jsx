import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
