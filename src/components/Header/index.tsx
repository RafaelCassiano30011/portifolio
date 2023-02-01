/** @format */

import Container from "../../shared/Container";
import GiHubImage from "../../assets/header/header-github.png";
import Navegation from "./Navegation";

const Header = () => {
  return (
    <header className="h-[105px] border-y-cyan-200 border-y-2 sticky top-0 left-0 bg-neutral-900">
      <Container className="flex justify-between items-center">
        <img src={GiHubImage} />
        <Navegation
          links={[
            {
              link: "/",
              label: "Home",
            },
            {
              link: "about-me",
              label: "About me",
            },
            {
              link: "skill",
              label: "Skill",
            },
            {
              link: "projects",
              label: "Projects",
            },
            {
              link: "contact",
              label: "Contact",
            },
          ]}
        />
      </Container>
    </header>
  );
};
export default Header;
