import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  alpha,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  TextField
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
// import theme from "../../styles/theme";
// import { Search } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));
const createData = (
  name: string,
  Beds: number,
  Bath: number,
  // eslint-disable-next-line camelcase
  SqFt: number,
  Type1: string,
  Type2: string,
  Agent: string,
  Price: string,
  Status: string
) => ({ name, Beds, Bath, SqFt, Agent, Type1, Type2, Price, Status });

const rows = [
  createData("Luxury Family Home", 3, 2, 1440, "Apartment", "Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment", "Year", "Brain", "$15,000", "for sale"),
  createData("Luxury Family Home", 3, 2, 1440, "Apartment", "Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment", "Year", "Brain", "$15,000", "for sale"),
  createData("Luxury Family Home", 3, 2, 1440, "Apartment", "Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment", "Year", "Brain", "$15,000", "for sale"),
  createData("Luxury Family Home", 3, 2, 1440, "Apartment", "Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment", "Year", "Brain", "$15,000", "for sale"),
  createData("Luxury Family Home", 3, 2, 1440, "Apartment", "Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment", "Year", "Brain", "$15,000", "for sale")
];

const handleChange = (event: SelectChangeEvent) => {
  console.log(event.target.value as string);
};

const PropertyList = () => {
  return (
    <Box sx={{ overflow: "auto", marginTop: "100px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Add New</Button>
          <Button variant="outlined">Property Grid</Button>
        </Stack>
        <br />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Search>
      </Box>
      <br />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Beds</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" label="--Beds--" onChange={handleChange}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Baths</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" label="--Baths--" onChange={handleChange}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <TextField id="basic" label="SQ FT" />
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Property name </TableCell>
              <TableCell align="right">Beds</TableCell>
              <TableCell align="right">Bath&nbsp;</TableCell>
              <TableCell align="right">Sq Ft&nbsp;</TableCell>
              <TableCell align="right">Type&nbsp;</TableCell>
              <TableCell align="right">Price&nbsp;</TableCell>
              <TableCell align="right">Status&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.Beds}</TableCell>
                <TableCell align="right">{row.Bath}</TableCell>
                <TableCell align="right">{row.SqFt}</TableCell>
                <TableCell align="right">
                  {row.Type1}
                  <br />
                  {row.Type2}
                </TableCell>
                <TableCell align="right">{row.Price}</TableCell>
                <TableCell align="right">{row.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PropertyList;
