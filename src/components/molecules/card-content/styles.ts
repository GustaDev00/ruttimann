import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { Content as _Content } from "@/components/atoms/content";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Button, Title } from "@/components/atoms/content/styles";
import { mediaMaxWidth } from "@/utils/media-query";

export const CardContent = styled.div``;

export const Wrapper = styled(_Wrapper)`
  gap: 9.1rem;
  align-items: center;

  ${mediaMaxWidth("mobile")`
    gap: 4.8rem;
  `}
`;

export const Img = styled(LazyImage)`
  width: 74.7rem;
  height: 67.4rem;
  border-radius: 3.2rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 39.2rem;
  `}
`;

export const Content = styled(_Content)<{ $link?: boolean }>`
  gap: 7.4rem;
  margin-top: ${({ $link }) => ($link ? "9rem" : "0rem")};

  ${Title} {
    &::before {
      height: 8.9rem;
    }
  }

  ${Button} {
    margin-top: 5.5rem;

    ${mediaMaxWidth("mobile")`
      display: none;
    `}
  }

  ${mediaMaxWidth("mobile")`
    margin-top: 0rem;
    gap: 3.8rem;
  `}
`;
