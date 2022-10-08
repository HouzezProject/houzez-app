import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const HomeSearchContainer = styled(Container)({
  width: "1050px"
});
const HomeSearchBox = styled(Box)({
  marginTop: "30px",
  padding: "2px"
});

const HomeSearch = () => {
  const [userInput, setUserInput] = useState("");

  const [categories, setCategories] = useState("Categories");
  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value);
  };

  // const buttonHandler=()=>{

  // }
  return (
    <HomeSearchContainer>
      <HomeSearchBox>
        <h1>Find Your Dream House</h1>
      </HomeSearchBox>
      <HomeSearchBox>
        <h2>Your Property, Our Priority and From as low as $10 per day with limited time offer discounts</h2>
      </HomeSearchBox>
      <div className="searchInput">
        <label htmlFor="Search keyword"></label>
        <input name="Search keyword" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <Box sx={{ minWidth: 80, ml: 2 }}>
          <FormControl>
            <InputLabel>Categories</InputLabel>
            <Select labelId="categories" id="categories" value={categories} label="Categories" onChange={handleChange}>
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="Townhouse">Townhouse</MenuItem>
              <MenuItem value="Land">Land</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <button onClick={buttonHandler}>Search</button>
      </div>
    </HomeSearchContainer>
  );
};

export default HomeSearch;
