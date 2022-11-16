import React, {useState} from "react";
import styled from "@emotion/styled";
import {
    AlertColor,
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

interface PropertyAttribute {
    propertyType: string;
    title: string;
    price: number;
    livingRoom: number;
    bedroom: number;
    bathroom: number;
    garage: number;
    landSize: number;
    description: string;
    state: string;
    suburb: string;
    street: string;
    postcode: number;
    preowned: boolean;
    latitude: number;
    longitude: number;
    indoor: string[];
    outdoor: string[];
}

const PropertyAddBody = () => {


    const [propertyAttribute, setPropertyAttribute] = useState({} as PropertyAttribute);

    const handleChange = (type: keyof PropertyAttribute) => (event: any) => {
        setPropertyAttribute({...propertyAttribute, [type]: event.target.value});
    };

    const {
        propertyType,
        title,
        price,
        livingRoom,
        bedroom,
        bathroom,
        garage,
        landSize,
        description,
        state,
        suburb,
        street,
        postcode,
        preowned,
        latitude,
        longitude,
        indoor,
        outdoor
    } = propertyAttribute;

    const onSubmit = async () => {
        try {
            // let list = "";
            // propertyAttribute.indoor.forEach((data: String) => {
            //     list += (data + ",");
            // });
            // propertyAttribute.indoor = list;
            //
            // list = "";
            // propertyAttribute.outdoor.forEach((data: String) => {
            //     list += (data + ",");
            // });
            // propertyAttribute.outdoor = list;

            await axiosClient.post("/agents/1/properties", propertyAttribute);
        } catch (error) {

        }
    }

    return (
        <PropertyAddFormContainer>
            <form noValidate onSubmit={onSubmit}>
                <GridContainer container spacing={3}>
                    <Grid item xs={12}>
                        <AddPropertyDivider/>
                    </Grid>
                    <Grid item xs={12}>
                        <LevelTwoTitle>Basic Information</LevelTwoTitle>
                    </Grid>
                    <PropertyAddInput xs={6} label="Title" value={title} attribute="title"
                                      handleChange={handleChange} multiline={false}/>

                    <AddPropertyDropDown xs={6} labelId="type" label="Type" value={propertyType}
                                         handleChange={handleChange} attribute={"propertyType"}
                                         checklist={typeCheckList}/>
                    <PropertyAddInput xs={12} label="Description" value={description} attribute="description"
                                      handleChange={handleChange} multiline={true} rows={4}/>
                    <Grid item xs={12}>
                        <AddPropertyDivider/>
                    </Grid>

                    <Grid item xs={12}>
                        <LevelTwoTitle>Property Information</LevelTwoTitle>
                    </Grid>
                    <Grid item xs={3}>
                        <FormTextField id="price" type="number" label="Price" size="small" InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} value={propertyAttribute.price} onChange={handleChange("price")}/>
                    </Grid>

                    <Grid item xs={3}>
                        <FormTextField id="land-size" type="number" label="Land Size" size="small" InputProps={{
                            startAdornment: <InputAdornment position="start">m²</InputAdornment>,
                        }} value={propertyAttribute.landSize} onChange={handleChange("landSize")}/>
                    </Grid>
                    <PropertyAddInput type="number" xs={3} label="Bedroom" value={bedroom}
                                      handleChange={handleChange} attribute="bedroom" multiline={false}/>
                    <Grid item xs={3}>
                        <FormControlLabel
                            control={
                                <Switch value={propertyAttribute.preowned} onChange={handleChange("preowned")}/>
                            }
                            label="preowned"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            fullWidth
                            inputComponent={({...props}) => (
                                <Autocomplete
                                    apiKey={"AIzaSyDRsNEvVJiPnDeu6geyVIwOs3x1yHIzngs"}
                                    {...props}
                                    options={{
                                        types: [],
                                        componentRestrictions: {country: "au"},
                                        fields: ["address_components", "geometry"],
                                    }}
                                    language={"en"}
                                    onPlaceSelected={({address_components, geometry}) => {
                                        console.log(geometry)
                                        setPropertyAttribute({
                                            ...propertyAttribute,
                                            street: address_components[0].long_name + " " + address_components[1].long_name,
                                            suburb: address_components[2].long_name,
                                            state: address_components[4].short_name,
                                            postcode: address_components[6].short_name
                                        });
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <PropertyAddInput type="text" xs={3} label="Street" value={street} handleChange={handleChange}
                                      attribute="street" multiline={false}/>
                    <PropertyAddInput type="text" xs={3} label="Suburb" value={suburb} handleChange={handleChange}
                                      attribute="suburb" multiline={false}/>
                    <PropertyAddInput type="text" xs={3} label="State" value={state} handleChange={handleChange}
                                      attribute="state" multiline={false}/>
                    <PropertyAddInput type="number" xs={3} label="Postcode" value={postcode}
                                      handleChange={handleChange} attribute="postcode" multiline={false}/>
                    <Grid item xs={12}>
                        <AddPropertyDivider/>
                    </Grid>
                    <Grid item xs={12}>
                        <LevelTwoTitle>Dimensions</LevelTwoTitle>
                    </Grid>
                    <PropertyAddInput type="number" xs={3} label="Living room" value={livingRoom}
                                      handleChange={handleChange} attribute="livingRoom" multiline={false}/>
                    <PropertyAddInput type="number" xs={3} label="Bathroom" value={bathroom}
                                      handleChange={handleChange} attribute="bathroom" multiline={false}/>
                    <PropertyAddInput type="number" xs={3} label="Garage" value={garage}
                                      handleChange={handleChange} attribute="garage" multiline={false}/>
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
                            <FormControlLabel control={<Checkbox size={"small"} value={propertyAttribute.indoor}
                                                                 onChange={handleChange("indoor")}/>}
                                              label={item}/>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <LevelThreeTitle>Outdoor</LevelThreeTitle>
                    </Grid>
                    {outdoorCheckList.map((item, index) => (
                        <Grid item xs={1.5} key={index}>
                            <FormControlLabel control={<Checkbox size={"small"} value={propertyAttribute.outdoor}
                                                                 onChange={handleChange("outdoor")}/>}
                                              label={item}/>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <AddImageButton/>
                    </Grid>
                    <Grid item xs={11}/>
                    <Grid item xs={1}>
                        <SubmitButton type={"submit"} variant="contained">Submit</SubmitButton>
                    </Grid>

                </GridContainer>

            </form>
        </PropertyAddFormContainer>
    );
};

const PropertyAddInput = ({
                              xs,
                              type = "text",
                              label,
                              handleChange,
                              value,
                              attribute,
                              multiline,
                              rows = 1
                          }: { xs: number, type?: string, label: string, value: string | number, handleChange: (type: keyof PropertyAttribute) => (event: any) => void, attribute: keyof PropertyAttribute, multiline: boolean, rows?: number }) => {
    return (
        <Grid item xs={xs}>
            <FormTextField type={type} label={label} multiline={multiline} rows={rows}
                           size="small" value={value}
                           onChange={handleChange(attribute)}/>
        </Grid>
    )
}

const AddPropertyDropDown = ({
                                 xs,
                                 labelId,
                                 label,
                                 value,
                                 handleChange,
                                 attribute,
                                 checklist
                             }: { xs: number, labelId: string, label: string, value: string, handleChange: (type: keyof PropertyAttribute) => (event: any) => void, attribute: keyof PropertyAttribute, checklist: string[] }) => {
    return (
        <Grid item xs={xs}>
            <FormControl fullWidth size="small">
                <InputLabel id={labelId}>Type</InputLabel>
                <Select labelId={labelId} label={label} value={value}
                        onChange={handleChange(attribute)}>
                    {checklist.map((item) => (
                        <MenuItem value={item.toUpperCase().replaceAll(" ", "_")}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default PropertyAddBody;