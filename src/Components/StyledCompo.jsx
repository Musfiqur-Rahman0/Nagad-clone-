import { Button, styled, Typography } from "@mui/material";
import { theme } from "../theme/theme";

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "35px",
  },
  color: "#141421",
  fontWeight: "bold",
}));
export const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#f24f44",
  fontWeight: 500,
  [theme.breakpoints.up("sm")]: {
    fontSize: "24px",
  },
}));
export const StyledPara = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: "#212529",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
  },
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: "10px 20px",
  borderRadius: "999px",

  // border: "2px solid black",
  "&:hover": {
    backgroundColor: "transparent",
    color: "black",
    border: "2px solid #f24f44",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
    padding: "10px",
  },
}));

export const RoundedButton = styled(Button)(({ theme }) => ({
  padding: "10px 20px",
  borderRadius: "999px",
}));
