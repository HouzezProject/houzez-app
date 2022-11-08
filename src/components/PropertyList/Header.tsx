import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Breadcrumbs, Button, Container, Grid, Link, Box } from "@mui/material";
import theme from "../../styles/theme";
import Image from "next/image";
import LogoImg from "../../../public/assets/logo/logo_white.png";
import HomeIcon from "@mui/icons-material/Home";
import SegmentIcon from "@mui/icons-material/Segment";
import MapIcon from "@mui/icons-material/Map";
import StarsIcon from "@mui/icons-material/Stars";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Padding } from "@mui/icons-material";

const {
  palette: { primary, secondary }
} = theme;

const HeaderContainer = styled(Box)({
  height: "10vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: primary.dark
});

const HeaderGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Header = () => {
  return (
    <HeaderContainer>
      <Grid container spacing={2}>
        <HeaderGrid item xs={3}>
          <Image src={LogoImg} alt="Houzez" width="200px" height="50px" />
        </HeaderGrid>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
