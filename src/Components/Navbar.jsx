import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { pages } from "../Constents";
import { CiSearch } from "react-icons/ci";
import { Inbox, Mail, Menu } from "@mui/icons-material";
import MenuItems from "./MenuItems";
import SearchField from "./SearchField";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

const StyledPara = styled(Typography)({
  fontSize: "15px",
  textTransform: "capitalize",
  color: "black",
});

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "999px",
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  textTransform: "capitalize",
  "&:hover": {
    boxShadow: "none",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "transparent", // Custom background color
  borderRadius: "12px", // Custom border radius
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "5px",
  "&:hover": {
    backgroundColor: "transparent", // Background color on hover
  },
}));

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(1);
  const [open, setOpen] = useState(false);
  const [isSearchFiledOpen, setIsSearchFieldOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSearchFieldopen = () => setIsSearchFieldOpen(true);
  const handleSearchFieldClose = () => setIsSearchFieldOpen(false);

  return (
    <AppBar
      sx={{
        bgcolor: "white",
        borderRadius: "999px",
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        height: { xs: "10vh", md: "8.5vh", lg: "10vh" },
        top: "3%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80%",
          width: "100%",
          padding: "5px 25px  !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            height: "100%",
            width: "100%",
          }}
        >
          <Avatar
            sx={{ height: "40%", width: "fit-content" }}
            variant="square"
            src="/assets/nagad-logo.png"
          />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{ ml: 0, gap: 2 }}
            >
              {pages.map((item, index) => (
                <StyledPara key={index}>{item}</StyledPara>
              ))}
            </Stack>
          </Box>
        </Box>
        <StyledBox>
          <StyledIconButton onClick={handleSearchFieldopen} color="secondary ">
            <Box sx={{ fontSize: { xs: "20px", md: "25px", mt: 1 } }}>
              <CiSearch />
            </Box>
            <ListItemText
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                  textTransform: "capitalize",
                },
              }}
            >
              Search
            </ListItemText>
          </StyledIconButton>
          <Drawer
            anchor="right"
            open={isSearchFiledOpen}
            onClose={handleSearchFieldClose}
          >
            <SearchField handleSearchFieldClose={handleSearchFieldClose} />
          </Drawer>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={0}
              sx={{ bgcolor: "#d9dbe9", borderRadius: "999px" }}
            >
              {["English", "Bangla"].map((lan, idx) => (
                <StyledButton
                  onClick={() => setIsClicked(idx)}
                  variant={isClicked === idx ? "contained" : "text"}
                  sx={{ color: isClicked === idx ? "white" : "black" }}
                >
                  {lan}
                </StyledButton>
              ))}
            </Stack>
          </Box>
        </StyledBox>
        <Box>
          <StyledIconButton
            onClick={handleOpen}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Menu sx="medium" />
          </StyledIconButton>
        </Box>
        <Drawer anchor="right" open={open} onClose={handleClose}>
          <MenuItems handleClose={handleClose} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
