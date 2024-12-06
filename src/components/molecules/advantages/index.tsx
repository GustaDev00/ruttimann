import * as S from "./styles";
import useAnimation from "./animation";
import { FC } from "react";
import { AdvantagesProps } from "./props";

export const Advantages: FC<AdvantagesProps> = ({ title, items, img, className }) => {
  const { sectionRef } = useAnimation();

  return (
    <S.Advantages ref={sectionRef} className={className} data-timeline="advantages">
      <S.Wrapper data-timeline="wrapper">
        <S.Content title={title} data-timeline="content" />
        <S.Container data-timeline="container">
          <S.List data-timeline="list">
            {items.map(({ icon: Icon, title, text }, index) => (
              <S.Item key={index} data-timeline={`item-${index}`}>
                <S.Title data-timeline={`title-${index}`}>
                  <S.Icon data-timeline={`icon-${index}`}>
                    <Icon />
                  </S.Icon>
                  {title}
                </S.Title>
                <S.Text data-timeline={`text-${index}`}>{text}</S.Text>
              </S.Item>
            ))}
          </S.List>
          <S.Image {...img} data-timeline="image" />
        </S.Container>
      </S.Wrapper>
    </S.Advantages>
  );
};
