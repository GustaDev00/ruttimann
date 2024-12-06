import * as S from "./styles";
import useAnimation from "./animation";
import { FC, useState } from "react";
import { ListContentProps } from "./props";

export const ListContent: FC<ListContentProps> = ({ title, img, items, className }) => {
  const [active, setActive] = useState(0);
  const { sectionRef } = useAnimation();

  return (
    <S.ListContent ref={sectionRef} className={className} data-timeline="list-content">
      <S.Wrapper data-timeline="wrapper">
        <S.Content title={title} data-timeline="content" />
        <S.Container data-timeline="container">
          <S.WrapperImage data-timeline="wrapper-image">
            <S.Image {...img} data-timeline="image" />
            <S.Button title="Starte dein Projekt" href="/kontakt" data-timeline="button" />
          </S.WrapperImage>
          <S.List data-timeline="list">
            {items.map(({ title, text }, index) => (
              <S.Item
                key={index}
                $active={index === active}
                onClick={() => setActive(index)}
                data-timeline={`list-item-${index}`}
              >
                <S.Article data-timeline={`article-${index}`}>
                  <S.SubTitle data-timeline={`subtitle-${index}`}>{title}</S.SubTitle>
                  <S.Icon data-timeline={`icon-${index}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="39"
                      viewBox="0 0 40 39"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.795 19.0322L20.7535 12.9909C20.5516 12.7889 20.5516 12.4615 20.7535 12.2596C20.9554 12.0577 21.2828 12.0577 21.4847 12.2596L28.409 19.1836C28.5059 19.2806 28.5604 19.4121 28.5604 19.5493C28.5604 19.6864 28.5059 19.8179 28.409 19.9149L21.5833 26.7405C21.3814 26.9425 21.054 26.9425 20.8521 26.7405C20.6501 26.5386 20.6501 26.2112 20.8521 26.0093L26.795 20.0663L11.9567 20.0663C11.6711 20.0663 11.4396 19.8348 11.4396 19.5493C11.4396 19.2637 11.6711 19.0322 11.9567 19.0322L26.795 19.0322Z"
                        fill="#17710A"
                      />
                    </svg>
                  </S.Icon>
                </S.Article>
                <S.Text data-timeline={`text-${index}`}>{text}</S.Text>
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      </S.Wrapper>
    </S.ListContent>
  );
};
