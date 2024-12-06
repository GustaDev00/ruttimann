import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { Content as _Content } from "@/components/atoms/content";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { Title as _Title } from "@/components/atoms/content/styles";

export const Advantages = styled.div``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 11.1rem;

  ${mediaMaxWidth("mobile")`
    gap: 6.4rem;
  `}
`;

export const Content = styled(_Content)`
  ${_Title} {
    &::before {
      height: 8.9rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8.5rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 6.8rem;
  `}
`;

export const Image = styled(LazyImage)`
  width: 57.5rem;
  height: 72.7rem;
  border-radius: 3.2rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 40.7rem;
  `}
`;

export const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9.1rem 8.2rem;

  &::before {
    content: "";
    position: absolute;
    top: 48%;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.15);

    ${mediaMaxWidth("mobile")`
      top: 47%;
    `}
  }

  ${mediaMaxWidth("mobile")`
    grid-template-columns: 1fr;
    gap: 6.8rem;
  `}
`;

export const Item = styled.li``;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d2ffcb;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;

  svg {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  color: #000;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 4rem;
  letter-spacing: -0.0002rem;
`;

export const Text = styled.p`
  margin-top: 2.2rem;
  color: #000;
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 3.6rem;
  letter-spacing: -0.0002rem;
`;
