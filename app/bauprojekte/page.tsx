import { BauprojekteTemplate } from "@/templates/bauprojekte";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "W & M Rüttimann",
  description: "W & M Rüttimann",
};

const Bauprojekte = (): ReactNode => {
  return <BauprojekteTemplate />;
};

export default Bauprojekte;
