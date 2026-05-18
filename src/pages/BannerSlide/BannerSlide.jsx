import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./bannerSlide.scss";
import slide1 from "../../assets/images/2048_1776398579175.jpg";
import slide2 from "../../assets/images/rap-dac-biet-2_1777019478895.jpg";
import slide3 from "../../assets/images/doraemon-the-movie-new-nobita-and-the-castle-of-the-undersea-devil-3_1778470910583.jpg";
import slide4 from "../../assets/images/gohan-2048_1778574885754.jpg";
import slide5 from "../../assets/images/gundam-hathaway-1_1778470394535.jpg";
import slide6 from "../../assets/images/mot-thoi-ta-da-yeu-2048_1778659515050.jpg";
import slide7 from "../../assets/images/shopee-1_1778143451364.jpg";
import slide8 from "../../assets/images/banner-2048-x-682_1778665576842.jpg";
import slide9 from "../../assets/images/zalopay-galaxy-2_1775802092751.jpg";
import slide10 from "../../assets/images/momo-2_1778484333050.jpg";
import SearchMovie from "../SearchMovie/SearchMovie";
const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
];

const BannerSlide = () => {
  return (
    <section className="banner pt-[25px]  relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        centeredSlides
        slidesPerView="auto"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="max-w-[1456px] px-6">
            <img src={slide} alt="" className="h-[490px] w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <SearchMovie />
    </section>
  );
};

export default BannerSlide;
