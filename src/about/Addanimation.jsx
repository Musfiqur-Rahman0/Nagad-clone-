import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { StyledHeading } from "../Components/StyledCompo";

const Addanimation = () => {
  return (
    <Box
      sx={{ width: "70%", height: "100%", textAlign: "center" }}
      className="space-y-5"
    >
      <Avatar
        sx={{ height: "40%", width: "100%" }}
        src="/assets/about1st.gif"
        variant="rounded"
      />
      <StyledHeading>Nagad ~ A DSF of the bangladesh post office</StyledHeading>
    </Box>
  );
};

export default Addanimation;
