import * as React from "react";
import { useEffect, useState } from "react";
import { Box, IconButton, Link } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import LogoutIcon from "@mui/icons-material/Logout";
import router from "next/router";
import Image from "next/image";
import LogoImg from "../../../public/assets/logo/logo_white.png";
import UserAvatar from "../../../public/assets/images/avatar.png";
import axiosClient from "../../utils/axios";
import { AxiosResponse } from "axios";

const {
  palette: { primary, secondary }
} = theme;

const ManagementHeaderContainer = styled(Box)({
  width: "100%",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "4px",
  backgroundColor: primary.main,
  color: primary.contrastText
});

const ManagementHeaderBoxLogo = styled(Box)({
  minWidth: "280px",
  paddingLeft: "2%",
  justifyContent: "center"
});

const ManagementHeaderBoxAvatar = styled(Box)({
  minWidth: "45px",
  maxWidth: "45px",
  justifyContent: "center"
});

const ManagementHeaderBoxUserInfo = styled(Box)({
  width: "80%",
  paddingLeft: "2%",
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

const Avatar = styled(Image)({
  borderRadius: "50%"
});

const ManagementHeader = () => {
  const [userInfoName, setUserInfoName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token")?.split(".")[1];

    const getUserInfo = async () => {
      if (token) {
        const userId = JSON.parse(Buffer.from(token, "base64").toString("binary")).agent_id;
        const userInfo = await axiosClient.get("/agents/" + userId);
        setUserInfoName(userInfo.data.email);
      } else {
        await router.push({ pathname: "/hint", query: { msg: "You need sign in first." } });
      }
    };
    getUserInfo();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <ManagementHeaderContainer>
      <ManagementHeaderBoxLogo>
        <Link href="/">
          <Image src={LogoImg} alt="Houzez" width="160px" height="40px" />
        </Link>
      </ManagementHeaderBoxLogo>

      <ManagementHeaderBoxAvatar>
        <Avatar src={UserAvatar} alt="Avatar" />
      </ManagementHeaderBoxAvatar>

      <ManagementHeaderBoxUserInfo>
        <Box>Welcome Agent ,</Box>
        <Box>{userInfoName}</Box>
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
