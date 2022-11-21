import React, {useState} from "react";
import styled from "@emotion/styled";
import {Box, Checkbox, Divider, FormControlLabel, Grid, Input, Switch, Typography} from "@mui/material";

import Autocomplete from "react-google-autocomplete";
import Button from "@mui/material/Button";
import ButtonGif from "../../../../public/assets/gif/lines.gif";
import axiosClient from "../../../utils/axios";
import PropertyAddInput from "./components/PropertyAddInput";
import {PropertyAttribute} from "./components/PropertyAttribute";
import {PropertyAddInputWithLabelShrink} from "./components/PropertyAddInputWithLabelShrink";
import {PropertyAddInputWithUnit} from "./components/PropertyAddInputWithUnit";
import {AddPropertyDropDown} from "./components/AddPropertyDropDown";

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

    const [propertyAttribute, setPropertyAttribute] = useState({} as PropertyAttribute);

    const handleChange = (type: keyof PropertyAttribute) => (event: any) => {
        switch (type) {
            case "outdoor" : {
                setPropertyAttribute((propertyAttribute) => ({
                    ...propertyAttribute, outdoor: {
                        ...propertyAttribute.outdoor,
                        [event.target.name]: event.target.checked
                    }
                }));
                break;
            }
            case "indoor" : {
                setPropertyAttribute((propertyAttribute) => ({
                    ...propertyAttribute, indoor: {
                        ...propertyAttribute.indoor,
                        [event.target.name]: event.target.checked
                    }
                }));
                break;
            }
            case "preowned": {
                setPropertyAttribute({...propertyAttribute, [type]: event.target.checked});
                break;
            }
            default: {
                setPropertyAttribute({...propertyAttribute, [type]: event.target.value});
            }
        }
        console.log(propertyAttribute);


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

            let list = "";
            for (const [key, value] of Object.entries(propertyAttribute.outdoor)) {
                if (value == true) {
                    list += "" + key + ",";
                }
            }

            let list1 = "";
            for (const [key, value] of Object.entries(propertyAttribute.indoor)) {
                if (value == true) {
                    list1 += "" + key + ",";
                }
            }

            const postDto = {...propertyAttribute, outdoor: list, indoor: list1};

            await axiosClient.post("/agents/1/properties", postDto);
        } catch (error) {

        }
    }

    return (
        <PropertyAddFormContainer>
            <form noValidate onSubmit={onSubmit}>
                <GridContainer container spacing={3}>
                    <AddPropertyDividerGrid/>
                    <LevelTwoTitleGrid title="Basic Information"/>
                    <PropertyAddInput xs={6} label="Title" value={title} attribute="title"
                                      handleChange={handleChange} multiline={false}/>
                    <AddPropertyDropDown xs={6} labelId="type" label="Type" value={propertyType}
                                         handleChange={handleChange} attribute={"propertyType"}
                                         checklist={typeCheckList}/>
                    <PropertyAddInput xs={12} label="Description" value={description} attribute="description"
                                      handleChange={handleChange} multiline={true} rows={4}/>
                    <AddPropertyDividerGrid/>

                    <LevelTwoTitleGrid title="Property Information"/>
                    <PropertyAddInputWithUnit xs={3} label="Price" value={price} handleChange={handleChange}
                                              attribute={"price"} unit={"$"}/>
                    <PropertyAddInputWithUnit xs={3} label="Land Size" value={landSize} handleChange={handleChange}
                                              attribute={"landSize"} unit={"m²"}/>
                    <PropertyAddInput type="number" xs={3} label="Bedroom" value={bedroom}
                                      handleChange={handleChange} attribute="bedroom"/>
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
                                            postcode: address_components[6].short_name,
                                            latitude: geometry.location.lat(),
                                            longitude: geometry.location.lng()
                                        });
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <PropertyAddInputWithLabelShrink xs={3} label="Street" value={street} handleChange={handleChange}
                                                     attribute="street"/>
                    <PropertyAddInputWithLabelShrink xs={3} label="Suburb" value={suburb} handleChange={handleChange}
                                                     attribute="suburb"/>
                    <PropertyAddInputWithLabelShrink xs={3} label="State" value={state} handleChange={handleChange}
                                                     attribute="state"/>
                    <PropertyAddInputWithLabelShrink type="number" xs={3} label="Postcode" value={postcode}
                                                     handleChange={handleChange} attribute="postcode"/>
                    <AddPropertyDividerGrid/>

                    <LevelTwoTitleGrid title="Dimensions"/>
                    <PropertyAddInput type="number" xs={3} label="Living room" value={livingRoom}
                                      handleChange={handleChange} attribute="livingRoom"/>
                    <PropertyAddInput type="number" xs={3} label="Bathroom" value={bathroom}
                                      handleChange={handleChange} attribute="bathroom"/>
                    <PropertyAddInput type="number" xs={3} label="Garage" value={garage}
                                      handleChange={handleChange} attribute="garage"/>
                    <AddPropertyDividerGrid/>
                    <LevelTwoTitleGrid title="General Amenities"/>
                    <Grid item xs={12}>
                        <LevelThreeTitle>Indoor</LevelThreeTitle>
                    </Grid>
                    {indoorCheckList.map((item, index) => (
                        <Grid item xs={1.5} key={index}>
                            <FormControlLabel
                                control={<Checkbox size={"small"} value={propertyAttribute.indoor} name={item}
                                                   onChange={handleChange("indoor")}
                                />}
                                label={item}/>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <LevelThreeTitle>Outdoor</LevelThreeTitle>
                    </Grid>
                    {outdoorCheckList.map((item, index) => (
                        <Grid item xs={1.5} key={index}>
                            <FormControlLabel
                                control={<Checkbox size={"small"} value={propertyAttribute.outdoor} name={item}
                                                   onChange={handleChange("outdoor")}
                                />}
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
                    <p>{propertyAttribute.preowned}</p>
                </GridContainer>
            </form>
        </PropertyAddFormContainer>
    );
};

const AddPropertyDividerGrid = () => {
    return (
        <Grid item xs={12}>
            <AddPropertyDivider/>
        </Grid>
    )
}


const LevelTwoTitleGrid = ({title}: { title: string }) => {
    return (
        <Grid item xs={12}>
            <LevelTwoTitle>{title}</LevelTwoTitle>
        </Grid>
    )
}

export default PropertyAddBody;