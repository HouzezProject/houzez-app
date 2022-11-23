import { Box, Skeleton, styled } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import PropertyPreview from "./MapPropertyPreview";

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

const List = ({ propertyLists, isLoading, setIsLoading }: any) => {
  if (isLoading)
    return (
      <MapListContainer>
        <MapListCard>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" width="80%" />
          <Skeleton variant="rounded" width="100%" height="25vh" animation="wave" />
        </MapListCard>
        <MapListCard>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" width="80%" />
          <Skeleton variant="rounded" width="100%" height="25vh" animation="wave" />
        </MapListCard>
        <MapListCard>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" width="80%" />
          <Skeleton variant="rounded" width="100%" height="25vh" animation="wave" />
        </MapListCard>
      </MapListContainer>
    );

  return (
    <MapListContainer>
      {propertyLists &&
        propertyLists.map((propertyList: any, i: number) => <PropertyPreview propertyList={propertyList} key={i} />)}
    </MapListContainer>
  );
};

export default List;
