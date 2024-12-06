import styled from "styled-components";
import { Logo as _Logo } from "@/components/atoms/logo-white";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { ButtonSwipe } from "@/components/atoms/button-swipe";

export const Footer = styled.footer`
  position: relative;
`;

export const Wrapper = styled(_Wrapper)`
  background: #0d0e0d;
  padding: 8rem 12rem;
  gap: 12rem;
  align-items: flex-start;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 6.4rem;
    padding: 8rem 2.2rem;
  `}
`;

export const Column = styled.div<{ $first?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  margin-right: ${({ $first }) => ($first ? "16.1rem" : "0")};

  ${mediaMaxWidth("mobile")`
    margin-right: 0;
  `}
`;

export const Line = styled.div``;

export const TitleLine = styled.h3`
  color: #fff;
  font-family: var(--manrope);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.4rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Item = styled.li`
  color: #ccc;
  font-family: var(--manrope);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const Link = styled.a`
  font-size: inherit;
`;

export const Info = styled.div`
  background: #000;
  padding: 3.8rem 12rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 140%;

  ${mediaMaxWidth("mobile")`
    padding: 3.8rem 2.2rem;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.6rem;
    gap: 1.7rem;
  `}
`;

export const SocialShare = styled.div`
  display: flex;
  gap: 2.4rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: #fff;
  }
`;

export const Copy = styled.p``;

export const Agency = styled.p`
  span {
    font-weight: 700;
  }
`;

export const Logo = styled(_Logo)``;

// cta

export const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  border-radius: 2.2rem;
  background: linear-gradient(180deg, #44bd32 0%, #128401 100%);
  padding: 6.9rem 12rem;
  overflow: hidden;

  &::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 78.1rem;
    height: 36.9rem;
    background: url("/imgs/footer/effects.png") no-repeat;

    ${mediaMaxWidth("mobile")`
      background: url("/imgs/footer/mobile/effects.png") no-repeat;
      background-size: contain;
      width: 68.1rem;
      height: 36.9rem;
      top: 0;
      left: -1.5rem;
    `}
  }

  &::after {
    content: "";
    top: 0;
    right: 0;
    position: absolute;
    width: 25.6rem;
    height: 49.81rem;
    background: url("/imgs/footer/global.png") no-repeat;

    ${mediaMaxWidth("mobile")`
      background: url("/imgs/footer/mobile/global.png") no-repeat;
      background-size: contain;
      width: 19rem;
      height: 15rem;
      top: unset;
      right: -1.5rem;
      bottom: 0;
    `}
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    padding: 6.9rem 1.8rem;
    justify-content: center;
    gap: 8.9rem;
  `}
`;

export const ContentCta = styled.div``;

export const Title = styled.h2`
  color: #fff;
  font-size: 5rem;
  font-weight: 500;
  line-height: 7rem;
  letter-spacing: -0.253rem;

  ${mediaMaxWidth("mobile")`
  font-size: 4rem;
  line-height: 4.8rem;
  letter-spacing: -0.2024rem;
`}
`;

export const Text = styled.p`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 7rem;
  letter-spacing: -0.1214rem;

  ${mediaMaxWidth("mobile")`
  font-size: 1.8rem;
  line-height: 3.9rem;
  letter-spacing: -0.1012rem;
`}
`;

export const Button = styled(ButtonSwipe)`
  background: #fff;
  color: #44bd32;

  svg path {
    fill: #44bd32;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
    padding: 1.6rem 2.4rem;
  `}
`;
