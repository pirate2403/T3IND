import { JSX } from "react";
import { Header } from "@/modules/header";
import { Content } from "@/modules/content";
import { Title } from "@/modules/title";
import { Slider } from "@/modules/slider";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Content title={<Title />} content={<Slider />} />
    </>
  );
}
