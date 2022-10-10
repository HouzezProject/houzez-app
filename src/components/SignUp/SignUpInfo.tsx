import { useState, FocusEvent } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import theme from "../../styles/theme";
import * as yup from "yup";
import axiosClient from "../../utils/axios";
import { AxiosError } from "axios";
import "./SignUp";

interface EmailError {
  status: boolean;
  helperText: string;
}

const {
  palette: {
    red: { main, dark }
  }
} = theme;

const SignUpInfoTextField = styled(TextField)({
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

const SignUpInfoButton = styled(Button)({
  width: "100%",
  height: "50px",
  marginTop: "10px",
  backgroundColor: main,
  "&:hover": {
    backgroundColor: dark
  }
});

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(/[A-Z]+/, "At least One uppercase character required")
    .matches(/\d+/, "At least One number required")
    .matches(/[@#$%^&+=]+/, "At least one special character required")
    .required("Password is required")
});

const SignUpInfo = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: ({ email, password }) => {
      axiosClient.post("/agents", { email, password });
      router.push("/email-verification");
    }
  });

  const router = useRouter();

  const initialEmailError: EmailError = { status: false, helperText: "" };
  const [emailError, setEmailError] = useState(initialEmailError);

  const checkIfEmailIsUnique = async (e: FocusEvent<HTMLInputElement>) => {
    try {
      const url = `/agents?email=${e.target.value}`;
      await axiosClient.head(url);
      setEmailError({ status: true, helperText: "The email is already exist..." });
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        setEmailError(initialEmailError);
      } else {
        setEmailError({ status: true, helperText: "Internal server error, please try later" });
      }
    }
  };

  return (
    <Box width="100%">
      <form onSubmit={formik.handleSubmit} noValidate>
        <SignUpInfoTextField
          required
          fullWidth
          id="email"
          type="email"
          label="Email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={checkIfEmailIsUnique}
          onKeyDown={() => setEmailError(initialEmailError)}
          error={Boolean(formik.errors.email) || emailError.status}
          helperText={formik.errors.email || emailError.helperText}
        />
        <SignUpInfoTextField
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          role="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.password)}
          helperText={formik.errors.password}
        />
        <SignUpInfoButton
          variant="contained"
          type="submit"
          disabled={Boolean(formik.errors.password || formik.errors.email) || emailError.status}
        >
          Create account
        </SignUpInfoButton>
      </form>
    </Box>
  );
};

export default SignUpInfo;
