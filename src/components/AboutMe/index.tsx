/** @format */

import Container from "../../shared/Container";
import Profile from "../../assets/about-me/profile.png";

const AboutMe = () => {
  return (
    <div id="about-me" className="mt-[91px] w-full mb-[86px] px-5 lg:px-[10px]">
      <Container className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10">
        <img src={Profile} alt="Foto Rafael Cassiano" />
        <div className="w-full max-w-[700px] text-left">
          <h1 className="font-semibold text-xl lg:text-5xl text-white mb-10">Rafael Cassiano de Souza</h1>
          <p className="font-normal text-sm lg:text-lg text-white mb-5">
            Olá, meu nome é Rafael, tenho 23 anos. Minha jornada profissional começou como aprendiz de Auxiliar de
            Estoque na Lorenzetti, onde aprendi os princípios de organização, trabalho em equipe e dedicação. Durante a
            adolescência, também fiz um estágio em telemarketing. Aos 20 anos, fui introduzido ao mundo da programação
            por meio de um amigo, o que me levou a ingressar na empresa onde ele trabalhava, e onde atuo até hoje.
          </p>
          <p className="font-normal text-sm text-white mb-5">
            Desde então, tive um crescimento expressivo na área de desenvolvimento web. Comecei com conhecimentos
            básicos em programação e, com muito esforço, evoluí significativamente. Nos últimos dois anos, atuei como
            desenvolvedor web júnior na Agência e-Plus, aprimorando minhas habilidades em tecnologias como ReactJs,
            NodeJs, Typescript, Javascript, CSS, TailwindCSS, Deco, Vtex io, Next.js, Styled-components e HTML5. Essa
            experiência tem me permitido unir minha paixão pela tecnologia com minha criatividade para desenvolver
            soluções digitais envolventes.
          </p>
        </div>
      </Container>
      ;
    </div>
  );
};
export default AboutMe;
