import { FC } from "react";
import * as S from "./styles";
import { GalleryProps } from "./props";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

export const Gallery: FC<GalleryProps> = ({ title, text, bg, imgs, className }) => {
  return (
    <S.Gallery className={className}>
      <S.Wrapper>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{text}</S.Description>
        </S.Content>
        <S.Container $bg={bg.src}>
          <S.Slider>
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Navigation]}
            >
              {imgs.map((img, index) => (
                <SwiperSlide key={index}>
                  <S.Img {...img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.Slider>
        </S.Container>
      </S.Wrapper>
    </S.Gallery>
  );
};
