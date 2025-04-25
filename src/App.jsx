import "./App.css";
import Footer from "./components/Footer";
import About from "./components/home/About";
import Banner from "./components/home/Banner";
import Contact from "./components/home/Contact";
import Process from "./components/home/Process";
import Projects from "./components/home/Projects";
import WorkTogether from "./components/home/WorkTogether";
import Navber from "./components/Navber";

function App() {
  return (
    <>
      <Navber />
      <Banner />
      <Process />
      <Projects />
      <WorkTogether />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
