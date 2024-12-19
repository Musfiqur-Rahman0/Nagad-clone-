import { Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { theme } from "../theme/theme";

const MenuItems = ({ handleClose }) => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      role="presentation"
      onClick={handleClose}
      onKeyDown={handleClose}
      sx={{ backgroundColor: "#ffffff" }}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Offers" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Download App" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="English" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="বাংলা" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuItems;
