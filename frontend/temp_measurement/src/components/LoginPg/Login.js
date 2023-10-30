import React from "react";
import { Grid, TextField, Button, Typography} from '@mui/material';
import { useState } from "react";

export default function Login() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            style={{ minHeight: "100vh"  }}
            spacing={5}
        >
            <Grid item>
                <Typography variant="h5" color="primary">
                    Logowanie
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <LoginForm />
            </Grid>
        </Grid>
    );
}

const LoginForm = () => {
    const [emailValue,setEmailValue] = useState("");
    const [passValue,setPassValue] = useState("");
    const [err, setErr] = useState(false)
    const [userNotFound,setUserNotFound] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const data = {
        email:emailValue,
        password:passValue
    };

    return (

        <Grid container direction="column" alignItems="center" justifyContent="center">
            <TextField
                variant="outlined"
                label="Email"
                fullWidth
                style={{ marginBottom: "1em" }}
                value={emailValue}
                onChange = {(event) => setEmailValue(event.target.value)}
                error={err}
            />
            <TextField
                variant="outlined"
                label="Hasło"
                fullWidth
                style={{ marginBottom: "1em" }}
                type="password"
                value={passValue}
                onChange = {(event) => setPassValue(event.target.value)}
                error={err}
            />
            <Button size="large" variant="contained" color="primary">
                ZALOGUJ SIĘ
            </Button>
        </Grid>
    );
};

