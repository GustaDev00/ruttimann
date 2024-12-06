import * as S from "./styles";
import useAnimation from "./animation";
import { FC } from "react";
import { ContentColumnsProps } from "./props";

export const ContentColumns: FC<ContentColumnsProps> = ({ column1, column2, className }) => {
  const { sectionRef } = useAnimation();

  return (
    <S.ContentColumns ref={sectionRef} className={className} data-timeline="content-columns">
      <S.Wrapper data-timeline="wrapper">
        <S.Column data-timeline="column1">
          <S.Title title={column1.title} data-timeline="title-column1" />
          <S.Img {...column1.img} data-timeline="img-column1" />
          <S.Content
            title={column1.subtitle}
            description={column1.description}
            button={column1.link}
            data-timeline="content-column1"
          />
        </S.Column>
        <S.Column data-timeline="column2">
          <S.Description
            description={column2.description}
            button={column2.link}
            data-timeline="description-column2"
          />
          <S.Img2 {...column2.img} data-timeline="img-column2" />
        </S.Column>
      </S.Wrapper>
    </S.ContentColumns>
  );
};
