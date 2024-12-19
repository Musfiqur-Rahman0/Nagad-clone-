import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { nagadFeatures, slides } from "../Constents";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { theme } from "../theme/theme";
import { SubHeading } from "../Components/StyledCompo";

const StyledButton = styled(Button)(({ theme }) => ({}));

const Features = () => {
  const [ActiveIndex, setActiveIndex] = useState(null);
  console.log(ActiveIndex);

  return (
    <div className="container mx-auto w-full py-2 overflow-visible h-[200px]  relative">
      <div className="py-5 h-full">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1040: {
              slidesPerView: 5,
            },
          }}
          centeredSlides={true}
          spaceBetween={20}
          loop="true"
          navigation
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Navigation]}
          className="h-full w-full flex flex-col items-center justify-center !z-20"
        >
          {nagadFeatures.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full !flex flex-col gap-3 justify-center items-center text-center "
            >
              <Avatar
                src={item.image}
                sx={{
                  height: "50%",
                  width: "fit-content",
                  filter:
                    ActiveIndex === index ? "grayscale(0%)" : "grayscale(100%)",
                  transition: "filter 0.3s ease", // Smooth transition
                }}
                variant="square"
              />
              <SubHeading
                sx={{
                  color:
                    ActiveIndex === index
                      ? `primary`
                      : `${theme.palette.secondary.main}`,
                }}
              >
                {item.text}
              </SubHeading>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Paper
        elevation={4}
        sx={{ borderRadius: "50%", bgcolor: "white", zIndex: 5 }}
        className="absolute   w-[60%] sm:w-[25%]  aspect-square  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></Paper>
    </div>
  );
};

export default Features;
