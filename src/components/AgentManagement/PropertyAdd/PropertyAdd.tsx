import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import ManagementHeader from "../ManagementHeader";
import ManagementNavigation from "../ManagementNavigation";

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
  alignItems: "center",
  justifyContent: "start"
});

const PropertyAddContainer = styled(Box)({
  position: "absolute",
  left: "260px",
  top: "64px"
});

const PropertyAdd = () => {
  return (
    <AgentManagementContainer>
      <ManagementHeader />
      <AgentManagementBody>
        <ManagementNavigation />
        <PropertyAddContainer>
          <p>This is property add page.</p>
        </PropertyAddContainer>
      </AgentManagementBody>
    </AgentManagementContainer>
  );
};

export default PropertyAdd;
