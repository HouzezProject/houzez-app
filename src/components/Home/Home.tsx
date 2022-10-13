import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import React from "react";
import HomeBg from "../../assets/images/homeBg.jpg";
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
  backgroundImage: `url(${HomeBg.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: background
});

const HomeLayer = styled(Box)({
  width: "100%",
  height: "100vh",
  backgroundColor: "#1b21277f"
});

const HomeContainer = styled(Container)({
  width: "100%",
  height: "calc(100vh - 90px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Home = () => {
  return (
    <HomeBody>
      <HomeLayer>
        <Header />
        <HomeContainer>
          <HomeSearch />
        </HomeContainer>
      </HomeLayer>
    </HomeBody>
  );
};

export default Home;
