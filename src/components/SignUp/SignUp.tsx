/* eslint-disable prettier/prettier */
import * as React from "react";
import styled from "@emotion/styled";
import HzContainer from "../UI/HzContainer";
import HzCard from "../UI/HzCard";
import { Box } from "@mui/system";
import Image from "next/image";
import LogoImg from "../../assets/logo/logo_black_200.png";
import SignUpInfo from "./components/SignUpInfo";
import HzDivider from "../UI/HzDivider";
import SignUpThirdPart from "./components/SignUpThirdPart";
import { Typography } from "@mui/material";
import Link from "next/link";

const SignUpCard = styled(HzCard)({
  minWidth: 450,
  minHeight: 600,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const SignUpBox = styled(Box)({
  width: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px"
});

const SignUp = () => {
  return (
    <HzContainer>
      <SignUpCard>
        <SignUpBox>
          <Image src={LogoImg} alt="Houzez" width="200px" height="50px" />
          <Typography variant="h4" mt="15px" sx={{ fontSize: "28px" }}>
            Create account
          </Typography>

          <SignUpInfo />

          <Typography variant="body2" mt="10px" mb="10px">
            Already have an account?&nbsp;&nbsp;
            <Link href="/signin">Sign in</Link>
          </Typography>

          <HzDivider>OR</HzDivider>

          <SignUpThirdPart />
        </SignUpBox>
      </SignUpCard>
    </HzContainer>
  );
};

export default SignUp;
