import { useState } from "react";
import { AxiosError } from "axios";
import "./SignIn";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Alert, AlertColor, Button, TextField } from "@mui/material";
import theme from "../../styles/theme";
import axiosClient from "../../utils/axios";
import router from "next/router";

interface AuthResponseMsgInfo {
  severity: AlertColor;
  display: string;
  text: string;
}

const {
  palette: {
    red: { main, dark }
  }
} = theme;

const SignInInfoAlert = styled(Alert)({
  marginBottom: "20px",
  borderRadius: "3px"
});

const SignInInfoTextField = styled(TextField)({
  width: "100%",
  height: "40px",
  lineHeight: "30px",
  marginBottom: "45px",
  paddingLeft: "0",
  letterSpacing: "0.05rem",
  borderRadius: "3px",
  fontSize: "1.5rem",
  fontWeight: "400"
});

const SignInInfoButton = styled(Button)({
  width: "100%",
  height: "50px",
  marginTop: "10px",
  backgroundColor: main,
  "&:hover": {
    backgroundColor: dark
  }
});

const SignInInfo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const initialAuthResponseMsg: AuthResponseMsgInfo = { severity: "error", display: "none", text: "" };
  const [authResponseMsg, setAuthResponseMsg] = useState(initialAuthResponseMsg);
  const [submitLock, setSubmitLock] = useState(false);

  const handleSubmit = async () => {
    try {
      const url = `/agents/sign-in`;
      const res = await axiosClient.post(url, { email, password });
      const userId = JSON.parse(
        Buffer.from(res.headers.authorization?.split(".")[1], "base64").toString("binary")
      ).agent_id;
      localStorage.setItem("token", res.headers.authorization);
      localStorage.setItem("userId", userId);
      countdownThenRedirect("success", 3, "Sign in successfully. ", router.push, "/");
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        setAuthResponseMsg({ severity: "error", display: "flex", text: "Email or password not correct." });
      }
      if (error instanceof AxiosError && error.response?.status === 403) {
        countdownThenRedirect("error", 3, "Your account is not activated. ", router.push, "email-verification");
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const countdownThenRedirect = (severity: AlertColor, countdown: number, text: string, url: any, urlPage: string) => {
    setInterval(() => {
      if (countdown >= 0) {
        setSubmitLock(true);
        setAuthResponseMsg({
          severity: severity,
          display: "flex",
          text: text + " Page jumps in " + countdown + "s"
        });
        countdown--;
      } else {
        url(urlPage);
      }
    }, 1000);
  };

  return (
    <Box width="100%">
      <SignInInfoAlert id="alert" severity={authResponseMsg.severity} sx={{ display: authResponseMsg.display }}>
        {authResponseMsg.text}
      </SignInInfoAlert>
      <form noValidate>
        <SignInInfoTextField
          required
          fullWidth
          id="email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitLock}
        />
        <SignInInfoTextField
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={submitLock}
        />
        <SignInInfoButton variant="contained" onClick={handleSubmit} disabled={submitLock}>
          Sign In
        </SignInInfoButton>
      </form>
    </Box>
  );
};

export default SignInInfo;
