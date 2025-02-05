import { JSX } from "react";
import { Logo } from "./logo";
import { ShowMenuButton } from "./show-menu-button";
import { ExitButton } from "./exit-button";
import { Menu } from "./menu";
import { Navigation } from "@/modules/header/components/navigation";

export function Header(): JSX.Element {
  return (
    <header className="relative border-b border-gray">
      <div className="px-4 flex h-[60px] items-center z-20 relative bg-while">
        <Logo />
        <Navigation className="mobile:hidden ml-[240px]" />
        <ExitButton className="mobile:hidden ml-auto" />
        <ShowMenuButton className="desktop:hidden ml-auto" />
      </div>
      <Menu className="desktop:hidden" />
    </header>
  );
}
