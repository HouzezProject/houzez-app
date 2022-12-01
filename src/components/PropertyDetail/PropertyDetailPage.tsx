import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "react-material-ui-carousel";
import theme from "../../styles/theme";
import lodash from "lodash";
import { Property } from "../../pages/property-detail";

const {
  palette: {
    primary: { dark }
  }
} = theme;

const MainContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
});

const ContentContainer = styled(Container)({
  position: "relative",
  width: "960px",
  display: "flex",
  flexDirection: "column",
  margin: "0px 20px"
});

const AgentContainer = styled(Container)({
  width: "960px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "50px"
});

const AgentBox = styled(Box)({
  width: "960px",
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  margin: "20px 80px"
});

const HouseNameTypo = styled(Typography)({
  marginBottom: "7px"
});

const ImageCarousel = styled(Carousel)({
  width: "730px",
  height: "600px",
  margin: "30px 5px"
});

const DetailBox = styled(Box)({
  height: "180px",
  display: "flex",
  alignItems: "center",
  gap: "300px"
});

const InfoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "5px"
});

const InfoTypo = styled(Typography)({
  fontWeight: "bold",
  display: "flex",
  margin: "20px 0 15px",
  paddingBottom: "15px",
  borderBottom: "1px solid rgba(56, 41, 48, 0.10)"
});

const DetailTypo = styled(Typography)({
  lineHight: "1.9",
  display: "flex",
  paddingBottom: "15px"
});

const TitleTypo = styled(Typography)({
  fontWeight: "bold",
  display: "flex",
  paddingBottom: "15px"
});

const FeatureTypo = styled(Typography)({
  lineHeight: "normal",
  display: "block",
  padding: "8px 0",
  textTransform: "capitalize",
  fontSize: "14px"
});

const DescriptionBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "space-between"
});

const propertyDetailList: Array<keyof Property> = [
  "id",
  "propertyType",
  "bedroom",
  "bathroom",
  "garage",
  "landSize",
  "preowned",
  "state",
  "status",
  "street",
  "suburb",
  "postcode"
];

const PropertyDetailPage = ({ property }: { property: Property }) => {
  const {
    image: propertyImage,
    agent,
    id,
    street,
    suburb,
    state,
    postcode,
    price,
    propertyType,
    description,
    indoor,
    outdoor
  } = property;

  return (
    <MainContainer>
      <Header backgroundColor={dark} />
      <ContentContainer>
        <DetailBox>
          <InfoBox>
            <HouseNameTypo variant="h3">{id}</HouseNameTypo>
            <Typography variant="body1">{`${street} ${suburb} ${state} ${postcode}`}</Typography>
          </InfoBox>
          <InfoBox>
            <HouseNameTypo variant="h3">{`$ ${price}`}</HouseNameTypo>
            <Typography variant="body1">{propertyType}</Typography>
          </InfoBox>
        </DetailBox>
        <ImageCarousel NextIcon={<MdKeyboardArrowRight />} PrevIcon={<MdKeyboardArrowLeft />}>
          {propertyImage.map((item) => (
            <Image key={item.id} src={item.url} alt={item.tag} width="724px" height="600px" />
          ))}
        </ImageCarousel>
        <DescriptionBox>
          <InfoTypo variant="h5">Description</InfoTypo>
          <DetailTypo variant="body2">{description}</DetailTypo>
          <InfoTypo variant="h5">Property Details</InfoTypo>
          <Grid container>
            {propertyDetailList.map((key) => (
              <Grid item xs={4} key={key}>
                <TitleTypo>{`${lodash.startCase(key)}: ${property[key]}`}</TitleTypo>
              </Grid>
            ))}
          </Grid>
          <InfoTypo variant="h5">Indoor</InfoTypo>
          <Grid container>
            {indoor?.split(",").map((value, key) => (
              <Grid item xs={4} key={key}>
                <FeatureTypo>{value}</FeatureTypo>
              </Grid>
            ))}
          </Grid>
          <InfoTypo variant="h5">Outdoor</InfoTypo>
          <Grid container>
            {outdoor?.split(",").map((value, key) => (
              <Grid item xs={4} key={key}>
                <FeatureTypo>{value}</FeatureTypo>
              </Grid>
            ))}
          </Grid>
          <InfoTypo variant="h5">Location</InfoTypo>
          <InfoTypo variant="h5">What is Nearby</InfoTypo>
          <InfoTypo variant="h5">Agent information</InfoTypo>
          <AgentContainer>
            {agent.icon && <Image key={agent.id} src={agent.icon} alt="Agent Icon" width="200px" height="200px" />}
            <AgentBox>
              <TitleTypo>Name: {agent.name}</TitleTypo>
              <TitleTypo>Email: {agent.email}</TitleTypo>
            </AgentBox>
          </AgentContainer>
        </DescriptionBox>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default PropertyDetailPage;
