import styled from "styled-components";
import { ButtonSwipe } from "../button-swipe";
import { mediaMaxWidth } from "@/utils/media-query";

export const List = styled.article`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
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
    height: 16.3rem;
    background: linear-gradient(180deg, #44bd32 0%, #8df97d 100%);
  }

  ${mediaMaxWidth("mobile")`
    font-size: 4rem;
    line-height: 4.6rem;
    letter-spacing: -0.2024rem;

    &::before {
      gap: 1.5rem;
    }
  `}
`;

export const Description = styled.p`
  color: #111;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 4.6rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 4.6rem;
  `}
`;

export const Button = styled(ButtonSwipe)``;
