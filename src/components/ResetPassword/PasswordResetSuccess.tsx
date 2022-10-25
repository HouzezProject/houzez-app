import { Box, Button, Card, Container, styled, Typography } from "@mui/material";
import Image from "next/image";
import LogoImg from "../../public/assets/logo/logo_black.png";
import Link from "next/link";
import theme from "../../styles/theme";

const {
  palette: {
    secondary: { light, main, dark, contrastText },
    background: { default: background, paper: backgroundPaper },
    red: { main: redMain, dark: redDark }
  }
} = theme;

const ResetContainer = styled(Container)({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: background
});

const ResetCard = styled(Card)({
  minWidth: 500,
  minHeight: 400,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "3px",
  padding: "1.25rem",
  border: "1px solid " + light,
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  color: dark,
  backgroundColor: backgroundPaper,
  boxShadow: main + " 0 1px 5px 0px;"
});

const ResetBox = styled(Box)({
  width: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  margin: "40px 0"
});

const ResetTypography = styled(Typography)({
  marginTop: "30px",
  marginBottom: "30px",
  fontSize: "22px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const SubmitButton = styled(Button)({
  width: "100%",
  height: "50px",
  marginTop: "10px",
  color: contrastText,
  backgroundColor: redMain,
  padding: "6px 10px",
  "&:hover": {
    backgroundColor: redDark
  },
  fontSize: "18px"
});

const GeneralButtonLink = styled(Link)({
  color: contrastText,
  textDecoration: "none"
});

const passwordResetSuccessPage = () => {
  return (
    <ResetContainer>
      <ResetCard>
        <ResetBox>
          <Image src={LogoImg} alt="Houzez-logo" width="200px" height="50px" />
          <ResetTypography variant="body2">Your password has been updated</ResetTypography>
          <SubmitButton variant="contained" type="submit">
            <GeneralButtonLink href="/sign-in">Done</GeneralButtonLink>
          </SubmitButton>
        </ResetBox>
      </ResetCard>
    </ResetContainer>
  );
};

export default passwordResetSuccessPage;
