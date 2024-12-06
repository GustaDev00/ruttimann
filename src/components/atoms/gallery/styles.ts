import styled, { keyframes } from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { LazyImage } from "../lazy-image";

export const Gallery = styled.div``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 7.7rem;

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
  `}
`;

export const Content = styled.article`
  display: flex;
  align-items: center;
  gap: 11.5rem;

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

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 992% 0px;
  }
`;

export const Container = styled.div<{ $bg: string }>`
  width: 67%;
  height: 60rem;
  padding-right: 10rem;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 1.2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  background: #44a636;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    background: ${({ $bg }) => `url(${$bg})`};
    background-size: cover;
    background-position: 100% 0;
    height: 100%;
    width: 100%;
    left: 0rem;
    top: 5rem;
    z-index: 1;
    animation: ${moveBackground} 120s linear infinite;

    ${mediaMaxWidth("mobile")`
      width: 100%;
      height: 100%;
      top: 0;
      animation: ${moveBackground} 200s linear infinite;
    `}
  }

  ${mediaMaxWidth("mobile")`
    width: 100%;
    padding-right: 0;
    height: 47rem;
    padding: 0 1rem;
  `}
`;

export const Slider = styled.div`
  position: relative;
  left: -3rem;
  width: 100%;
  margin: auto;

  .swiper-wrapper {
    width: 20rem;
    left: -20rem;
  }

  .swiper-slide {
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: scale(0.9) !important;
    border-radius: 0.8rem;
    opacity: 0;
  }

  .swiper-slide-active {
    opacity: 1;
    transform: scale(1) !important;
    right: 1rem;
  }

  .swiper-slide-next {
    opacity: 1;
  }

  .swiper-slide-next,
  .swiper-slide-prev {
    filter: grayscale(100%);
    border-radius: 0.8rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 4.8rem;
    height: 4.8rem;

    &::after {
      display: none;
    }

    &::before {
      display: block;
      content: "";
      width: 4.8rem;
      height: 4.8rem;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72' fill='none'%3E%3Cg filter='url(%23filter0_d_197_1702)'%3E%3Ccircle cx='36' cy='26' r='24' transform='rotate(-90 36 26)' fill='white'/%3E%3Cpath d='M26.6275 25.2924C26.237 25.6829 26.237 26.3161 26.6275 26.7066L32.9915 33.0706C33.382 33.4611 34.0152 33.4611 34.4057 33.0706C34.7962 32.6801 34.7962 32.0469 34.4057 31.6564L28.7488 25.9995L34.4057 20.3427C34.7962 19.9521 34.7962 19.319 34.4057 18.9284C34.0152 18.5379 33.382 18.5379 32.9915 18.9284L26.6275 25.2924ZM44.668 24.9995L27.3346 24.9995L27.3346 26.9995L44.668 26.9995L44.668 24.9995Z' fill='%23797979'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_197_1702' x='0' y='0' width='72' height='72' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='10'/%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_197_1702'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_197_1702' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
      background-size: cover;
    }
  }

  .swiper-button-prev::before {
    display: none;
  }

  .swiper-button-next::before {
    transform: rotate(180deg) translateY(20%);
  }

  ${mediaMaxWidth("mobile")`
    width: 100%;
    left: 0rem;

    .swiper-wrapper {
      width: 100%;
      left: 0rem;
    }

    .swiper-button-prev{
      left: 3rem;

      &::before {
        left: 2rem;
        display: block;
      }
    }

    .swiper-slide{
      opacity: 1; 
    }

    .swiper-slide-active{
      right: 7rem;
      z-index: 2 !important;
    }

    .swiper-slide-next{
      z-index: 0;
    }

    .swiper-slide-prev{
      left: -3rem;
      z-index: 0;
    }
  `}
`;

export const Img = styled(LazyImage)`
  width: 83.4rem;
  height: 45.4rem;
  border-radius: 0.8rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 26rem;
    height: 36rem;
  `}
`;
