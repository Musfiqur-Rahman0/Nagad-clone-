import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const SliderWithHighlight = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <div
              className={`slide-content ${
                index === activeIndex ? "active-slide" : ""
              }`}
            >
              <div className="responsive-content">
                <span>
                  Slide {index + 1} Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Beatae, ipsa? Asperiores quo quaerat odio
                  iure tenetur
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="center-circle"></div>
    </div>
  );
};

export default SliderWithHighlight;
