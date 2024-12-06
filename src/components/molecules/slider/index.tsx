import * as S from "./styles";
import useAnimation from "./animation";
import { FC, useCallback, useState } from "react";
import { SliderProps } from "./props";

export const Slider: FC<SliderProps> = ({ title, description, items, className }) => {
  const [active, setActive] = useState(0);
  const { sectionRef } = useAnimation();

  const handleClick = useCallback((direction: "left" | "right") => {
    setActive((prev) => {
      if (direction === "left") {
        return prev === 0 ? items.length - 1 : prev - 1;
      }
      return prev === items.length - 1 ? 0 : prev + 1;
    });
  }, []);

  return (
    <S.Slider ref={sectionRef} className={className} data-timeline="slider">
      <S.Wrapper data-timeline="wrapper">
        <S.Content data-timeline="content">
          <S.Title data-timeline="title">{title}</S.Title>
          <S.Description data-timeline="description">{description}</S.Description>
        </S.Content>
        <S.Container data-timeline="container">
          <S.Button
            $direction="left"
            onClick={() => handleClick("left")}
            data-timeline="button-left"
          >
            <S.Arrow />
          </S.Button>

          <S.SliderItem data-timeline="slider-item">
            {items.map(({ title, text, link, img }, index) => (
              <S.Card key={index} $first={index !== 0} $active={active === index}>
                <S.Img {...img} data-timeline={`img-${index}`} />
                <S.SliderContent data-timeline={`slider-content-${index}`}>
                  <S.SliderTitle data-timeline={`slider-title-${index}`}>{title}</S.SliderTitle>
                  <S.SliderText data-timeline={`slider-text-${index}`}>{text}</S.SliderText>
                  <S.Link href={link.href} data-timeline={`link-${index}`}>
                    {link.title} <S.ArrowLink />
                  </S.Link>
                </S.SliderContent>
              </S.Card>
            ))}
          </S.SliderItem>

          <S.Button
            $direction="right"
            onClick={() => handleClick("right")}
            data-timeline="button-right"
          >
            <S.Arrow />
          </S.Button>
        </S.Container>
      </S.Wrapper>
    </S.Slider>
  );
};
