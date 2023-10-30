import React from "react";
import {Grid, TextField, Button, Typography, Box} from '@mui/material';
import { useState } from "react";
import "./Login.css";

export default function Login() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            minHeight={"104vh"}
            spacing={5}
            sx={{background: 'linear-gradient(90deg, rgba(180,58,87,1) 35%, rgba(252,176,69,1) 97%)'}}
        >
            <Grid item>
                <Typography variant="h5" color="text.primary">
                    Logowanie
                </Typography>
            </Grid>
            <Grid item xs={8} sm={16} md={14}>
                <LoginForm />
            </Grid>
        </Grid>


    );
}

const LoginForm = () => {
    const [emailValue,setEmailValue] = useState("");
    const [passValue,setPassValue] = useState("");

    const data = {
        email:emailValue,
        password:passValue
    };

    const handleLogin = () => {
        console.log(data);
    }


    return (

        <Grid container direction="column" alignItems="center" justifyContent="center" width="400px">
            <TextField
                variant="outlined"
                label="Email"
                fullWidth
                style={{ marginBottom: "1em", width: "100%" }}
                value={emailValue}
                onChange = {(event) => setEmailValue(event.target.value)}
            />
            <TextField
                variant="outlined"
                label="Hasło"
                fullWidth
                style={{ marginBottom: "1em", width: "100%" }}
                type="password"
                value={passValue}
                onChange = {(event) => setPassValue(event.target.value)}
            />
            <Button size="large" variant="contained" color="primary" onClick ={handleLogin}>
                ZALOGUJ SIĘ
            </Button>
        </Grid>
    );
};

