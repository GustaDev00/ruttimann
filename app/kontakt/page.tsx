import { KontaktTemplate } from "@/templates/kontakt";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "W & M Rüttimann",
  description: "W & M Rüttimann",
};

const Kontakt = (): ReactNode => {
  return <KontaktTemplate />;
};

export default Kontakt;
