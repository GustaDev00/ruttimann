import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "../lazy-image";
import { ButtonSwipe } from "../button-swipe";
import { Content as _Content } from "../content";
import { mediaMaxWidth } from "@/utils/media-query";

export const WhyChooseUs = styled.div``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 10.7rem;

  ${mediaMaxWidth("mobile")`
    gap: 4.1rem;
  `}
`;

export const Content = styled(_Content)``;

export const Container = styled.div`
  display: flex;
  align-items: center;

  ${mediaMaxWidth("mobile")`
    gap: 4.1rem;
    flex-direction: column;
  `}
`;

export const Image = styled(LazyImage)`
  width: 82.3rem;
  height: 64.7rem;
  border-radius: 3.2rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 39.2rem;
  `}
`;

export const List = styled.ul`
  position: relative;
  left: -5rem;
  display: flex;
  flex-direction: column;
  gap: 3.9rem;

  ${mediaMaxWidth("mobile")`
    position: unset;
  `}
`;

export const Item = styled.li`
  display: flex;
  gap: 2.2rem;
  align-items: center;
  border-radius: 2.2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.05);
  background: #fdfdfd;
  box-shadow: 0 0.4rem 2.8rem 0 rgba(0, 0, 0, 0.08);
  padding: 3.3rem 5rem;

  &:last-child {
    background: none;
    border: none;
    box-shadow: none;
    padding: 0;
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Icon = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d2ffcb;

  svg {
    color: #17710a;
    width: 4rem;
    height: 4rem;
  }
`;

export const Text = styled.p`
  color: #2f2f2f;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 3.4rem;
  letter-spacing: -0.1113rem;

  ${mediaMaxWidth("mobile")`
  text-align: center;
`}
`;

export const Button = styled(ButtonSwipe)`
  width: 100%;
  justify-content: center;
`;
