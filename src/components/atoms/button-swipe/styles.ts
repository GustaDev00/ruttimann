import { mediaMaxWidth } from "@/utils/media-query";
import Link from "next/link";
import styled, { css } from "styled-components";

const swipeStyles = css`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  width: fit-content;
  cursor: pointer;
  padding: 1.5rem 4.5rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.1rem;
  letter-spacing: -0.0002rem;
  border-radius: 6.7rem;
  background: linear-gradient(90deg, #44bd32 0%, #2c9f1b 100%);
  background-size: 200%;
  background-position: left;
  transition: box-shadow 0.3s ease;

  svg {
    transition: transform 0.4s ease;
  }

  &:hover {
    box-shadow: 0rem 1.2rem 1.6rem 0rem ${({ theme }) => theme.black01};
    background-position: right;

    svg {
      transform: rotate(45deg);
    }
  }

  ${mediaMaxWidth("mobile")`
    padding: 1.7rem 4rem;
  `}
`;

export const ButtonSwipe = styled.button`
  ${swipeStyles}
`;

export const LinkSwipe = styled(Link)`
  ${swipeStyles}
`;
