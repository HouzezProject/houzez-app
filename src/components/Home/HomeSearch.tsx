import styled from "@emotion/styled";
import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const HomeSearchContainer = styled(Container)({
  width: "1050px"
});
const IntroBox = styled(Box)({
  marginTop: "100px",
  padding: "2px",
  color: "white",
  display: "flex",
  alignItems: "start",
  justifyContent: "center"
});
const DetailBox = styled(Box)({
  padding: "2px",
  color: "white",
  display: "flex",
  alignItems: "start",
  justifyContent: "center"
});

const HomeSearchBox = styled(Box)({
  padding: "2px",
  color: "white",
  display: "flex",
  alignItems: "start",
  justifyContent: "center"
});

const InputText = styled(TextField)({
  width: "400px",
  height: "56px",
  backgroundColor: "white",
  justifyContent: "center"
});
const CategoriesBox = styled(Box)({
  width: "150px",
  height: "auto",
  backgroundColor: "white"
});

const SearchButton = styled(Button)({
  width: "150px",
  height: "56px",
  backgroundColor: "blue",
  color: "white"
});

const HomeSearch = () => {
  const [userInput, setUserInput] = useState("");

  const [categories, setCategories] = useState("Categories");
  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value);
  };

  return (
    <HomeSearchContainer>
      <IntroBox>
        <h1>Find Your Dream House</h1>
      </IntroBox>
      <DetailBox>
        <p>Your Property, Our Priority and From as low as $10 per day with limited time offer discounts</p>
      </DetailBox>
      <HomeSearchBox>
        <label htmlFor="Search keyword"></label>
        <InputText
          name="Search keyword"
          type="text"
          value={userInput}
          placeholder="Search home"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <CategoriesBox>
          <FormControl fullWidth>
            <Select
              sx={{ Width: 200 }}
              labelId="Categories"
              id="Categories"
              label="Categories"
              value={categories}
              onChange={handleChange}
            >
              <MenuItem value="All categories">All categories</MenuItem>
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="Townhouse">Townhouse</MenuItem>
              <MenuItem value="Land">Land</MenuItem>
            </Select>
          </FormControl>
        </CategoriesBox>
        <SearchButton>Search</SearchButton>
      </HomeSearchBox>
    </HomeSearchContainer>
  );
};

export default HomeSearch;
