import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../../styles/theme";
import HeaderContent from "../Home/Header";

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

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent></HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
