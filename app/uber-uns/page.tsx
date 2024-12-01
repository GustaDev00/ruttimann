import { UberUnsTemplate } from "@/templates/uber-uns";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "W & M Rüttimann",
  description: "W & M Rüttimann",
};

const UberUns = (): ReactNode => {
  return <UberUnsTemplate />;
};

export default UberUns;
