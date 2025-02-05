"use client";
import { JSX, PropsWithChildren } from "react";
import { SliderContext } from "@/modules/slider/context/slider-context";
import useEmblaCarousel from "embla-carousel-react";

export function SliderContextProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const embla = useEmblaCarousel();

  return (
    <SliderContext.Provider value={embla}>{children}</SliderContext.Provider>
  );
}
