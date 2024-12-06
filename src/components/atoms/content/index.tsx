import * as S from "./styles";
import { FC } from "react";
import { ContentProps } from "./props";

export const Content: FC<ContentProps> = ({ title, description, button, ...props }) => {
  return (
    <S.List {...props}>
      {title && <S.Title>{title}</S.Title>}
      {description && <S.Description>{description}</S.Description>}
      {button && <S.Button {...button} />}
    </S.List>
  );
};
