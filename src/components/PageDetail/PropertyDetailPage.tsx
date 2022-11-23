import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "react-material-ui-carousel";
import { useRouter } from "next/router";
import axiosClient from "../../utils/axios";
import { AxiosResponse } from "axios";

interface PropertyImage {
  id: number;
  url: string;
  tag: string;
}

interface Agent {
  id: number;
  name: string;
  icon: string;
  email: string;
}

interface Property {
  id: number;
  propertyType: string;
  title: string;
  price: number;
  livingRoom: number;
  bedroom: number;
  bathroom: number;
  garage: number;
  landSize: number;
  description: string;
  state: string;
  street: string;
  suburb: string;
  postcode: number;
  latitude: number;
  longitude: number;
  indoor: string;
  outdoor: string;
  propertyIsNew: boolean;
  status: string;
}

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

const PropertyDetailPage = () => {
  const router = useRouter();
  const [property, setProperty] = useState<Property>();
  const [propertyImage, setPropertyImage] = useState<PropertyImage[]>([]);
  const [agent, setAgent] = useState<Agent>();

  useEffect(() => {
    const idString = router.query.id?.toString();
    if (idString) {
      const fetchData = async () => {
        const res: AxiosResponse = await axiosClient.get("/properties/" + idString);
        setProperty(res.data);
        setPropertyImage(res.data.image);
        setAgent(res.data.agent);
      };
      fetchData();
    }
  });

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <DetailBox>
          <InfoBox>
            <HouseNameTypo variant="h3">{property?.id}</HouseNameTypo>
            <Typography variant="body1">
              {property?.street}
              {property?.suburb}
              {property?.state}
              {property?.postcode}
            </Typography>
          </InfoBox>
          <InfoBox>
            <HouseNameTypo variant="h3">{property?.price}</HouseNameTypo>
            <Typography variant="body1">{property?.propertyType}</Typography>
          </InfoBox>
        </DetailBox>
        <ImageCarousel NextIcon={<MdKeyboardArrowRight />} PrevIcon={<MdKeyboardArrowLeft />}>
          {propertyImage?.map((item) => (
            <Image key={item.id} src={item.url} alt={item.tag} width="724px" height="600px" />
          ))}
        </ImageCarousel>
        <DescriptionBox>
          <InfoTypo variant="h5">Description</InfoTypo>
          <DetailTypo variant="body2">{property?.description}</DetailTypo>
          <InfoTypo variant="h5">Property Details</InfoTypo>
          <Grid container>
            <Grid item xs={4} key={property?.id}>
              <TitleTypo>Property ID:{property?.id}</TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.propertyType}>
              <TitleTypo>Property Type:{property?.propertyType}</TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.price}>
              <TitleTypo>Price:{property?.price}</TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.bedroom}>
              <TitleTypo> Bedrooms: {property?.bedroom} </TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.bathroom}>
              <TitleTypo> Bathrooms: {property?.bathroom}</TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.garage}>
              <TitleTypo>Garage:{property?.garage}</TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.landSize}>
              <TitleTypo>
                Land Size:
                {property?.landSize}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.propertyIsNew.toString()}>
              <TitleTypo>
                Pre-own:
                {property?.propertyIsNew}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.state}>
              <TitleTypo>
                State:
                {property?.state}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.street}>
              <TitleTypo>
                Street:
                {property?.street}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.suburb}>
              <TitleTypo>
                Suburb:
                {property?.suburb}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.postcode}>
              <TitleTypo>
                Postcode:
                {property?.postcode}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={property?.status}>
              <TitleTypo>
                Status:
                {property?.status}
              </TitleTypo>
            </Grid>
          </Grid>
          <InfoTypo variant="h5">Indoor</InfoTypo>
          <Grid container>
            {property?.indoor.split(",").map((value, key) => (
              <Grid item xs={4} key={key}>
                <FeatureTypo>{value}</FeatureTypo>
              </Grid>
            ))}
          </Grid>
          <InfoTypo variant="h5">Outdoor</InfoTypo>
          <Grid container>
            {property?.indoor.split(",").map((value, key) => (
              <Grid item xs={4} key={key}>
                <FeatureTypo>{value}</FeatureTypo>
              </Grid>
            ))}
          </Grid>
          <InfoTypo variant="h5">Location</InfoTypo>
          <InfoTypo variant="h5">What is Nearby</InfoTypo>
          <InfoTypo variant="h5">Agent information</InfoTypo>
          <AgentContainer>
            <Image key={agent?.id} src={agent?.icon} alt="Agent Icon" width="200px" height="200px" />
            <AgentBox>
              <TitleTypo>Name: {agent?.name}</TitleTypo>
              <TitleTypo>Email: {agent?.email}</TitleTypo>
            </AgentBox>
          </AgentContainer>
        </DescriptionBox>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default PropertyDetailPage;
