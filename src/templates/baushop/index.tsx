"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "@/constants";

export const BaushopTemplate: FC = () => {
  const { hero, gallery, why_choose_us } = C.baushop;
  return (
    <>
      <S.Header {...hero} />
      <S.Gallery {...gallery} />
      <S.WhyChooseUs {...why_choose_us} />
    </>
  );
};
