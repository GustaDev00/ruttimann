import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { Content as _Content } from "@/components/atoms/content";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const TransparentBlock = styled.div``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 7.1rem;
`;

export const Title = styled(_Content)``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6.6rem;

  ${mediaMaxWidth("mobile")`
    gap: 4.6rem;
    flex-direction: column;
  `}
`;

export const Img = styled(LazyImage)`
  width: 88.2rem;
  height: 37.6rem;
  border-radius: 3.2rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 37.6rem;
  `}
`;

export const Content = styled(_Content)``;
