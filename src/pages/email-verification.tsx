import styled from "@emotion/styled";
import Image from "next/image";
import IconImg from "../assets/icon/email.png";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, Container, Box, Typography } from "@mui/material";
import theme from "../styles/theme";

const {
  palette: {
    primary: { main: pmain },
    secondary: { light, main },
    background: { paper: backgroundPaper }
  }
} = theme;

const BoxEmailOpen = styled(Card)({
  width: "550px",
  height: "580px",
  boxShadow: main + " 0 1px 5px 0px;",
  marginTop: 16,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: backgroundPaper,
  border: "1px solid " + light
});

const ContinueButton = styled(Button)({
  textTransform: "none",
  height: "50px",
  marginTop: "10px",
  fontWeight: "800"
});

const ConfirmTypography = styled(Typography)({
  color: pmain,
  marginTop: "10px",
  fontWeight: "800"
});

const DescriptionTypography = styled(Typography)({
  margin: "16px 50px 0 50px",
  textAlign: "center"
});

const EmailVerificationPage: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <BoxEmailOpen>
          <Box mt="60px">
            <Image src={IconImg} alt="IconImg" width="100px" height="100px" />
          </Box>
          <ConfirmTypography variant="h6">Confirm Your Email</ConfirmTypography>
          <DescriptionTypography variant="body2">
            Your account has been successfully registered. To complete the process please check your email for a
            validation request.
          </DescriptionTypography>
          <Box mt="20px">
            <ContinueButton variant="contained">CONTINUE</ContinueButton>
          </Box>
          <Box mt="20px">
            <ContinueButton variant="contained">Resend verification email</ContinueButton>
          </Box>
        </BoxEmailOpen>
      </Container>
    </>
  );
};
export default EmailVerificationPage;
