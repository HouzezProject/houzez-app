import React, { useState } from "react";
import "./SignIn";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import theme from "../../styles/theme";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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

const SignInInfo = () => {
  const [values, setValues] = useState(false);

  const handleClickShowPassword = () => {
    setValues(!values);
  };
  return (
    <Box width="100%">
      <form noValidate>
        <SignInInfoTextField required fullWidth id="email" type="email" label="Email address" />
        <SignInInfoTextField
          required
          fullWidth
          id="password"
          label="Password"
          type={values ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {values && <Visibility />}
                  {!values && <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <SignInInfoButton variant="contained" type="submit">
          Sign In
        </SignInInfoButton>
      </form>
    </Box>
  );
};

export default SignInInfo;
