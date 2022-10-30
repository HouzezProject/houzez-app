import styled from "@emotion/styled";
import React, { useState } from "react";
import { Box, InputBase, Button, FormControl, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../../styles/theme";

const {
  palette: {
    primary: { main },
    background: { paper }
  }
} = theme;

const PropertySearchBarContainer = styled(Box)({
  width: "100%",
  height: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 60px 0 60px"
});

const SearchLightIconBox = styled(Box)({
  color: main,
  borderRight: "1px solid " + main,
  display: "flex",
  alignItems: "center",
  height: "100%",
  padding: "0 10px 0 10px"
});

const PropertyInputBase = styled(InputBase)({
  flex: "1",
  paddingLeft: "20px"
  // width: "50%",
  // height: "40px",
  // backgroundColor: paper,
  // justifyContent: "center",
  // borderRadius: "0"
});
const PropertyButton = styled(Button)({
  height: "40px"
});

const SearchContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  border: "1px solid " + main,
  borderRadius: "4px",
  width: "300px",
  height: "40px"
});

const SquareFitContainer = styled(InputBase)({
  border: "1px solid " + main,
  width: "100px",
  height: "40px",
  paddingLeft: "10px",
  borderRadius: "4px",
  textAlign: "center"
});
const SelectBedBox = styled(Box)({
  display: "flex",
  width: "20%",
  height: "40px",
  backgroundColor: paper,
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid" + main,
  borderRadius: "4px"
});
const SelectBathBox = styled(Box)({
  display: "flex",
  width: "20%",
  height: "40px",
  backgroundColor: paper,
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid" + main,
  borderRadius: "4px"
});
const PropertySearchBar = () => {
  const optionsBeds = [
    { label: "Beds", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" }
  ];
  const optionsBaths = [
    { label: "Baths", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" }
  ];
  const [numBed, setBedValue] = useState("0");
  const [numBath, setBathValue] = useState("0");

  return (
    <PropertySearchBarContainer>
      <SearchContainer>
        <SearchLightIconBox>
          <SearchIcon />
        </SearchLightIconBox>
        <PropertyInputBase placeholder="Search..." />
        <PropertyButton variant="contained">Search</PropertyButton>
      </SearchContainer>
      <SelectBedBox>
        <FormControl>
          <Select
            labelId="types"
            id="types"
            label="types"
            disableUnderline
            variant="standard"
            value={numBed}
            onChange={(event) => setBedValue(event.target.value as string)}
          >
            {optionsBeds.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </SelectBedBox>
      <SelectBathBox>
        <FormControl>
          <Select
            labelId="types"
            id="types"
            label="types"
            disableUnderline
            variant="standard"
            value={numBath}
            onChange={(event) => setBathValue(event.target.value as string)}
          >
            {optionsBaths.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </SelectBathBox>
      <SquareFitContainer placeholder="Sq Ft" />
    </PropertySearchBarContainer>
  );
};

export default PropertySearchBar;
