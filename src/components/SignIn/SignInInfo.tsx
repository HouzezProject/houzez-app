import React from "react";
import "./SignIn";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import theme from "../../styles/theme";
import { useFormik } from "formik";
import * as yup from "yup";

const {
  palette: {
    red: { main, dark }
  }
} = theme;

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

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required")
});

const SignInInfo = () => {
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

  return (
    <Box width="100%">
      <form onSubmit={formik.handleSubmit} noValidate>
        <SignInInfoTextField
          required
          fullWidth
          id="email"
          type="email"
          label="Email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlurCapture={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <SignInInfoTextField
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <SignInInfoButton variant="contained" type="submit" disabled={Boolean(formik.errors.email)}>
          Sign In
        </SignInInfoButton>
      </form>
    </Box>
  );
};

export default SignInInfo;
