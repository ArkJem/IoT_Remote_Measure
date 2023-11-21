import React from "react";
import {Grid, TextField, Button, Typography, Box, Container} from '@mui/material';
import { useState } from "react";


export default function RegisterPage(){
    const containerCSS = {

        height:'700px',
        maxWidth: '500px',
        border: '1px solid',
        alignItems:'center',
        justifyContent:'center',
        background: '#ffffff',
        borderRadius: '20px'
    }
    const ButtonCSS = {
        marginRight: "1.7em",
        width: "200px",
        marginTop: "1em",
        height: "50px"
    }
    const URL = "http://localhost:8080/api/v1/auth/register"
    const [surname,setSurname] = useState("");
    const [name,setName] = useState("");
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const data = {
        surname:surname,
        name:name,
        username:username,
        email:email,
        password:password,
    };

    const handleRegister = () => {
        fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status === 403) {
                    throw new Error("Access forbidden");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                if (error.message === "Access forbidden") {
                    console.log("lol");
                }
                else{
                    console.error("An error occurred:", error);
                }
            });
    };




    return(
        <Grid
            container
            minHeight={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{background: 'linear-gradient(90deg, rgba(180,58,87,1) 35%, rgba(252,176,69,1) 97%)'}}
        >
            <Container maxWidth={false} sx={containerCSS}>
                <Typography align={"center"} variant={"h5"}>REJESTRACJA</Typography>
                <TextField
                    variant="outlined"
                    label="Imię"
                    fullWidth
                    inputProps={{
                        style: { height: 30, width: 400 },

                    }}
                    style={{ marginBottom: "1em", marginTop:"1em" }}
                    value={name}
                    onChange = {(event) => setName(event.target.value)}

                />
                <TextField
                    variant="outlined"
                    label="Nazwisko"
                    fullWidth
                    inputProps={{
                        style: { height: 30, width: 400 },

                    }}
                    style={{ marginBottom: "1em"}}
                    value={surname}
                    onChange = {(event) => setSurname(event.target.value)}

                />
                <TextField
                    variant="outlined"
                    label="Nazwa użytkownika"
                    fullWidth
                    inputProps={{
                        style: { height: 30, width: 400 },

                    }}
                    style={{ marginBottom: "1em"}}
                    value={username}
                    onChange = {(event) => setUsername(event.target.value)}

                />
            <TextField
                variant="outlined"
                label="Email"
                fullWidth
                inputProps={{
                   style: { height: 30, width: 400 },
                   pattern: "^[^@\\s_]+@[^\\s@]+\\.[^\\s@]{1,}$"}}
                style={{ marginBottom: "1em" }}
                value={email}
                onChange = {(event) => setEmail(event.target.value)}

            />

                <TextField
                    variant="outlined"
                    label="Hasło"
                    fullWidth
                    style={{ marginBottom: "1em", width: "100%" }}
                    type="password"
                    value={password}
                    onChange = {(event) => setPassword(event.target.value)}


                />

                <TextField
                    variant="outlined"
                    label="Potwierdź hasło"
                    fullWidth
                    inputProps={{
                        style: { height: 30, width: 400 },

                    }}
                    style={{ marginBottom: "1em" }}
                    type="password"
                />
                    <Button variant="contained" color="error" style={ButtonCSS} href={"/"} >Wróć</Button>
                    <Button variant="contained" color="primary" style={ButtonCSS} onClick={handleRegister}>Zarejestruj się</Button>

                </Container>
        </Grid>

    );
}