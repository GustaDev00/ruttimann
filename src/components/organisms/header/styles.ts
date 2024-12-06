import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Header = styled.div<{ $home?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ $home }) => ($home ? "80vh" : "100%")};
  padding: 0 1.5rem;

  ${mediaMaxWidth("mobile")`
    padding: 0;
    height: auto;
  `}
`;

export const Bg = styled(LazyImage)`
  position: absolute;
  width: calc(100% - 2.8rem);
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 0.8rem 0.8rem 0 0;

  ${mediaMaxWidth("mobile")`
    border-radius: 0 0 0 0;
    width: 100%;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 16.4rem 14.7rem;
  top: 0;
  left: 0;

  ${mediaMaxWidth("mobile")`
    padding: 9.4rem 3.2rem;
  `};
`;

export const Content = styled.article``;

export const Title = styled.h1`
  position: relative;
  color: #fff;
  font-size: 7rem;
  font-weight: 500;
  line-height: 9.1rem;
  letter-spacing: -0.3542rem;

  &::before {
    position: absolute;
    top: 0;
    left: -3.9rem;
    content: "";
    display: block;
    width: 0.2rem;
    height: 9.1rem;
    background: linear-gradient(180deg, #44bd32 0%, #8df97d 100%);
  }

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 5.2rem;
    letter-spacing: -0.2024rem;

    &::before {
      left: -1.6rem;
    }
  `}
`;

export const Description = styled.p`
  color: #f1f1f1;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 4.6rem;
  letter-spacing: -0.0002rem;
  margin-top: 2.4rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.8rem;
    line-height: 3.1rem;
  `}
`;

export const Buttons = styled.div`
  margin-top: 6.3rem;
  display: flex;
  gap: 2.6rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const ButtonPrimary = styled(ButtonSwipe)``;

export const ButtonSecondary = styled(ButtonSwipe)`
  background: transparent;
  border: 0.1rem solid rgba(255, 255, 255, 0.4);
  transition: color 0.4s, background 0.4s;

  svg {
    display: none;
  }

  &:hover {
    color: #000;
    background: #fff;
  }
`;
