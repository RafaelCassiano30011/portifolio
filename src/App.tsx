/** @format */

import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Header from "./components/Header";
import "./styles/global.css";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skill />
      <Projects />
    </>
  );
}

export default App;
