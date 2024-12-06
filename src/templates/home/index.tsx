"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "@/constants";

export const HomeTemplate: FC = () => {
  const { hero, slider, content_columns } = C.home;

  return (
    <>
      <S.Header {...hero} />
      <S.Slider {...slider} />
      <S.Content {...content_columns} />
    </>
  );
};
