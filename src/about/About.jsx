import { Container } from "@mui/material";
import React from "react";
import Addanimation from "./Addanimation";
import Family from "./Family";
import HappyCustomers from "./HappyCustomers";

const About = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100%",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="space-y-8"
    >
      <Addanimation />
      <Family />
      <HappyCustomers />
    </Container>
  );
};

export default About;
