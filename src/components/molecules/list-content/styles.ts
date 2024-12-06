import styled, { css } from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { Content as _Content } from "@/components/atoms/content";
import { LazyImage } from "@/components/atoms/lazy-image";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { Title } from "@/components/atoms/content/styles";
import { mediaMaxWidth } from "@/utils/media-query";

export const ListContent = styled.div`
  position: relative;
  overflow: hidden;

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
  flex-direction: column;
  gap: 7rem;

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
  `}
`;

export const Content = styled(_Content)`
  ${Title} {
    &::before {
      height: 8.9rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10.5rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 4rem;
  `}
`;

export const WrapperImage = styled.div`
  position: relative;
  height: 100%;
`;

export const Image = styled(LazyImage)`
  width: 53.7rem;
  height: 83.8rem;
  border-radius: 3.2rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 59.6rem;
  `}
`;

export const Button = styled(ButtonSwipe)`
  position: absolute;
  width: 85%;
  justify-content: center;
  bottom: 2.6rem;
  left: 3.7rem;

  ${mediaMaxWidth("mobile")`
    width: 90%;
    left: 5%;
  `}
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubTitle = styled.h3`
  color: #292929;
  font-size: 2.6rem;
  font-weight: 500;
  line-height: 5.3rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.3rem;
  `}
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  border: 0.1rem solid #17710a;
  transition: transform 0.4s ease;

  svg {
    width: 2.75rem;
    height: 2.75rem;
  }
`;

export const Text = styled.div`
  margin-top: 1rem;
  color: #565656;
  font-size: 2rem;
  font-weight: 300;
  line-height: 4.6rem;
  letter-spacing: -0.0002rem;
`;

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li<{ $active?: boolean }>`
  cursor: pointer;
  padding: 2.2rem 0 4.2rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-height: 9rem;
  transition: max-height 0.4s ease;

  ${({ $active }) =>
    $active &&
    css`
      max-height: 100rem;

      ${Icon} {
        transform: rotate(45deg);
      }
    `}

  ${mediaMaxWidth("mobile")`
    padding: 2rem 0 4.2rem;
  `}
`;
