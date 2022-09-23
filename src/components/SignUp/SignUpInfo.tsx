/* eslint-disable prettier/prettier */
import "./SignUp";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import theme from "../../styles/theme";

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
})

const SignUpInfo = () => {
    return (
        <Box width="100%">
            <SignUpInfoTextField
                required
                label="Email address"
                type="email"
            />
            <SignUpInfoTextField
                required
                label="Password"
                type="password"
            />
            <SignUpInfoButton variant="contained">Create account</SignUpInfoButton>
        </Box>
    );
};

export default SignUpInfo;
