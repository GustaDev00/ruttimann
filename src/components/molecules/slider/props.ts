import { ReactNode } from "react";

export interface SliderItem {
  title: ReactNode;
  text: ReactNode;
  link: {
    title: string;
    href: string;
  };
  img: {
    src: string;
    alt: string;
  };
}

export interface SliderProps {
  title: ReactNode;
  description: ReactNode;
  items: SliderItem[];
  className?: string;
}
