import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { Content as _Content } from "@/components/atoms/content";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const ContentColumns = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const Wrapper = styled(_Wrapper)`
  align-items: flex-end;
  gap: 11.4rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 8rem;
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
  `}
`;

export const Title = styled(_Content)``;

export const Content = styled(_Content)``;

export const Img = styled(LazyImage)`
  width: 74.9rem;
  height: 58.2rem;
  border-radius: 3.2rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 40rem;
  `}
`;

export const Description = styled(_Content)``;

export const Img2 = styled(LazyImage)`
  margin-top: 1rem;
  width: 76.5rem;
  height: 88.1rem;
  border-radius: 3.2rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 40rem;
  `}
`;
