/** @format */

import { useId } from "react";
import Container from "../../shared/Container";
import Slider from "../../shared/Slider";
import Card from "./card";

const Projects = () => {
  const sliderId = useId();

  return (
    <Container id="projects" className="flex flex-col items-center  mb-28">
      <p className="font-semibold text-3xl text-white mb-10">Projetos</p>

      <div className="flex justify-between w-full px-[70px]">
        <Slider
          id={sliderId}
          breakpoints={{
            "0": {
              slidesPerView: 1.3,
              gap: 10,
              align: "center",
            },
            "640": {
              slidesPerView: 2.4,
              align: "start",
            },
            "768": {
              slidesPerView: 3,
            },
            "1024": {
              slidesPerView: 4,
              align: "center",
            },
          }}
        >
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Slider>
      </div>
    </Container>
  );
};
export default Projects;
