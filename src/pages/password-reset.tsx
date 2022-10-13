import { Box, Container, Button, Divider, Typography, Card, InputBase } from "@mui/material";
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
  minWidth: 500,
  minHeight: 700,
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
  marginBottom: "2rem",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px"
});

const InfoTypo = styled(Typography)({
  marginTop: "1rem",
  marginBottom: "2rem",
  textAlign: "center",
  fontWeight: "600",
  fontSize: "1.8rem",
  color: "black"
});
const DetailTypo = styled(Typography)({
  marginBottom: "1rem",
  textAlign: "center",
  fontWeight: "400",
  fontSize: "1.2rem",
  color: "black"
});

const PasswordInputBase = styled(InputBase)({
  alignItems: "center",
  backgroundColor: "white",
  fontWeight: "400",
  border: "1px solid" + light,
  width: "85%",
  padding: "6px 10px",
  borderRadius: "5px",
  boxShadow: "none",
  marginBottom: "1rem"
});

const SubmitButton = styled(Button)({
  width: "85%",
  heigh: "50px",
  inlineHeight: "20px",
  color: "white",
  padding: "6px 10px",
  backgroundColor: redMain,
  "&:hover": {
    backgroundColor: dark
  },
  marginBottom: "1rem"
});

const ResetDivider = styled(Divider)({
  margin: "15px",
  width: "100%",
  fontWeight: "600"
});

const RestPasswordPage: NextPage = () => {
  return (
    <ResetContainer>
      <ResetCard>
        <ResetBox>
          <Image src={logo} alt="Houzez" width="200px" height="50px" />
          <InfoTypo variant="body1">Reset your password</InfoTypo>
          <DetailTypo variant="body2" mt="10px" mb="10px" gap="10px">
            Enter your new password details
          </DetailTypo>
          <PasswordInputBase placeholder="New password" type="password" />
          <SubmitButton variant="contained">Change Password</SubmitButton>
          <ResetDivider />
          <DetailTypo variant="body2">
            Go back to
            <Link href="/signin"> sign in</Link>
          </DetailTypo>
        </ResetBox>
      </ResetCard>
    </ResetContainer>
  );
};

export default RestPasswordPage;
