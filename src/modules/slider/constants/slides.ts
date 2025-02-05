import { ISlide } from "../interfaces/slide";
import slide1 from "@/assets/slides/slide-1.svg";
import slide2 from "@/assets/slides/slide-2.svg";
import slide3 from "@/assets/slides/slide-3.svg";
import slide4 from "@/assets/slides/slide-4.svg";
import slide5 from "@/assets/slides/slide-5.svg";
import slide6 from "@/assets/slides/slide-6.svg";

export const SLIDES = [
  {
    id: 0,
    img: slide1,
    alt: "слайд 1",
    title: "Анализ текущего состояния карьеры",
    description:
      "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
  },
  {
    id: 1,
    img: slide2,
    alt: "слайд 2",
    title: "Сопроводительные письма и резюме",
    description:
      "Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.",
  },
  {
    id: 2,
    img: slide3,
    alt: "слайд 3",
    title: "Поиск работы",
    description:
      "Определим вашу карьерную цель и разработаем стратегию для трудоустройства.",
  },
  {
    id: 3,
    img: slide4,
    alt: "слайд 4",
    title: "Тренинг по презентации личного бренда",
    description:
      "Подсветим сильные стороны и грамотно выстроим самопрезентацию.",
  },
  {
    id: 4,
    img: slide5,
    alt: "слайд 5",
    title: "Подготовка к собеседованию",
    description: "Научим говорить о себе кратко, ярко и профессионально.",
  },
  {
    id: 5,
    img: slide6,
    alt: "слайд 6",
    title: "Рекомендация по базе STEMPS Career",
    description: "Поможем встретиться соискателю и работодателю.",
  },
] as const satisfies ISlide[];
