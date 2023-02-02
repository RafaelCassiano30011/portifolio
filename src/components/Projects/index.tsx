/** @format */

import Container from "../../shared/Container";
import Card from "./card";

const Projects = () => {
  return (
    <Container id="projects" className="flex flex-col items-center">
      <p className="font-semibold text-3xl text-white mb-10">Habilidades</p>
      <div className="flex justify-between w-full px-[70px]">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </Container>
  );
};
export default Projects;
