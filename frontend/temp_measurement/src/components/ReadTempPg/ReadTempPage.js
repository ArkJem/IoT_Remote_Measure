import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import {useEffect, useState} from "react";

const gridTheme = {
    container: {
        border: "1px solid white",
        borderRadius: "8px",
        flexDirection: "column",
        display: "inline-block",
        alignItems: "center",
        marginLeft: "8%",
        textAlign: "center",
    },
    box: {
        color: "white",
        width: "20vh",
        height: "20vh",
        borderRadius: 1,
        float: "left",
        margin: "2.5%",
        bgcolor: "primary.main",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
    },
    boxTemp: {
        fontSize:'40px'
    }
};

export default function ReadTempPage() {
    const [fetchedData, setFetchedData] = useState();
    var url = `http://localhost:8080/api/v1/readings?limit=1`;
    var token = localStorage.getItem('token');
    const [sunTemp, setSunTemp] = useState();
    const [shadowTemp, setShadowTemp] = useState();
    const [avgTemp, setAvgTemp] = useState();

    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });

            if (response.status === 403) {
                throw new Error("Data not fetched!");
            }

            const data = await response.json();
            if (data && data[0].sens_read_sun) {
                setSunTemp(data[0].sens_read_sun);
                setShadowTemp(data[0].sens_read_shadow);
                setAvgTemp(data[0].sens_read_avg);

            } else {
                console.error("An error with fetching data!");
            }
        } catch (error) {
            if (error.message === "Data not fetched!") {
                console.log("ups")
            } else {
                console.error("An error occurred:", error);
            }
        }
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchData();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [sunTemp]);

    console.log(sunTemp);
    return (
            <Grid container sx={gridTheme.container}>
                <Box sx={gridTheme.box}>
                    <WbSunnyIcon style={{ fontSize: "500%"}} />
                    Temperatura w słońcu
                    <Box sx={gridTheme.boxTemp}>{sunTemp}°C</Box>
                </Box>
                <Box sx={gridTheme.box}>
                    <BeachAccessIcon style={{ fontSize: "500%"}} />
                    Temperatura w cieniu
                    <Box sx={gridTheme.boxTemp}>{shadowTemp}°C</Box>
                </Box>
                <Box sx={gridTheme.box}>
                    <ThermostatAutoIcon style={{ fontSize: "500%"}} />
                    Średnia temperatura
                    <Box sx={gridTheme.boxTemp}>{avgTemp}°C</Box>
                </Box>
            </Grid>
    );
}
