import { ReactNode } from "react";

export interface ListContentProps {
  title: ReactNode;
  items: {
    title: ReactNode;
    text: ReactNode;
  }[];
  img: {
    src: string;
    alt: string;
  };
  className?: string;
}
