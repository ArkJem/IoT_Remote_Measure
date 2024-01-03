import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import {useEffect, useState} from "react";
import monthIcon from './icons/month.png';
import yearIcon from './icons/year.png';


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
    var url = `http://localhost:8080/api/v1/readings`;
    var urlMonth = `http://localhost:8080/api/v1/tempavgmonth`
    var urlYear = `http://localhost:8080/api/v1/tempavgyear`
    var token = localStorage.getItem('token');
    const [sunTemp, setSunTemp] = useState();
    const [shadowTemp, setShadowTemp] = useState();
    const [avgTemp, setAvgTemp] = useState();
    const [avgTempMonth, setAvgTempMonth] = useState();
    const [avgTempYear, setAvgTempYear] = useState();

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
            if (data && data.length > 0) {
                const lastIndex = data.length - 1;
                setSunTemp(data[lastIndex].sens_read_sun);
                setShadowTemp(data[lastIndex].sens_read_shadow);
                setAvgTemp(data[lastIndex].sens_read_avg);

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
    const fetchMonth = async () => {
        try {
            const response = await fetch(urlMonth, {
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
            if (data && data.length > 0) {
                const lastIndex = data.length - 1;
                setAvgTempMonth(data[lastIndex].avg_sun_shadow_month);

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
    const fetchYear = async () => {
        try {
            const response = await fetch(urlYear, {
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
            if (data && data.length > 0) {
                const lastIndex = data.length - 1;
                setAvgTempYear(data[lastIndex].avg_sun_shadow_year);

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
            fetchMonth();
            fetchYear();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [sunTemp,shadowTemp,avgTemp,avgTempMonth,avgTempYear]);

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
                <Box sx={gridTheme.box}>
                    <img src={monthIcon} alt="Month Icon" style={{width: '70px', height: '70px'}} />
                    Średnia temperatura w ostatnim miesiącu
                    <Box sx={gridTheme.boxTemp}>{avgTempMonth}°C</Box>
                </Box>
                <Box sx={gridTheme.box}>
                    <img src={yearIcon} alt="Year Icon" style={{width: '70px', height: '70px'}} />
                    Średnia temperatura w poprzednim roku
                    <Box sx={gridTheme.boxTemp}>{avgTempYear}°C</Box>
                </Box>
            </Grid>
    );
}
