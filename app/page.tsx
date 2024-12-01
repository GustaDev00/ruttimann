import { type Metadata } from "next";
import { type ReactNode } from "react";
import { HomeTemplate } from "@/templates/home";

export const metadata: Metadata = {
  title: "W & M Rüttimann",
  description: "W & M Rüttimann",
};

const Home = (): ReactNode => {
  return <HomeTemplate />;
};

export default Home;
