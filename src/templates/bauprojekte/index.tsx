"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "@/constants";

export const BauprojekteTemplate: FC = () => {
  const { hero, card_content, list_content, advantages } = C.bauprojekte;

  return (
    <>
      <S.Header {...hero} />
      <S.CardContent {...card_content} />
      <S.ListContent {...list_content} />
      <S.Advantages {...advantages} />
    </>
  );
};
