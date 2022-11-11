import { Box } from "@mui/system";
import { Card, CardContent, CardMedia, colors, styled, Typography } from "@mui/material";
import propertyDemoImg from "../../../public/assets/images/propertyDemoImg.jpg";
import agentAvatarDemo from "../../../public/assets/images/AgentAvatarDemo.jpeg";
import Image from "next/image";
import theme from "../../styles/theme";
import Icon from "@mdi/react";
import { mdiAccount, mdiMapMarker, mdiShower, mdibed, mdiBed, mdiGarage } from "@mdi/js";
import { Bathroom } from "@mui/icons-material";

const {
  palette: { primary, secondary }
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
  width: "60px",
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

const AgentAvatar = styled(Box)({
  backgroundImage: `url(${agentAvatarDemo.src})`,
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundPosition: "center",
  backgroundSize: "contain"
});

const AgentName = styled(Typography)({});

const PropertyPrice = styled(Typography)({
  fontSize: "20px",
  fontWeight: "600"
});

const PropertyContent = () => {
  return (
    <PropertyContentBody>
      <PropertyCard>
        <PropertyImg></PropertyImg>
        <PropertyInfoContainer>
          <PropertyType>House</PropertyType>
          <PropertyName>Vila In Coral Gables</PropertyName>
          <PropertyLocation>
            <Icon path={mdiMapMarker} title="User Profile" size={0.8} />
            <LocationInfo>West Flaminggo Road, Las Vegas</LocationInfo>
          </PropertyLocation>
          <PropertyRoomInfoContainer>
            <RoomInfo>
              <RoomTitle>Bath</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiShower} title="User Profile" size={0.8} />
                <RoomNumber>2</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
            <RoomInfo>
              <RoomTitle>Bed</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiBed} title="User Profile" size={0.8} />
                <RoomNumber>3</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
            <RoomInfo>
              <RoomTitle>Garage</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiGarage} title="User Profile" size={0.8} />
                <RoomNumber>2</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
          </PropertyRoomInfoContainer>
        </PropertyInfoContainer>
        <AgentInfoContainer>
          <AgentAvatar></AgentAvatar>
          <AgentName>Tom Wilson</AgentName>
          <PropertyPrice>$350.000</PropertyPrice>
        </AgentInfoContainer>
      </PropertyCard>
      <PropertyCard>
        <PropertyImg></PropertyImg>
        <PropertyInfoContainer>
          <PropertyType>House</PropertyType>
          <PropertyName>Vila In Coral Gables</PropertyName>
          <PropertyLocation>
            <Icon path={mdiMapMarker} title="User Profile" size={0.8} />
            <LocationInfo>West Flaminggo Road, Las Vegas</LocationInfo>
          </PropertyLocation>
          <PropertyRoomInfoContainer>
            <RoomInfo>
              <RoomTitle>Bath</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiShower} title="User Profile" size={0.8} />
                <RoomNumber>2</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
            <RoomInfo>
              <RoomTitle>Bed</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiBed} title="User Profile" size={0.8} />
                <RoomNumber>3</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
            <RoomInfo>
              <RoomTitle>Garage</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiGarage} title="User Profile" size={0.8} />
                <RoomNumber>2</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
          </PropertyRoomInfoContainer>
        </PropertyInfoContainer>
        <AgentInfoContainer>
          <AgentAvatar></AgentAvatar>
          <AgentName>Tom Wilson</AgentName>
          <PropertyPrice>$350.000</PropertyPrice>
        </AgentInfoContainer>
      </PropertyCard>
      <PropertyCard>
        <PropertyImg></PropertyImg>
        <PropertyInfoContainer>
          <PropertyType>House</PropertyType>
          <PropertyName>Vila In Coral Gables</PropertyName>
          <PropertyLocation>
            <Icon path={mdiMapMarker} title="User Profile" size={0.8} />
            <LocationInfo>West Flaminggo Road, Las Vegas</LocationInfo>
          </PropertyLocation>
          <PropertyRoomInfoContainer>
            <RoomInfo>
              <RoomTitle>Bath</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiShower} title="User Profile" size={0.8} />
                <RoomNumber>2</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
            <RoomInfo>
              <RoomTitle>Bed</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiBed} title="User Profile" size={0.8} />
                <RoomNumber>3</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
            <RoomInfo>
              <RoomTitle>Garage</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiGarage} title="User Profile" size={0.8} />
                <RoomNumber>2</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
          </PropertyRoomInfoContainer>
        </PropertyInfoContainer>
        <AgentInfoContainer>
          <AgentAvatar></AgentAvatar>
          <AgentName>Tom Wilson</AgentName>
          <PropertyPrice>$350.000</PropertyPrice>
        </AgentInfoContainer>
      </PropertyCard>
      <PropertyCard>
        <PropertyImg></PropertyImg>
        <PropertyInfoContainer>
          <PropertyType>House</PropertyType>
          <PropertyName>Vila In Coral Gables</PropertyName>
          <PropertyLocation>
            <Icon path={mdiMapMarker} title="User Profile" size={0.8} />
            <LocationInfo>West Flaminggo Road, Las Vegas</LocationInfo>
          </PropertyLocation>
          <PropertyRoomInfoContainer>
            <RoomInfo>
              <RoomTitle>Bath</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiShower} title="User Profile" size={0.8} />
                <RoomNumber>2</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
            <RoomInfo>
              <RoomTitle>Bed</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiBed} title="User Profile" size={0.8} />
                <RoomNumber>3</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
            <RoomInfo>
              <RoomTitle>Garage</RoomTitle>
              <RoomNumberContainer>
                <Icon path={mdiGarage} title="User Profile" size={0.8} />
                <RoomNumber>2</RoomNumber>
              </RoomNumberContainer>
            </RoomInfo>
          </PropertyRoomInfoContainer>
        </PropertyInfoContainer>
        <AgentInfoContainer>
          <AgentAvatar></AgentAvatar>
          <AgentName>Tom Wilson</AgentName>
          <PropertyPrice>$350.000</PropertyPrice>
        </AgentInfoContainer>
      </PropertyCard>
    </PropertyContentBody>
  );
};

export default PropertyContent;