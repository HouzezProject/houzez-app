import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { alpha, Box, Button, Stack, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";
// import theme from "../../styles/theme";
// import SearchIcon from "@mui/icons-material/Search";
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
  Type: string,
  Agent: string,
  Price: string,
  Status: string
) => ({ name, Beds, Bath, SqFt, Agent, Type, Price, Status });

const rows = [
  createData("Luxury Family Home", 3, 2, 1440, "Apartment Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment Year", "Brain", "$15,000", "for sale"),
  createData("Luxury Family Home", 3, 2, 1440, "Apartment Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment Year", "Brain", "$15,000", "for sale"),
  createData("Luxury Family Home", 3, 2, 1440, "Apartment Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment Year", "Brain", "$15,000", "for sale"),
  createData("Luxury Family Home", 3, 2, 1440, "Apartment Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment Year", "Brain", "$15,000", "for sale"),
  createData("Luxury Family Home", 3, 2, 1440, "Apartment Year", "Robert", "$13,000", "for rent"),
  createData("Gorgeous Villa Bay View", 3, 2, 1440, "Apartment Year", "Brain", "$15,000", "for sale")
];

const PropertyList = () => {
  return (
    // <Container>
    // <Box sx={{ flexGrow: 1 }}>
    //       <AppBar position="static">
    //       <Toolbar>
    //               <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}></IconButton>
    //               <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
    //                   MUI
    //               </Typography>
    //               <Search>
    //                   <SearchIconWrapper>
    //                       <SearchIcon />
    //                   </SearchIconWrapper>
    //                   <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
    //               </Search>
    //           </Toolbar>
    //       </AppBar>
    //   </Box>

    <Box sx={{ overflow: "auto", marginTop: "100px" }}>
    
        {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}></IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
          </Search>
        </Toolbar>
      </AppBar>
    </Box> */}

    11
        <Stack spacing={2} direction="row">
        <Button variant="contained">Add New</Button>
        <Button variant="outlined">Property Grid</Button>
      </Stack>
      <p>fdsafdsafdasfdsafads</p>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
              <TableCell align="right">{row.Type}</TableCell>
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
