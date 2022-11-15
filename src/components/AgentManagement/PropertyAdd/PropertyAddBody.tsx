import React, {useState} from "react";
import {useForm} from "react-hook-form";
import styled from "@emotion/styled";
import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography
} from "@mui/material";

import Autocomplete from "react-google-autocomplete";
import Button from "@mui/material/Button";
import ButtonGif from "../../../../public/assets/gif/lines.gif";
import axiosClient from "../../../utils/axios";
import {AxiosError} from "axios";


const indoorCheckList = ["Ensuite", "Dishwasher", "Study", "Built in robes", "Alarm system", "Broadband", "Floorboards", "Gym", "Rumpus room", "Workshop"];
const outdoorCheckList = ["Swimming pool", "Balcony", "Outdoor area", "Undercover parking", "Shed", "Fully fenced", "Outdoor spa", "Tennis court"];
const typeCheckList = ["House", "Apartment", "Townhouse", "Villa", "Land", "Acreage", "Rural", "Block Of Units", "Retirement Living"]
const stateCheckList = ["NSW", "VIC", "QSD", "SA", "WA", "TAS", "NT", "ACT"]


const GridContainer = styled(Grid)({
    width: "100%",

})

const PropertyAddFormContainer = styled(Box)({
    width: "calc(100vw - 260px)",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    padding: "0",
    form: {
        marginTop: "90px",
        padding: "0",
        width: "90%",
        height: "fit-content",
        display: "flex",
        alignItems: "center",
    }
});


const FormTextField = styled(TextField)({
    width: "100%",
});

const LevelTwoTitle = styled(Typography)(
    {
        fontSize: "20px",
        width: "100%"
    }
)

const LevelThreeTitle = styled(Typography)(
    {
        fontStyle: "italic",
        fontSize: "16px",
        width: "100%"
    }
)

const AddPropertyDivider = styled(Divider)({
    width: "100%",
    fontWeight: "600"
});

const SubmitButton = styled(Button)({
    width: "100%"
});
const AddImageButton = styled(Button)({
    width: "100%",
    height: "400px",
    '&:hover': {
        backgroundImage: `url(${ButtonGif.src})`,
        backgroundSize: "cover"
    },
    borderRadius: "4px",
    borderWidth: "1px",
    borderColor: "gray",
    borderStyle: "solid"

});

const PropertyAddBody = () => {

    const {
        register,
        handleSubmit
    } = useForm();

    const [data, setData] = useState("");

    const onSubmit = async (data) => {
        try {

            setData(JSON.stringify(data));

            let list = "";
            data.indoor.forEach((data: String) => {
                list += (data + ",");
            });
            data.indoor = list;

            list = "";
            data.outdoor.forEach((data: String) => {
                list += (data + ",");
            });
            data.outdoor = list;

            await axiosClient.post("/agents/1/properties", data);
        } catch (error) {
            if (error instanceof AxiosError && error.response?.status === 400) {
                //setAccountActive({severity: "error", display: "flex", text: error.response.data.details});
            }
        }
    }

    return (

        <PropertyAddFormContainer>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>


                <GridContainer container spacing={3}>
                    <Grid item xs={12}>
                        <AddPropertyDivider/>
                    </Grid>
                    <Grid item xs={12}>
                        <LevelTwoTitle>Basic Information</LevelTwoTitle>
                    </Grid>
                    <Grid item xs={6}>
                        <FormTextField id="title" label="Title" size="small" {...register("title")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="type">Type</InputLabel>
                            <Select labelId="type" id="type" label="Type" {...register("propertyType")}>
                                {typeCheckList.map((item) => (
                                    <MenuItem value={item.toUpperCase().replaceAll(" ", "_")}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField id="description" multiline rows={4} label="Description"
                                       size="small" {...register("description")}/>
                    </Grid>
                    <Grid item xs={12}>
                        <AddPropertyDivider/>
                    </Grid>

                    <Grid item xs={12}>
                        <LevelTwoTitle>Property Information</LevelTwoTitle>
                    </Grid>
                    <Grid item xs={3}>
                        <FormTextField id="price" type="number" label="Price" size="small" InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} {...register("price")}/>
                    </Grid>
                    <Grid item xs={3}>
                        <FormTextField id="land-size" type="number" label="Land Size" size="small" InputProps={{
                            startAdornment: <InputAdornment position="start">m²</InputAdornment>,
                        }}  {...register("landSize")}/>
                    </Grid>
                    <Grid item xs={3}>
                        <FormTextField id="bedroom" type="number" label="Bedroom"
                                       size="small"  {...register("bedroom")}/>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControlLabel
                            control={
                                <Switch  {...register("preowned")}/>
                            }
                            label="preowned"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Input
                            fullWidth
                            inputComponent={({onFocus, onBlur, ...props}) => (
                                <Autocomplete
                                    apiKey={"AIzaSyDRsNEvVJiPnDeu6geyVIwOs3x1yHIzngs"}
                                    {...props}
                                    options={{
                                        types: [],
                                        componentRestrictions: {country: "au"},
                                        fields: ["address_components", "geometry", "icon", "name"],
                                    }}
                                    language={"en"}
                                    onPlaceSelected={(selected) => {
                                        console.log(selected);
                                        document.getElementById("suburb").value = selected.address_components[0].long_name;
                                        document.getElementById("state").value = Object.keys(selected.address_components[1].short_name);
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormTextField id="suburb" label="Suburb" size="small"
                                       InputLabelProps={{shrink: true}} {...register("suburb")}/>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="state">State</InputLabel>
                            <Select labelId="state" id="state" label="State" {...register("state")}>
                                {stateCheckList.map((item) => (
                                    <MenuItem value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormTextField id="postcode" type="number" label="Postcode"
                                       size="small" {...register("postcode")}/>
                    </Grid>
                    <Grid item xs={12}>
                        <AddPropertyDivider/>
                    </Grid>

                    <Grid item xs={12}>
                        <LevelTwoTitle>Dimensions</LevelTwoTitle>
                    </Grid>
                    <Grid item xs={3}>
                        <FormTextField id="living-room" type="number" label="Living room"
                                       size="small" {...register("livingRoom")}/>
                    </Grid>
                    <Grid item xs={3}>
                        <FormTextField id="bathroom" type="number" label="Bathroom"
                                       size="small" {...register("bathroom")}/>
                    </Grid>
                    <Grid item xs={3}>
                        <FormTextField id="garage" type="number" label="Garage" size="small"  {...register("garage")}/>
                    </Grid>
                    <Grid item xs={12}>
                        <AddPropertyDivider/>
                    </Grid>

                    <Grid item xs={12}>
                        <LevelTwoTitle>General Amenities</LevelTwoTitle>
                    </Grid>
                    <Grid item xs={12}>
                        <LevelThreeTitle>Indoor</LevelThreeTitle>
                    </Grid>

                    {indoorCheckList.map((item, index) => (
                        <Grid item xs={1.5} key={index}>
                            <FormControlLabel control={<Checkbox size={"small"} value={item} {...register("indoor")}/>}
                                              label={item}/>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <LevelThreeTitle>Outdoor</LevelThreeTitle>
                    </Grid>
                    {outdoorCheckList.map((item, index) => (
                        <Grid item xs={1.5} key={index}>
                            <FormControlLabel control={<Checkbox size={"small"} value={item} {...register("outdoor")}/>}
                                              label={item}/>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <AddImageButton/>
                    </Grid>
                    <Grid item xs={11}/>
                    <Grid item xs={1}>
                        <SubmitButton type={"submit"} variant="contained">Submit</SubmitButton>
                    </Grid>                <p>{data.toString()}</p>

                </GridContainer>
            </form>
        </PropertyAddFormContainer>
    );
};

export default PropertyAddBody;