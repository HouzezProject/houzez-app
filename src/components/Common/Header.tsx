import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Breadcrumbs, Button, Container, Grid, Link } from "@mui/material";
import theme from "../../styles/theme";
import Image from "next/image";
import LogoImg from "../../../public/assets/logo/logo_white.png";
import HomeIcon from "@mui/icons-material/Home";
import SegmentIcon from "@mui/icons-material/Segment";
import MapIcon from "@mui/icons-material/Map";
import StarsIcon from "@mui/icons-material/Stars";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const {
  palette: { primary, secondary, background }
} = theme;

const HeaderContainer = styled(Container)({
  width: "1050px",
  height: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const HeaderGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const HeaderLink = styled(Link)({
  height: "90px",
  display: "flex",
  alignItems: "center",
  color: secondary.contrastText,
  textDecoration: "none",
  margin: "0 20px",
  gap: "20px",
  fontWeight: "700"
});

const HeaderButton = styled(Button)({
  width: "95px",
  height: "50px",
  marginTop: "10px",
  margin: "0 10px",
  letterSpacing: "0.05rem"
});

const HeaderButtonSignIn = styled(HeaderButton)({
  color: secondary.contrastText,
  "&:hover": {
    borderColor: secondary.dark,
    backgroundColor: secondary.light
  }
});

const HeaderButtonLinkSignIn = styled(Link)({
  textDecoration: "none",
  color: secondary.contrastText,
  "&:hover": {
    color: primary.main
  }
});

const HeaderButtonSignUp = styled(HeaderButton)({
  backgroundColor: background.paper,
  "&:hover": {
    backgroundColor: primary.main
  }
});

const HeaderButtonLinkSignUp = styled(Link)({
  textDecoration: "none",
  color: primary.main,
  "&:hover": {
    color: primary.contrastText
  }
});

const HeaderIconLink = styled(Link)({
  color: secondary.contrastText,
  padding: "10px",
  fontSize: "2rem"
});

const Header = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
    <HeaderContainer>
      <Grid container spacing={2}>
        <HeaderGrid item xs={3}>
          <Link href="/">
            <Image src={LogoImg} alt="Houzez" width="200px" height="50px" />
          </Link>
        </HeaderGrid>

        <HeaderGrid item xs={6}>
          <Breadcrumbs separator="">
            <HeaderLink href="/">
              <HomeIcon />
              Home
            </HeaderLink>
            <HeaderLink href="/">
              <SegmentIcon />
              List
            </HeaderLink>
            <HeaderLink href="/map">
              <MapIcon />
              Map
            </HeaderLink>
          </Breadcrumbs>
        </HeaderGrid>

        <HeaderGrid item xs={3}>
          {!loginStatus && (
            <HeaderButtonSignIn variant="text">
              <HeaderButtonLinkSignIn href="/sign-in">Sign in</HeaderButtonLinkSignIn>
            </HeaderButtonSignIn>
          )}
          {!loginStatus && (
            <HeaderButtonSignUp variant="contained">
              <HeaderButtonLinkSignUp href="/sign-up">Sign up</HeaderButtonLinkSignUp>
            </HeaderButtonSignUp>
          )}
          {loginStatus && (
            <HeaderIconLink href="/agent-management/account-setting">
              <StarsIcon fontSize="inherit" />
            </HeaderIconLink>
          )}
          {loginStatus && (
            <HeaderIconLink href="/agent-management/account-setting">
              <AccountCircleIcon fontSize="inherit" />
            </HeaderIconLink>
          )}
        </HeaderGrid>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
