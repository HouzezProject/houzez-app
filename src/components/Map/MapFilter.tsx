import { styled, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Button } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import { getPropertyData } from "../../utils/get-property";

const {
  palette: { primary, background }
} = theme;

interface Props {
  bounds: { ne: { lat: unknown; lng: unknown }; sw: { lat: unknown; lng: unknown } };
  setProperties: React.Dispatch<React.SetStateAction<never[]>>;
  propertyFilter: PropertyFilter;
  setPropertyFilter: React.Dispatch<React.SetStateAction<PropertyFilter>>;
}

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
const MapFilterContainer = styled(Box)({
  padding: "20px 50px",
  backgroundColor: background.paper,
  display: "flex",
  justifyContent: "center"
});

const MapFilterInputLabel = styled(InputLabel)({
  lineHeight: "40px",
  paddingLeft: "8px",
  letterSpacing: "0.05rem",
  fontSize: "1rem",
  fontWeight: "400"
});

const MapFilterSelect = styled(Select)({
  height: "3.5rem",
  lineHeight: "40px",
  margin: "8px",
  letterSpacing: "0.05rem",
  borderRadius: "3px",
  fontSize: "1rem",
  fontWeight: "400"
});

const MapFilterSelectRoom = styled(MapFilterSelect)({
  width: "12vw",
  minWidth: "100px"
});

const MapFilterSearchButton = styled(Button)({
  width: "6vw",
  minWidth: "95px",
  height: "3.5rem",
  marginTop: "10px",
  borderRadius: "3px",
  lineHeight: "40px",
  margin: "8px",
  letterSpacing: "0.05rem",
  backgroundColor: primary.main,
  "&:hover": {
    backgroundColor: primary.dark
  }
});

let PriceList: string[];
export const initialPriceList = () => {
  PriceList = ["any", "$50,000"];
  let price = 50000;
  const priceRule = [
    { min: 0, max: 500000, gap: 25000 },
    { min: 500000, max: 1000000, gap: 50000 },
    { min: 1000000, max: 2000000, gap: 100000 },
    { min: 2000000, max: 5000000, gap: 500000 },
    { min: 5000000, max: 10000000, gap: 1000000 },
    { min: 10000000, max: 100000000, gap: 5000000 }
  ];
  for (let i = 0; i < 67; i++) {
    const priceGap = Number(priceRule.find((row) => price >= row.min && price < row.max)?.gap);
    if (priceGap && price < 100000000) {
      price = price + priceGap;
    }
    PriceList.push("$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  }
};

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
const roomNumber = ["any", "1+", "2+", "3+", "4+", "5+"];

const MapFilter = ({ bounds, setProperties, propertyFilter, setPropertyFilter }: Props) => {
  initialPriceList();

  const handleChange = ({ target: { value, name } }: SelectChangeEvent<unknown>) => {
    setPropertyFilter((data) => ({ ...data, [name]: value }));
  };

  const getMapData = () => {
    getPropertyData("/properties", "20", propertyFilter, bounds).then((data) => {
      setProperties(data);
    });
  };

  return (
    <MapFilterContainer>
      <FormControl>
        <MapFilterInputLabel>Type</MapFilterInputLabel>
        <MapFilterSelectRoom
          name="propertyType"
          value={propertyFilter.propertyType}
          label="Type"
          onChange={handleChange}
        >
          {propertyTypes.map((propertyType) => (
            <MenuItem key={propertyType} value={propertyType}>
              {propertyType}
            </MenuItem>
          ))}
        </MapFilterSelectRoom>
      </FormControl>
      <FormControl>
        <MapFilterInputLabel>minPrice</MapFilterInputLabel>
        <MapFilterSelectRoom name="minPrice" value={propertyFilter.minPrice} label="minPrice" onChange={handleChange}>
          {PriceList.map((price) => (
            <MenuItem key={price} value={price}>
              {price}
            </MenuItem>
          ))}
        </MapFilterSelectRoom>
      </FormControl>
      <FormControl>
        <MapFilterInputLabel>maxPrice</MapFilterInputLabel>
        <MapFilterSelectRoom name="maxPrice" value={propertyFilter.maxPrice} label="maxPrice" onChange={handleChange}>
          {PriceList.map((price) => (
            <MenuItem key={price} value={price}>
              {price}
            </MenuItem>
          ))}
        </MapFilterSelectRoom>
      </FormControl>
      <FormControl>
        <MapFilterInputLabel>Bedroom</MapFilterInputLabel>
        <MapFilterSelectRoom name="bedroom" value={propertyFilter.bedroom} label="Bedroom" onChange={handleChange}>
          {roomNumber.map((bedroomNum) => (
            <MenuItem key={bedroomNum} value={bedroomNum}>
              {bedroomNum}
            </MenuItem>
          ))}
        </MapFilterSelectRoom>
      </FormControl>
      <FormControl>
        <MapFilterInputLabel>Livingroom</MapFilterInputLabel>
        <MapFilterSelectRoom
          name="livingroom"
          value={propertyFilter.livingroom}
          label="Livingroom"
          onChange={handleChange}
        >
          {roomNumber.map((livingroomNum) => (
            <MenuItem key={livingroomNum} value={livingroomNum}>
              {livingroomNum}
            </MenuItem>
          ))}
        </MapFilterSelectRoom>
      </FormControl>
      <FormControl>
        <MapFilterInputLabel>Bathroom</MapFilterInputLabel>
        <MapFilterSelectRoom name="bathroom" value={propertyFilter.bathroom} label="Bathroom" onChange={handleChange}>
          {roomNumber.map((BathroomNum) => (
            <MenuItem key={BathroomNum} value={BathroomNum}>
              {BathroomNum}
            </MenuItem>
          ))}
        </MapFilterSelectRoom>
      </FormControl>
      <FormControl>
        <MapFilterInputLabel>Garage</MapFilterInputLabel>
        <MapFilterSelectRoom name="garage" value={propertyFilter.garage} label="Garage" onChange={handleChange}>
          {roomNumber.map((garageNum) => (
            <MenuItem key={garageNum} value={garageNum}>
              {garageNum}
            </MenuItem>
          ))}
        </MapFilterSelectRoom>
      </FormControl>
      <MapFilterSearchButton variant="contained" startIcon={<SearchIcon />} onClick={getMapData}>
        SEARCH
      </MapFilterSearchButton>
    </MapFilterContainer>
  );
};

export default MapFilter;
