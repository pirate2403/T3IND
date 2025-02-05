import { JSX } from "react";
import { Slide } from "./slide";
import { Track } from "./track";
import { SLIDES } from "../constants/slides";
import { SliderContextProvider } from "../context/slider-context-provider";
import { Pagination } from "./pagination";

export function Slider(): JSX.Element {
  return (
    <SliderContextProvider>
      <div className="flex flex-col gap-[24px]">
        <Pagination />
        <Track>
          {SLIDES.map((slide) => (
            <Slide key={slide.id} slide={slide} />
          ))}
        </Track>
      </div>
    </SliderContextProvider>
  );
}
