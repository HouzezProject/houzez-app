import * as React from "react";
import Box from "@mui/material/Box";
import ManagementHeader from "./ManagementHeader";
import ManagementNavigation from "./ManagementNavigation";
import PropertyAdd from "./AgentManagementMain/PropertyAdd";

const AgentManagement = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <ManagementHeader />
      <ManagementNavigation />
      <PropertyAdd />
    </Box>
  );
};

export default AgentManagement;
