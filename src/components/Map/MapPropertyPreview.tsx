import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";

const {
  palette: { secondary, background }
} = theme;

const MapPropertyPreviewCard = styled(Box)({
  padding: "10px",
  boxShadow: secondary.main + " 0 1px 5px 0px;",
  background: background.paper,
  marginTop: "10px"
});

const MapPropertyPreview = ({ place, key }: any) => {
  return (
    <>
      <MapPropertyPreviewCard>{place.name}</MapPropertyPreviewCard>
    </>
  );
};

export default MapPropertyPreview;
