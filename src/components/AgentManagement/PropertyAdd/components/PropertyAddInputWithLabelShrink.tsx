import {PropertyAttribute} from "./PropertyAttribute";
import {Grid} from "@mui/material";
import React from "react";
import {FormTextField} from "./FormTextField";

export const PropertyAddInputWithLabelShrink = ({
                                                    xs,
                                                    type = "text",
                                                    label,
                                                    handleChange,
                                                    value,
                                                    attribute,
                                                    multiline = false,
                                                    rows = 1,
                                                }: { xs: number, type?: string, label: string, value: string | number, handleChange: (type: keyof PropertyAttribute) => (event: any) => void, attribute: keyof PropertyAttribute, multiline?: boolean, rows?: number }) => {
    return (
        <Grid item xs={xs}>
            <FormTextField type={type} label={label} multiline={multiline} rows={rows}
                           size="small" value={value}
                           onChange={handleChange(attribute)} InputLabelProps={{shrink: true}}/>
        </Grid>
    )
}