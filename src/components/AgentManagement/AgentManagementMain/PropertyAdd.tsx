import "../AgentManagement";
import Toolbar from "@mui/material/Toolbar";
import { Box, Checkbox, FormControlLabel, FormGroup, OutlinedInput, Radio, RadioGroup, styled } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React from "react";

const PropertyAdd = () => {
  const InputTextForm = styled(FormControl)({ margin: "5px 20px 10px 0" });
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <h4>Basic Information</h4>
      <Box mt="40px">
        <div>
          <InputTextForm sx={{ width: "500px" }}>
            <OutlinedInput placeholder="Property Name" />
          </InputTextForm>
          <InputTextForm sx={{ width: "500px" }}>
            <OutlinedInput placeholder="Property Location" />
          </InputTextForm>
        </div>
      </Box>
      <Box mb="20px">
        <div>
          <InputTextForm sx={{ width: "1020px" }}>
            <OutlinedInput placeholder="Property Description" />
          </InputTextForm>
        </div>
      </Box>
      <h4>Property Information</h4>
      <FormControl component="fieldset">
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel value="male" control={<Radio />} label="For Rent" />
          <FormControlLabel value="other" control={<Radio />} label="For Sale" />
        </RadioGroup>
      </FormControl>
      <div>
        <InputTextForm sx={{ width: "180px" }}>
          <OutlinedInput placeholder="Price/Rent" />
        </InputTextForm>
        <InputTextForm sx={{ width: "180px" }}>
          <OutlinedInput placeholder="Bedrooms" />
        </InputTextForm>
        <InputTextForm sx={{ width: "180px" }}>
          <OutlinedInput placeholder="Square ft" />
        </InputTextForm>
        <InputTextForm sx={{ width: "180px" }}>
          <OutlinedInput placeholder="Car Parking" />
        </InputTextForm>
        <InputTextForm sx={{ width: "180px" }}>
          <OutlinedInput placeholder="Year Built" />
        </InputTextForm>
      </div>
      <Box mb="20px">
        <div>
          <InputTextForm sx={{ width: "1020px" }}>
            <OutlinedInput placeholder="Property Address" />
          </InputTextForm>
        </div>
      </Box>
      <h4>Dimensions</h4>
      <div>
        <InputTextForm sx={{ width: "150px" }}>
          <OutlinedInput placeholder="Price/Rent" />
        </InputTextForm>
        <InputTextForm sx={{ width: "150px" }}>
          <OutlinedInput placeholder="Bedrooms" />
        </InputTextForm>
        <InputTextForm sx={{ width: "150px" }}>
          <OutlinedInput placeholder="Square ft" />
        </InputTextForm>
        <InputTextForm sx={{ width: "150px" }}>
          <OutlinedInput placeholder="Car Parking" />
        </InputTextForm>
        <InputTextForm sx={{ width: "150px" }}>
          <OutlinedInput placeholder="Year Built" />
        </InputTextForm>
        <InputTextForm sx={{ width: "150px" }}>
          <OutlinedInput placeholder="Year Built" />
        </InputTextForm>
      </div>
      <h4>General Amenities</h4>
      <FormGroup>
        <span>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Swimming pool" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Terrace" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Air conditioning" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Internet" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Balcony" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Cable TV" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Computer" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Dishwasher" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Near Green Zone" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Near Church" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Near Estate" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Coffee pot" />
        </span>
      </FormGroup>
    </Box>
  );
};

export default PropertyAdd;
