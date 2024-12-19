import { Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { StyledBtn, StyledHeading } from "./StyledCompo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slides } from "../Constents";
import { theme } from "../theme/theme";

const Offers = () => {
  const [IsHovered, setIsHovered] = useState(null);
  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: 8, lg: 20 },
      }}
      className="pb-10"
    >
      <StyledHeading textAlign={"center"}>Current Offers</StyledHeading>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1040: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        className="p-5 mt-5"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="bg-white py-4 px-6 rounded-lg !flex flex-col gap-4 items-center justify-center "
          >
            <img
              src={slide.image}
              alt={slide.text}
              className="h-full w-full object-cover rounded-lg"
            />
            <StyledBtn> {slide.text}</StyledBtn>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant={IsHovered ? "contained" : "outlined"}
          sx={{
            borderRadius: "999px",
            mt: 2,
            "&: hover": {
              backgroundColor: theme.palette.primary.main,
            },
            fontSize: "18px",
            padding: "10px 20px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          all offers
        </Button>
      </Box>
    </Box>
  );
};

export default Offers;
