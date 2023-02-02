/** @format */

import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Header from "./components/Header";
import "./styles/global.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
