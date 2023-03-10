/** @format */

import Container from "../../shared/Container";
import Image from "./Image";
import logoHtml from "../../assets/skills/logo-html.png";
import logoCss from "../../assets/skills/logo-css.png";
import logoJavascript from "../../assets/skills/logo-javascript.png";
import logoTypescript from "../../assets/skills/logo-typescript.png";
import logoReact from "../../assets/skills/logo-react.png";
import logoNextJs from "../../assets/skills/logo-next-js.png";
import logoNodeJs from "../../assets/skills/logo-nodejs.png";
import logoSass from "../../assets/skills/logo-sass.png";
import logoTailwindCss from "../../assets/skills/logo-tailwind-css.png";
import logoVtex from "../../assets/skills/logo-vtex.png";
import logoGitHub from "../../assets/skills/logo-github.png";

const Skill = () => {
  return (
    <Container id="skill" className="flex flex-col items-center mb-[100px]">
      <p className="font-semibold text-3xl text-white mb-10">Habilidades</p>
      <div className="flex gap-10 justify-center items-center">
        <Image src={logoHtml} />
        <Image src={logoCss} />
        <Image src={logoJavascript} />
        <Image src={logoTypescript} />
        <Image src={logoReact} />
        <Image src={logoNextJs} />
        <Image src={logoNodeJs} />
        <Image src={logoSass} />
        <Image src={logoTailwindCss} />
        <Image src={logoVtex} />
        <Image src={logoGitHub} />
      </div>
    </Container>
  );
};
export default Skill;
