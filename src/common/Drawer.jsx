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
import ClearIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Collapse } from "@mui/material";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";
import {
  AccountBoxOutlined,
  AddBoxOutlined,
  ContactMail,
  DashboardOutlined,
  LoginOutlined,
  QuestionAnswerOutlined,
} from "@mui/icons-material";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
    openLogin: false,
  });

  const drawerRef = React.useRef(null);
  const darkModeEnabled = useSelector(selectDarkMode);
  const { selectedColor } = useSelector((state) => state.colors);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (state.left && !drawerRef.current.contains(event.target)) {
      // Close the drawer only if it's open and click is outside the drawer
      setState({ left: false, openLogin: false });
      return;
    }

    setState({ left: open });

    // Close the login submenu when closing the drawer
    if (!open && state.openLogin) {
      setState({ ...state, openLogin: false });
    }
  };

  const handleLoginClick = (event, path) => {
    event.stopPropagation();
    setState({ ...state, openLogin: !state.openLogin });

    if (path) {
      // Redirect to the specified path
      window.open(path, "_blank");
    }
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
        height: "100%",
        color: darkModeEnabled ? "gray" : "",
      }}
      className={`${darkModeEnabled ? "bg-gray-800" : ""}`}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      ref={drawerRef}
    >
      <List>
        {[
          { text: "Home", path: "/", icon: <DashboardOutlined /> },
          { text: "About", path: "/about", icon: <AddBoxOutlined /> },
          {
            text: "Contact",
            path: "/contact",
            icon: <ContactMail />,
          },
          { text: "FAQ", path: "/faq", icon: <QuestionAnswerOutlined /> },
          {
            text: "White paper",
            path: "/white-paper",
            icon: <AccountBoxOutlined />,
          },
          {
            text: "Login",
            icon: <LoginOutlined />,
            onClick: (event) => handleLoginClick(event),
            subItems: [
              {
                text: "Partner",
                icon: <AccountCircleOutlinedIcon />,
                path: "http://apps.centumworldrig.com/mininglogin",
              },
              {
                text: "Referral",
                icon: <AccountCircleOutlinedIcon />,
                path: "http://apps.centumworldrig.com/memberlogin",
              },
              {
                text: "Franchise",
                icon: <AccountCircleOutlinedIcon />,
                path: "http://apps.centumworldrig.com/franchiselogin",
              },
              {
                text: "BMM",
                icon: <AccountCircleOutlinedIcon />,
                path: "http://apps.centumworldrig.com/statelogin",
              },
            ],
          },
        ].map((item) => (
          <div key={item.text}>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href={item.path}
                onClick={(event) => item.onClick(event, item.path)}
              >
                <ListItemIcon   style={{ color: darkModeEnabled ? 'gray'  : '' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {item.subItems &&
                  (state.openLogin ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
              </ListItemButton>
            </ListItem>
            {item.subItems && (
              <Collapse in={state.openLogin} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      key={subItem.text}
                      button
                      onClick={(event) => handleLoginClick(event, subItem.path)}
                    >
                      <ListItemIcon style={{ color: darkModeEnabled ? 'gray'  : '' }}>{subItem.icon}</ListItemIcon>
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
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
        {state.left ? (
          <ClearIcon />
        ) : (
          <MenuIcon className={`${darkModeEnabled ? "text-white" : ""} `} />
        )}
      </Button>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
