import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import Header from "./Header";
import HomeSearch from "./HomeSearch";

const {
  palette: {
    background: { default: background }
  }
} = theme;

const HomeBody = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  backgroundColor: background
});

const HomeContainer = styled(Container)({
  width: "1050px"
});

const Home = () => {
  return (
    <HomeBody>
      <HomeContainer>
        <Header />
        <HomeSearch />
      </HomeContainer>
    </HomeBody>
  );
};

export default Home;
