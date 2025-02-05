import { useContext } from "react";
import { SliderContext } from "./slider-context";

export function useSliderContext() {
  const context = useContext(SliderContext);

  if (!context) {
    throw new Error("useSliderContext must be used within a SliderProvider");
  }

  return context;
}
