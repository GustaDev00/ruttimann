import * as S from "./styles";
import useAnimation from "./animation";
import { FC } from "react";
import { TransparentBlockProps } from "./props";

export const TransparentBlock: FC<TransparentBlockProps> = ({
  title,
  text,
  link,
  img,
  className,
}) => {
  const { sectionRef } = useAnimation();

  return (
    <S.TransparentBlock ref={sectionRef} className={className} data-timeline="transparent-block">
      <S.Wrapper data-timeline="wrapper">
        <S.Title title={title} data-timeline="title" />
        <S.Container data-timeline="container">
          <S.Img src={img.src} alt={img.alt} data-timeline="img" />
          <S.Content description={text} button={link} data-timeline="content" />
        </S.Container>
      </S.Wrapper>
    </S.TransparentBlock>
  );
};
