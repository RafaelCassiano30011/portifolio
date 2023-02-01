/** @format */

import { Link as LinkReact, LinkProps as LinkReactProps } from "react-router-dom";

export interface LinkProps extends Omit<LinkReactProps, "to"> {
  link: string;
  children?: React.ReactNode;
}

const Link = ({ children, link = "/", ...rest }: LinkProps) => {
  return (
    <LinkReact {...rest} to={link}>
      {children}
    </LinkReact>
  );
};
export default Link;
