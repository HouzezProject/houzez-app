/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */
import styled from "@emotion/styled";
import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import theme from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import Router from "next/router";
import { propertyValueFormat } from "../../utils/property-value-formatter";
import Autocomplete from "react-google-autocomplete";

interface PropertyFilter {
  suburb: string;
  postcode: string;
  state: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedroom: string;
  livingroom: string;
  bathroom: string;
  garage: string;
}

const initialPropertyFilter: PropertyFilter = {
  suburb: "any",
  postcode: "any",
  state: "any",
  propertyType: "any",
  minPrice: "any",
  maxPrice: "any",
  bedroom: "any",
  livingroom: "any",
  bathroom: "any",
  garage: "any"
};

const {
  palette: {
    primary: { main, contrastText },
    background: { paper }
  }
} = theme;

const HomeSearchContainer = styled(Container)({
  width: "1050px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center"
});

const IntroTypography = styled(Typography)({
  marginBottom: "8px",
  padding: "2px",
  color: contrastText,
  boxSizing: "border-box",
  display: "block",
  lineHeight: "31.2px",
  textAlign: "center",
  fontSize: "2.75rem",
  fontWeight: "700"
});

const DetailTypography = styled(Typography)({
  marginTop: "20px",
  marginBottom: "40px",
  padding: "2px",
  color: contrastText,
  boxSizing: "border-box",
  lineHeight: "1.5",
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "400"
});

const HomeSearchBox = styled(Box)({
  marginTop: "30px",
  marginBottom: "15%",
  padding: "2px",
  color: paper,
  display: "flex",
  justifyContent: "center"
});

const HomeInputBase = styled(InputBase)({
  paddingLeft: "20px",
  width: "50%",
  height: "60px",
  backgroundColor: paper,
  justifyContent: "center",
  borderRadius: "0"
});

const SearchButton = styled(Button)({
  width: "25%",
  height: "60px",
  backgroundColor: main,
  color: paper,
  borderRadius: "0",
  display: "flex",
  gap: "6px"
});

const HomeFilterSelect = styled(Select)({
  borderRadius: "0",
  height: "60px",
  paddingLeft: "20px",
  backgroundColor: paper,
  "& .MuiSelect-select:focus": {
    backgroundColor: paper
  }
});

const HomeFilterSelectRoom = styled(HomeFilterSelect)({
  width: "12vw",
  minWidth: "100px"
});

const propertyTypes = [
  "any",
  "House",
  "Apartment",
  "Townhouse",
  "Villa",
  "Land",
  "Acreage",
  "Rural",
  "Block Of Units",
  "Retirement Living"
];

const HomeSearch = () => {
  const [propertyFilter, setPropertyFilter] = useState(initialPropertyFilter);
  const [bounds, setBounds] = useState(
    "" as unknown as { ne: { lat: unknown; lng: unknown }; sw: { lat: unknown; lng: unknown } }
  );
  const [address, setAddress] = useState("Search suburb, postcode or state..." as string | undefined);

  const handleChange = ({ target: { value, name } }: SelectChangeEvent<unknown>) => {
    setPropertyFilter((data) => ({ ...data, [name]: value }));
  };

  const getMapData = () => {
    Promise.resolve(propertyValueFormat("/property-list", "20", propertyFilter, bounds)).then((url) => {
      Router.push(url);
    });
  };

  const locationResolution = (
    address_components: google.maps.GeocoderAddressComponent[] | undefined,
    formatted_address: string | undefined,
    geometry: google.maps.places.PlaceGeometry | undefined
  ) => {
    setBounds({
      // @ts-ignore
      ne: { lat: geometry?.viewport?.Za.hi, lng: geometry?.viewport?.Ia.hi },
      // @ts-ignore
      sw: { lat: geometry?.viewport?.Za.lo, lng: geometry?.viewport?.Ia.lo }
    });
    setAddress(formatted_address?.toString());
    address_components?.map((addressComponentsValue: { long_name: string; short_name: string; types: string[] }) => {
      console.log(addressComponentsValue);
      switch (addressComponentsValue.types[0]) {
        case "postal_code":
          propertyFilter.postcode = addressComponentsValue.long_name;
          break;
        case "locality":
          propertyFilter.suburb = addressComponentsValue.long_name;
          break;
        case "administrative_area_level_1":
          propertyFilter.state = addressComponentsValue.short_name;
          break;
        default:
          break;
      }
    });
  };

  return (
    <HomeSearchContainer>
      <IntroTypography variant="h1">Find Your Dream House</IntroTypography>
      <DetailTypography variant="body1">
        Houzez Will Assist You In The Best And Comfortable Property Services For You.
      </DetailTypography>
      <HomeSearchBox>
        <HomeInputBase
          inputComponent={({ ...props }) => (
            <Autocomplete
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_ADDRESS_API_KEY}
              {...props}
              options={{
                types: [],
                componentRestrictions: { country: "au" },
                fields: ["address_components", "formatted_address", "geometry"]
              }}
              language={"en"}
              onPlaceSelected={({ address_components, formatted_address, geometry }) => {
                locationResolution(address_components, formatted_address, geometry);
              }}
            />
          )}
          // value={address}
          placeholder={address}
        />
        <FormControl>
          <HomeFilterSelectRoom name="propertyType" value={propertyFilter.propertyType} onChange={handleChange}>
            {propertyTypes.map((propertyType) => (
              <MenuItem key={propertyType} value={propertyType}>
                {propertyType}
              </MenuItem>
            ))}
          </HomeFilterSelectRoom>
        </FormControl>
        <SearchButton variant="contained" onClick={getMapData}>
          <SearchIcon sx={{ color: paper }} />
          Search
        </SearchButton>
      </HomeSearchBox>
    </HomeSearchContainer>
  );
};

export default HomeSearch;
