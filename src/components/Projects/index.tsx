/** @format */

import Container from "../../shared/Container";
import Slider from "../../shared/Slider";
import Card from "./card";

const Projects = () => {
  return (
    <Container id="projects" className="flex flex-col items-center">
      <p className="font-semibold text-3xl text-white mb-10">Projetos</p>

      <div className="flex justify-between w-full px-[70px]">
        {window.innerWidth < 1024 ? (
          <Slider>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Slider>
        ) : (
          <>
            {" "}
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </>
        )}
      </div>
    </Container>
  );
};
export default Projects;
