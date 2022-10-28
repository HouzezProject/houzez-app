import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/material";

const PropertyListTableContainer = styled(Box)({
  width: "100%",
  height: "calc(100vh - 154px)"
});

const PropertyListTable = () => {
  return <PropertyListTableContainer>Property List Table</PropertyListTableContainer>;
};

export default PropertyListTable;
