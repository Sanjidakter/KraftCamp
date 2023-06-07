import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import b1 from "../../../assets/b1.png"
import b2 from "../../../assets/b2.png"
import b3 from "../../../assets/b3.png"
import b4 from "../../../assets/b4.png"
import b5 from "../../../assets/b5.png"
import b6 from "../../../assets/b6.png"
import b7 from "../../../assets/b7.png"

const MyComponent = () => {
   
 

  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
    <SwiperSlide><img src={b2} alt="" /></SwiperSlide>
    <SwiperSlide><img src={b3} alt="" /></SwiperSlide>
    <SwiperSlide><img src={b4} alt="" /></SwiperSlide>
    <SwiperSlide><img src={b5} alt="" /></SwiperSlide>
    <SwiperSlide><img src={b6} alt="" /></SwiperSlide>
   
  </Swiper>
  );
};

export default MyComponent;
