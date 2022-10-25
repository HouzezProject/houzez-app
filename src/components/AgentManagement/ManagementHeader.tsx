import * as React from "react";
import { Box, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import router from "next/router";
import Image from "next/image";
import LogoImg from "../../../public/assets/logo/logo_white.png";
import { Link } from "@mui/material";

const {
  palette: { primary, secondary }
} = theme;

const ManagementHeaderContainer = styled(Box)({
  width: "100%",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: primary.main,
  color: primary.contrastText
});

const ManagementHeaderBoxLogo = styled(Box)({
  width: "270px",
  paddingLeft: "2%",
  justifyContent: "center"
});

const ManagementHeaderBoxAvatar = styled(Box)({
  width: "5%",
  paddingLeft: "2%",
  justifyContent: "center"
});

const ManagementHeaderBoxUserInfo = styled(Box)({
  width: "80%",
  paddingLeft: "1%",
  flexDirection: "column",
  fontSize: "0.8rem",
  fontWeight: 500
});

const ManagementHeaderBoxLogout = styled(Box)({
  width: "5%",
  paddingRight: "2%"
});

const ManagementHeaderButton = styled(IconButton)({
  color: secondary.contrastText
});

const ManagementHeader = () => {
  const logout = () => {
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <ManagementHeaderContainer>
      <ManagementHeaderBoxLogo>
        <Link href="../">
          <Image src={LogoImg} alt="Houzez" width="160px" height="40px" />
        </Link>
      </ManagementHeaderBoxLogo>

      <ManagementHeaderBoxAvatar>
        <ManagementHeaderButton size="large">
          <AccountCircleIcon fontSize="inherit" />
        </ManagementHeaderButton>
      </ManagementHeaderBoxAvatar>

      <ManagementHeaderBoxUserInfo>
        <Box>Agent</Box>
        <Box>8da89359-4189-466f-b3c2-70e42577ebc7</Box>
      </ManagementHeaderBoxUserInfo>

      <ManagementHeaderBoxLogout>
        <ManagementHeaderButton size="large" onClick={logout}>
          <LogoutIcon fontSize="inherit" />
        </ManagementHeaderButton>
      </ManagementHeaderBoxLogout>
    </ManagementHeaderContainer>
  );
};

export default ManagementHeader;
