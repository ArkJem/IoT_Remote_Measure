import React from "react";
import {Grid, TextField, Button, Typography,Link} from '@mui/material';
import { useState } from "react";
import "./LoginPage.css";
import * as jose from 'jose'
export default function LoginPage() {
    const URL = "http://localhost:8080/api/v1/auth/authenticate"
    const [emailValue,setEmailValue] = useState("");
    const [passValue,setPassValue] = useState("");
    const [emailExists, setEmailExists] = useState(false);


    const data = {
        email:emailValue,
        password:passValue
    };

    const handleLogin = async () => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status === 403) {
                throw new Error("Email already exists!");
            }
            return response.json();
        }).then(data => {
            if(data?.token){
                const decodedToken = jose.decodeJwt(data?.token);
                const emailToken = decodedToken.sub;
                if(emailToken === emailValue){
                    window.location.href = '/dash'
                    localStorage.setItem('token',data?.token);
                    localStorage.setItem('login',emailToken)
                    localStorage.setItem('role',decodedToken.iss);
                    localStorage.setItem('auth','true');
                    console.log('OK')
                }


            }

        }).catch(error => {
            if (error.message === "Email already exists!") {
                console.log("Email już istnieje!");
                setEmailExists(true);

            } else {
                console.error("An error occurred:", error);
            }
        });
    };

    return (
        <div className={'cont'}>
            <Grid container style={{ border: '1px solid white', borderRadius: '8px', padding: '16px', maxWidth: '38vh', textAlign: 'center', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',background:'white'}}>
                <Typography variant="h5" style={{ color: 'black', marginBottom: '1em' }}>
                    Zaloguj się
                </Typography>
                <TextField
                    variant="outlined"
                    label="Email"
                    fullWidth
                    style={{ marginBottom: '1em' }}
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
                    placeholder='Wpisz swój email...'
                    error={emailExists}
                />
                <TextField
                    variant='outlined'
                    label='Hasło'
                    fullWidth
                    style={{ marginBottom: '1em' }}
                    type='password'
                    value={passValue}
                    onChange={(event) => setPassValue(event.target.value)}
                    placeholder='*********'
                />
                <Typography variant='h7' style={{ color: 'black', marginBottom: '0.2em'}}>
                    Nie masz konta? <Link href={'/register'}>Zarejestruj się!</Link>
                </Typography>
                <Grid item style={{ marginTop: '1em' }} >
                    <Button size='large' variant='contained' color='primary' onClick={handleLogin}>
                        ZALOGUJ SIĘ
                    </Button>
                </Grid>
            </Grid>
        </div>

    );


}