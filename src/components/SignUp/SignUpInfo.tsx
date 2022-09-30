import "./SignUp";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import theme from "../../styles/theme";
import React from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const {
  palette: {
    red: { main, dark }
  }
} = theme;

const SignUpInfoTextField = styled(TextField)({
  width: "inherit",
  height: "40px",
  lineHeight: "30px",
  marginBottom: "30px",
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

const SignUpInfo = () => {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box width="100%">
      <SignUpInfoTextField required label="Email address" type="email" />
      <FormControl required sx={{ m: 0, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <SignUpInfoButton variant="contained">Create account</SignUpInfoButton>
    </Box>
  );
};

export default SignUpInfo;
