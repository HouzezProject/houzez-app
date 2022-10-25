import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { NextPage } from "next/types";
import React from "react";
import ManagementHeader from "../../components/AgentManagement/ManagementHeader";
import ManagementNavigation from "../../components/AgentManagement/ManagementNavigation";

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

const ErrorPage: NextPage = () => {
  return (
    <AgentManagementContainer>
      <ManagementHeader />
      <AgentManagementBody>
        <ManagementNavigation />
      </AgentManagementBody>
    </AgentManagementContainer>
  );
};
export default ErrorPage;
