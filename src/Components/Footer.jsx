import {
  Avatar,
  Box,
  Container,
  Divider,
  Icon,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { ftIcons, quickLinks, quicklinks2 } from "../Constents";
import { theme } from "../theme/theme";
import {
  StyledBtn,
  StyledHeading,
  StyledPara,
  SubHeading,
} from "./StyledCompo";
import SocialLinks from "./SocialLinks";

const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    gap: "10px",
  },
}));

const Footer = () => {
  return (
    <div className="mt-10 h-[20%] w-full bg-white py-10  rounded-t-[100px]">
      <Container maxWidth="2xl" sx={{ padding: "0px 5% !important" }}>
        <StyledStack>
          <Avatar
            src="/assets/dakLogo.5e37448.svg"
            sx={{
              height: { xs: "60px", md: "120px" },
              width: { xs: "60px", md: "120px" },
            }}
          />
          <div className="hidden md:block">
            <SocialLinks />
          </div>
          <Avatar
            src="/assets/nagad logo.png"
            sx={{ height: { xs: "60px", md: "120px" }, width: "fit-content" }}
            variant="square"
          />
        </StyledStack>
        <Divider sx={{ my: 5, display: { xs: "none", md: "block" } }} />
        <StyledStack sx={{ gap: "5px !important", mt: 3 }}>
          <SocialLinks />
        </StyledStack>
        <StyledPara width={"100%"} textAlign={"center"} py={2}>
          To make your life easier Download Nagad app and access all our
          services from a single touchpoint.
        </StyledPara>
        <StyledStack>
          <div className="basis-2/3 hidden md:block">
            <Stack direction={"row"} spacing={10}>
              <ul className="space-y-4">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
              <ul className="space-y-4">
                {quicklinks2.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </Stack>
          </div>
          <div className="space-y-2 basis-1/3 flex flex-col items-center justify-center md:items-start">
            <div className="w-full hidden md:block">
              <StyledHeading>Download Nagad App</StyledHeading>
              <StyledPara sx={{ fontSize: "18px !important" }}>
                To make your life easier Download Nagad app and access all our
                services from a single touchpoint.
              </StyledPara>
            </div>
            <StyledBtn>Download App</StyledBtn>
          </div>
        </StyledStack>
        <StyledPara
          textAlign={{ xs: "center", md: "start" }}
          mt={{ xs: 3, md: 0 }}
        >
          © 2024 Nagad All rights reserved
        </StyledPara>
      </Container>
    </div>
  );
};

export default Footer;
