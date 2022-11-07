import styled from "@emotion/styled";
import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import theme from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";

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
const CategoriesBox = styled(Box)({
  width: "25%",
  height: "60px",
  backgroundColor: paper
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

const CategFormControl = styled(FormControl)({
  width: "220px",
  borderLeft: "0.1px groove",
  backgroundColor: paper
});

const CategSelect = styled(Select)({
  borderRadius: "0",
  height: "60px",
  paddingLeft: "20px",
  backgroundColor: paper,
  "& .MuiSelect-select:focus": {
    backgroundColor: paper
  }
});

const HomeSearch = () => {
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
    <HomeSearchContainer>
      <IntroTypography variant="h1">Find Your Dream House</IntroTypography>
      <DetailTypography variant="body1">
        Houzez Will Assist You In The Best And Comfortable Property Services For You.
      </DetailTypography>
      <HomeSearchBox>
        <HomeInputBase placeholder="Search home"></HomeInputBase>
        <CategoriesBox>
          <CategFormControl>
            <CategSelect
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
            </CategSelect>
          </CategFormControl>
        </CategoriesBox>
        <SearchButton variant="contained">
          <SearchIcon sx={{ color: paper }} />
          Search
        </SearchButton>
      </HomeSearchBox>
    </HomeSearchContainer>
  );
};

export default HomeSearch;
