import { Box, Container, Button, Divider, Typography, Card, InputAdornment, TextField } from "@mui/material";
import styled from "@mui/system/styled";
import theme from "../styles/theme";
import logo from "../../public/assets/logo/logo_black.png";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import * as yup from "yup";
import { useFormik } from "formik";
import axiosClient from "../utils/axios";

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
  minWidth: 700,
  minHeight: 600,
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
  width: "700px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px"
});

const InfoTypo = styled(Typography)({
  marginTop: "1rem",
  marginBottom: "1rem",
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

const StateTypo = styled(Typography)({
  marginBottom: "1rem",
  textAlign: "center",
  fontWeight: "400",
  fontSize: "1rem",
  color: "black"
});

const FormNew = styled("form")({
  width: "55%"
});

const EmailInputBase = styled(TextField)({
  height: "50px",
  marginBottom: "2rem"
});

const SubmitButton = styled(Button)({
  width: "100%",
  height: "50px",
  inlineHeight: "20px",
  color: "white",
  padding: "6px 10px",
  backgroundColor: redMain,
  "&:hover": {
    backgroundColor: dark
  },
  marginBottom: "1rem",
  textTransform: "none",
  fontSize: "18px"
});

const ResetDivider = styled(Divider)({
  margin: "15px",
  width: "100%",
  fontWeight: "600"
});

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required")
});

const ForgetPasswordPage: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema,
    onSubmit: async (email) => {
      const emailParams = email.email;
      console.log(emailParams);
      try {
        const url = `/agents/reset-password?email=${emailParams}`;
        await axiosClient.post(url);
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <ResetContainer>
      <ResetCard>
        <ResetBox>
          <Image src={logo} alt="Houzez" width="200px" height="50px" />

          <InfoTypo variant="body1">Forget your password?</InfoTypo>
          <DetailTypo variant="body2" mt="10px" mb="10px" gap="10px">
            Enter your email to update your password.
          </DetailTypo>
          <FormNew onSubmit={formik.handleSubmit} noValidate>
            <EmailInputBase
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                )
              }}
              required
              fullWidth
              label="Email address"
              id="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.email)}
              helperText={formik.errors.email}
            />
            <SubmitButton type="submit" variant="contained" disabled={Boolean(formik.errors.email)}>
              Reset my password
            </SubmitButton>
          </FormNew>
          <DetailTypo variant="body2">
            <Link href="/signin">Go back to sign in</Link>
          </DetailTypo>
          <ResetDivider />
          <StateTypo mb="10px" gap="10px">
            Personal Information Collection Statement.
          </StateTypo>
        </ResetBox>
      </ResetCard>
    </ResetContainer>
  );
};

export default ForgetPasswordPage;
