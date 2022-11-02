import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination
} from "@mui/material";
import { createData, PropertyDatarows } from "./config";
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

const PropertyTableHeard = styled(TableHead)({
  borderBottom: "solid 2px" + primary.main
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

const PropertyListTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [data, setData] = useState<Array<createData>>([]);

  useEffect(() => setData(PropertyDatarows));

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <PropertyListTableContainer>
      <TableContainer>
        <PropertyTableList>
          <PropertyTableHeard>
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
          </PropertyTableHeard>
          <TableBody>
            {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map((row) => (
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
          <TableFooter>
            <TableRow>
              <TablePagination
                count={data.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </PropertyTableList>
      </TableContainer>
    </PropertyListTableContainer>
  );
};

export default PropertyListTable;
