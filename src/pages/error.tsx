import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Button, Container, Typography, Link } from "@mui/material";
import theme from "../styles/theme";
import { useRouter } from "next/router";

const {
  palette: { primary, secondary, background }
} = theme;

const ErrorContainer = styled(Container)({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: background.default
});

const ErrorTypographyH1 = styled(Typography)({
  fontSize: "14rem",
  fontWeight: 600,
  color: secondary.main
});

const ErrorTypographyP = styled(Typography)({
  fontSize: "2rem",
  fontWeight: 400,
  color: secondary.main
});

const ErrorButton = styled(Button)({
  borderRadius: "3px",
  fontSize: "0.9rem",
  fontWeight: "400",
  height: "50px",
  margin: "30px auto 50px",
  backgroundColor: primary.main,
  "&:hover": {
    backgroundColor: primary.dark
  }
});

const ErrorButtonLink = styled(Link)({
  textDecoration: "none",
  color: secondary.contrastText
});

const usePost = () => {
  const router = useRouter();
  return router.query.errorcode;
};

const ErrorPage: NextPage = () => {
  return (
    <ErrorContainer>
      <ErrorTypographyH1 variant="h1">{usePost()}</ErrorTypographyH1>
      <ErrorTypographyP variant="body2">The page you are looking for cannot be found.</ErrorTypographyP>
      <ErrorButton variant="contained">
        <ErrorButtonLink href="/">Back to Homepage</ErrorButtonLink>
      </ErrorButton>
    </ErrorContainer>
  );
};
export default ErrorPage;
