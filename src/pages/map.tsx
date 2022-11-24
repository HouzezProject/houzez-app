import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../styles/theme";
import Header from "../components/Common/Header";
import Map from "../components/Map/Map";
import MapFilter from "../components/Map/MapFilter";
import { getPropertyData } from "../utils/get-property";

const {
  palette: { primary }
} = theme;

interface PropertyFilter {
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedroom: string;
  livingroom: string;
  bathroom: string;
  garage: string;
}

const initialPropertyFilter: PropertyFilter = {
  propertyType: "any",
  minPrice: "any",
  maxPrice: "any",
  bedroom: "any",
  livingroom: "any",
  bathroom: "any",
  garage: "any"
};

const MapBody = styled(Box)({
  width: "100%",
  height: "100vh",
  backgroundColor: primary.dark
});

const MapPage: NextPage = () => {
  const [properties, setProperties] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: -37.878563, lng: 145.170187 });
  const [bounds, setBounds] = useState(null);

  const [propertyFilter, setPropertyFilter] = useState(initialPropertyFilter);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    getPropertyData(propertyFilter, bounds).then((data) => {
      setProperties(data);
    });
  }, [coordinates, bounds]);

  return (
    <MapBody>
      <Header />
      <MapFilter
        bounds={bounds}
        setProperties={setProperties}
        propertyFilter={propertyFilter}
        setPropertyFilter={setPropertyFilter}
      />
      <Map setCoordinates={setCoordinates} coordinates={coordinates} setBounds={setBounds} properties={properties} />
    </MapBody>
  );
};

export default MapPage;
