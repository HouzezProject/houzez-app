import { Box, Container, Button, Divider, Typography, Card, TextField, AlertColor, Alert } from "@mui/material";
import styled from "@mui/system/styled";
import logo from "../../../public/assets/logo/logo_black.png";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { useState } from "react";
import axiosClient from "../../utils/axios";
import theme from "../../styles/theme";

interface AccountActiveInfo {
  severity: AlertColor;
  display: string;
  text: string;
}

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
  gap: "5px",
  margin: "40px 0"
});

const SignInInfoAlert = styled(Alert)({
  marginBottom: "20px",
  borderRadius: "3px"
});

const InfoTypo = styled(Typography)({
  marginTop: "25px",
  marginBottom: "15px",
  textAlign: "center",
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
  marginBottom: "30px",
  lineHeight: "30px",
  letterSpacing: "0.05rem",
  borderRadius: "3px",
  fontSize: "1.5rem",
  fontWeight: "400"
});

const SubmitButton = styled(Button)({
  width: "100%",
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

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(/[A-Z]+/, "At least One uppercase character required")
    .matches(/\d+/, "At least One number required")
    .matches(/[@#$%^&+=]+/, "At least one special character required")
    .required("Password is required")
});

const RestPasswordPage = () => {
  const initialAccountActiveInfo: AccountActiveInfo = { severity: "error", display: "none", text: "" };
  const [accountActive, setAccountActive] = useState(initialAccountActiveInfo);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      password: ""
    },
    validationSchema,
    onSubmit: async ({ password }) => {
      try {
        const token = router.query.code;
        if (token) {
          await axiosClient.patch("/agents/reset-password", { token, password });
          router.push("/PasswordResetSuccess");
        }
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 400) {
          setAccountActive({ severity: "error", display: "flex", text: error.response.data.details });
        }
      }
    }
  });

  return (
    <ResetContainer>
      <ResetCard>
        <ResetBox>
          <Image src={logo} alt="Houzez" width="200px" height="50px" />
          <InfoTypo variant="h4">Reset your password</InfoTypo>
          <DetailTypo variant="body2">Enter your new password details</DetailTypo>
          <form onSubmit={formik.handleSubmit} noValidate>
            <SignInInfoAlert id="alert" severity={accountActive.severity} sx={{ display: accountActive.display }}>
              {accountActive.text}
            </SignInInfoAlert>
            <PasswordTextField
              required
              fullWidth
              id="password"
              placeholder="Password"
              label="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.password)}
              helperText={formik.errors.password}
            />
            <SubmitButton variant="contained" type="submit">
              Change Password
            </SubmitButton>
          </form>
          <ResetDivider />
          <DetailTypo variant="body2">
            Go back to
            <Link href="/sign-in"> sign in</Link>
          </DetailTypo>
        </ResetBox>
      </ResetCard>
    </ResetContainer>
  );
};

export default RestPasswordPage;
