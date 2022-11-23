import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import HotTubIcon from "@mui/icons-material/HotTub";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import Image from "next/image";

const {
  palette: { secondary, background }
} = theme;

interface Props {
  property: string;
  key: number;
  propertyImages: string[];
}

const MapListPreviewCard = styled(Box)({
  padding: "10px",
  boxShadow: secondary.main + " 0 1px 5px 0px;",
  background: background.paper,
  marginTop: "10px"
});

const MapListPreview = ({ property, key, propertyImages }: Props) => {
  // console.log(propertyImages);
  // console.log(property);

  // const imageList: any[] = [];

  // const getImage = (id: number) => {
    // for (let i = 0; i < propertyImages.length; i++) {
      // console.log("id: " + id);
      // console.log(propertyImages[i].property.id);
      // if (propertyImages[i].property.id === id) {
        // imageList.push(propertyImages[i].url);
      // }
    // }
    // console.log(imageList);
  // };

  // getImage(property.id);

  return (
    <>
      <MapListPreviewCard>
        {/* <Image src={imageList[0]} width={300} height={200} /> */}
        <Box>{property.title}</Box>
        <Box>${property.price}</Box>
        <Box>
          {property.street},{property.suburb}
        </Box>
        <Box>
          <SingleBedIcon />
          {property.bedroom}
          <HotTubIcon />
          {property.bathroom}
          <CarRepairIcon />
          {property.garage}
          <AspectRatioIcon />
          {property.landSize}|{property.propertyType}
        </Box>
      </MapListPreviewCard>
    </>
  );
};

export default MapListPreview;
