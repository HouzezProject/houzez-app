import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { rows } from "./config";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TableCell,
  TextField
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import ManagementHeader from "../ManagementHeader";
import ManagementNavigation from "../ManagementNavigation";
import theme from "../../../styles/theme";

const AgentManagementContainer = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "start",
  flexDirection: "column"
});

const AgentManagementBody = styled(Box)({
  height: "calc(100vh - 64px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  position: "relative"
});

const {
  palette: {
    secondary: { light, main, dark },
    background: { default: background, paper: backgroundPaper }
  }
} = theme;

const Search = styled("div")({
  display: "flex",
  marginLeft: "10px",
  position: "relative",
  borderRadius: "3px",
  backgroundColor: "dark",
  "&:hover": {
    backgroundColor: "light"
  },
  width: "100%",
  justifyContent: "space-around"
});

const SearchIconWrapper = styled("div")({
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const StyledInputBase = styled(InputBase)({
  color: "dark",
  "& .MuiInputBase-input": {
    paddingLeft: "30px",
    width: "100%"
  }
});

const SearchButton = styled(Button)({
  justifyContent: "center",
  SearchButton: "right"
});

const SelectAllBox = styled(Box)({
  display: "flex",
  padding: "10px",
  justifyContent: "space-between",
  alignItems: "center"
});

const SelectBox = styled(Box)({
  minWidth: "100px"
});
const PropertyBox = styled(Box)({
  display: "flex"
});
const handleChange = (event: SelectChangeEvent) => {
  console.log(event.target.value as string);
};
const PropertyListBox = styled(Box)({
  position: "absolute",
  top: "30px",
  left: "300px",
  overflow: "auto",
  marginTop: "40px"
});
const TableContainer = styled(Box)({
  marginTop: "10px"
});
const PropertyTable = styled(Table)({});

const PropertyTableCell = styled(TableCell)({
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
});

const StatusStyle = styled("div")({
  color: "red"
});
const SearchBox = styled(Box)({});

const PropertyList = () => {
  return (
    <AgentManagementContainer>
      <ManagementHeader />
      <AgentManagementBody>
        <ManagementNavigation />
        <Box>
          <Search>
            <SearchBox>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </SearchBox>
            <SearchBox>
              <SearchButton variant="outlined">search</SearchButton>
            </SearchBox>
          </Search>
        </Box>
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
        <TableContainer>
          <PropertyTable size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <PropertyTableCell>Property name </PropertyTableCell>
                <PropertyTableCell>Price</PropertyTableCell>
                <PropertyTableCell>Type</PropertyTableCell>
                <PropertyTableCell>Beds/Baths/Garages</PropertyTableCell>
                <PropertyTableCell>Landsize</PropertyTableCell>
                <PropertyTableCell>Status</PropertyTableCell>
                <PropertyTableCell>Inspection Date</PropertyTableCell>
                <PropertyTableCell>Edit</PropertyTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <PropertyTableCell component="th" scope="row">
                    <PropertyBox>
                      <Image
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                        width={50}
                        height={50}
                      />
                      {row.name}
                      <br />
                      {row.post},{row.street},{row.suburd},{row.state}
                    </PropertyBox>
                  </PropertyTableCell>

                  <PropertyTableCell>{row.price}</PropertyTableCell>
                  <PropertyTableCell>{row.type}</PropertyTableCell>
                  <PropertyTableCell>
                    {row.beds}/{row.baths}/{row.garages}
                  </PropertyTableCell>
                  <PropertyTableCell>{row.landSize}</PropertyTableCell>
                  <PropertyTableCell>
                    <StatusStyle>{row.status}</StatusStyle>
                  </PropertyTableCell>
                  <PropertyTableCell>
                    {row.inspectionDate} {row.inspectionTime}
                  </PropertyTableCell>
                  <PropertyTableCell>
                    <Button variant="outlined">
                      <Link href="">Edit</Link>
                    </Button>
                  </PropertyTableCell>
                </TableRow>
              ))}
            </TableBody>
          </PropertyTable>
        </TableContainer>
      </AgentManagementBody>
    </AgentManagementContainer>
  );
};

export default PropertyList;
