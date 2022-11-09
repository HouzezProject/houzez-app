import * as React from "react";
import { Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import NavLink from "../Common/NavLink";
import theme from "../../styles/theme";

const {
  palette: { secondary, background }
} = theme;

const ManagementNavigationSideBar = styled(Box)({
  backgroundColor: background.paper,
  fontWeight: "500",
  display: "flex",
  justifyContent: "start",
  flexDirection: "column",
  width: "260px",
  height: "calc(100vh - 64px)",
  paddingTop: "10px",

  a: {
    color: secondary.dark,
    padding: "1.2rem 2rem",
    textDecoration: "none",
    transition: "all 0.6s ease-in-out 0s",

    "&:hover": {
      backgroundColor: secondary.light
    },

    "&:active": {
      backgroundColor: secondary.main,
      boxShadow: "0 2px 25px" + secondary.dark
    },

    "&[aria-current]": {
      background: secondary.light
    }
  }
});

const ManagementNavigationSideBarDivider = styled(Divider)({
  margin: "20px 0"
});

const ManagementNavigation = () => {
  return (
    <ManagementNavigationSideBar>
      <NavLink href="/agent-management/account-setting">Account setting</NavLink>
      <ManagementNavigationSideBarDivider />
      <NavLink href="/agent-management/property-add">Add property</NavLink>
      <NavLink href="/agent-management/property-list?page=1">My property list</NavLink>
    </ManagementNavigationSideBar>
  );
};

export default ManagementNavigation;
