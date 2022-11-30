import styled from "@emotion/styled";
import { Button, Container, InputLabel, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { FormTextField } from "../PropertyAdd/components/FormTextField";
import FormData from "form-data";
import axios from "axios";

const HomeContainer = styled(Container)({
  width: "1050px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  margin: "20px",
  gap: "20px"
});

const InputButton = styled(Button)({
  width: "50px",
  marginTop: "20px"
});

const LabelStyle = styled(InputLabel)({
  width: "100px",
  marginBottom: "20px"
});

const AddImage = () => {
  const router = useRouter();
  const { query } = router;
  const { agentId, propertyId } = query;
  const [result, setResult] = useState("");
  const [files, setFile] = useState<FileList | null>();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (files) {
      for (let i = 0; i < files?.length; i++) {
        formData.append("file", files[i], files[i].name);
      }
    }

    const onSelectFile = async () => {
      const token = localStorage.getItem("token") as string;
      const res = await axios.post(
        `http://localhost:8080/api/v1/agents/${agentId}/properties/${propertyId}/s3/images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token
          }
        }
      );
      console.log(res.data);
      setResult(res.data);
    };
    onSelectFile();
  };

  return (
    <HomeContainer>
      <form noValidate onSubmit={onSubmit} encType="multipart/form-data">
        <LabelStyle htmlFor="files">Select files:</LabelStyle>
        <FormTextField
          type="file"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFile(event.target.files)}
          inputProps={{
            multiple: true
          }}
        />
        <InputButton variant="contained" type={"submit"}>
          Upload
        </InputButton>
      </form>
      {result && <Typography>Upload Success</Typography>}
    </HomeContainer>
  );
};

export default AddImage;
