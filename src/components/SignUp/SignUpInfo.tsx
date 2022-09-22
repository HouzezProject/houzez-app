/* eslint-disable prettier/prettier */
import "./SignUp";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import theme from "../../styles/theme";
import { useFormik } from 'formik';
import * as yup from 'yup';

const { palette: { red: {main, dark}} } = theme;

const SignUpInfoTextField = styled(TextField)({
    width: "inherit",
    height: "40px",
    lineHeight: "30px",
    marginBottom: "30px",
    paddingLeft: "0",
    letterSpacing: "2rem",
    borderRadius: "3px",
    fontSize: "1.5rem",
    fontWeight: "400",
});

const SignUpInfoButton = styled(Button)({
    width: "100%",
    height: "50px",
    marginTop: "10px",
    backgroundColor: main,
    "&:hover": {
        backgroundColor: dark,
    }
});

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

const SignUpInfo = () => {
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Box width="100%">
                    <SignUpInfoTextField
                        required
                        label="Email address"
                        type="email"
                        fullWidth
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <br/>
                    <br/>
                    <SignUpInfoTextField
                        required
                        label="Password"
                        type="password" 
                        fullWidth
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}   
                    />
                    <SignUpInfoButton variant="contained" type="submit">Create account</SignUpInfoButton>
                </Box>
            </form>
        </div>
    );
}



export default SignUpInfo;
