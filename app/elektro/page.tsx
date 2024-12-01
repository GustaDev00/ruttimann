import { ElektroTemplate } from "@/templates/elektro";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "W & M Rüttimann",
  description: "W & M Rüttimann",
};

const Elektro = (): ReactNode => {
  return <ElektroTemplate />;
};

export default Elektro;
