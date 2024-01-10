import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Link, useNavigate } from "react-router-dom";
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import { AboutIcon, PaperIcon } from "../utils/icons";
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { HomeIcon } from "../utils/icons";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Home", path: "/" ,icon: <HomeIcon color='gray' /> },
          { text: "About", path: "/about",icon:<AboutIcon color='gray' />},
          { text: "Contact", path: "/contact",icon:<ContactMailOutlinedIcon/>  },
          { text: "FAQ", path: "/faq",icon:<QuizOutlinedIcon/> },
          { text: "White paper", path: "/white-paper",icon:<PaperIcon/> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>
              <ListItemIcon>{item.icon}</ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        sx={{ color: "gray", fontWeight: "900" }}
        onClick={toggleDrawer(true)}
      >
        {state.left ? <ClearIcon /> : <MenuIcon />}
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
