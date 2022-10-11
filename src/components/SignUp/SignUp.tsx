import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Image from "next/image";
import LogoImg from "../../assets/logo/logo_black.png";
import SignUpInfo from "./SignUpInfo";
import SignUpThirdPart from "./SignUpThirdParty";
import { Card, Container, Divider, Typography } from "@mui/material";
import Link from "next/link";
import theme from "../../styles/theme";

const {
  palette: {
    secondary: { light, main, dark },
    background: { default: background, paper: backgroundPaper }
  }
} = theme;

const SignUpContainer = styled(Container)({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: background
});

const SignUpCard = styled(Card)({
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

const SignUpBox = styled(Box)({
  width: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  margin: "40px 0"
});

const SignUpDivider = styled(Divider)({
  width: "100%",
  fontWeight: "600"
});

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpCard>
        <SignUpBox>
          <Image src={LogoImg} alt="Houzez" width="200px" height="50px" />
          <Typography variant="h4" mt="25px" mb="15px" sx={{ fontSize: "28px" }}>
            Create account
          </Typography>

          <SignUpInfo />

          <Typography variant="body2" mt="10px" mb="10px" gap="10px">
            Already have an account?
            <Link href="/signin"> Sign in</Link>
          </Typography>

          <SignUpDivider>OR</SignUpDivider>

          <SignUpThirdPart />
        </SignUpBox>
      </SignUpCard>
    </SignUpContainer>
  );
};

export default SignUp;
