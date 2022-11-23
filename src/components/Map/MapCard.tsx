import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CropFreeIcon from "@mui/icons-material/CropFree";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import router from "next/router";

const {
  palette: { secondary, red, background }
} = theme;

interface Props {
  cardData: any;
  setCardStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const MapCardBox = styled(Box)({
  width: "300px",
  height: "320px",
  padding: "0px",
  position: "absolute",
  top: "-300px",
  left: "25px",
  boxShadow: secondary.main + " 0 1px 5px 0px;",
  background: background.paper,
  zIndex: "9"
});

const MapCardText = styled(Box)({
  width: "300px",
  height: "120px",
  color: secondary.dark,
  padding: "10px 20px",
  position: "absolute",
  bottom: "0",
  boxShadow: secondary.main + " 0 1px 5px 0px;"
});

const MapCardRooms = styled(Box)({
  paddingTop: "10px",
  fontSize: "0.8rem",
  fontWeight: "400",
  display: "flex",
  alignContent: "center",
  gap: "5px",
  wordSpacing: "10px"
});

const MapCardBedIcon = styled(BedIcon)({
  fontSize: "0.8rem"
});

const MapCardBathtubIcon = styled(BathtubIcon)({
  fontSize: "0.8rem",
  marginLeft: "5px"
});

const MapCardDirectionsCarIcon = styled(DirectionsCarIcon)({
  fontSize: "0.8rem",
  marginLeft: "5px"
});

const MapCardFreeIcon = styled(CropFreeIcon)({
  fontSize: "0.8rem",
  marginLeft: "5px"
});

const MapCardRoomsType = styled(Box)({
  marginLeft: "2px",
  paddingLeft: "5px",
  borderLeft: "1px solid " + secondary.main
});

const MapCardCloseIcon = styled(CloseIcon)({
  position: "relative",
  top: "-195px",
  right: "-270px",
  color: secondary.main,
  backgroundColor: background.paper,
  "&:hover": {
    color: red.main
  }
});

const MapCard = ({ cardData, setCardStatus }: Props) => {
  const closeCard = () => {
    if (cardData) {
      setCardStatus(false);
    }
  };

  const propertyDetailURL = () => {
    router.push("/property-detail?id=" + cardData.id);
  };

  return (
    <MapCardBox>
      <Image src={cardData?.image[0].url} alt="Houzez" width={300} height={200} />
      <MapCardCloseIcon onClick={closeCard} />
      <MapCardText onClick={propertyDetailURL}>
        <Typography variant="body2">{cardData?.title}</Typography>
        <Typography variant="h6">${cardData?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
        <Typography variant="body2">
          {cardData?.street}, {cardData?.suburb}
        </Typography>
        <MapCardRooms>
          <MapCardBedIcon />
          {cardData?.bedroom}
          <MapCardBathtubIcon />
          {cardData?.bathroom}
          <MapCardDirectionsCarIcon />
          {cardData?.garage}
          <MapCardFreeIcon />
          {cardData?.landSize}
          <MapCardRoomsType>{cardData?.propertyType}</MapCardRoomsType>
        </MapCardRooms>
      </MapCardText>
    </MapCardBox>
  );
};

export default MapCard;
