import "./AgentManagement";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, styled, SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const ManagementHeader = () => {
  const HomeIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
  const ChangeToolbar = styled(Toolbar)({ display: "flex", justifyContent: "space-between", fontSize: "10PX" });
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <ChangeToolbar>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <p>Agent,Chandler Bing</p>
        <HomeIcon
          sx={{
            color: "#e1f5fe",
            "&:hover": { color: "#03a9f4" }
          }}
        />
      </ChangeToolbar>
    </AppBar>
  );
};

export default ManagementHeader;
