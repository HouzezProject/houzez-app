/* eslint-disable prettier/prettier */
import * as React from "react";
import styled from "@emotion/styled";
import FormControl from '@mui/material/FormControl';
import HzInput from "../../UI/HzInput";
import InputLabel from '@mui/material/InputLabel';
import HzButton from "../../UI/HzButtom";
import { Box } from "@mui/system";

const SignUpInfoInput = styled(HzInput)({
    width: "inherit",
    height: "40px",
    marginBottom: "10px",
})

const SignUpInfo = () => {
    const [email, setEmail] = React.useState('');
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const [Password, setPwd] = React.useState('');
    const handlePwd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(event.target.value);
    };
    return (
        <Box width="100%">
            <FormControl variant="standard" fullWidth>
                <InputLabel>&nbsp;&nbsp;Email address *</InputLabel>
                <SignUpInfoInput
                    required
                    id="signUpEmail"
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    size="small"
                />
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel>&nbsp;&nbsp;Password *</InputLabel>
                <SignUpInfoInput
                    required
                    id="signUpPassword"
                    type="password"
                    value={Password}
                    onChange={handlePwd}
                    size="small"
                />
            </FormControl>
            <HzButton variant="contained" color="primary" fullWidth sx={{marginTop: "10px"}}>continue with apple</HzButton>
        </Box>
    );
};

export default SignUpInfo;
