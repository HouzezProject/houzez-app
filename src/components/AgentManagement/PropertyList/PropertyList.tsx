/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import PropertyTableBody from "@mui/material/TableBody";
import PropertyTableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
import PropertyTableHead from "@mui/material/TableHead";
import PropertyTableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField
} from "@mui/material";
import Image from "next/image";
import ManagementHeader from "../ManagementHeader";
import ManagementNavigation from "../ManagementNavigation";
const AgentManagementContainer = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  position: "relative"
});

const AgentManagementBody = styled(Box)({
  height: "calc(100vh - 64px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "start"
});

const createData = (
  name: string,
  State: string,
  Suburd: string,
  Street: string,
  Post: string,
  Price: string,
  Beds: number,
  Baths: number,
  Garages: number,
  Landsize: number,
  Type: string,
  Status: string,
  InspectionDate: string,
  InspectionTime: string
) => ({
  name,
  State,
  Suburd,
  Street,
  Post,
  Price,
  Beds,
  Baths,
  Garages,
  Landsize,
  Type,
  Status,
  InspectionDate,
  InspectionTime
});

const PropertyRows = [
  createData(
    "Luxury Family Home",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    "Luxury Family Home",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    "Luxury Family Home",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    "Luxury Family Home",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  )
];
const PropertyShowBox = styled(Box)({
  position: "absolute",
  top: "100px",
  left: "300px"
});
const PropertyTableBox = styled(Box)({
  // width: "100%",
  height: "50px",
  display: "flex",
  flexDirection: "column",
  padding: "0px"
});
const PropertyBox = styled(Box)({
  display: "flex"
});

const PropertySearchBox = styled("div")({
  display: "flex",
  marginLeft: "20px",
  position: "relative",
  borderRadius: "5px",
  backgroundColor: "dark",
  "&:hover": {
    backgroundColor: "light"
  }
  // justifyContent: "space-around"
});

const PropertySearchButton = styled(Button)({
  justifyContent: "left",
  alignItems: "center"
});

const SelectAllBox = styled(Box)({
  display: "flex",
  // padding: "20px",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row"
});
const SelectBox = styled(Box)({
  minWidth: "120px"
});
const PropertySearchIconBox = styled(Box)({
  display: "flex",
  justifyContent: "left"
});

const handleChange = (event: SelectChangeEvent) => {
  console.log(event.target.value as string);
};

const PropertyList = () => {
  return (
    <AgentManagementContainer>
      <ManagementHeader />
      <AgentManagementBody>
        <ManagementNavigation />
        <PropertyShowBox>
          <PropertySearchBox>
            <PropertySearchIconBox>
              <SearchIcon />
              <PropertySearchBox />
            </PropertySearchIconBox>
            <TextField placeholder="Search…"></TextField>
            <PropertySearchButton variant="outlined">search</PropertySearchButton>
          </PropertySearchBox>
          <br />
          <SelectAllBox>
            <SelectBox>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Beds</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="--Beds--"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
            </SelectBox>
            <br />
            <SelectBox>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Baths</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="--Baths--"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
            </SelectBox>
            <br />
            <TextField id="basic" label="Landsize" />
            <br />
          </SelectAllBox>
          <br />
          <PropertyTableBox>
            <PropertyTableHead>
              <PropertyTableRow>
                <PropertyTableCell align="center">Property name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</PropertyTableCell>
                <PropertyTableCell align="center">Price </PropertyTableCell>
                <PropertyTableCell align="center">Type </PropertyTableCell>
                <PropertyTableCell align="center">Beds/Baths/Garages </PropertyTableCell>
                <PropertyTableCell align="center">Landsize </PropertyTableCell>
                <PropertyTableCell align="center">Status </PropertyTableCell>
                <PropertyTableCell align="center">Inspection Date </PropertyTableCell>
                <PropertyTableCell align="center">Edit </PropertyTableCell>
              </PropertyTableRow>
            </PropertyTableHead>
            <PropertyTableBody>
              {PropertyRows.map((row) => (
                <PropertyTableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <PropertyTableCell align="center" component="th" scope="row">
                    <PropertyBox>
                      <Image
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                        width={10}
                        height={10}
                      />
                      {row.name}
                      <br />
                      {row.Post},{row.Street},{row.Suburd},{row.State}
                    </PropertyBox>
                  </PropertyTableCell>

                  <PropertyTableCell align="center">{row.Price}</PropertyTableCell>
                  <PropertyTableCell align="center">{row.Type}</PropertyTableCell>
                  <PropertyTableCell align="center">
                    {row.Beds}/{row.Baths}/{row.Garages}
                  </PropertyTableCell>
                  <PropertyTableCell align="center">{row.Landsize}</PropertyTableCell>
                  <PropertyTableCell align="center">{row.Status}</PropertyTableCell>
                  <PropertyTableCell align="center">
                    {row.InspectionDate} {row.InspectionTime}
                  </PropertyTableCell>
                  <PropertyTableCell align="center">
                    <Button variant="outlined">
                      <Link href="">Edit</Link>
                    </Button>
                  </PropertyTableCell>
                </PropertyTableRow>
              ))}
            </PropertyTableBody>
          </PropertyTableBox>
        </PropertyShowBox>
      </AgentManagementBody>
    </AgentManagementContainer>
  );
};

export default PropertyList;
