import { Box, IconButton } from "@mui/material";
import React from "react";
import { ftIcons } from "../Constents";
import { theme } from "../theme/theme";

const SocialLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {ftIcons.map((Icon, idx) => (
        <IconButton
          key={idx}
          sx={{
            "&:hover": {
              color: theme.palette.primary.main,
            },
          }}
        >
          <Icon size={"2rem"} />
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialLinks;
