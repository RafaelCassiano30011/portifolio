/** @format */

import { HTMLProps, ReactHTMLElement } from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "", ...rest }: ContainerProps) => {
  return (
    <div {...rest} className={`w-full h-full max-w-[1220px] mx-auto ${className}`}>
      {children}
    </div>
  );
};
export default Container;
