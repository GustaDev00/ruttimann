import styled from "styled-components";
import { Content as _Content } from "@/components/atoms/content";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { Description, Title } from "@/components/atoms/content/styles";

export const Motivation = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Bg = styled(LazyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`;

export const Wrapper = styled(_Wrapper)``;

export const Content = styled(_Content)`
  flex-direction: row;
  align-items: center;
  gap: 16.4rem;

  ${Title} {
    color: #fff;
    align-items: flex-start;

    &::before {
      margin-top: 1rem;
      width: 0.2rem;
      height: 6.3rem;
    }
  }

  ${Description} {
    color: #fff;
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 4rem;
  `};
`;
