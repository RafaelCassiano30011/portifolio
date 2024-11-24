/** @format */

import { NavLink } from "react-router-dom";
import Link from "../../shared/Link";

interface NavegationProps {
  links: {
    link: string;
    label?: string;
  }[];
}

const Navegation = ({ links }: NavegationProps) => {
  return (
    <nav className="flex flex-col lg:flex-row lg:gap-10">
      {links.map(({ link, label }, index) => {
        return (
          <>
            <a className="h-12 lg:h-fit flex items-center border-b border-b-white " href={link}>
              <p className="font-semibold text-base text-white pl-5 lg:px-0">{label}</p>
            </a>
            {links.length - 1 !== index && <p className="font-semibold text-base text-white max-lg:hidden">|</p>}
          </>
        );
      })}
    </nav>
  );
};
export default Navegation;
