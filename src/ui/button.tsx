import { ButtonHTMLAttributes, JSX } from "react";

export function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return <button {...props}>{children}</button>;
}
