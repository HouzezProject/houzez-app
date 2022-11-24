/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useState } from "react";
import theme from "../../styles/theme";
import GoogleMapReact from "google-map-react";
import HouseIcon from "@mui/icons-material/House";
import MapCard from "./MapCard";

const {
  palette: { primary }
} = theme;

interface Props {
  setCoordinates: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  coordinates: {
    lat: number;
    lng: number;
  };
  setBounds: any;
  properties: any;
}

const MapContainer = styled(Box)({
  width: "100%",
  height: "calc(100vh - 90px - 110px)",
  maxWidth: "100vw",
  maxHeight: "calc(100vh - 90px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const MapHouseIcon = styled(HouseIcon)({
  color: primary.main
});

const Map = ({ setCoordinates, coordinates, setBounds, properties }: Props) => {
  const [cardStatus, setCardStatus] = useState(false);
  const [cardData, setCardData] = useState(null);

  const options = () => ({
    mapId: "5af9dc285f149839",
    disableDefaultUI: true,
    clickableIcons: false
  });

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ? process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY : ""
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        options={options}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setCardData(properties[child]);
          setCardStatus(true);
        }}
      >
        {properties?.map((property: { latitude: string; longitude: string }, i: any) => (
          // @ts-ignore
          <Box key={i} lat={Number(property.latitude)} lng={Number(property.longitude)} component="span">
            <MapHouseIcon />
          </Box>
        ))}
        {cardStatus && (
          <MapCard
            cardData={cardData}
            setCardStatus={setCardStatus}
            // @ts-ignore
            lat={Number(cardData?.latitude)}
            // @ts-ignore
            lng={Number(cardData?.longitude)}
          />
        )}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
