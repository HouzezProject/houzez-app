import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Box, Card, Container, Typography } from "@mui/material";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import Link from "next/link";

const {
  palette: { secondary, background }
} = theme;

const HintContainer = styled(Container)({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: background.default
});

const HintCard = styled(Card)({
  minWidth: 500,
  minHeight: 220,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "3px",
  padding: "1.25rem",
  border: "1px solid " + secondary.light,
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  color: secondary.dark,
  backgroundColor: background.paper,
  boxShadow: secondary.main + " 0 1px 5px 0px;"
});

const HintBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const HintTypographyP = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 400,
  color: secondary.dark,
  paddingBottom: "20px"
});

const HintLink = styled(Link)({
  fontSize: "1rem"
});

const usePost = () => {
  const router = useRouter();
  return router.query.msg;
};

const HintPage: NextPage = () => {
  return (
    <HintContainer>
      <HintCard>
        <HintBox>
          <HintTypographyP variant="body2">{usePost()}</HintTypographyP>
          <HintLink href={"/sign-in"}>sign in</HintLink>
        </HintBox>
      </HintCard>
    </HintContainer>
  );
};
export default HintPage;
