import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface AdvantagesProps {
  title: ReactNode;
  items: {
    icon: IconType;
    title: ReactNode;
    text: ReactNode;
  }[];
  img: {
    src: string;
    alt: string;
  };
  className?: string;
}
