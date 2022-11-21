import {PropertyAttribute} from "./PropertyAttribute";
import {Grid, InputAdornment} from "@mui/material";
import React from "react";
import {FormTextField} from "./FormTextField";

export const PropertyAddInputWithUnit = ({
                                             xs,
                                             type = "number",
                                             label,
                                             handleChange,
                                             value,
                                             attribute,
                                             unit
                                         }: { xs: number, type?: string, label: string, value: string | number, handleChange: (type: keyof PropertyAttribute) => (event: any) => void, attribute: keyof PropertyAttribute, unit: string }) => {
    return (
        <Grid item xs={xs}>
            <FormTextField type={type} label={label} size="small" value={value} onChange={handleChange(attribute)}
                           InputProps={{
                               startAdornment: <InputAdornment position="start">{unit}</InputAdornment>
                           }}/>
        </Grid>
    )
}