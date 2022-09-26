import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";

import Slide1 from "../../assets/img/slider/slider_1.png"
import Slide2 from "../../assets/img/slider/Slider_2.png"
import Slide3 from "../../assets/img/slider/Slider_3.png"
import Slide4 from "../../assets/img/slider/Slider_4.png"
import Slide5 from "../../assets/img/slider/Slider_5.png"
import Slide6 from "../../assets/img/slider/Slider_6.png"

// import required swiper modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={2}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Slide1} alt="Slide#1"/></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="Slide#2"/></SwiperSlide>
        <SwiperSlide><img src={Slide3} alt="Slide#3"/></SwiperSlide>
        <SwiperSlide><img src={Slide4} alt="Slide#4"/></SwiperSlide>
        <SwiperSlide><img src={Slide5} alt="Slide#5"/></SwiperSlide>
        <SwiperSlide><img src={Slide6} alt="Slide#6" /></SwiperSlide>
      </Swiper>
    </>
  );
}
