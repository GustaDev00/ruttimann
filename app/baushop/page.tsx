import { BaushopTemplate } from "@/templates/baushop";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "W & M Rüttimann",
  description: "W & M Rüttimann",
};

const Baushop = (): ReactNode => {
  return <BaushopTemplate />;
};

export default Baushop;
