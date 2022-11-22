import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "react-material-ui-carousel";
import { useRouter } from "next/router";
import axiosClient from "../../../utils/axios";

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
  alignItems: "center",
  flexDirection: "column",
  margin: "0px 20px"
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
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const idString = router.query.id?.toString();
    if (idString) {
      console.log(idString);
      const res = async () => {
        await axiosClient.get("/properties/" + idString);
        console.log(res);
      };
    }
  }, [router.query.id]);
  const Items = [
    {
      key: "",
      image: "data.image.ur",
      text: "data.image.tag"
    }
  ];

  const propertyDetails = {
    "Property ID:": 0,
    "Property Type:": "1",
    "Price:": 0,
    "Bedrooms:": 0,
    "Bathrooms:": 0,
    "Garage:": 0,
    "Land Size": 0,
    "Pre-own:": false,
    "State:": "",
    "Street:": "",
    "Suburb:": "",
    "Postcode:": 0,
    "Status:": ""
  };

  const indoor = [
    "Ensuite",
    "Dishwasher",
    "Study",
    "Built in robes",
    "Alarm system",
    "Broadband",
    "Floorboards",
    "Gym",
    "Rumpus",
    "Workshop"
  ];
  const outdoor = [
    "Swimming pool",
    "Balcony",
    "Outdoor area",
    "Undercover parking",
    "shed",
    "Fully fenced",
    "Outdoor spa",
    "Tennis court"
  ];

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <DetailBox>
          <InfoBox>
            <HouseNameTypo variant="h3">Luxury Family Home</HouseNameTypo>
            <Typography variant="body1">166 welling street, Hobart, vic 3066</Typography>
          </InfoBox>
          <InfoBox>
            <HouseNameTypo variant="h3">Price</HouseNameTypo>
            <Typography variant="body1">Icon</Typography>
          </InfoBox>
        </DetailBox>
        <ImageCarousel NextIcon={<MdKeyboardArrowRight />} PrevIcon={<MdKeyboardArrowLeft />}>
          {Items.map(({ key, image, text }) => (
            <Image key={key} src={image} alt={text} width="724px" height="600px" />
          ))}
        </ImageCarousel>
        <DescriptionBox>
          <InfoTypo variant="h5">Description</InfoTypo>
          <DetailTypo variant="body2">
            House description:Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full
            open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of
            closets plus washer and dryer.
          </DetailTypo>
          <InfoTypo variant="h5">Property Details</InfoTypo>
          <Grid container>
            <Grid item xs={4} key={"Property ID:"}>
              <TitleTypo>
                {"Property ID:"}
                {propertyDetails["Property ID:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Property Type:"}>
              <TitleTypo>
                {"Property Type:"}
                {propertyDetails["Property Type:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Price:"}>
              <TitleTypo>
                {"Price:"}
                {propertyDetails["Price:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Bedrooms:"}>
              <TitleTypo>
                {"Bedrooms:"}
                {propertyDetails["Bedrooms:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Bathrooms:"}>
              <TitleTypo>
                {"Bathrooms:"}
                {propertyDetails["Bathrooms:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Garage:"}>
              <TitleTypo>
                {"Garage:"}
                {propertyDetails["Garage:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Land Size:"}>
              <TitleTypo>
                {"Land Size:"}
                {propertyDetails["Land Size"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Pre-own:"}>
              <TitleTypo>
                {"Pre-own:"}
                {propertyDetails["Pre-own:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"State:"}>
              <TitleTypo>
                {"State:"}
                {propertyDetails["State:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Street:"}>
              <TitleTypo>
                {"Street:"}
                {propertyDetails["Street:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Suburb:"}>
              <TitleTypo>
                {"Suburb:"}
                {propertyDetails["Suburb:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Postcode:"}>
              <TitleTypo>
                {"Postcode:"}
                {propertyDetails["Postcode:"]}
              </TitleTypo>
            </Grid>
            <Grid item xs={4} key={"Status:"}>
              <TitleTypo>
                {"Status:"}
                {propertyDetails["Status:"]}
              </TitleTypo>
            </Grid>
          </Grid>
          <InfoTypo variant="h5">Indoor</InfoTypo>
          <Grid container>
            {indoor.map((value, key) => (
              <Grid item xs={4} key={key}>
                <FeatureTypo>{value}</FeatureTypo>
              </Grid>
            ))}
          </Grid>
          <InfoTypo variant="h5">Outdoor</InfoTypo>
          <Grid container>
            {outdoor.map((value, key) => (
              <Grid item xs={4} key={key}>
                <FeatureTypo>{value}</FeatureTypo>
              </Grid>
            ))}
          </Grid>
          <InfoTypo variant="h5">Location</InfoTypo>
          <InfoTypo variant="h5">What is Nearby</InfoTypo>
        </DescriptionBox>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default PropertyDetailPage;
