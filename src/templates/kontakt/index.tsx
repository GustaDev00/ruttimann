"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "@/constants";

export const KontaktTemplate: FC = () => {
  const { hero } = C.kontakt;
  return (
    <>
      <S.Header {...hero} />
      <S.Form />
    </>
  );
};
