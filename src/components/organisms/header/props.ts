import { ReactNode } from "react";

export interface HeaderProps {
  bg: {
    src: string;
    alt: string;
  };
  title: ReactNode;
  description?: ReactNode;
  buttons: {
    type: "primary" | "secondary";
    button: {
      title: string;
      href: string;
    };
  }[];
  className?: string;
  deals?: boolean;
  home?: boolean;
}
