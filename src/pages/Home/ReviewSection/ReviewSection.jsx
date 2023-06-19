import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const ReviewSection = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
   <div className="text-center mt-9 ">
     <i className="font-fancy text-yellow-200 text-2xl mb-6 font-bold" style={{fontFamily: "Grand Hotel,cursive"}}>What People Say!</i>
     <div className="mt-5">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/src/assets/r1.PNG" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/r2.PNG" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/r3.PNG" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
   </div>
  );
};

export default ReviewSection;
