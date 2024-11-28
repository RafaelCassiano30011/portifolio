/** @format */

import Container from "../../shared/Container";
import GiHubImage from "../../assets/header/header-github.png";
import Navegation from "./Navegation";
import Menu from "../../shared/Menu";

const Header = () => {
  const Nav = (
    <Navegation
      links={[
        {
          link: "/",
          label: "Home",
        },
        {
          link: "#about-me",
          label: "About me",
        },
        {
          link: "#skill",
          label: "Skill",
        },
        {
          link: "#projects",
          label: "Projects",
        },
        {
          link: "#contact",
          label: "Contact",
        },
      ]}
    />
  );

  return (
    <header className="h-[105px] border-y-cyan-200 border-y-2 sticky top-0 left-0 z-10 bg-neutral-900 px-5">
      <Container className="flex justify-between items-center">
        <div className="contents lg:hidden">
          <Menu>{Nav}</Menu>
        </div>

        <img src={GiHubImage} />

        <div className="hidden lg:contents">{Nav}</div>
      </Container>
    </header>
  );
};
export default Header;
