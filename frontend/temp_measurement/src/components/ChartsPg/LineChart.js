import React, {useCallback, useEffect, useRef, useState} from "react";
import {CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement} from "chart.js";
import {Line} from "react-chartjs-2";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChart = () => {

    const [limit, setLimit] = useState(3)
    const [fetchedData, setFetchedData] = useState();
    const [sensor,setSensor] = useState("sun");
    const [text,setText] = useState('czujnika w słońcu');
    var url = `http://localhost:8080/api/v1/tempavg?limit=${limit}`
    var token = localStorage.getItem('token')
    let ref =useRef(null);

    const downloadImage = useCallback(() => {
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = ref.current.toBase64Image();
        link.click();
    }, [ref]);

    const handleChange = (event) =>{
        setLimit(event.target.value);
    };
    const handleSelectSensor = (event) => {
        const gotEvent = event.target.value;
        setSensor(gotEvent);
        switch (gotEvent){
            case 'sun':
                setText("czujnika w słońcu");
                break;
            case 'shadow':
                setText("czujnika w cieniu");
                break;
            case 'avg':
                setText("obydwóch czujników");
                break;
        }
    }
    const selectedSensorDataKey = sensor === 'sun'
        ? 'avg_read_sun'
        : sensor === 'shadow'
            ? 'avg_read_shadow'
            : 'avg_sun_shadow';

    const convertUnixToDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    };
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
            setFetchedData(data);
        } catch (error) {
            if (error.message === "Data not fetched!") {
                console.log("ups")
            } else {
                console.error("An error occurred:", error);
            }
        }
    };
    useEffect(() => {
        fetchData();
    }, [limit]);

    if (!fetchedData) {
        return null;
    }

    const data = {
        labels: fetchedData.map(entry => convertUnixToDate(entry.date)),
        datasets: [{
            label: `Średnia temperatura każdego dnia dla ${text}`,
            data: fetchedData.map(entry => entry[selectedSensorDataKey]),
            backgroundColor: ['rgb(255,0,54)'],
            borderColor: ['rgb(0,0,0)'],
            borderWidth: 1
        }]
    };


return(
        <div>
            <h1>Podgląd średniej temperatury w ciągu kilku ostatnich dni</h1>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
            <FormControl fullWidth>
                <InputLabel id="selectLabel">Kiedy</InputLabel>
                <Select
                    labelId="selectLabel"
                    id="simpleSelect"
                    value={limit}
                    label="Kiedy"
                    onChange={handleChange}
                    style={{ marginBottom: '1em' }}
                >
                    <MenuItem value={3}>Ostatnie 3 dni</MenuItem>
                    <MenuItem value={7}>Ostatnie 7 dni</MenuItem>
                    <MenuItem value={14}>Ostatnie 14 dni</MenuItem>
                </Select>
            </FormControl>
        <FormControl fullWidth>
                <InputLabel id="selectLabelSensor">Czujnik</InputLabel>
            <Select
                labelId="selectLabelSensor"
                id="simpleSelectSensor"
                value={sensor}
                label="Kiedy"
                onChange={handleSelectSensor}
            >
                <MenuItem value={'sun'}>Czujnik w słońcu</MenuItem>
                <MenuItem value={'shadow'}>Czujnik w cieniu</MenuItem>
                <MenuItem value={'avg'}>Średnia z obydwóch czujników</MenuItem>
            </Select>
        </FormControl>
            <div id={'chart'}>
                <Line ref={ref} data={data} />
            </div>


            <div style={{ display: 'flex', gap: '1vw' }}>
                <ListItemButton onClick={() => downloadImage()}>
                    <ListItemIcon>
                        <DownloadIcon />
                        <ListItemText primary={'Zapisz wykres do PNG'}/>
                    </ListItemIcon>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <SimCardDownloadIcon />
                        <ListItemText primary={'Zapisz dane do CSV'} />
                    </ListItemIcon>
                </ListItemButton>
            </div>
        </div>
    )
}
export default LineChart