import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import React from "react";

const HomeSearchContainer = styled(Container)({
  width: "1050px"
});

const HomeSearch = () => {
  return (
    <HomeSearchContainer>
      <Box>HomeSearch</Box>
    </HomeSearchContainer>
  );
};

export default HomeSearch;
