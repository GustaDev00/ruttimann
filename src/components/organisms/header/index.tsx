import * as S from "./styles";
import useAnimation from "./animation";
import { FC } from "react";
import { HeaderProps } from "./props";

export const Header: FC<HeaderProps> = ({ bg, title, description, buttons, home, className }) => {
  const { sectionRef } = useAnimation();

  return (
    <S.Header ref={sectionRef} className={className} $home={home}>
      <S.Bg {...bg} data-timeline="background" />
      <S.Wrapper data-timeline="container">
        <S.Content data-timeline="content">
          <S.Title data-timeline="title">{title}</S.Title>
          {description && <S.Description data-timeline="description">{description}</S.Description>}
          {buttons && (
            <S.Buttons data-timeline="buttons">
              {buttons.map(({ type, button }, index) =>
                type === "primary" ? (
                  <S.ButtonPrimary
                    key={index}
                    {...button}
                    data-timeline={`button-primary-${index}`}
                  />
                ) : (
                  <S.ButtonSecondary
                    key={index}
                    {...button}
                    data-timeline={`button-secondary-${index}`}
                  />
                ),
              )}
            </S.Buttons>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Header>
  );
};
