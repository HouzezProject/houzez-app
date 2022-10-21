import "./SignIn";
import { Button, Stack } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import GoogleLogo from "../../../public/assets/icon/google_icon.png";
import FacebookLogo from "../../../public/assets/icon/facebook_icon.png";
import AppleLogo from "../../../public/assets/icon/apple_icon.png";

const {
  palette: {
    secondary: { light, main, dark }
  }
} = theme;

const SignInThirdPartyButton = styled(Button)({
  borderRadius: "3px",
  fontSize: "0.9rem",
  fontWeight: "400",
  height: "50px",
  paddingTop: "10px",
  "&::before": {
    content: `""`,
    position: "absolute",
    left: "15px",
    top: "13px",
    height: "24px",
    width: "24px"
  }
});

const SignInThirdPartyButtonGoogle = styled(SignInThirdPartyButton)({
  color: dark,
  borderColor: main,
  "&:hover": {
    borderColor: dark,
    backgroundColor: light
  },
  "&::before": {
    backgroundImage: `url(${GoogleLogo.src})`
  }
});

const SignInThirdPartyButtonFacebook = styled(SignInThirdPartyButton)({
  "&::before": {
    backgroundImage: `url(${FacebookLogo.src})`
  }
});

const SignInThirdPartyButtonApple = styled(SignInThirdPartyButton)({
  backgroundColor: dark,
  "&:hover": {
    backgroundColor: dark
  },
  "&::before": {
    backgroundImage: `url(${AppleLogo.src})`
  }
});

const SignInThirdParty = () => {
  return (
    <Stack spacing={2} direction="column" width="100%" mt="15px">
      <SignInThirdPartyButtonGoogle variant="outlined">continue with Google</SignInThirdPartyButtonGoogle>
      <SignInThirdPartyButtonFacebook variant="contained">continue with facebook</SignInThirdPartyButtonFacebook>
      <SignInThirdPartyButtonApple variant="contained">continue with apple</SignInThirdPartyButtonApple>
    </Stack>
  );
};

export default SignInThirdParty;
