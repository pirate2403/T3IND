import { JSX } from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export function Logo(): JSX.Element {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image src={logo} alt="Logo" width={28} height={28} />
      <span className="mobile:hidden text-[16px]/[24px]">STEMPS</span>
    </Link>
  );
}
