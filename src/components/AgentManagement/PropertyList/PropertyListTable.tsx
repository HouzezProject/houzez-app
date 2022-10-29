import styled from "@emotion/styled";
import React from "react";
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { rows } from "./config";
import theme from "../../../styles/theme";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const {
  palette: { primary }
} = theme;

const PropertyListTableContainer = styled(Box)({
  width: "100%",
  height: "calc(100vh - 154px)"
});

const PriceTableCell = styled(TableCell)({
  color: primary.main
});

const ForRentDiv = styled(`div`)({
  color: "#F3B11F",
  border: "1px solid #F3B11F"
});

const ForSellDiv = styled(`div`)({
  color: "#E15958",
  border: "1px solid #E15958"
});

const AddressDiv = styled(Box)({
  display: "flex",
  marginTop: "0.5rem",
  marginLeft: "-0.5rem"
});

const PropertyListTable = () => {
  return (
    <PropertyListTableContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Beds</TableCell>
              <TableCell>Baths</TableCell>
              <TableCell>Sq Ft</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PropertyListTableContainer>
  );
};

export default PropertyListTable;
