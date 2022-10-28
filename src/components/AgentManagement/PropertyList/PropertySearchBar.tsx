import styled from "@emotion/styled";
import React, { useState } from "react";
import { Box, InputBase, Button, FormControl, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../../styles/theme";

const {
  palette: { secondary }
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
  color: secondary.main,
  borderRight: "1px solid " + secondary.main,
  display: "flex",
  alignItems: "center",
  height: "100%",
  padding: "0 10px 0 10px"
});

const SearchContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  border: "1px solid " + secondary.main,
  borderRadius: "4px",
  width: "300px",
  height: "40px"
});

const SquareFitContainer = styled(InputBase)({
  border: "1px solid " + secondary.main,
  width: "100px",
  height: "40px",
  paddingLeft: "10px"
});

const PropertySearchBar = () => {
  const options = [
    { label: "All types", value: "All types" },
    { label: "House", value: "House" },
    { label: "Apartment", value: "Apartment" },
    { label: "Townhouse", value: "Townhouse" },
    { label: "Villa", value: "Villa" },
    { label: "Land", value: "Land" },
    { label: "Acreage", value: "Acreage" },
    { label: "Rural", value: "Rural" },
    { label: "Block of Units", value: "Block of Units" },
    { label: "Retirement Living", value: "Retirement Living" }
  ];
  const [value, setValue] = useState("All types");
  return (
    <PropertySearchBarContainer>
      <SearchContainer>
        <SearchLightIconBox>
          <SearchIcon />
        </SearchLightIconBox>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
        <Button variant="contained">Search</Button>
      </SearchContainer>
      <Box>
        <FormControl>
          <Select
            labelId="types"
            id="types"
            label="types"
            disableUnderline
            variant="standard"
            value={value}
            onChange={(event) => setValue(event.target.value as string)}
          >
            {options.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <Select
            labelId="types"
            id="types"
            label="types"
            disableUnderline
            variant="standard"
            value={value}
            onChange={(event) => setValue(event.target.value as string)}
          >
            {options.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <SquareFitContainer placeholder="Sq Ft" />
    </PropertySearchBarContainer>
  );
};

export default PropertySearchBar;
