"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "@/constants";

export const UberUnsTemplate: FC = () => {
  const { hero, card_content, content_columns, motivation } = C.uber_uns;

  return (
    <>
      <S.Header {...hero} />
      <S.CardContent {...card_content} />
      <S.Content {...content_columns} />
      <S.Motivation {...motivation} />
    </>
  );
};
