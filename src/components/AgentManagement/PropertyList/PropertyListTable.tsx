import styled from "@emotion/styled";
import React from "react";
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@mui/material";
import { PropertyDataCountrows, PropertyDatarows } from "./config";
import theme from "../../../styles/theme";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const {
  palette: {
    primary,
    background: { paper }
  }
} = theme;

const PropertyListTableContainer = styled(Box)({
  display: "flex",
  width: "1100px",
  paddingLeft: "35px",
  // width: "100%",
  height: "calc(100vh - 145px)",
  textAlign: "center"
});
const PropertyTableList = styled(Table)({
  borderBottom: "3px solid" + paper,
  Align: "center"
});
const PropertyTableHeadRow = styled(TableRow)({
  textAlign: "center"
  // borderBottom: "3px solid" + paper
});
const PropertyTableBodyRow = styled(TableRow)({});
const PriceTableCell = styled(TableCell)({
  color: primary.main
});
const PropertyTableCell = styled(TableCell)({
  // textAlign: "center"
});
const ForRentDiv = styled(`div`)({
  color: "#F3B11F",
  border: "1px solid #F3B11F",
  textAlign: "center"
});

const ForSellDiv = styled(`div`)({
  color: "#E15958",
  border: "1px solid #E15958",
  textAlign: "center"
});

const AddressDiv = styled(Box)({
  display: "flex",
  marginTop: "0.5rem",
  marginLeft: "-0.5rem"
});
const handleChangePage = () => {};
const handleChangeRowsPerPage = () => {};

const PropertyListTable = () => {
  return (
    <PropertyListTableContainer>
      <TableContainer>
        <PropertyTableList>
          <TableHead>
            <PropertyTableHeadRow>
              <PropertyTableCell>Image</PropertyTableCell>
              <PropertyTableCell>Title</PropertyTableCell>
              <PropertyTableCell>Beds</PropertyTableCell>
              <PropertyTableCell>Baths</PropertyTableCell>
              <PropertyTableCell>Sq Ft</PropertyTableCell>
              <PropertyTableCell>Type</PropertyTableCell>
              <PropertyTableCell>Price</PropertyTableCell>
              <PropertyTableCell>Status</PropertyTableCell>
              <PropertyTableCell>Action</PropertyTableCell>
            </PropertyTableHeadRow>
          </TableHead>
          <TableBody>
            {PropertyDatarows.map((row) => (
              <PropertyTableBodyRow key={row.id}>
                <TableCell>
                  <Image src={row.img} alt="house image" width="80px" height="40px" objectFit="contain" />
                </TableCell>
                <TableCell>
                  <Box>
                    <Box>{row.name}</Box>
                    <AddressDiv>
                      <LocationOnOutlinedIcon />
                      <Box>{`${row.street}, ${row.state}, ${row.post}`}</Box>
                    </AddressDiv>
                  </Box>
                </TableCell>
                <TableCell>{row.beds}</TableCell>
                <TableCell>{row.baths}</TableCell>
                <TableCell>{row.landSize}</TableCell>
                <TableCell>{row.type}</TableCell>
                <PriceTableCell>{row.price}</PriceTableCell>
                {row.status === "for sale" && (
                  <TableCell>
                    <ForSellDiv>{row.status}</ForSellDiv>
                  </TableCell>
                )}
                {row.status === "for rent" && (
                  <TableCell>
                    <ForRentDiv>{row.status}</ForRentDiv>
                  </TableCell>
                )}
                <TableCell>button</TableCell>
              </PropertyTableBodyRow>
            ))}
          </TableBody>
        </PropertyTableList>
        <TablePagination
          component="div"
          count={PropertyDataCountrows.count}
          page={PropertyDataCountrows.page}
          rowsPerPage={PropertyDataCountrows.rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </PropertyListTableContainer>
  );
};

export default PropertyListTable;
