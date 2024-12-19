import {
  Autocomplete,
  Avatar,
  Box,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { StyledHeading, StyledPara } from "./StyledCompo";
import { top100Films } from "../Constents";

const SearchField = ({ handleSearchFieldClose }) => {
  const [searchQueary, setSearchQueary] = useState("");

  const handleChange = (e) => setSearchQueary(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const inputValue = e.target.value;
      setSearchQueary(inputValue);
    }
  };

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      role="presentation"
      sx={{ backgroundColor: "#ffffff" }}
      position={"relative"}
    >
      <Paper
        elevation={4}
        sx={{
          height: "10%",
          width: "90%",
          borderRadius: "999px",

          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 2,
            px: "25px !important",
          }}
        >
          <Avatar src="/public/assets/nagad.png" />
          <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                fullWidth
                variant="standard"
                value={searchQueary}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                {...params}
                label="Search"
                sx={{
                  fontSize: "24px",
                  "& .MuiInput-underline:before": { borderBottom: "none" },
                  "& .MuiInput-underline:after": { borderBottom: "none" },
                  "& .MuiInput-underline:hover:not(Mui-disabled):before": {
                    borderBottom: "none",
                  },
                }}
              />
            )}
          />
        </Box>
      </Paper>
      {searchQueary.trim() === "" && (
        <Box
          onClick={handleSearchFieldClose}
          sx={{ position: "absolute", top: "15%", padding: "20px" }}
        >
          <StyledHeading>NO Match Founds</StyledHeading>
        </Box>
      )}
    </Box>
  );
};

export default SearchField;
