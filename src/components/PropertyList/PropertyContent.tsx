import { Box } from "@mui/system";
import { styled, Typography } from "@mui/material";

const PropertyContentBody = styled(Box)({
  border: "1px grey solid",
  borderRadius: "5%",
  width: "50vw",
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const PropertyContent = () => {
  return <PropertyContentBody>here is content</PropertyContentBody>;
};

export default PropertyContent;
