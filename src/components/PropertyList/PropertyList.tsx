import React from "react";
import Header from "./Header";
import PropertyFilter from "./PropertyFilter";
import PropertyContent from "./PropertyContent";
import { Breadcrumbs, Button, Container, Grid, Link, Box } from "@mui/material";
import styled from "@emotion/styled";

const Body = styled(Box)({
  margin: "0 20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
});

const PropertyList = () => {
  return (
    <>
      <Header></Header>
      <Body>
        <PropertyFilter></PropertyFilter>
        <PropertyContent></PropertyContent>
      </Body>
    </>
  );
};

export default PropertyList;
