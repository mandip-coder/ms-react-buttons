import * as React from "react";
import { ReactNode, HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {}

type PropsType = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  disabled?: boolean;
  props: ButtonProps;
};

const Button = ({ children, ...props }: PropsType) => {
  return <button {...props}>{children}</button>;
};

export { Button };
