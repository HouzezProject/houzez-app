import { Box } from "@mui/system";
import { styled, Typography } from "@mui/material";
import propertyDemoImg from "../../../public/assets/images/propertyDemoImg.jpg";
import theme from "../../styles/theme";
import Icon from "@mdi/react";
import { mdiMapMarker, mdiShower, mdiBed, mdiGarage } from "@mdi/js";
import { CreateData, PropertyDatarows } from "./config";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const {
  palette: { primary }
} = theme;

const PropertyContentBody = styled(Box)({
  borderRadius: "5%",
  width: "50vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  top: "10vh",
  left: "12vw"
});

const PropertyCard = styled(Box)({
  transition: "box-shadow .3s",
  width: "50vw",
  height: "30vh",
  border: "1px solid #d3d3d3",
  display: "flex",
  alignItems: "center",
  marginTop: "30px",
  marginLeft: "20px",
  "&:hover": {
    boxShadow: "0 0 30px rgba(33,33,33,.2)"
  }
});

const PropertyImg = styled(Box)({
  backgroundImage: `url(${propertyDemoImg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "30vh",
  width: "15vw"
});

const PropertyInfoContainer = styled(Box)({
  marginLeft: "10px",
  height: "180px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRight: "1px solid #d3d3d3",
  paddingRight: "30px"
});

const PropertyType = styled(Typography)({
  backgroundColor: primary.main,
  color: "white",
  width: "32%",
  marginBottom: "10px",
  textAlign: "center"
});

const PropertyName = styled(Typography)({
  marginBottom: "10px",
  fontSize: "20px",
  fontWeight: "600"
});

const PropertyLocation = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "15px"
});

const LocationInfo = styled(Typography)({});

const PropertyRoomInfoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "150px",
  justifyContent: "space-between"
});

const RoomInfo = styled(Box)({});

const RoomTitle = styled(Typography)({});

const RoomNumberContainer = styled(Box)({
  display: "flex",
  alignItems: "center"
});

const RoomNumber = styled(Typography)({});

const AgentInfoContainer = styled(Box)({
  height: "120px",
  width: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between"
});

const AgentName = styled(Typography)({});

const PropertyPrice = styled(Typography)({
  fontSize: "20px",
  fontWeight: "600"
});

const PropertyContent = () => {
  const [data, setData] = useState<Array<CreateData>>([]);
  useEffect(() => setData(PropertyDatarows), []);

  return (
    <PropertyContentBody>
      {data.map((row) => (
        <PropertyCard key={row.id}>
          <PropertyImg></PropertyImg>
          <PropertyInfoContainer>
            <PropertyType>{row.type}</PropertyType>
            <PropertyName>{row.name}</PropertyName>
            <PropertyLocation>
              <Icon path={mdiMapMarker} title="User Profile" size={0.8} />
              <LocationInfo>{`${row.street}, ${row.suburd}, ${row.state}`}</LocationInfo>
            </PropertyLocation>
            <PropertyRoomInfoContainer>
              <RoomInfo>
                <RoomTitle>Bath</RoomTitle>
                <RoomNumberContainer>
                  <Icon path={mdiShower} title="User Profile" size={0.8} />
                  <RoomNumber>{row.baths}</RoomNumber>
                </RoomNumberContainer>
              </RoomInfo>
              <RoomInfo>
                <RoomTitle>Bed</RoomTitle>
                <RoomNumberContainer>
                  <Icon path={mdiBed} title="User Profile" size={0.8} />
                  <RoomNumber>{row.beds}</RoomNumber>
                </RoomNumberContainer>
              </RoomInfo>
              <RoomInfo>
                <RoomTitle>Garage</RoomTitle>
                <RoomNumberContainer>
                  <Icon path={mdiGarage} title="User Profile" size={0.8} />
                  <RoomNumber>{row.garages}</RoomNumber>
                </RoomNumberContainer>
              </RoomInfo>
            </PropertyRoomInfoContainer>
          </PropertyInfoContainer>
          <AgentInfoContainer>
            <Image src={row.agent_icon} alt="house image" width="50px" height="50px" objectFit="contain" />
            <AgentName>{row.agent}</AgentName>
            <PropertyPrice>{row.price}</PropertyPrice>
          </AgentInfoContainer>
        </PropertyCard>
      ))}
    </PropertyContentBody>
  );
};

export default PropertyContent;
