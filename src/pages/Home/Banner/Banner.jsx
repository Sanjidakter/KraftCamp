import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Banner.css"



// import required modules
import { Navigation } from "swiper";
import b1 from "../../../assets/b1.png";
import b3 from "../../../assets/b3.png";
import clay from "../../../assets/clay.png";
import staffs from "../../../assets/staff.png";
import b6 from "../../../assets/b6.png";
import painting from "../../../assets/painting.png";
import crafts1 from "../../../assets/crafts1.png";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={clay} alt="" /></SwiperSlide>
        <SwiperSlide><img src={painting} alt="" /></SwiperSlide>
        <SwiperSlide><img src={staffs} alt="" /></SwiperSlide>
        <SwiperSlide><img src={crafts1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={b6} alt="" /></SwiperSlide>
        
       
      </Swiper>
    </>
  );
};

export default Banner;
