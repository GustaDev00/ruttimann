import { ReactNode } from "react";

export interface ContentProps {
  title?: ReactNode;
  description?: ReactNode;
  button?: {
    title: string;
    href: string;
  };
}
