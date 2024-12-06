import * as S from "./styles";
import useAnimation from "./animation";
import { FC } from "react";
import { CardContentProps } from "./props";

export const CardContent: FC<CardContentProps> = ({ title, description, link, img, className }) => {
  const { sectionRef } = useAnimation();

  return (
    <S.CardContent ref={sectionRef} className={className} data-timeline="card-content">
      <S.Wrapper data-timeline="wrapper">
        <S.Img {...img} data-timeline="img" />
        <S.Content
          title={title}
          description={description}
          button={link}
          $link={!!link}
          data-timeline="content"
        />
      </S.Wrapper>
    </S.CardContent>
  );
};
