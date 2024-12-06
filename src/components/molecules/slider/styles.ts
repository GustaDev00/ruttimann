import styled, { css } from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { LazyImage } from "@/components/atoms/lazy-image";
import { ArrowSliderIcon } from "@/components/svgs/arrow-slider";
import { ArrowLinkIcon } from "@/components/svgs/arrow-link";

export const Slider = styled.div``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 7.9rem;

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
  `}
`;

export const Content = styled.article`
  display: flex;
  align-items: center;
  gap: 20rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  `}
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 3.9rem;
  color: #000;
  font-size: 6.6rem;
  font-weight: 600;
  line-height: 9.1rem;
  letter-spacing: -0.334rem;

  &::before {
    content: "";
    display: block;
    width: 0.2rem;
    height: 5.6rem;
    background: linear-gradient(180deg, #44bd32 0%, #8df97d 100%);
  }

  ${mediaMaxWidth("mobile")`
    gap: 1.2rem;
    font-size: 4rem;
    letter-spacing: -0.2024rem;
  `}
`;

export const Description = styled.p`
  color: #111;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 4.6rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.8rem;
    line-height: 3.5rem;
  `}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: #fefefe;
  box-shadow: 0 1.6rem 2.2rem 0 rgba(0, 0, 0, 0.06);

  ${mediaMaxWidth("mobile")`
    padding: 5.2rem 0;
    justify-content: center;
  `}
`;

export const SliderItem = styled.div``;

export const Card = styled.div<{ $first?: boolean; $active?: boolean }>`
  height: 100%;
  display: flex;
  gap: 5.1rem;
  align-items: center;
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
  opacity: ${({ $active }) => ($active ? "1" : "0")};
  transition: visibility 0.8s, opacity 0.8s;

  ${({ $first }) =>
    $first &&
    css`
      position: absolute;
      top: 0;
    `}

  ${mediaMaxWidth("mobile")`
    gap: 0;
  `}
`;

export const Img = styled(LazyImage)`
  width: 66.8rem;
  height: 44.1rem;
  object-fit: cover;
  border-radius: 1.2rem 0 0 1.2rem;

  ${mediaMaxWidth("mobile")`
    display: none; 
  `}
`;

export const SliderContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const SliderTitle = styled.h3`
  color: #000;
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 9.1rem;
  letter-spacing: -0.2226rem;

  ${mediaMaxWidth("mobile")`
    font-size: 3.2rem;
    line-height: 6.4rem;
    letter-spacing: -0.1619rem;
  `}
`;

export const SliderText = styled.p`
  color: #5f5f5f;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 4.6rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
    line-height: 4rem;
  `}
`;

export const ArrowLink = styled(ArrowLinkIcon)`
  transition: transform 0.4s;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: #44bd32;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 3.4rem;
  letter-spacing: -0.1113rem;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.6;

    ${ArrowLink} {
      transform: translateX(0.4rem);
    }
  }
`;

export const Button = styled.button<{ $direction: "left" | "right" }>`
  position: absolute;
  top: ${({ $direction }) => ($direction === "left" ? "48.7%" : "50%")};
  left: ${({ $direction }) => ($direction === "left" ? "-4rem" : "auto")};
  right: ${({ $direction }) => ($direction === "right" ? "-4rem" : "auto")};
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  transform: rotate(${({ $direction }) => ($direction === "left" ? "180deg" : "0")});
  cursor: pointer;
  z-index: 2;

  ${({ $direction }) => mediaMaxWidth("mobile")`
    top: ${$direction === "left" ? "45.7%" : "50%"};
    left: ${$direction === "left" ? "-2rem" : "auto"};
    right: ${$direction === "right" ? "-2rem" : "auto"};
  `}
`;

export const Arrow = styled(ArrowSliderIcon)`
  width: 6.8rem;
  height: 6.8rem;

  ${mediaMaxWidth("mobile")`
    width: 4.8rem;
    height: 4.8rem;
  `}
`;
