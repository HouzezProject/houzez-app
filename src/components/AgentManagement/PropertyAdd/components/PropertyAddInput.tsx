import {Grid} from "@mui/material";
import React from "react";
import {PropertyAttribute} from "./PropertyAttribute";
import {FormTextField} from "./FormTextField";

const PropertyAddInput = ({
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
                           onChange={handleChange(attribute)}/>
        </Grid>
    )
}

export default PropertyAddInput;
