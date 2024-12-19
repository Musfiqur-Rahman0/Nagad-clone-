import { Avatar, Box, useMediaQuery } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { theme } from "../theme/theme";
import { Autoplay } from "swiper/modules";

const BannerSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: { xs: "65%", md: "60%" },
        width: "100%",
      }}
    >
      <Swiper
        autoplay={{
          delay: "2000",
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        modules={[Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide className="h-full w-full -z-50 overflow-auto">
          <Avatar
            variant="square"
            src={
              isMobile
                ? "/public/assets/FjkJgdH7ilGQ4mPFlsGtjCvvET3NfLA8khpFWe0T.jpg"
                : "/public/assets/Banner2.jpg"
            }
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar
            variant="square"
            src={
              isMobile
                ? "/public/assets/bannermobile.jpg"
                : "/public/assets/Banner.jpg"
            }
            sx={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default BannerSection;
