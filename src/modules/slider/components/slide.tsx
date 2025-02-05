import { JSX } from "react";
import Image from "next/image";
import { ISlide } from "../interfaces/slide";

interface IProps {
  slide: ISlide;
}

export function Slide({ slide }: IProps): JSX.Element {
  return (
    <div className="relative w-full shrink-0 max-w-[412px] mr-4 last:mr-0">
      <div className="w-full h-[212px] desktop:h-[256px] rounded-lg p-4 flex flex-col justify-between bg-light-gray select-none">
        <div className="flex mobile:items-center gap-6 desktop:flex-col desktop:justify-between desktop:h-full">
          <Image
            src={slide.img}
            alt={slide.alt}
            className="w-[60px] h-[60px]"
          />
          <span className="text-[24px]/[28px]">{slide.title}</span>
        </div>
        <div className="desktop:hidden">
          <span>{slide.description}</span>
        </div>
      </div>
    </div>
  );
}
