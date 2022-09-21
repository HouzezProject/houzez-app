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

const EmailVerificationPage: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <BoxEmailOpen>
          <Box mt="60px">
            <Image src={IconImg} alt="IconImg" width="100px" height="100px" />
          </Box>
          <Typography variant="h6" color="primary" mt="10px">
            Confirm Your Email
          </Typography>
          <Typography variant="body2" mt="16px" textAlign="center" ml="80px" mr="80px">
            Your account has been successfully registered. To complete the process please check your email for a
            validation request.
          </Typography>
          <Box mt="20px">
            <Button variant="contained">CONTINUE</Button>
          </Box>
          <Box mt="20px">
            <Button variant="contained">Resend verification email</Button>
          </Box>
        </BoxEmailOpen>
      </Container>
    </>
  );
};
export default EmailVerificationPage;
