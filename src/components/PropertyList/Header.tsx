import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";
import theme from "../../styles/theme";
import Image from "next/image";
import LogoImg from "../../../public/assets/logo/logo_white.png";

const {
  palette: { primary }
} = theme;

const HeaderContainer = styled(Box)({
  height: "10vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: primary.dark,
  position: "fixed",
  zIndex: "1"
});

const HeaderBox = styled(Box)({
  width: "75vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

const HeaderLinkContainer = styled(Box)({
  width: "250px",
  display: "flex",
  justifyContent: "space-between"
});

const HeaderButton = styled(Button)({
  color: "white"
});

const AddListButton = styled(Button)({
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white"
  }
});

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <Image src={LogoImg} alt="Houzez" width="200px" height="50px" />
        <HeaderLinkContainer>
          <HeaderButton>Home</HeaderButton>
          <HeaderButton>Pages</HeaderButton>
          <HeaderButton>Contact</HeaderButton>
        </HeaderLinkContainer>
        <AddListButton variant="outlined" disableRipple={true}>
          Add List
        </AddListButton>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
