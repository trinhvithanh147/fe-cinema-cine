import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from "../../assets/images/2048_1776398579175.jpg";

const BannerSlide = () => {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination]}
        loop
        centeredSlides
        slidesPerView="auto"
        spaceBetween={48}
        navigation
        pagination={{ clickable: true }}
        className="banner-swiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlide;
