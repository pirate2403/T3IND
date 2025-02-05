import { JSX, ReactNode } from "react";

interface IProps {
  title?: ReactNode;
  content?: ReactNode;
}

export function Content({ title, content }: IProps): JSX.Element {
  return (
    <main className="px-4 mobile:py-2 flex flex-col mobile:gap-[40px] desktop:gap-[20px]">
      <section>{title}</section>
      <section>{content}</section>
    </main>
  );
}
