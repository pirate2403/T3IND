"use client";
import { JSX, PropsWithChildren } from "react";
import { useSliderContext } from "../context/slider-context-hook";

export function Track({ children }: PropsWithChildren): JSX.Element {
  const [ref] = useSliderContext();

  return (
    <div ref={ref} className="relative w-full mx-auto overflow-hidden">
      <div className="flex">{children}</div>
    </div>
  );
}
