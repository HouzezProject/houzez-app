import styled from "@emotion/styled";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import theme from "../../styles/theme";
import FooterBg from "../../../public/assets/images/footer_bg.jpg";
import LogoImg from "../../../public/assets/logo/logo_white.png";
import Image from "next/image";
import { Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const {
  palette: { primary, secondary, background }
} = theme;

const FooterContainer = styled(Box)({
  width: "100%",
  height: "300px",
  color: secondary.light,
  backgroundImage: `url(${FooterBg.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
});

const FooterContent = styled(Box)({
  width: "1050px",
  display: "flex",
  justifyContent: "space-between"
});

const FooterLayer = styled(Box)({
  width: "inherit",
  height: "inherit",
  padding: "50px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#121212bd"
});

const FooterCopyRight = styled(Box)({
  width: "inherit",
  height: "55px",
  backgroundColor: secondary.dark,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "50px",
  paddingRight: "50px",
  fontSize: "0.8rem",
  wordSpacing: "0.1rem",
  boxShadow: "1px 1px 3px" + background.paper
});

const FooterLink = styled(Link)({
  color: secondary.light,
  paddingLeft: "10px",
  paddingRight: "10px",
  textDecoration: "none",
  "&:hover": {
    color: primary.light
  }
});

const FooterTypography = styled(Typography)({
  lineHeight: "1.5rem",
  letterSpacing: "0.05rem",
  fontWeight: "300"
});

const FooterTypographyHead = styled(FooterTypography)({
  fontWeight: "600",
  paddingBottom: "20px"
});

const FooterListItem = styled(ListItem)({
  padding: "4px"
});

const FooterListItemIcon = styled(ListItemIcon)({
  color: primary.contrastText,
  fontSize: "1rem"
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLayer>
        <FooterContent>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <Image src={LogoImg} alt="Houzez" width="200px" height="50px" />
              <FooterTypography variant="body2" mt="20px">
                Houzez Real Estate is a platform dedicated to providing home transactions for sellers and buyers. Houzez
                Real Estate has helped thousands of clients find properties that fit their needs.
              </FooterTypography>
            </Grid>
            <Grid item xs={4}>
              <FooterTypographyHead variant="h5">Contact Us</FooterTypographyHead>
              <List>
                <FooterListItem>
                  <FooterListItemIcon>
                    <LocationOnIcon />
                  </FooterListItemIcon>
                  <ListItemText>
                    <FooterTypography variant="body2">Melbourne VIC 3000</FooterTypography>
                  </ListItemText>
                </FooterListItem>
                <FooterListItem>
                  <FooterListItemIcon>
                    <ContactPhoneIcon />
                  </FooterListItemIcon>
                  <ListItemText>
                    <FooterTypography variant="body2">(+61) 310 8888 8888</FooterTypography>
                  </ListItemText>
                </FooterListItem>
                <FooterListItem>
                  <FooterListItemIcon>
                    <EmailIcon />
                  </FooterListItemIcon>
                  <ListItemText>
                    <FooterTypography variant="body2">service@houzez4u.com</FooterTypography>
                  </ListItemText>
                </FooterListItem>
                <FooterListItem>
                  <FooterListItemIcon>
                    <AccessTimeIcon />
                  </FooterListItemIcon>
                  <ListItemText>
                    <FooterTypography variant="body2">Mon - Fri / 9:00AM - 6:00PM</FooterTypography>
                  </ListItemText>
                </FooterListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <FooterTypographyHead variant="h5">Services</FooterTypographyHead>
              <List>
                <FooterListItem>
                  <ListItemText>
                    <FooterTypography variant="body2">Buy Properties</FooterTypography>
                  </ListItemText>
                </FooterListItem>
                <FooterListItem>
                  <ListItemText>
                    <FooterTypography variant="body2">Sell Properties</FooterTypography>
                  </ListItemText>
                </FooterListItem>
                <FooterListItem>
                  <ListItemText>
                    <FooterTypography variant="body2">Lawyer service</FooterTypography>
                  </ListItemText>
                </FooterListItem>
              </List>
            </Grid>
          </Grid>
        </FooterContent>
      </FooterLayer>
      <FooterCopyRight>
        <FooterContent>
          <Box>
            &copy; 2022 Houzez Real Estate - Premium real estate & theme & theme by
            <FooterLink href="/">HOUZEZ.COM</FooterLink>
          </Box>
          <Box>
            <FooterLink href="/">Privacy</FooterLink>
            &frasl;
            <FooterLink href="/">Contact</FooterLink>
            &frasl;
            <FooterLink href="/">About</FooterLink>
            &frasl;
            <FooterLink href="/">Faq</FooterLink>
          </Box>
        </FooterContent>
      </FooterCopyRight>
    </FooterContainer>
  );
};

export default Footer;
