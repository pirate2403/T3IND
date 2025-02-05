"use client";
import { JSX, useEffect, useState } from "react";
import { useSliderContext } from "../context/slider-context-hook";
import { EmblaCarouselType } from "embla-carousel";
import cn from "classnames";

export function Pagination(): JSX.Element {
  const [, api] = useSliderContext();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = (emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  };

  const onSelect = (emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!api) return;
    onInit(api);
    onSelect(api);
    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    return () => {
      api.off("reInit", onInit).off("reInit", onSelect).off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex items-center gap-2 desktop:hidden">
      {scrollSnaps.map((_, i) => (
        <div
          key={i}
          className={cn("flex transition-all duration-300 bg-dark-gray", {
            "w-10  rounded-[10px]": i === selectedIndex,
            "w-2 h-2 rounded-full ": i !== selectedIndex,
          })}
        >
          <div
            className={cn("", {
              "bg-black w-5 h-2 rounded-full": i === selectedIndex,
            })}
          />
        </div>
      ))}
    </div>
  );
}
