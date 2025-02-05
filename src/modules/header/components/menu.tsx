"use client";
import { JSX } from "react";
import { Navigation } from "./navigation";
import { ExitButton } from "./exit-button";
import cn from "classnames";
import { useMenuStore } from "../stores/menu-store";

interface IProps {
  className?: string;
}

const MENU_CLASSES = {
  root: "absolute top-0 left-0 right-0 px-4 pt-20 pb-4 z-10 bg-[#fff] transition-transform duration-300",
  open: "translate-y-0",
  close: "-translate-y-full pointer-events-none",
} as const;

export function Menu({ className }: IProps): JSX.Element {
  const isOpen = useMenuStore((state) => state.isOpen);

  return (
    <div
      className={cn(
        MENU_CLASSES.root,
        { [MENU_CLASSES.open]: isOpen, [MENU_CLASSES.close]: !isOpen },
        className
      )}
    >
      <Navigation />
      <ExitButton className="px-0" />
    </div>
  );
}
