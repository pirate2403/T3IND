import { createContext } from "react";
import { UseEmblaCarouselType } from "embla-carousel-react";

export const SliderContext = createContext<UseEmblaCarouselType | null>(null);
