import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Box, Breadcrumbs, Button, Container, Grid } from "@mui/material";
import theme from "../../styles/theme";
import Image from "next/image";
import LogoImg from "../../../public/assets/logo/logo_white.png";
import HomeIcon from "@mui/icons-material/Home";
import SegmentIcon from "@mui/icons-material/Segment";
import MapIcon from "@mui/icons-material/Map";
import StarsIcon from "@mui/icons-material/Stars";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

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

const HeaderLink = styled(Box)({
  height: "90px",
  display: "flex",
  alignItems: "center",
  color: secondary.contrastText,
  margin: "0 20px",
  gap: "20px",
  fontWeight: "700",
  cursor: "pointer"
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

const HeaderButtonLinkSignIn = styled.div({
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

const HeaderButtonLinkSignUp = styled.div({
  color: primary.main,
  "&:hover": {
    color: primary.contrastText
  }
});

const HeaderIconLink = styled.div({
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
          <Box>
            <Link href="/">
              <Image src={LogoImg} alt="Houzez" width="200px" height="50px" />
            </Link>
          </Box>
        </HeaderGrid>
        <HeaderGrid item xs={6}>
          <Breadcrumbs separator="">
            <HeaderLink>
              <HomeIcon />
              <Link href="/">
                <div>Home</div>
              </Link>
            </HeaderLink>
            <HeaderLink>
              <SegmentIcon />
              <Link href="/property-list">
                <div>List</div>
              </Link>
            </HeaderLink>
            <HeaderLink>
              <MapIcon />
              <Link href="/map">
                <div>Map</div>
              </Link>
            </HeaderLink>
          </Breadcrumbs>
        </HeaderGrid>

        <HeaderGrid item xs={3}>
          {loginStatus ? (
            <>
              <Link href="/agent-management/account-setting">
                <HeaderIconLink>
                  <StarsIcon fontSize="inherit" />
                </HeaderIconLink>
              </Link>
              <Link href="/agent-management/account-setting">
                <HeaderIconLink>
                  <AccountCircleIcon fontSize="inherit" />
                </HeaderIconLink>
              </Link>
            </>
          ) : (
            <>
              <HeaderButtonSignIn variant="text">
                <Link href="/sign-in">
                  <HeaderButtonLinkSignIn>Sign in</HeaderButtonLinkSignIn>
                </Link>
              </HeaderButtonSignIn>
              <HeaderButtonSignUp variant="contained">
                <Link href="/sign-up">
                  <HeaderButtonLinkSignUp>Sign up</HeaderButtonLinkSignUp>
                </Link>
              </HeaderButtonSignUp>
            </>
          )}
        </HeaderGrid>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
