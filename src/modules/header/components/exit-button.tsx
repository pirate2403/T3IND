"use client";
import { JSX, MouseEventHandler } from "react";
import { Button } from "@/ui/button";
import exit from "@/assets/exit.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cn from "classnames";

interface IProps {
  className?: string;
}

export function ExitButton({ className }: IProps): JSX.Element {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    void router.push("/");
  };

  return (
    <Button
      onClick={handleClick}
      className={cn("flex gap-4 py-4 items-center", className)}
    >
      <span className="text-[16px]/[24px]">Вход</span>
      <Image src={exit} alt="Logo" width={30} height={28} />
    </Button>
  );
}
