import styled from "@emotion/styled";
import Image from "next/image";
import IconImg from "../../public/assets/icon/email.png";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, Container, Box, Typography } from "@mui/material";
import theme from "../styles/theme";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axiosClient from "../utils/axios";

const {
  palette: {
    primary: { main: pmain },
    secondary: { light, main, contrastText },
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

const GeneralButton = styled(Button)({
  textTransform: "uppercase",
  height: "50px",
  marginTop: "10px",
  fontWeight: "800",
  color: contrastText,
  width: "300px"
});

const GeneralButtonLink = styled(Link)({
  color: contrastText,
  textDecoration: "none"
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
  const router = useRouter();
  const email = router.query.userEmail;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [seconds, setSeconds] = useState(60);
  useEffect(() => {
    let secondsInterval: string | number | NodeJS.Timeout | undefined;
    if (isButtonDisabled === true) {
      secondsInterval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(secondsInterval);
  }, [isButtonDisabled]);
  const onBtnClick = async () => {
    setSeconds(60);
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 60000);
    await axiosClient.post("/agents/resend-email", { email });
  };
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
            <GeneralButton variant="contained">
              <GeneralButtonLink href="/sign-in">CONTINUE</GeneralButtonLink>
            </GeneralButton>
          </Box>
          <Box mt="20px">
            <GeneralButton variant="contained" disabled={isButtonDisabled} onClick={onBtnClick} title="resendBtn">
              Resend verification email
              {isButtonDisabled ? " " + seconds : ""}
            </GeneralButton>
          </Box>
        </BoxEmailOpen>
      </Container>
    </>
  );
};
export default EmailVerificationPage;
