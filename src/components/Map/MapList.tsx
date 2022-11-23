import { Box, Skeleton, styled } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import PropertyPreview from "./MapListPreview";

interface Props {
  properties: string[];
  propertyImages: string[];
}

const {
  palette: { secondary, background }
} = theme;

const MapListContainer = styled(Box)({
  position: "absolute",
  zIndex: "9",
  width: "25vw",
  height: "calc(100vh - 90px - 110px)",
  padding: "10px",
  backgroundColor: background.paper + "DD",
  overflow: "scroll"
});

const MapListCard = styled(Box)({
  padding: "10px",
  boxShadow: secondary.main + " 0 1px 5px 0px;",
  background: background.paper,
  marginTop: "10px"
});

const MapList = ({ properties, propertyImages }: Props) => {
  return (
    <MapListContainer>
      {properties &&
        properties.map((property: string, i: number) => (
          <PropertyPreview property={property} key={i} propertyImages={propertyImages} />
        ))}
    </MapListContainer>
  );
};

export default MapList;
