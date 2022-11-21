import {PropertyAttribute} from "./PropertyAttribute";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";

export const AddPropertyDropDown = ({
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
                <Select labelId={labelId} label={label} value={value} name={value}
                        onChange={handleChange(attribute)}>
                    {checklist.map((item) => (
                        <MenuItem value={item.toUpperCase().replaceAll(" ", "_")}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}