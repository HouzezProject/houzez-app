/* eslint-disable prettier/prettier */
import * as React from "react";
import { Stack } from "@mui/material";
import HzButton from "../../UI/HzButtom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";

const SignUpThirdPartButton = styled(HzButton)({
    color: theme.palette.secondary.dark,
    borderColor: theme.palette.secondary.dark,
    "&:hover": {
        borderColor: theme.palette.secondary.main,
    }
});

const SignUpThirdPart = () => {
    return (
        <Stack spacing={2} direction="column" width="100%" mt="15px">
            <SignUpThirdPartButton variant="outlined" startIcon={<GoogleIcon />}>continue with Google</SignUpThirdPartButton>
            <SignUpThirdPartButton variant="outlined" startIcon={<FacebookIcon />}>continue with facebook</SignUpThirdPartButton>
            <SignUpThirdPartButton variant="outlined" startIcon={<AppleIcon />}>continue with apple</SignUpThirdPartButton>
        </Stack>
    );
};

export default SignUpThirdPart;