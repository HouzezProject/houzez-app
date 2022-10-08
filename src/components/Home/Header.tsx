import styled from "@emotion/styled";
import { Breadcrumbs, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import Image from "next/image";
import LogoImg from "../../assets/logo/logo_black_200.png";
import HomeIcon from "@mui/icons-material/Home";
import SegmentIcon from "@mui/icons-material/Segment";
import MapIcon from "@mui/icons-material/Map";

const {
  palette: {
    secondary: { main }
  }
} = theme;

const HeaderContainer = styled(Container)({
  width: "1050px",
  height: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: main
});

const Header = () => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  return (
    <HeaderContainer>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Image src={LogoImg} alt="Houzez" width="200px" height="50px" />
        </Grid>
        <Grid item xs={6}>
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" sx={{ display: "flex", alignItems: "center" }} color="inherit" href="/">
                <HomeIcon sx={{ mr: 0.5 }} />
                Home
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                <SegmentIcon sx={{ mr: 0.5 }} />
                List
              </Link>
              <Typography sx={{ display: "flex", alignItems: "center" }} color="text.primary">
                <MapIcon sx={{ mr: 0.5 }} />
                Map
              </Typography>
            </Breadcrumbs>
          </div>
        </Grid>
        <Grid item xs={3}>
          Logo
        </Grid>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
