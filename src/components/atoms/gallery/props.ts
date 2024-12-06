import { ReactNode } from "react";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryBg {
  src: string;
  alt: string;
}

export interface GalleryProps {
  title: ReactNode;
  text: ReactNode;
  bg: GalleryBg;
  imgs: GalleryImage[];
  className?: string;
}
