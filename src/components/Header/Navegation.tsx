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
    <nav className="flex gap-10">
      {links.map(({ link, label }, index) => {
        return (
          <>
            <a href={link}>
              <p className="font-semibold text-base text-white">{label}</p>
            </a>
            {links.length - 1 !== index && <p className="font-semibold text-base text-white">|</p>}
          </>
        );
      })}
    </nav>
  );
};
export default Navegation;
