import { Box, Container, Button, Divider, Typography, Card, TextField } from "@mui/material";
import styled from "@mui/system/styled";
import theme from "../styles/theme";
import logo from "../../src/assets/logo/logo_black.png";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";

const {
  palette: {
    secondary: { light, main },
    background: { default: background, paper: backgroundPaper },
    red: { main: redMain, dark }
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
  minWidth: 400,
  minHeight: 550,
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
  gap: "12px"
});

const InfoTypo = styled(Typography)({
  marginTop: "25px",
  marginBottom: "15px",
  textAlign: "center",
  fontSize: "28px",
  color: "black"
});
const DetailTypo = styled(Typography)({
  marginTop: "10px",
  marginBottom: "10px",
  textAlign: "center",
  gap: "10px",
  color: "black"
});

const PasswordTextField = styled(TextField)({
  width: "400px",
  height: "56px",
  lineHeight: "30px",
  letterSpacing: "0.05rem",
  borderRadius: "3px",
  fontSize: "1.5rem",
  fontWeight: "400"
});

const SubmitButton = styled(Button)({
  width: "400px",
  height: "50px",
  padding: "6px 16px",
  marginTop: "10px",
  color: backgroundPaper,
  backgroundColor: redMain,
  "&:hover": {
    backgroundColor: dark
  },
  marginBottom: "1rem"
});

const ResetDivider = styled(Divider)({
  margin: "10px 10px 10px 5px",
  width: "100%",
  fontWeight: "600"
});

const RestPasswordPage: NextPage = () => {
  return (
    <ResetContainer>
      <ResetCard>
        <ResetBox>
          <Image src={logo} alt="Houzez" width="200px" height="50px" />
          <InfoTypo variant="h4">Reset your password</InfoTypo>
          <DetailTypo variant="body1">Enter your new password details</DetailTypo>
          <PasswordTextField placeholder="New password" type="password" />
          <SubmitButton variant="contained">Change Password</SubmitButton>
          <ResetDivider />
          <DetailTypo variant="body1">
            Go back to
            <Link href="/signin"> sign in</Link>
          </DetailTypo>
        </ResetBox>
      </ResetCard>
    </ResetContainer>
  );
};

export default RestPasswordPage;
