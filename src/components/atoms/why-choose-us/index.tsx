import { FC } from "react";
import * as S from "./styles";
import { WhyChooseUsProps } from "./props";

export const WhyChooseUs: FC<WhyChooseUsProps> = ({ title, tags, link, img, className }) => {
  return (
    <S.WhyChooseUs className={className}>
      <S.Wrapper>
        <S.Content title={title} />
        <S.Container>
          <S.Image {...img} />
          <S.List>
            {tags.map(({ icon: Icon, text }, index) => (
              <S.Item key={index}>
                <S.Icon>
                  <Icon />
                </S.Icon>
                <S.Text>{text}</S.Text>
              </S.Item>
            ))}
            <S.Item>
              <S.Button {...link} />
            </S.Item>
          </S.List>
        </S.Container>
      </S.Wrapper>
    </S.WhyChooseUs>
  );
};
