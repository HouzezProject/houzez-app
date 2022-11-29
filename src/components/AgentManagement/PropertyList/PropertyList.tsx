import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import ManagementHeader from "../ManagementHeader";
import ManagementNavigation from "../ManagementNavigation";
import PropertySearchBar from "./PropertySearchBar";
import PropertyListTable from "./PropertyListTable";

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
  justifyContent: "start",
  width: "100%"
});

const PropertyListContainer = styled(Box)({
  width: "calc(100vw - 260px)",
  position: "fixed",
  left: "260px",
  top: "64px"
});

const PropertyList = () => {
  return (
    <AgentManagementContainer>
      <ManagementHeader />
      <AgentManagementBody>
        <ManagementNavigation />
        <PropertyListContainer>
          <PropertySearchBar />
          <PropertyListTable />
        </PropertyListContainer>
      </AgentManagementBody>
    </AgentManagementContainer>
  );
};

export default PropertyList;
