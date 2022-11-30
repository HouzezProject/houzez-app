import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import ManagementHeader from "../ManagementHeader";
import ManagementNavigation from "../ManagementNavigation";
import PropertyAddBody from "./PropertyAddBody";

const AgentManagementContainer = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "start",
  flexDirection: "column"
});

const AgentManagementBody = styled(Box)({
  height: "calc(100vh - 64px)",
  display: "flex",
  alignItems: "start",
  justifyContent: "start"
});

const PropertyAdd = () => {
  return (
    <AgentManagementContainer>
      <ManagementHeader />
      <AgentManagementBody>
        <ManagementNavigation />
        <PropertyAddBody />
      </AgentManagementBody>
    </AgentManagementContainer>
  );
};

export default PropertyAdd;
