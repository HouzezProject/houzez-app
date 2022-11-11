import { BorderBottom, Height } from "@mui/icons-material";
import { Button, FormControl, InputLabel, MenuItem, Select, Slider, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const PropertyFilterContainer = styled(Box)({
  border: "0.7px grey solid",
  width: "23vw",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "fixed",
  top: "15vh",
  left: "20vh"
});

const PropertyFilterHeader = styled(Box)({
  paddingTop: "20px",
  paddingBottom: "20px",
  borderBottom: "0.5px grey solid",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const PropertyFilterBody = styled(Box)({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const FilterFormControl = styled(FormControl)({
  marginTop: 20,
  marginBottom: 2,
  width: 280
});

const FilterTypography = styled(Typography)({
  fontWeight: "700"
});

const SliderContainer = styled(Box)({
  width: 280,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px"
});

const PriceSlider = styled(Slider)({
  marginTop: "40px",
  width: "250px"
});

const marks = [
  {
    value: 0,
    label: "0$"
  },
  {
    value: 500,
    label: "500K$"
  },
  {
    value: 1000,
    label: "1M$"
  },
  {
    value: 1500,
    label: "1.5M$"
  },
  {
    value: 2000,
    label: "2M$"
  }
];

const PropertyFilter = () => {
  const valuetext = (value: number) => {
    return `${value}°C`;
  };
  const [value, setValue] = useState<number[]>([0, 2000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <PropertyFilterContainer>
      <PropertyFilterHeader>
        <FilterTypography variant="h6">Property Filter</FilterTypography>
      </PropertyFilterHeader>
      <PropertyFilterBody>
        <FilterFormControl>
          <InputLabel id="property-type">Type</InputLabel>
          <Select labelId="property-type" id="property-type" label="Type">
            <MenuItem value="">None</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FilterFormControl>
        <FilterFormControl>
          <InputLabel id="property-bedroom">Bedroom</InputLabel>
          <Select labelId="property-bedroom" id="property-bedroom" label="Bedroom">
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </FilterFormControl>
        <FilterFormControl>
          <InputLabel id="property-bathroom">Bathroom</InputLabel>
          <Select labelId="property-bathroom" id="property-bathroom" label="Bathroom">
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </FilterFormControl>
        <FilterFormControl>
          <InputLabel id="property-garage">Garage</InputLabel>
          <Select labelId="property-garage" id="property-garage" label="Garage">
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </FilterFormControl>
        <SliderContainer>
          <Typography variant="body1" sx={{ fontWeight: "500", alignSelf: "flex-start" }}>
            Price:
          </Typography>
          <PriceSlider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            valueLabelFormat={(value) => `${value}K`}
            marks={marks}
            min={0}
            max={2000}
            step={100}
          />
        </SliderContainer>
        <Button variant={"contained"} sx={{ marginTop: "40px" }} size={"large"}>
          Find Properties
        </Button>
      </PropertyFilterBody>
    </PropertyFilterContainer>
  );
};

export default PropertyFilter;
