import styled from "@emotion/styled";
import React, {useEffect, useState} from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
  Button
} from "@mui/material";
import {CreateData, PropertyDatarows} from "./config";
import theme from "../../../styles/theme";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const {
  palette: {primary}
} = theme;

const PropertyListTableContainer = styled(Box)({
  display: "flex",
  paddingLeft: "35px",
  width: "100%",
  height: "calc(100vh - 145px)",
  textAlign: "center"
});
const PropertyTableList = styled(Table)({
  Align: "center"
});

const PropertyTableHeadRow = styled(TableRow)({
  textAlign: "center"
});
const PropertyTableBodyRow = styled(TableRow)({});
const PriceTableCell = styled(TableCell)({
  color: primary.main
});
const PropertyTitleTableCell = styled(TableCell)({
  minWidth: "200px",
  borderBottom: "solid 2px" + primary.light
});
const TitleCell = styled(TableCell)({
  borderBottom: "solid 2px" + primary.light
});
const PropertyStatusTableCell = styled(TableCell)({
  minWidth: "100px",
  borderBottom: "solid 2px" + primary.light
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

const EditButton = styled(Button)({
  height: "30px"
});

const PropertyListTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const [data, setData] = useState<Array<CreateData>>([]);

  useEffect(() => setData(PropertyDatarows), []);

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
          <PropertyTableList stickyHeader>
            <TableHead>
              <PropertyTableHeadRow>
                <TitleCell>Image</TitleCell>
                <PropertyTitleTableCell>Title</PropertyTitleTableCell>
                <TitleCell>Beds</TitleCell>
                <TitleCell>Baths</TitleCell>
                <TitleCell>Sq Ft</TitleCell>
                <TitleCell>Type</TitleCell>
                <TitleCell>Price</TitleCell>
                <PropertyStatusTableCell>Status</PropertyStatusTableCell>
                <TitleCell>Action</TitleCell>
              </PropertyTableHeadRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map((row) => (
                  <PropertyTableBodyRow key={row.id}>
                    <TableCell>
                      <Image src={row.img} alt="house image" width="80px" height="40px"
                             objectFit="contain"/>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Box>{row.name}</Box>
                        <AddressDiv>
                          <LocationOnOutlinedIcon/>
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
                    <TableCell>
                      <EditButton variant="contained"> Edit </EditButton>
                    </TableCell>
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
