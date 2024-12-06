import { FC } from "react";
import * as S from "./styles";
import { MotivationProps } from "./props";

export const Motivation: FC<MotivationProps> = ({ bg, title, description, className }) => {
  return (
    <S.Motivation className={className}>
      <S.Bg {...bg} />
      <S.Wrapper>
        <S.Content title={title} description={description} />
      </S.Wrapper>
    </S.Motivation>
  );
};
