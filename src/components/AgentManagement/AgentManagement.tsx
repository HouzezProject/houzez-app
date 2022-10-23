import * as React from "react";
import Box from "@mui/material/Box";
import ManagementHeader from "./ManagementHeader";
import ManagementNavigation from "./ManagementNavigation";
import PropertyList from "./AgentManagementMain/PropertyList";
// import PropertyAdd from "./AgentManagementMain/PropertyAdd";

const AgentManagement = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <ManagementHeader />
      <ManagementNavigation />
      {/* <PropertyAdd /> */}
      <PropertyList />
    </Box>
  );
};

export default AgentManagement;
