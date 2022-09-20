/* eslint-disable prettier/prettier */
import "./SignUp";
import { Button, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import GoogleLogo from "../../assets/icon/google_icon.png";
import FacebookLogo from "../../assets/icon/facebook_icon.png";
import AppleLogo from "../../assets/icon/apple_icon.png";

const { palette: { secondary: {light, main, dark}} } = theme;

const SignUpThirdpartyButton = styled(Button)({
    borderRadius: "3px",
    fontSize: "0.9rem",
    fontWeight: "400",
    height: "50px",
    "&::before": {
        content: `""`,
        position: "absolute",
        left: "15px",
        top: "10px",
        height: "30px",
        width: "30px",
    },
})

const SignUpThirdpartyButtonGoogle = styled(SignUpThirdpartyButton)({
    color: dark,
    borderColor: main,
    "&:hover": {
        borderColor: dark,
        backgroundColor: light,
    },
    "&::before": {
        backgroundImage: "url(" + {GoogleLogo} + ")",
    },
});

const SignUpThirdpartyButtonFacebook = styled(SignUpThirdpartyButton)({
    "&::before": {
        backgroundImage: "url(" + {FacebookLogo} + ")",
    },
});

const SignUpThirdPartyButtonApple = styled(SignUpThirdpartyButton)({
    backgroundColor: dark,
    "&:hover": {
        backgroundColor: dark,
    },
    "&::before": {
        backgroundImage: "url(" + {AppleLogo} + ")",
    },
});

const SignUpThirdParty = () => {
    return (
        <Stack spacing={2} direction="column" width="100%" mt="15px">
            <SignUpThirdpartyButtonGoogle variant="outlined" startIcon={<GoogleIcon />}>continue with Google</SignUpThirdpartyButtonGoogle>
            <SignUpThirdpartyButtonFacebook variant="contained" startIcon={<FacebookIcon />}>continue with facebook</SignUpThirdpartyButtonFacebook>
            <SignUpThirdPartyButtonApple variant="contained" startIcon={<AppleIcon />}>continue with apple</SignUpThirdPartyButtonApple>
        </Stack>
    );
};

export default SignUpThirdParty;