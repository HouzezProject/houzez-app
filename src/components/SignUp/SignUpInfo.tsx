import React, { useState } from "react";
import "./SignUp";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import theme from "../../styles/theme";
import { useFormik } from "formik";
import * as yup from "yup";
import axiosClient from "../../utils/axios";

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
  letterSpacing: "2rem",
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
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    }
  });

  const [emailErrorStatus, setEmailErrorStatus] = useState(false);
  const [emailErrorHelperText, setEmailErrorHelperText] = useState("");

  const emailCheck = async (e: string) => {
    formik.handleBlur(e);
    try {
      const url = `/agents?email=${e}`;
      await axiosClient.head(url);
      setEmailErrorStatus(true);
      setEmailErrorHelperText("The email is already exist...");
    } catch (error) {
      resetEmailTextFieldStatus();
    }
  };

  const resetEmailTextFieldStatus = () => {
    setEmailErrorStatus(false);
    setEmailErrorHelperText("");
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
          onBlur={(event) => emailCheck(event.target.value)}
          onBlurCapture={formik.handleBlur}
          error={(formik.touched.email && Boolean(formik.errors.email)) || emailErrorStatus}
          helperText={(formik.touched.email && formik.errors.email) || emailErrorHelperText}
          onKeyDown={resetEmailTextFieldStatus}
        />
        <SignUpInfoTextField
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <SignUpInfoButton variant="contained" type="submit">
          Create account
        </SignUpInfoButton>
      </form>
    </Box>
  );
};

export default SignUpInfo;
