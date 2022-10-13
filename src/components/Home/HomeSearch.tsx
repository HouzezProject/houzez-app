import styled from "@emotion/styled";
import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import theme from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";

const {
  palette: {
    primary: { main, dark }
  },
  typography: { fontFamily }
} = theme;

const HomeSearchContainer = styled(Container)({
  width: "1050px"
});

const IntroTypography = styled(Typography)({
  marginTop: "100px",
  marginBottom: "8px",
  padding: "2px",
  color: "white",
  boxSizing: "border-box",
  display: "block",
  lineHeight: "31.2px",
  textAlign: "center",
  fontFamily: fontFamily,
  fontSize: "2.75rem",
  fontWeight: "700"
});

const DetailTypography = styled(Typography)({
  marginTop: "20px",
  marginBottom: "40px",
  padding: "2px",
  color: "white",
  boxSizing: "border-box",
  display: "block",
  lineHeight: "1.5",
  textAlign: "center",
  fontFamily: fontFamily,
  fontSize: "20px",
  fontWeight: "400"
});

const HomeSearchBox = styled(Box)({
  marginTop: "30px",
  padding: "2px",
  color: "white",
  display: "flex",
  alignItems: "start",
  justifyContent: "center"
});

const HomeInputBase = styled(InputBase)({
  paddingLeft: "20px",
  width: "50%",
  height: "60px",
  backgroundColor: "white",
  justifyContent: "center",
  borderRadius: "0"
});
const CategoriesBox = styled(Box)({
  width: "25%",
  height: "60px",
  backgroundColor: "white"
});

const SearchButton = styled(Button)({
  width: "25%",
  height: "60px",
  backgroundColor: main,
  color: "white",
  borderRadius: "0",
  display: "flex",
  gap: "6px",
  "&:hover": {
    backgroundcolor: dark
  }
});

const HomeSearch = () => {
  return (
    <HomeSearchContainer>
      <IntroTypography variant="h1">Find Your Dream House</IntroTypography>
      <DetailTypography variant="body1">
        Houzez Will Assist You In The Best And Comfortable Property Services For You.
      </DetailTypography>
      <HomeSearchBox>
        <HomeInputBase placeholder="Search home"></HomeInputBase>
        <CategoriesBox>
          <FormControl sx={{ width: "220px", borderLeft: "0.1px groove", backgroundColor: "white" }}>
            <Select
              labelId="types"
              id="types"
              label="types"
              disableUnderline
              variant="standard"
              sx={{ borderRadius: 0, height: "60px", paddingLeft: "20px", backgroundColor: "white" }}
            >
              <MenuItem value="All types">All types</MenuItem>
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="Townhouse">Townhouse</MenuItem>
              <MenuItem value="Villa">Villa</MenuItem>
              <MenuItem value="Land">Land</MenuItem>
              <MenuItem value="Acreage">Acreage</MenuItem>
              <MenuItem value="Rural">Rural</MenuItem>
              <MenuItem value="Block of Units">Block of Units</MenuItem>
              <MenuItem value="Retirement Living">Retirement Living</MenuItem>
            </Select>
          </FormControl>
        </CategoriesBox>
        <SearchButton variant="contained">
          <SearchIcon sx={{ color: "white" }} />
          Search
        </SearchButton>
      </HomeSearchBox>
    </HomeSearchContainer>
  );
};

export default HomeSearch;