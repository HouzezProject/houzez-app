import { Box, Container, Button, Divider, InputBase, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import theme from "../styles/theme";
import logo from "public/favicon.ico";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";

const {
  palette: {
    secondary: { light, main },
    background: { paper: backgroundPaper },
    red: { main: redMain, dark }
  },
  typography: {
    fontFamily,
    button: { textTransform }
  }
} = theme;

const ResetContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  padding: "1.25rem",
  border: "1px solid" + light,
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  flexDirection: "column",
  gap: "25px",
  backgroundColor: backgroundPaper,
  boxShadow: main + " 0 1px 5px 0px;",
  marginTop: "100px"
});

const HeaderBox = styled(Box)({
  marginTop: "15px",
  paddingLeft: "10px",
  width: "50%",
  display: "flex",
  gap: "10px",
  textAlign: "center",
  justifyItems: "center",
  alignItems: "center"
});

const HouzezTypo = styled(Typography)({
  fontFamily: fontFamily,
  fontWeight: "500",
  fontSize: "24px",
  inlineHeight: "24px",
  textAlign: "center",
  alignItems: "center"
});

const InfoTypo = styled(Typography)({
  fontFamily: fontFamily,
  margin: "16px 50px 0 50px",
  textAlign: "center",
  fontWeight: "600",
  fontSize: "24px"
});
const DetailTypo = styled(Typography)({
  fontFamily: fontFamily,
  margin: "16px 50px 0 50px",
  textAlign: "center",
  fontWeight: "400",
  fontSize: "16px"
});

const CodeInputBase = styled(InputBase)({
  fontFamily: fontFamily,
  alignItems: "center",
  backgroundColor: "white",
  fontWeight: "400",
  border: "1px solid" + light,
  heigh: "2rem",
  width: "70%",
  padding: "6px 10px",
  borderRadius: "5px",
  boxShadow: "none",
  marginTop: "0.5rem",
  marginBottom: "0.5rem"
});

const PasswordInputBase = styled(InputBase)({
  fontFamily: fontFamily,
  alignItems: "center",
  backgroundColor: "white",
  fontWeight: "400",
  border: "1px solid" + light,
  heigh: "2rem",
  width: "70%",
  padding: "6px 10px",
  borderRadius: "5px",
  boxShadow: "none",
  marginBottom: "0.5rem"
});

const ConfirmInputBase = styled(InputBase)({
  fontFamily: fontFamily,
  alignItems: "center",
  backgroundColor: "white",
  fontWeight: "400",
  border: "1px solid" + light,
  heigh: "2rem",
  width: "70%",
  padding: "6px 10px",
  borderRadius: "5px",
  boxShadow: "none",
  marginBottom: "0.5rem"
});

const SubmitButton = styled(Button)({
  width: "70%",
  heigh: "2rem",
  fontWeight: "400",
  color: "white",
  padding: "6px 10px",
  backgroundColor: redMain,
  "&:hover": {
    backgroundColor: dark
  },
  textTransform: textTransform
});

const ResetDivider = styled(Divider)({
  width: "100%",
  fontWeight: "600"
});

const RestPasswordPage: NextPage = () => {
  return (
    <ResetContainer maxWidth="sm">
      <HeaderBox>
        <Image src={logo} alt="Houzez icon" height="50px" width="50px" />
        <HouzezTypo variant="body2">Houzez.com.au</HouzezTypo>
      </HeaderBox>
      <InfoTypo variant="body1">Update your password</InfoTypo>
      <DetailTypo variant="body2">
        We have sent a verification code to your email. Enter the code here, with your new password details
      </DetailTypo>
      <CodeInputBase placeholder="Code" />
      <PasswordInputBase placeholder="New password" />
      <ConfirmInputBase placeholder="Confirm new password" />
      <SubmitButton variant="contained">Change Password</SubmitButton>
      <Typography variant="body2" mt="10px" mb="10px" gap="10px">
        Go back to
        <Link href="/signin"> sign in</Link>
      </Typography>
      <ResetDivider />
      <Typography variant="body2" mt="10px" mb="10px">
        Personal Information Collection Statement
      </Typography>
    </ResetContainer>
  );
};

export default RestPasswordPage;
