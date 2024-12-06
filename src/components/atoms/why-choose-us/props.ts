import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface WhyChooseUsTag {
  icon: IconType;
  text: ReactNode;
}

export interface WhyChooseUsLink {
  title: string;
  href: string;
}

export interface WhyChooseUsImg {
  src: string;
  alt: string;
}

export interface WhyChooseUsProps {
  title: ReactNode;
  tags: WhyChooseUsTag[];
  link: WhyChooseUsLink;
  img: WhyChooseUsImg;
  className?: string;
}
