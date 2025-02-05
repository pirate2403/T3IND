import { JSX } from "react";

export function Title(): JSX.Element {
  return (
    <div className="flex mobile:flex-col desktop:gap-[230px]">
      <div className="mobile:pb-2 desktop:py-[12px] mobile:border-b mobile:border-gray desktop:w-[118px]">
        <span className="text-[26px]/[28px] desktop:text-[40px]/[44px] text-violet">
          1.0
        </span>
      </div>
      <div className="mobile:pt-2 desktop:py-[12px]">
        <span className="text-[26px]/[28px] desktop:text-[40px]/[44px] text-violet">
          Наши услуги
        </span>
      </div>
    </div>
  );
}
