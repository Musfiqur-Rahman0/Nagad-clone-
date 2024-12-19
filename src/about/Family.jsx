import { Avatar, Box, Stack } from "@mui/material";
import React from "react";
import {
  StyledBtn,
  StyledHeading,
  StyledPara,
} from "../Components/StyledCompo";

const Family = () => {
  return (
    <Box
      className="space-y-5"
      sx={{ width: "100%", height: "100%", textAlign: "center" }}
    >
      <Avatar
        sx={{ height: "40%", width: "100%" }}
        src="/assets/aboutbanner.jpg"
        variant="rounded"
      />
      <StyledPara px={5}>
        Nagad is an innovative and promising digital financial service of
        bangladesh. Post office that embarked upon a glorious journey on March
        26, 2019. After this inception nagad has gain more then 7 crore user in
        couple of years
      </StyledPara>

      <StyledBtn>Learn more</StyledBtn>
      <Stack
        sx={{
          width: "100%",
          height: "40%",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, md: 10 },
        }}
      >
        <Avatar
          sx={{ height: "100%", width: { xs: "100%", md: "50%" } }}
          src="/assets/threat.jpg"
          variant="rounded"
        />
        <Box sx={{ textAlign: "start", height: "100%" }} className="space-y-2">
          <StyledHeading>Beaware of frouds</StyledHeading>
          <StyledPara>
            Do not share the PIN, OTP or account balance of your Nagad account
            with anyone. Fraudsters can take advantage of your vulnerability to
            steal your hard-earned money from your account. Even by using your
            account, they can scam others by pretending to be you
          </StyledPara>
          <StyledBtn>Learn More</StyledBtn>
        </Box>
      </Stack>
    </Box>
  );
};

export default Family;
