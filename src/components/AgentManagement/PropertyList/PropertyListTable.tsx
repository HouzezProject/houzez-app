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
  TablePagination,
  Button
} from "@mui/material";
import { Property } from "./config";
import theme from "../../../styles/theme";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import axiosClient from "../../../utils/axios";
import { useRouter } from "next/router";
import HOUSEAVATAR from "../../../../public/assets/images/defaulthouse.jpg";

const {
  palette: { primary }
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
  const router = useRouter();

  const pageSize = 10;
  const [userInfoId, setUserInfoId] = useState("");
  const [page, setPage] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const rowsPerPage = 10;
  const [propertyDataRows, setPropertyDataRows] = useState<Property[]>([]);

  const getAgentProperties = async (pid: number) => {
    const res = await axiosClient.get(`/agents/${userInfoId}/properties?page=${pid}&size=${pageSize}`);
    // setTotalNumber(res.data.propertyGetDtoList.length);
    const properyList = res.data.propertyGetDtoList;
    setPropertyDataRows(properyList);
  };

  useEffect(() => {
    const token = localStorage.getItem("token")?.split(".")[1];
    const getUserInfo = async () => {
      if (token) {
        const userId = JSON.parse(Buffer.from(token, "base64").toString("binary")).agent_id;
        const userInfo = await axiosClient.get("/agents/" + userId);
        setUserInfoId(userInfo.data.id);
      }
    };
    getUserInfo();
  }, []);

  useEffect(() => {
    const pagequery: number = router.query.page ? +router.query.page - 1 : 0;
    setPage(+pagequery);
    if (userInfoId) {
      getAgentProperties(+pagequery);
    }
  }, [userInfoId, router.query.page]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    getAgentProperties(newPage);
    router.push({ pathname: `/agent-management/property-list`, query: { page: newPage + 1 } });
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
            {propertyDataRows.length > 0 &&
              propertyDataRows.map((row) => (
                <PropertyTableBodyRow key={row.id}>
                  <TableCell>
                    <Image
                      src={row.image.length === 0 ? HOUSEAVATAR : row.image[0].url}
                      alt="house image"
                      width="80px"
                      height="40px"
                      objectFit="contain"
                    />
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Box>{row.title}</Box>
                      <AddressDiv>
                        <LocationOnOutlinedIcon />
                        <Box>{`${row.street}, ${row.state}, ${row.postcode}`}</Box>
                      </AddressDiv>
                    </Box>
                  </TableCell>
                  <TableCell>{row.bedroom}</TableCell>
                  <TableCell>{row.bathroom}</TableCell>
                  <TableCell>{row.landSize}</TableCell>
                  <TableCell>{row.propertyType}</TableCell>
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
                count={11}
                page={page}
                rowsPerPageOptions={[10]}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
              />
            </TableRow>
          </TableFooter>
        </PropertyTableList>
      </TableContainer>
    </PropertyListTableContainer>
  );
};

export default PropertyListTable;
