import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  RoundedButton,
  StyledBtn,
  StyledHeading,
  StyledPara,
  SubHeading,
} from "../Components/StyledCompo";
import {
  ArrowRight,
  ArrowRightAlt,
  MobileFriendly,
  West,
} from "@mui/icons-material";
import { theme } from "../theme/theme";
import { guideimg } from "../Constents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

const UserGuide = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(null);

  const StyledContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }));

  const [isbtn1, setIsbtn1] = useState(false);
  const [isbtn2, setIsbtn2] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const buttons = [
    {
      label: "Download app",
      defaultVariant: "contained",
      hoverVariant: "outlined",
    },
    {
      label: "Learn more",
      defaultVariant: "outlined",
      hoverVariant: "contained",
    },
  ];

  return (
    <StyledContainer maxWidth="xl">
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Box>
          <StyledHeading>Open Nagad account</StyledHeading>
          <SubHeading sx={{ letterSpacing: "1px" }}>
            3 step to open your nagad account
          </SubHeading>
        </Box>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            borderRadius: "999px",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              boxShadow: "none",
            },
          }}
        >
          <MobileFriendly />
          <Typography> app</Typography>
        </Button>
      </Box>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="flex items-center justify-center gap-3 mt-4 w-full !p-2"
        // sx={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   gap: 3,
        //   mt: 4,
        // }}
      >
        {guideimg.map((item, index) => (
          <SwiperSlide
            className="!flex flex-col items-center gap-4"
            key={index}
            // sx={{
            //   width: "100%",
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   gap: 2,
            // }}
          >
            <Paper
              elevation={2}
              sx={{ padding: 2, borderRadius: "20px", width: "50%" }}
            >
              <img src={item.image} alt="img" />
            </Paper>
            <Paper
              elevation={4}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "20px",
                borderRadius: "20px",
                height: "150px",
                position: "relative",
              }}
            >
              <SubHeading>{item.heading}</SubHeading>
              <StyledPara>{item.subheading}</StyledPara>
              {index !== guideimg.length - 1 ? (
                <IconButton
                  disabled
                  sx={{ position: "absolute", bottom: 2, right: 2 }}
                >
                  <ArrowRightAlt />
                </IconButton>
              ) : (
                <IconButton
                  disabled
                  sx={{
                    position: "absolute",
                    bottom: 2,
                    right: 2,
                    rotate: "180deg",
                  }}
                >
                  <ArrowRightAlt />
                </IconButton>
              )}
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mt: 5,
        }}
      >
        {buttons.map((btn, index) => (
          <RoundedButton
            key={index}
            onMouseEnter={() => setHoveredBtn(index)}
            onMouseLeave={() => setHoveredBtn(null)}
            variant={
              hoveredBtn === index ? btn.hoverVariant : btn.defaultVariant
            }
          >
            {btn.label}
          </RoundedButton>
        ))}
      </Box>
    </StyledContainer>
  );
};

export default UserGuide;
