import { JSX } from "react";
import Link from "next/link";
import cn from "classnames";

interface IProps {
  className?: string;
}

export function Navigation({ className }: IProps): JSX.Element {
  return (
    <nav>
      <ul
        className={cn(
          "flex gap-4 mobile:flex-col desktop:items-center",
          className
        )}
      >
        <li>
          <Link href="#">О школе</Link>
        </li>
        <li>
          <Link href="#">Курсы</Link>
        </li>
        <li>
          <Link href="#">Библиотека</Link>
        </li>
      </ul>
    </nav>
  );
}
