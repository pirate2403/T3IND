"use client";
import { JSX } from "react";
import { Button } from "@/ui/button";
import cn from "classnames";
import { useMenuStore } from "../stores/menu-store";

interface IProps {
  className?: string;
}

export function ShowMenuButton({ className }: IProps): JSX.Element {
  const { toggle } = useMenuStore();

  return (
    <Button
      onClick={toggle}
      className={cn("flex gap-4 px-2 py-1 rounded-sm bg-black", className)}
    >
      <span className="text-[16px]/[20px] text-while">Меню</span>
    </Button>
  );
}
