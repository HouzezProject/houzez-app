import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React, { useState } from "react";
import axiosClient from "../../../utils/axios";

const HomeContainer = styled(Container)({
  width: "1050px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center"
});

const AddImage = () => {
  const [url, setUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const uploadImages = () => {
    const onSelectFile = async (event: any) => {
      const file = event.target.files;
      const res = await axiosClient.post("/properties/s3", { file });
      setUrl(res.data.url);
    };
    onSelectFile(event);

    const saveURL = async (url: string, imageName: string) => {
      const res = await axiosClient.post("/agents/{agentId}/properties/{propertyId}/images", { url, imageName });
      console.log(res.data);
    };
    saveURL(url, imageName);
  };

  return (
    <HomeContainer>
      <input type="text" onChange={(event) => setImageName(event.target.value)}>
        Image description: {imageName}
      </input>
      <input type="file" accept="image/*" onChange={uploadImages} />;
    </HomeContainer>
  );
};

export default AddImage;
